class Test_class {
    constructor() {
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
            console.error('Test modal not found');
            return;
        }

        // Clear existing content
        this.clearModalContent();

        // Show the modal
        modal.style.display = 'block';

        // Add close functionality
        const closeModal = (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        };

        // Close on clicking outside
        modal.onclick = closeModal;

        // Don't close when clicking inside
        modal.querySelector('.modal-content').onclick = (e) => e.stopPropagation();

        // Add close button
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
        // Show and clear the modal first
        this.showTestModal();

        // Get test arrays for execution
        this.array_def = eval('def_tests_' + this.entidad);
        this.array_pruebas = eval('pruebas_' + this.entidad);
        this.array_pruebas_file = eval('pruebas_file_' + this.entidad);

        // Show test definitions, test data definitions and run tests
        this.mostrarDefTests();
        this.mostrarDefPruebas();
        this.test_entidad();
        this.test_entidad_files();
    }

    mostrarDefTests() {
        // Create table header for test definitions
        let table = document.createElement('table');
        table.border = '1';
        table.style.width = '100%';
        
        // Add header row
        let headerRow = table.insertRow();
        ['Entidad', 'Atributo', 'ID Test', 'Descripción', 'Acción', 'Tipo', 'Código Error'].forEach(text => {
            let th = document.createElement('th');
            th.textContent = text;
            headerRow.appendChild(th);
        });

        // Add data rows
        for (let def of this.array_def) {
            let row = table.insertRow();
            def.forEach(value => {
                let cell = row.insertCell();
                cell.textContent = value;
            });
        }

        // Update modal content - only add title to resultadodef
        document.getElementById('modal_resultadodef').innerHTML = '<h3>Definición de Tests</h3>';
        document.getElementById('modal_tablaresultadostest').innerHTML = '';
        document.getElementById('modal_tablaresultadostest').appendChild(table);
    }

    mostrarDefPruebas() {
        // Create table header for test data definitions
        let table = document.createElement('table');
        table.border = '1';
        table.style.width = '100%';
          // Add header row
        let headerRow = table.insertRow();
        ['Entidad', 'Campo', 'NumDefTest', 'NumPrueba', 'Acción', 'Valor', 'Resultado Esperado', 'Resultado Real'].forEach(text => {
            let th = document.createElement('th');
            th.textContent = text;
            headerRow.appendChild(th);
        });        // Add regular test data rows
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
            // Add empty cell for Resultado Real (will be filled when test runs)
            let resultadoCell = row.insertCell();
            resultadoCell.textContent = ''; // Inicialmente vacío
            resultadoCell.classList.add('resultado-real');
        }

        // Add file test data rows if they exist
        if (this.array_pruebas_file && this.array_pruebas_file.length > 0) {
            // Add a separator row
            let separatorRow = table.insertRow();
            let separatorCell = separatorRow.insertCell();
            separatorCell.colSpan = 7;
            separatorCell.textContent = '-- Pruebas de Archivos --';
            separatorCell.style.backgroundColor = '#f0f0f0';
            separatorCell.style.textAlign = 'center';
            separatorCell.style.fontWeight = 'bold';

            // Add file test rows
            for (let prueba of this.array_pruebas_file) {
                let row = table.insertRow();
                // For file tests, handle the file info specially
                for (let i = 0; i < prueba.length; i++) {
                    let cell = row.insertCell();
                    if (i === 6) { // File info position
                        cell.textContent = prueba[i].length ? prueba[i][0] : ''; // Show filename
                    } else {
                        cell.textContent = prueba[i];
                    }
                }
            }
        }

        // Update modal content
        document.getElementById('modal_resultadoprueba').innerHTML = '<h3>Definición de Pruebas</h3>';
        document.getElementById('modal_tablaresultadosprueba').innerHTML = '';
        document.getElementById('modal_tablaresultadosprueba').appendChild(table);
    }    test_entidad() {
        let table = document.querySelector('#modal_tablaresultadosprueba table');
        if (!table) {
            console.error('No se encontró la tabla de pruebas');
            return;
        }        // No need to create new table or clear results as we're using the existing table

        // Run each test
        for (let i = 0; i < this.array_pruebas.length; i++) {
            // Load clean form for each test
            this.parent.cargar_formulario();

            // Add submit button for validation messages
            let botonSubmit = document.createElement('input');
            botonSubmit.id = 'submit_button';
            document.getElementById('IU_form').append(botonSubmit);
    
            // Extract test details
            let campotest = this.array_pruebas[i][1];
            let numdeftest = this.array_pruebas[i][2];
            let numprueba = this.array_pruebas[i][3];
            let acciontest = this.array_pruebas[i][4];
            let valortest = this.array_pruebas[i][5];
            let respuestatest = this.array_pruebas[i][6];

            // Get test definition
            let def = this.devolver_def(numdeftest);

            // Set test value in the field
            document.getElementById(campotest).value = valortest;

            // Get validation rules from structure
            const estructura = eval('estructura_' + this.entidad);
            const validationRules = estructura.attributes[campotest].validation_rules[acciontest];

            // Execute validations based on rules
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
            }            // Check if test result matches expected result
            let resultadoestetest = (respuestatest === resultadotest) ? 'CORRECTO' : resultadotest;

            // Find the corresponding row in the table
            const rows = Array.from(table.rows);
            const testRow = rows.find(row => {
                return row.cells[2].textContent === numdeftest.toString() && 
                       row.cells[3].textContent === numprueba.toString();
            });

            if (testRow) {
                // Update the Resultado Real column
                const resultadoCell = testRow.cells[testRow.cells.length - 1];
                resultadoCell.textContent = resultadoestetest;
                resultadoCell.style.backgroundColor = resultadoestetest === 'CORRECTO' ? '#90EE90' : '#FFB6C1';
            }
        }
    }

    test_entidad_files() {
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

        // Run each file test
        for (let i = 0; i < this.array_pruebas_file.length; i++) {
            // Load clean form for each test
            this.parent.cargar_formulario();

            // Add submit button
            let botonSubmit = document.createElement('input');
            botonSubmit.id = 'submit_button';
            document.getElementById('IU_form').append(botonSubmit);
    
            // Extract test details
            let campotest = this.array_pruebas_file[i][1];
            let numdeftest = this.array_pruebas_file[i][2];
            let numprueba = this.array_pruebas_file[i][3];
            let acciontest = this.array_pruebas_file[i][4];
            let valortest = this.array_pruebas_file[i][6];
            let respuestatest = this.array_pruebas_file[i][7];

            // Get test definition
            let def = this.devolver_def(numdeftest);

            // Create file object if needed
            if (valortest.length !== 0) {
                let file = new File([new ArrayBuffer(valortest[2])], valortest[0], {
                    type: valortest[1],
                    webkitRelativePath: "C:\\fakepath\\" + valortest[0]
                });
                
                const dataTransfer = new DataTransfer();
                dataTransfer.items.add(file);
                document.getElementById(campotest).files = dataTransfer.files;
            }

            // Get validation rules from structure
            const estructura = eval('estructura_' + this.entidad);
            const validationRules = estructura.attributes[campotest].validation_rules[acciontest];

            // Execute validations based on rules
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

            // Check if test result matches expected result
            let resultadoestetest = (respuestatest === resultadotest) ? 'CORRECTO' : resultadotest;

            // Add result row to table
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
