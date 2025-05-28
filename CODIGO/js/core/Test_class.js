class Test_class {
    constructor() {
        // Inicialización de variables de la clase
        this.entidad = null;
        this.parent = null;
        this.array_def = null;
        this.array_pruebas = null;
        this.array_pruebas_file = null;
        this.accion = null;
        this.validaciones = new Validaciones_Atomicas();
    }

    initialize(entidad, parent) {
        this.entidad = entidad;
        this.parent = parent;
    }

    showTestModal() {
        const modal = document.getElementById('test-modal');
        if (!modal) {
            console.error('Modal de pruebas no encontrado');
            return;
        }

        // Limpiar contenido existente
        this.clearModalContent();

        // Mostrar el modal
        modal.style.display = 'block';

        // Agregar funcionalidad de cierre
        const closeModal = (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        };

        // Cerrar al hacer clic fuera
        modal.onclick = closeModal;

        // No cerrar al hacer clic dentro
        modal.querySelector('.modal-content').onclick = (e) => e.stopPropagation();

        // Agregar botón de cierre
        const closeBtn = document.createElement('img');
        closeBtn.src = './iconos/BACK.png';
        closeBtn.alt = 'Cerrar';
        closeBtn.className = 'modal-close-icon';
        closeBtn.onclick = () => modal.style.display = 'none';
        closeBtn.style.cursor = 'pointer';
        closeBtn.style.position = 'absolute';
        closeBtn.style.top = '10px';
        closeBtn.style.right = '10px';

        const modalContent = modal.querySelector('.modal-content');
        modalContent.insertBefore(closeBtn, modalContent.firstChild);
    }

    clearModalContent() {
        document.getElementById('modal_resultadodef').innerHTML = '';
        document.getElementById('modal_tablaresultadostest').innerHTML = '';
        document.getElementById('modal_resultadoprueba').innerHTML = '';
        document.getElementById('modal_tablaresultadosprueba').innerHTML = '';
        document.getElementById('modal_resultadotest').innerHTML = '';
        document.getElementById('modal_salidaresultadosprueba').innerHTML = '';
    }    test_run() {
        // Mostrar y limpiar el modal primero
        this.showTestModal();

        // Obtener arreglos de pruebas para ejecución
        this.array_def = eval('def_tests_' + this.entidad);
        this.array_pruebas = eval('pruebas_' + this.entidad);
        this.array_pruebas_file = eval('pruebas_file_' + this.entidad);

        // Mostrar definiciones de pruebas, definiciones de datos de prueba y ejecutar pruebas
        this.mostrarDefTests();
        this.mostrarDefPruebas();
        this.test_entidad();
        this.test_entidad_files();
    }

    mostrarDefTests() {        // Crear tabla para definiciones de pruebas
        let table = document.createElement('table');
        table.border = '1';
        table.style.width = '100%';
        
        // Agregar fila de encabezados
        let headerRow = table.insertRow();
        ['Entidad', 'Atributo', 'ID Test', 'Descripción', 'Acción', 'Tipo', 'Código Error'].forEach(text => {
            let th = document.createElement('th');
            th.textContent = text;
            headerRow.appendChild(th);
        });

        // Agregar filas de datos
        for (let def of this.array_def) {
            let row = table.insertRow();
            def.forEach(value => {
                let cell = row.insertCell();
                cell.textContent = value;
            });
        }

        // Actualizar contenido del modal - solo agregar título a resultadodef
        document.getElementById('modal_resultadodef').innerHTML = '<h3>Definición de Tests</h3>';
        document.getElementById('modal_tablaresultadostest').innerHTML = '';
        document.getElementById('modal_tablaresultadostest').appendChild(table);
    }

    mostrarDefPruebas() {
        // Crear encabezado de tabla para definiciones de datos de prueba
        let table = document.createElement('table');
        table.border = '1';
        table.style.width = '100%';
          // Agregar fila de encabezado
        let headerRow = table.insertRow();
        ['Entidad', 'Campo', 'NumDefTest', 'NumPrueba', 'Acción', 'Valor', 'Resultado Esperado', 'Resultado Real'].forEach(text => {
            let th = document.createElement('th');
            th.textContent = text;
            headerRow.appendChild(th);
        });        // Agregar filas de datos de prueba regulares
        for (let prueba of this.array_pruebas) {
            let row = table.insertRow();
            prueba.forEach((value, index) => {
                let cell = row.insertCell();
                if (index === 7) { // Resultado Esperado
                    cell.textContent = value === '' ? '' : (value === true ? 'Correcto' : this.traduccion(value));
                } else {
                    cell.textContent = value;
                }
            });
            // Agregar celda vacía para Resultado Real (se llenará cuando se ejecute la prueba)
            let resultadoCell = row.insertCell();
            resultadoCell.textContent = ''; // Inicialmente vacío
            resultadoCell.classList.add('resultado-real');
        }

        // Agregar filas de datos de prueba de archivos si existen
        if (this.array_pruebas_file && this.array_pruebas_file.length > 0) {
            // Agregar una fila separadora
            let separatorRow = table.insertRow();
            let separatorCell = separatorRow.insertCell();
            separatorCell.colSpan = 7;
            separatorCell.textContent = '-- Pruebas de Archivos --';
            separatorCell.style.backgroundColor = '#f0f0f0';
            separatorCell.style.textAlign = 'center';
            separatorCell.style.fontWeight = 'bold';

            // Agregar filas de pruebas de archivos
            for (let prueba of this.array_pruebas_file) {
                let row = table.insertRow();
                // Para pruebas de archivos, manejar la información del archivo de manera especial
                for (let i = 0; i < prueba.length; i++) {
                    let cell = row.insertCell();
                    if (i === 6) { // Posición de la información del archivo
                        cell.textContent = prueba[i].length ? prueba[i][0] : ''; // Mostrar nombre del archivo
                    } else {
                        cell.textContent = prueba[i];
                    }
                }
            }
        }

        // Actualizar contenido del modal
        document.getElementById('modal_resultadoprueba').innerHTML = '<h3>Definición de Pruebas</h3>';
        document.getElementById('modal_tablaresultadosprueba').innerHTML = '';
        document.getElementById('modal_tablaresultadosprueba').appendChild(table);
    }    test_entidad() {
        let table = document.querySelector('#modal_tablaresultadosprueba table');
        if (!table) {
            console.error('No se encontró la tabla de pruebas');
            return;
        }
        // No es necesario crear una nueva tabla o limpiar resultados ya que estamos usando la tabla existente

        // Ejecutar cada prueba
        for (let i = 0; i < this.array_pruebas.length; i++) {
            // Cargar formulario limpio para cada prueba
            this.parent.cargar_formulario();

            // Agregar botón de enviar para mensajes de validación
            let botonSubmit = document.createElement('input');
            botonSubmit.id = 'submit_button';
            document.getElementById('IU_form').append(botonSubmit);
    
            // Extraer detalles de la prueba
            let campotest = this.array_pruebas[i][1];
            let numdeftest = this.array_pruebas[i][2];
            let numprueba = this.array_pruebas[i][3];
            let acciontest = this.array_pruebas[i][4];
            let valortest = this.array_pruebas[i][5];
            let respuestatest = this.array_pruebas[i][6];

            // Obtener definición de prueba
            let def = this.devolver_def(numdeftest);

            // Establecer valor de prueba en el campo
            document.getElementById(campotest).value = valortest;

            // Obtener reglas de validación de la estructura
            const estructura = eval('estructura_' + this.entidad);
            const validationRules = estructura.attributes[campotest].validation_rules[acciontest];

            // Ejecutar validaciones según las reglas
            let resultadotest = 'OK';
            if (validationRules) {
                for (let rule in validationRules) {
                    if (this.validaciones[rule]) {
                        const [value, errorMsg] = validationRules[rule];
                        const isValid = this.validaciones[rule](campotest, value);
                        if (!isValid) {
                            resultadotest = errorMsg;
                            break;
                        }
                    }
                }
            }            // Verificar si el resultado de la prueba coincide con el resultado esperado
            let resultadoestetest = (respuestatest === resultadotest) ? 'CORRECTO' : resultadotest;

            // Encontrar la fila correspondiente en la tabla
            const rows = Array.from(table.rows);
            const testRow = rows.find(row => {
                return row.cells[2].textContent === numdeftest.toString() && 
                       row.cells[3].textContent === numprueba.toString();
            });

            if (testRow) {
                // Actualizar la columna Resultado Real
                const resultadoCell = testRow.cells[testRow.cells.length - 1];
                resultadoCell.textContent = resultadoestetest;
                resultadoCell.style.backgroundColor = resultadoestetest === 'CORRECTO' ? '#90EE90' : '#FFB6C1';
            }
        }
    }

    test_entidad_files() {
        // Crear tabla para resultados de pruebas de archivos
        let table = document.createElement('table');
        table.border = '1';
        table.style.width = '100%';
        
        // Agregar fila de encabezado
        let headerRow = table.insertRow();
        ['NumDefTest', 'NumPrueba', 'Campo', 'Prueba', 'Accion', 'Valor', 'Respuesta Test', 'Respuesta esperada', 'Resultado'].forEach(text => {
            let th = document.createElement('th');
            th.textContent = text;
            headerRow.appendChild(th);
        });

        document.getElementById('modal_salidaresultadosprueba').appendChild(table);

        // Ejecutar cada prueba de archivo
        for (let i = 0; i < this.array_pruebas_file.length; i++) {
            // Cargar formulario limpio para cada prueba
            this.parent.cargar_formulario();

            // Agregar botón de enviar
            let botonSubmit = document.createElement('input');
            botonSubmit.id = 'submit_button';
            document.getElementById('IU_form').append(botonSubmit);
    
            // Extraer detalles de la prueba
            let campotest = this.array_pruebas_file[i][1];
            let numdeftest = this.array_pruebas_file[i][2];
            let numprueba = this.array_pruebas_file[i][3];
            let acciontest = this.array_pruebas_file[i][4];
            let valortest = this.array_pruebas_file[i][6];
            let respuestatest = this.array_pruebas_file[i][7];

            // Obtener definición de prueba
            let def = this.devolver_def(numdeftest);

            // Crear objeto de archivo si es necesario
            if (valortest.length !== 0) {
                let file = new File([new ArrayBuffer(valortest[2])], valortest[0], {
                    type: valortest[1],
                    webkitRelativePath: "C:\\fakepath\\" + valortest[0]
                });
                
                const dataTransfer = new DataTransfer();
                dataTransfer.items.add(file);
                document.getElementById(campotest).files = dataTransfer.files;
            }

            // Obtener reglas de validación de la estructura
            const estructura = eval('estructura_' + this.entidad);
            const validationRules = estructura.attributes[campotest].validation_rules[acciontest];

            // Ejecutar validaciones según las reglas
            let resultadotest = 'OK';
            if (validationRules) {
                for (let rule in validationRules) {
                    if (this.validaciones[rule]) {
                        const [value, errorMsg] = validationRules[rule];
                        const isValid = this.validaciones[rule](campotest, value);
                        if (!isValid) {
                            resultadotest = errorMsg;
                            break;
                        }
                    }
                }
            }

            // Verificar si el resultado de la prueba coincide con el resultado esperado
            let resultadoestetest = (respuestatest === resultadotest) ? 'CORRECTO' : resultadotest;

            // Agregar fila de resultado a la tabla
            let row = table.insertRow();
            [numdeftest, numprueba, campotest, def[3], acciontest, 
             (valortest.length ? valortest[0] : ''), resultadotest, 
             respuestatest, resultadoestetest].forEach(text => {
                let cell = row.insertCell();
                cell.textContent = text;
            });
        }
    }

    devolver_def(num_def) {
        for (let i = 0; i < this.array_def.length; i++) {
            if (this.array_def[i][2] === num_def) {
                return this.array_def[i];
            }
        }
        return null;
    }

    traduccion(codigo) {
        if (codigo === true) return 'Correcto';
        return Textos[codigo] || codigo;
    }
}
