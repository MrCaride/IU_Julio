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
        
        // Reset test arrays
        this.array_def = [];
        this.array_pruebas = [];
        this.array_pruebas_file = [];
        
        try {            // Load test definitions
            this.array_def = eval(this.entidad + '_def_tests');
        } catch (e) {
            console.warn('No se encontraron definiciones de test para ' + this.entidad);
        }        // Get regular test cases
        try {
            this.array_pruebas = eval(this.entidad + '_tests');
        } catch (e) {
            this.array_pruebas = [];
            console.warn('No se encontraron pruebas regulares para ' + this.entidad);
        }

        // Get file test cases
        try {
            this.array_pruebas_file = eval(this.entidad + '_tests_files');
        } catch (e) {
            this.array_pruebas_file = [];
            console.warn('No se encontraron pruebas de archivo para ' + this.entidad);
        }

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
            separatorCell.style.fontWeight = 'bold';            // Agregar filas de pruebas de archivos
            for (let prueba of this.array_pruebas_file) {
                if (!prueba) continue; // Skip if prueba is null
                
                let row = table.insertRow();
                // Para pruebas de archivos, manejar la información del archivo de manera especial
                for (let i = 0; i < prueba.length; i++) {
                    let cell = row.insertCell();
                    if (i === 6) { // Posición de la información del archivo
                        cell.textContent = prueba[i] && prueba[i].length ? prueba[i][0] : ''; // Mostrar nombre del archivo
                    } else {
                        cell.textContent = prueba[i] || '';
                    }
                }
                // Agregar celda vacía para Resultado Real
                let resultadoCell = row.insertCell();
                resultadoCell.textContent = ''; // Inicialmente vacío
                resultadoCell.classList.add('resultado-real');
            }
        }

        // Actualizar contenido del modal
        document.getElementById('modal_resultadoprueba').innerHTML = '<h3>Definición de Pruebas</h3>';
        document.getElementById('modal_tablaresultadosprueba').innerHTML = '';
        document.getElementById('modal_tablaresultadosprueba').appendChild(table);
    }    test_entidad() {
        const table = this.createResultTable();

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
            let resultadotest = 'OK';                if (validationRules) {
                    // Execute file validations in specific order
                    const validationOrder = ['no_file', 'file_type', 'max_size_file', 'format_name_file'];
                    
                    // First check required validations in order
                    for (const rule of validationOrder) {
                        if (validationRules[rule] && this.validaciones[rule]) {
                            const [value, errorMsg] = Array.isArray(validationRules[rule]) ? 
                                                    validationRules[rule] : 
                                                    [null, validationRules[rule]];
                            const isValid = this.validaciones[rule](campotest, value);
                            if (!isValid) {
                                resultadotest = errorMsg;
                                break;
                            }
                        }
                    }
                    
                    // Then check any remaining validations
                    if (resultadotest === 'OK') {
                        for (let rule in validationRules) {
                            if (!validationOrder.includes(rule) && this.validaciones[rule]) {
                                const [value, errorMsg] = validationRules[rule];
                                const isValid = this.validaciones[rule](campotest, value);
                                if (!isValid) {
                                    resultadotest = errorMsg;
                                    break;
                                }
                            }
                        }
                    }
                }// Actualizar resultado en la tabla
            this.updateTestResult(table, this.array_pruebas[i], resultadotest);
        }
    }    test_entidad_files() {
        // Check if there are no file tests
        if (!this.array_pruebas_file || this.array_pruebas_file.length === 0) {
            console.log('No file tests to execute');
            return;  // Exit if no file tests exist
        }

        // Create clean form before running any tests
        this.parent.cargar_formulario();

        // Create table for file test results
        let table = document.createElement('table');
        table.border = '1';
        table.style.width = '100%';
        
        // Add header row
        let headerRow = table.insertRow();
        ['NumDefTest', 'NumPrueba', 'Campo', 'Prueba', 'Accion', 'Valor', 'Respuesta Test', 'Respuesta esperada', 'Resultado'].forEach(text => {
            let th = document.createElement('th');
            th.textContent = text;
            headerRow.appendChild(th);
        });

        document.getElementById('modal_salidaresultadosprueba').appendChild(table);

        // Execute each file test
        for (let i = 0; i < this.array_pruebas_file.length; i++) {
            try {
                this.parent.cargar_formulario();

                const campotest = this.array_pruebas_file[i][1];
                const numdeftest = this.array_pruebas_file[i][2];
                const numprueba = this.array_pruebas_file[i][3];
                const acciontest = this.array_pruebas_file[i][4];
                const prueba = this.array_pruebas_file[i][5];
                const valortest = this.array_pruebas_file[i][6];
                const respuestatest = this.array_pruebas_file[i][7];

                // Add submit button
                let botonSubmit = document.createElement('input');
                botonSubmit.id = 'submit_button';
                document.getElementById('IU_form').append(botonSubmit);

                // Create file input
                let fileInput = document.createElement('input');
                fileInput.type = 'file';
                fileInput.id = campotest;
                fileInput.name = campotest;
                document.getElementById('IU_form').appendChild(fileInput);

                // Get test definition
                let def = this.devolver_def(numdeftest);
                if (!def) continue;                // Create test file if needed
                if (valortest && valortest.length !== 0) {
                    try {
                        let fileType = "application/pdf";
                        let fileName = "test.pdf";
                        let fileSize = 100;
                        
                        // Set file properties based on test type
                        switch (prueba) {
                            case 'file_type':
                                fileType = valortest === 'i' ? "text/plain" : "application/pdf";
                                fileName = valortest === 'i' ? "test.txt" : "test.pdf";
                                break;
                            case 'format_name_file':
                                fileName = valortest === 'i' ? "test@123.pdf" : "validfile.pdf";
                                break;
                            case 'max_size_file':
                                fileSize = valortest === 'i' ? 3000000 : 1000000;
                                break;
                        }
                        
                        const fileData = new ArrayBuffer(fileSize);

                        let file = new File([fileData], fileName, { type: fileType });
                        const dataTransfer = new DataTransfer();
                        dataTransfer.items.add(file);
                        fileInput.files = dataTransfer.files;
                    } catch (error) {
                        console.error('Error creating test file:', error);
                        continue;
                    }
                }

                // Get validation rules
                const estructura = eval('estructura_' + this.entidad);
                const validationRules = estructura.attributes[campotest].validation_rules[acciontest];

                // Execute validations in order
                let resultadotest = 'OK';
                if (validationRules) {
                    const validationOrder = ['no_file', 'file_type', 'max_size_file', 'format_name_file'];
                    
                    // Check no_file first
                    if (validationRules.no_file && (!fileInput.files[0] || fileInput.files[0].size === 0)) {
                        resultadotest = validationRules.no_file;
                    } else if (fileInput.files[0]) {
                        // Check other validations in order
                        for (const rule of validationOrder) {
                            if (rule !== 'no_file' && validationRules[rule]) {
                                const [value, errorMsg] = validationRules[rule];
                                if (!this.validaciones[rule](fileInput.files[0], value)) {
                                    resultadotest = errorMsg;
                                    break;
                                }
                            }
                        }
                    }
                }

                // Add result row to table
                let row = table.insertRow();
                const resultadoestetest = (respuestatest === resultadotest) ? 'CORRECTO' : resultadotest;

                [numdeftest, numprueba, campotest, def[3], acciontest, 
                 (valortest && valortest.length ? valortest[0] : ''), resultadotest, 
                 respuestatest, resultadoestetest].forEach(text => {
                    let cell = row.insertCell();
                    cell.textContent = text;
                    if (resultadoestetest !== 'CORRECTO') {
                        cell.style.color = 'red';
                    }
                });

            } catch (error) {
                console.error('Error executing file test:', error);
                let row = table.insertRow();
                let cell = row.insertCell();
                cell.colSpan = 9;
                cell.textContent = 'Error executing test: ' + error.message;
                cell.style.color = 'red';
            }
        }
    }    devolver_def(num_def) {
        // Convert num_def to number for comparison since it may come as string
        const numDefNumber = Number(num_def);
        
        if (isNaN(numDefNumber)) {
            console.warn(`Número de definición de test inválido: ${num_def}`);
            return null;
        }
        
        // Verify we have test definitions to search
        if (!this.array_def || !Array.isArray(this.array_def)) {
            console.warn('No hay definiciones de test disponibles');
            return null;
        }
        
        // Find the matching definition using strict numeric comparison
        const def = this.array_def.find(d => Number(d[2]) === numDefNumber);
        
        if (!def) {
            console.warn(`No se encontró la definición para el test número ${numDefNumber}`);
            return null;
        }
        
        return def;
    }

    traduccion(codigo) {
        if (codigo === true) return 'Correcto';
        return Textos[codigo] || codigo;
    }

    createResultTable() {
        let table = document.createElement('table');
        table.className = 'test-results-table';
        
        // Crear encabezado
        let headerRow = table.insertRow();
        ['Entidad', 'Campo', 'ID Test', 'Prueba', 'Acción', 'Valor', 'Resultado Esperado', 'Resultado Real'].forEach(text => {
            let th = document.createElement('th');
            th.textContent = text;
            headerRow.appendChild(th);
        });

        // Para cada definición de test, crear una fila
        this.array_def.forEach(def => {
            let row = table.insertRow();
            
            // Llenar las columnas
            [
                def[0], // Entidad
                def[1], // Campo
                def[2], // ID Test
                def[3], // Descripción
                def[4], // Acción
                '',     // Valor (se llenará durante la ejecución)
                def[6], // Resultado esperado
                ''      // Resultado real (se llenará durante la ejecución)
            ].forEach((text, index) => {
                let cell = row.insertCell();
                cell.textContent = text;
                
                // Aplicar clases específicas
                if (index === 6) cell.className = 'resultado-esperado';
                if (index === 7) cell.className = 'resultado-real';
            });
        });

        document.getElementById('modal_tablaresultadostest').appendChild(table);
        return table;
    }

    updateTestResult(table, prueba, resultadoReal) {
        // Encontrar la fila correspondiente
        const rows = Array.from(table.rows);
        const testRow = rows.find(row => {
            return row.cells[2].textContent === prueba[2].toString() && 
                   row.cells[1].textContent === prueba[1];
        });

        if (testRow) {
            // Actualizar el valor de prueba
            testRow.cells[5].textContent = prueba[5];

            // Actualizar el resultado real
            const resultadoCell = testRow.cells[7];
            resultadoCell.textContent = resultadoReal;

            // Comparar resultados y aplicar estilo
            const resultadoEsperado = prueba[6];
            const coinciden = resultadoReal === resultadoEsperado || 
                            (resultadoReal === 'OK' && resultadoEsperado === true) ||
                            (resultadoReal !== 'OK' && resultadoEsperado !== true);

            resultadoCell.className = coinciden ? 'coinciden' : 'no-coinciden';
        }
    }
}
