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
        const prefix = this.entidad + '_';
        
        // Reiniciar arrays de pruebas
        this.array_def = [];
        this.array_pruebas = [];
        this.array_pruebas_file = [];
        
        try {            // Cargar definiciones de pruebas
            this.array_def = eval(this.entidad + '_def_tests');
        } catch (e) {
            console.warn('No se encontraron definiciones de test para ' + this.entidad);
        }        // Obtener casos de prueba regulares
        try {
            this.array_pruebas = eval(this.entidad + '_tests');
        } catch (e) {
            this.array_pruebas = [];
            console.warn('No se encontraron pruebas regulares para ' + this.entidad);
        }

        // Obtener casos de prueba de archivos
        try {
            this.array_pruebas_file = eval(this.entidad + '_tests_files');
        } catch (e) {
            this.array_pruebas_file = [];
            console.warn('No se encontraron pruebas de archivo para ' + this.entidad);
        }        // Mostrar definiciones de pruebas, definiciones de datos de prueba y ejecutar pruebas
        this.mostrarDefTests();
        this.mostrarDefPruebas();
        this.test_entidad();
        this.test_entidad_files();
        
        // Mostrar mensaje unificado de finalización
        this.mostrarResultadoFinal();
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
    }    mostrarDefPruebas() {
        // Crear encabezado de tabla para definiciones de datos de prueba
        let table = document.createElement('table');
        table.border = '1';
        table.style.width = '100%';
        table.id = 'tabla-pruebas-principales'; // ID para poder actualizarla después
        
        // Agregar fila de encabezado
        let headerRow = table.insertRow();
        ['Entidad', 'Campo', 'NumDefTest', 'NumPrueba', 'Acción', 'Valor', 'Resultado Esperado', 'Resultado Real'].forEach(text => {
            let th = document.createElement('th');
            th.textContent = text;
            headerRow.appendChild(th);
        });        // Agregar filas de datos de prueba regulares
        for (let prueba of this.array_pruebas) {
            let row = table.insertRow();
            row.setAttribute('data-test-id', prueba[2]); // Para identificar la fila después
            row.setAttribute('data-test-num', prueba[3]);
            row.setAttribute('data-field', prueba[1]);
            
            // Agregar las primeras 6 columnas (Entidad, Campo, NumDefTest, NumPrueba, Acción, Valor)
            for (let i = 0; i < 6; i++) {
                let cell = row.insertCell();
                cell.textContent = prueba[i] || '';
            }
            
            // Agregar celda para Resultado Esperado
            let expectedCell = row.insertCell();
            const resultadoEsperado = prueba[7] || 'OK'; // El último campo es el resultado esperado
            expectedCell.textContent = this.traduccion(resultadoEsperado);
            expectedCell.classList.add('resultado-esperado');
            
            // Agregar celda para Resultado Real
            let resultadoCell = row.insertCell();
            resultadoCell.textContent = 'Pendiente'; // Estado inicial
            resultadoCell.classList.add('resultado-real');
        }

        // Agregar filas de datos de prueba de archivos si existen
        if (this.array_pruebas_file && this.array_pruebas_file.length > 0) {
            // Agregar una fila separadora
            let separatorRow = table.insertRow();
            let separatorCell = separatorRow.insertCell();
            separatorCell.colSpan = 8;
            separatorCell.textContent = '-- Pruebas de Archivos --';
            separatorCell.style.backgroundColor = '#f0f0f0';
            separatorCell.style.textAlign = 'center';
            separatorCell.style.fontWeight = 'bold';            // Agregar filas de pruebas de archivos
            for (let prueba of this.array_pruebas_file) {
                if (!prueba) continue; // Saltar si prueba es null
                
                let row = table.insertRow();
                row.setAttribute('data-test-id', prueba[2]);
                row.setAttribute('data-test-num', prueba[3]);
                row.setAttribute('data-field', prueba[1]);
                row.setAttribute('data-file-test', 'true');
                
                // Agregar las primeras 6 columnas (Entidad, Campo, NumDefTest, NumPrueba, Acción, Valor)
                for (let i = 0; i < 6; i++) {
                    let cell = row.insertCell();
                    cell.textContent = prueba[i] || '';
                }
                
                // Agregar celda para Resultado Esperado
                let expectedCell = row.insertCell();
                const resultadoEsperado = prueba[7] || 'OK'; // El último campo es el resultado esperado
                expectedCell.textContent = this.traduccion(resultadoEsperado);
                expectedCell.classList.add('resultado-esperado');
                
                // Agregar celda para Resultado Real
                let resultadoCell = row.insertCell();
                resultadoCell.textContent = 'Pendiente'; // Estado inicial
                resultadoCell.classList.add('resultado-real');
            }
        }

        // Actualizar contenido del modal
        document.getElementById('modal_resultadoprueba').innerHTML = '<h3>Definición de Pruebas</h3>';
        document.getElementById('modal_tablaresultadosprueba').innerHTML = '';
        document.getElementById('modal_tablaresultadosprueba').appendChild(table);
    }    test_entidad() {
        // No crear una nueva tabla, usar la tabla existente de mostrarDefPruebas()
        const table = document.getElementById('tabla-pruebas-principales');
        if (!table) {
            console.error('No se encontró la tabla de pruebas principales');
            return;
        }

        // Ejecutar cada prueba y actualizar resultados en la tabla existente
        for (let i = 0; i < this.array_pruebas.length; i++) {
            // Cargar formulario limpio para cada prueba
            this.parent.cargar_formulario();

            // Agregar botón de enviar para mensajes de validación
            let botonSubmit = document.createElement('input');
            botonSubmit.id = 'submit_button';
            document.getElementById('IU_form').append(botonSubmit);            // Extraer detalles de la prueba
            let campotest = this.array_pruebas[i][1];
            let numdeftest = this.array_pruebas[i][2];
            let numprueba = this.array_pruebas[i][3];
            let acciontest = this.array_pruebas[i][4];
            let valortest = this.array_pruebas[i][5];
            let valoresExtra = this.array_pruebas[i][6]; // Valores extra si son necesarios
            let resultadoEsperado = this.array_pruebas[i][7]; // Código de error o 'OK'           
            // Establecer valor de prueba en el campo
            document.getElementById(campotest).value = valortest;

            // Establecer valores extra si son necesarios para validaciones especiales
            if (valoresExtra && typeof valoresExtra === 'object') {
                for (let campo in valoresExtra) {
                    const campoElement = document.getElementById(campo);
                    if (campoElement) {
                        campoElement.value = valoresExtra[campo];
                    }
                }
            }

            // Obtener reglas de validación de la estructura
            const estructura = eval('estructura_' + this.entidad);
            const validationRules = estructura.attributes[campotest].validation_rules[acciontest];// Ejecutar validaciones según las reglas
            let resultadotest = 'OK';
            if (validationRules) {
                // Para pruebas regulares (no de archivos)
                for (let rule in validationRules) {
                    if (this.validaciones[rule]) {
                        let isValid;
                        let errorMsg;
                        
                        if (Array.isArray(validationRules[rule])) {
                            // Formato: [valor, mensaje_error]
                            const [value, msg] = validationRules[rule];
                            isValid = this.validaciones[rule](campotest, value);
                            errorMsg = msg;
                        } else {
                            // Formato: solo mensaje_error
                            isValid = this.validaciones[rule](campotest);
                            errorMsg = validationRules[rule];
                        }
                        
                        if (!isValid) {
                            resultadotest = errorMsg;
                            break;
                        }
                    }
                }
            }            // Ejecutar validaciones especiales si existen
            if (resultadotest === 'OK') {
                const specialMethodName = 'check_special_' + campotest;
                // Buscar primero en window.validar, luego en this.parent
                let entityInstance = window.validar || this.parent;
                if (entityInstance && typeof entityInstance[specialMethodName] === 'function') {
                    try {
                        const specialResult = entityInstance[specialMethodName]();
                        if (specialResult !== true) {
                            // El método retorna directamente el código de error o false
                            resultadotest = specialResult;
                        }
                    } catch (error) {
                        console.error(`Error ejecutando validación especial ${specialMethodName}:`, error);
                    }
                }
            }// Buscar la fila correspondiente en la tabla y actualizar el resultado
            this.updateTestResultInTable(table, numdeftest, numprueba, campotest, resultadotest);
        }

        // No mostrar mensaje aquí, se mostrará al final de todas las pruebas
    }    updateTestResultInTable(table, testId, testNum, field, resultado) {
        // Buscar la fila correspondiente
        const rows = Array.from(table.rows);
        const targetRow = rows.find(row => {
            const rowTestId = row.getAttribute('data-test-id');
            const rowTestNum = row.getAttribute('data-test-num');
            const rowField = row.getAttribute('data-field');
            
            return rowTestId == testId && rowTestNum == testNum && rowField === field;
        });

        if (targetRow) {
            // Encontrar la celda de resultado real (última celda)
            const resultadoCell = targetRow.cells[targetRow.cells.length - 1];
            if (resultadoCell && resultadoCell.classList.contains('resultado-real')) {
                const resultadoTraducido = this.traduccion(resultado);
                resultadoCell.textContent = resultadoTraducido;
                  // Obtener resultado esperado de la celda anterior
                const expectedCell = targetRow.cells[targetRow.cells.length - 2];
                const expectedResult = expectedCell ? expectedCell.textContent.trim() : '';
                
                // Mejorar la comparación de resultados
                // Ambos valores ya están traducidos, por lo que la comparación debe ser directa
                let coinciden = resultadoTraducido === expectedResult;
                
                resultadoCell.style.color = coinciden ? 'green' : 'red';
                resultadoCell.style.fontWeight = 'bold';
                
                // Agregar debug information
                console.log(`Test ${testId}-${testNum}: Esperado="${expectedResult}", Obtenido="${resultadoTraducido}", Coinciden=${coinciden}`);
            } else {
                console.error('No se encontró la celda de resultado real');
            }
        } else {
            console.error(`No se encontró la fila para test ${testId}-${testNum} en campo ${field}`);
        }
    }    test_entidad_files() {        // Verificar si no hay pruebas de archivos
        if (!this.array_pruebas_file || this.array_pruebas_file.length === 0) {
            console.log('No hay pruebas de archivos para ejecutar');            return;  // Salir si no existen pruebas de archivos
        }

        // Obtener la tabla existente
        const table = document.getElementById('tabla-pruebas-principales');
        if (!table) {
            console.error('No se encontró la tabla de pruebas principales');
            return;        }

        // Ejecutar cada prueba de archivo y actualizar resultados en la tabla existente
        for (let i = 0; i < this.array_pruebas_file.length; i++) {
            try {
                this.parent.cargar_formulario();                const campotest = this.array_pruebas_file[i][1];
                const numdeftest = this.array_pruebas_file[i][2];
                const numprueba = this.array_pruebas_file[i][3];
                const acciontest = this.array_pruebas_file[i][4];
                const tipoPrueba = this.array_pruebas_file[i][5]; // Tipo de validación (min_size, max_size, etc.)
                const valortest = this.array_pruebas_file[i][6]; // Valor de prueba
                const resultadoEsperado = this.array_pruebas_file[i][7]; // Código de error o 'OK'

                // Agregar botón de envío
                let botonSubmit = document.createElement('input');
                botonSubmit.id = 'submit_button';
                document.getElementById('IU_form').append(botonSubmit);

                // Crear entrada de archivo
                let fileInput = document.createElement('input');
                fileInput.type = 'file';
                fileInput.id = campotest;
                fileInput.name = campotest;
                document.getElementById('IU_form').appendChild(fileInput);
                  // Crear archivo de prueba si es necesario
                if (valortest && valortest !== null) {
                    try {
                        let fileType = "application/pdf";
                        let fileName = "test.pdf";
                        let fileSize = 100;
                          // Establecer propiedades del archivo basado en tipo de prueba y fallo esperado
                        const expectingError = (resultadoEsperado !== 'OK');  // Si el resultado no es 'OK', esperamos un error
                        
                        switch (tipoPrueba) {
                            case 'min_size':
                                fileName = expectingError ? "short" : "validfile.pdf";
                                break;
                            case 'max_size':
                                if (typeof valortest === 'number') {
                                    fileSize = valortest;
                                } else {
                                    fileName = expectingError ? 'a'.repeat(101) + ".pdf" : "validfile.pdf";
                                }
                                break;                            case 'file_type':
                                if (typeof valortest === 'string') {
                                    // Si valortest es un string de filename, usar eso para determinar tipo
                                    if (valortest.includes('.')) {
                                        fileName = valortest;
                                        // Determinar MIME type basado en la extensión
                                        if (valortest.endsWith('.pdf')) {
                                            fileType = "application/pdf";
                                        } else if (valortest.endsWith('.doc')) {
                                            fileType = "application/msword";
                                        } else if (valortest.endsWith('.docx')) {
                                            fileType = "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
                                        } else {
                                            fileType = "text/plain"; // Para archivos no válidos como .txt
                                        }
                                    } else {
                                        // Si valortest es un MIME type
                                        fileType = valortest;
                                        fileName = expectingError ? "test.txt" : "test.pdf";
                                    }
                                }
                                break;
                            case 'format_name_file':
                                fileName = expectingError ? "test@123.pdf" : "validfile.pdf";
                                break;
                            case 'max_size_file':
                                fileSize = expectingError ? 3000000 : 1000000;
                                break;
                            case 'no_file':
                                if (expectingError) {
                                    // Para pruebas no_file que esperan error, no crear archivo
                                    continue;
                                } else {
                                    fileName = "validfile.pdf";
                                }
                                break;
                        }
                        
                        const fileData = new ArrayBuffer(fileSize);
                        let file = new File([fileData], fileName, { type: fileType });
                        const dataTransfer = new DataTransfer();
                        dataTransfer.items.add(file);
                        fileInput.files = dataTransfer.files;
                    } catch (error) {
                        console.error('Error creando archivo de prueba:', error);
                        continue;
                    }
                }

                // Obtener reglas de validación
                const estructura = eval('estructura_' + this.entidad);
                const validationRules = estructura.attributes[campotest].validation_rules[acciontest];                // Ejecutar validaciones en orden
                let resultadotest = 'OK';                if (validationRules) {
                    // Verificar no_file primero
                    if (tipoPrueba === 'no_file' && validationRules.no_file) {
                        if (!fileInput.files[0] || fileInput.files[0].size === 0) {
                            resultadotest = validationRules.no_file;
                        }
                    } else if (fileInput.files[0]) {
                        // Verificar validaciones específicas de archivo
                        if (tipoPrueba === 'file_type' && validationRules.file_type) {
                            const [allowedTypes, errorMsg] = validationRules.file_type;
                            if (!this.validaciones.file_type(fileInput.files[0], allowedTypes)) {
                                resultadotest = errorMsg;
                            }
                        } else if (tipoPrueba === 'max_size_file' && validationRules.max_size_file) {
                            const [maxSize, errorMsg] = validationRules.max_size_file;
                            if (!this.validaciones.max_size_file(fileInput.files[0], maxSize)) {
                                resultadotest = errorMsg;
                            }
                        } else if (tipoPrueba === 'format_name_file' && validationRules.format_name_file) {
                            const [pattern, errorMsg] = validationRules.format_name_file;
                            if (!this.validaciones.format_name_file(fileInput.files[0], pattern)) {
                                resultadotest = errorMsg;
                            }
                        } else if (tipoPrueba === 'min_size' && validationRules.min_size) {
                            const [minLength, errorMsg] = validationRules.min_size;
                            if (fileInput.files[0].name.length < minLength) {
                                resultadotest = errorMsg;
                            }
                        } else if (tipoPrueba === 'max_size' && validationRules.max_size) {
                            const [maxLength, errorMsg] = validationRules.max_size;
                            if (fileInput.files[0].name.length > maxLength) {
                                resultadotest = errorMsg;
                            }
                        }
                    }
                }// Actualizar resultado en tabla existente
                this.updateTestResultInTable(table, numdeftest, numprueba, campotest, resultadotest);

            } catch (error) {
                console.error('Error ejecutando prueba de archivo:', error);
            }
        }

        // No mostrar mensaje aquí, se mostrará al final de todas las pruebas
    }

    traduccion(codigo) {
        return Textos[codigo] || codigo;
    }

    mostrarResultadoFinal() {
        // Calcular estadísticas de las pruebas
        const totalPruebas = this.array_pruebas.length + (this.array_pruebas_file ? this.array_pruebas_file.length : 0);
        
        // Contar pruebas exitosas y fallidas
        const table = document.getElementById('tabla-pruebas-principales');
        const resultCells = table.querySelectorAll('.resultado-real');
        let exitosas = 0;
        let fallidas = 0;
        
        resultCells.forEach(cell => {
            if (cell.style.color === 'green') {
                exitosas++;
            } else if (cell.style.color === 'red') {
                fallidas++;
            }
        });
        
        // Mostrar mensaje unificado en la sección de resultados
        const mensaje = `
            <h3>Resultados de Ejecución de Pruebas</h3>
            <p><strong>Total de pruebas ejecutadas:</strong> ${totalPruebas}</p>
            <p><strong>Pruebas exitosas:</strong> ${exitosas}</p>
            <p><strong>Pruebas fallidas:</strong> ${fallidas}</p>
            <p>Ver resultados detallados en la tabla "Definición de Pruebas" arriba.</p>
        `;
        
        // Limpiar y mostrar solo el mensaje final
        document.getElementById('modal_resultadotest').innerHTML = mensaje;
        document.getElementById('modal_salidaresultadosprueba').innerHTML = '';
    }
}
