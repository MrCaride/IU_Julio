class Test_class {
    constructor() {
        // Show test button once the entity class is created
        this.mostrar_boton_test();
    }

    test_run() {
        // Show test container and clear previous results
        document.getElementById('div_IU_test').style.display = 'block';
        document.getElementById('resultadodef').innerHTML = '';
        document.getElementById('tablaresultadostest').innerHTML = '';
        document.getElementById('resultadoprueba').innerHTML = '';
        document.getElementById('tablaresultadosprueba').innerHTML = '';
        document.getElementById('resultadotest').innerHTML = '';
        document.getElementById('salidaresultadosprueba').innerHTML = '';

        // Resolve test definitions and test structures
        this.resolve_def_test();
        this.resolve_pruebas();

        // Get test arrays for execution
        this.array_def = eval('def_tests_' + this.entidad);
        this.array_pruebas = eval('pruebas_' + this.entidad);
        this.array_pruebas_file = eval('pruebas_file_' + this.entidad);

        // Run tests
        this.test_entidad();
        this.test_entidad_files();
    }

    resolve_def_test() {
        this.verificarDefTest();
    }

    resolve_pruebas() {
        this.verificarPruebas();
        this.verificarPruebas_file();
    }

    test_entidad() {
        // Build the title row for the test results table
        let salidatest = `<tr><th>NumDefTest</th><th>NumPrueba</th><th>Campo</th><th>Prueba</th><th>Accion</th><th>Valor</th><th>Respuesta Test</th><th>Respuesta esperada</th><th>Resultado</th></tr>`;

        for (let i = 0; i < this.array_pruebas.length; i++) {
            // Load clean form for each test
            this.cargar_formulario_html();

            // Add submit button for validation messages to work properly
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
            
            // Call validation function based on action
            let resultadotest;
            if (acciontest === 'SEARCH') {
                resultadotest = eval('this.comprobar_' + campotest + '_SEARCH()');
            } else {
                // Set action in case needed by validations
                this.accion = acciontest;
                resultadotest = eval('this.comprobar_' + campotest + '()');
            }

            // Check if test result matches expected result and include error code if it fails
            let resultadoestetest;
            if (respuestatest === resultadotest) {
                resultadoestetest = 'CORRECTO';
            } else {
                resultadoestetest = resultadotest; // El código de error que será traducido
            }
            
            // Build output row for this test
            let lineasalida = `<tr>
                <td>${numdeftest}</td>
                <td>${numprueba}</td>
                <td>${campotest}</td>
                <td>${def[3]}</td>
                <td>${acciontest}</td>
                <td>${valortest}</td>
                <td>${resultadotest}</td>
                <td>${respuestatest} (${this.traduccion(respuestatest)})</td>
                <td>${resultadoestetest === 'CORRECTO' ? resultadoestetest : this.traduccion(resultadoestetest)}</td>
            </tr>`;
            
            salidatest += lineasalida;
        }

        // Display results
        document.getElementById('salidaresultadosprueba').innerHTML += salidatest;
        document.getElementById('resultadopruebas').style.display = 'block';
    }

    // Function to translate result codes to human-readable text
    traduccion(codigo) {
        if (codigo === true) return 'Correcto';
        return Textos[codigo] || codigo;
    }

    test_entidad_files() {
        let salidatest = `<tr><th>NumDefTest</th><th>NumPrueba</th><th>Campo</th><th>Prueba</th><th>Accion</th><th>Valor</th><th>Respuesta Test</th><th>Respuesta esperada</th><th>Resultado</th></tr>`;

        for (let i = 0; i < this.array_pruebas_file.length; i++) {
            // Load clean form for each test
            this.cargar_formulario_html();
            
            // Add submit button
            let botonSubmit = document.createElement('input');
            botonSubmit.id = 'submit_button';
            document.getElementById('IU_form').append(botonSubmit);
    
            // Extract test details
            let campotest = this.array_pruebas_file[i][1];
            let numdeftest = this.array_pruebas_file[i][2];
            let numprueba = this.array_pruebas_file[i][3];
            let acciontest = this.array_pruebas_file[i][4];
            let clasedetest = this.array_pruebas_file[i][5];
            let valortest = this.array_pruebas_file[i][6];
            let respuestatest = this.array_pruebas_file[i][7];

            // Create file object and set it in the field
            if (valortest.length !== 0) {
                let file = new File([new ArrayBuffer(valortest[2])], valortest[0], {
                    type: valortest[1], 
                    webkitRelativePath: "C:\\fakepath\\" + valortest[0]
                });
                
                // Create DataTransfer object to set the file in the input
                const dataTransfer = new DataTransfer();
                dataTransfer.items.add(file);
                document.getElementById(campotest).files = dataTransfer.files;
            }
            
            // Call validation function based on action
            let resultadotest;
            if (acciontest === 'SEARCH') {
                resultadotest = eval('this.comprobar_' + campotest + '_SEARCH()');
            } else {
                this.accion = acciontest;
                resultadotest = eval('this.comprobar_' + campotest + '()');
            }

            // Check if test result matches expected result and include error code if it fails
            let resultadoestetest;
            if (respuestatest === resultadotest) {
                resultadoestetest = 'CORRECTO';
            } else {
                resultadoestetest = resultadotest; // El código de error que será traducido
            }
            
            // Build output row for this test
            let lineasalida = `<tr>
                <td>${numdeftest}</td>
                <td>${numprueba}</td>
                <td>${campotest}</td>
                <td>${clasedetest}</td>
                <td>${acciontest}</td>
                <td>${valortest}</td>
                <td>${resultadotest}</td>
                <td>${respuestatest} (${this.traduccion(respuestatest)})</td>
                <td>${resultadoestetest === 'CORRECTO' ? resultadoestetest : this.traduccion(resultadoestetest)}</td>
            </tr>`;
            
            salidatest += lineasalida;
        }

        // Display results
        document.getElementById('salidaresultadosprueba').innerHTML += salidatest;
        document.getElementById('resultadopruebas').style.display = 'block';
    }

    devolver_def(num_def) {
        for (let i = 0; i < this.array_def.length; i++) {
            if (this.array_def[i][2] === num_def) {
                return this.array_def[i];
            }
        }
        return null;
    }

    verificarDefTest() {
        let probe_def = eval("def_tests_" + this.entidad);
        let filacorrecta = true;

        let salidatabla = "<tr><th>Entidad</th><th>Campo</th><th>Num. DefTest</th><th>Descripción</th><th>Acción</th><th>Resultado</th><th>Mensaje</th><th>Estado</th></tr>";
        let salidalinea = '';
        
        probe_def.forEach(element => {
            salidalinea = "<tr>";
            salidalinea += '<td>' + element[0] + '</td>';
            salidalinea += '<td>' + element[1] + '</td>';
            salidalinea += '<td>' + element[2] + '</td>';
            salidalinea += '<td>' + element[3] + '</td>';
            salidalinea += '<td>' + element[4] + '</td>';
            salidalinea += '<td>' + element[5] + '</td>';
            salidalinea += '<td>' + element[6] + '</td>';
            
            // Verify correct types for each element
            if (
                (typeof(element[0]) === 'string') &&
                (typeof(element[1]) === 'string') &&
                (typeof(element[2]) === 'number') &&
                (typeof(element[3]) === 'string') &&
                (typeof(element[4]) === 'string') &&
                ((typeof(element[5]) === 'string') || (typeof(element[5]) === 'boolean')) &&
                (typeof(element[6]) === 'string')
            ) {
                salidalinea += '<td>CORRECTA</td>';
            } else {
                salidalinea += '<td>ERROR</td>';
                filacorrecta = false;
            }
            
            salidalinea += "</tr>";
            salidatabla += salidalinea;
        });
    
        document.getElementById('tablaresultadostest').innerHTML += salidatabla;
    
        if (filacorrecta) {
            document.getElementById('resultadodef').innerHTML = 'Formato correcto en las pruebas de test';
        }
    
        document.getElementById('contenidoTests').style.display = 'block';
    }

    verificarPruebas() {
        let probe_def = eval("pruebas_" + this.entidad);
        let filacorrecta = true;

        let salidatabla = "<tr><th>Entidad</th><th>Campo</th><th>Num.Def</th><th>Num.Prob</th><th>Acción</th><th>Valor</th><th>Resultado Test</th><th>Resultado Esperado</th><th>Verificación</th><th>Estado</th></tr>";
        let salidalinea = '';
        
        probe_def.forEach(element => {
            // Load clean form for test
            this.cargar_formulario_html();
            let botonSubmit = document.createElement('input');
            botonSubmit.id = 'submit_button';
            document.getElementById('IU_form').append(botonSubmit);

            salidalinea = "<tr>";
            salidalinea += '<td>' + element[0] + '</td>';
            salidalinea += '<td>' + element[1] + '</td>';
            salidalinea += '<td>' + element[2] + '</td>';
            salidalinea += '<td>' + element[3] + '</td>';
            salidalinea += '<td>' + element[4] + '</td>';
            salidalinea += '<td>' + element[5] + '</td>';
            
            // Set test value and execute test
            let campotest = element[1];
            let acciontest = element[4];
            let valortest = element[5];
            let respuestatest = element[6];
            
            document.getElementById(campotest).value = valortest;
            
            let resultadotest;
            if (acciontest === 'SEARCH') {
                resultadotest = eval('this.comprobar_' + campotest + '_SEARCH()');
            } else {
                this.accion = acciontest;
                resultadotest = eval('this.comprobar_' + campotest + '()');
            }
            
            let resultadoestetest;
            if (respuestatest === resultadotest) {
                resultadoestetest = 'CORRECTO';
            } else {
                resultadoestetest = resultadotest; // Devolver el código de error para traducir
            }
            
            salidalinea += '<td>' + resultadotest + '</td>';
            salidalinea += '<td>' + respuestatest + ' (' + this.traduccion(respuestatest) + ')</td>';
            salidalinea += '<td>' + (resultadoestetest === 'CORRECTO' ? resultadoestetest : this.traduccion(resultadoestetest)) + '</td>';
            
            // Verify correct types for each element
            if (
                (typeof(element[0]) === 'string') &&
                (typeof(element[1]) === 'string') &&
                (typeof(element[2]) === 'number') &&
                (typeof(element[3]) === 'number') &&
                (typeof(element[4]) === 'string') &&
                (typeof(element[5]) === 'string') &&
                ((typeof(element[6]) === 'string') || (typeof(element[6]) === 'boolean'))
            ) {
                salidalinea += '<td>CORRECTA</td>';
            } else {
                salidalinea += '<td>ERROR</td>';
                filacorrecta = false;
            }
            
            salidalinea += "</tr>";
            salidatabla += salidalinea;
        });

        document.getElementById('tablaresultadosprueba').innerHTML += salidatabla;

        if (filacorrecta) {
            document.getElementById('resultadoprueba').innerHTML = 'Formato correcto en las pruebas';
        }

        document.getElementById('contenidoPruebas').style.display = 'block';
    }

    verificarPruebas_file() {
        let probe_def = eval("pruebas_file_" + this.entidad);
        let filacorrecta = true;

        let salidatabla = "<tr><th>Entidad</th><th>Campo</th><th>Num.Def</th><th>Num.Prob</th><th>Acción</th><th>Tipo Test</th><th>Archivo</th><th>Resultado Test</th><th>Resultado Esperado</th><th>Verificación</th><th>Estado</th></tr>";
        let salidalinea = '';
        
        probe_def.forEach(element => {
            // Load clean form for test
            this.cargar_formulario_html();
            let botonSubmit = document.createElement('input');
            botonSubmit.id = 'submit_button';
            document.getElementById('IU_form').append(botonSubmit);

            salidalinea = "<tr>";
            salidalinea += '<td>' + element[0] + '</td>';
            salidalinea += '<td>' + element[1] + '</td>';
            salidalinea += '<td>' + element[2] + '</td>';
            salidalinea += '<td>' + element[3] + '</td>';
            salidalinea += '<td>' + element[4] + '</td>';
            salidalinea += '<td>' + element[5] + '</td>';
            salidalinea += '<td>' + (element[6].length ? element[6][0] : '') + '</td>';
            
            // Execute test
            let campotest = element[1];
            let acciontest = element[4];
            let valortest = element[6];
            let respuestatest = element[7];

            // Create file object if there's a test file
            if (valortest.length !== 0) {
                let file = new File([new ArrayBuffer(valortest[2])], valortest[0], {
                    type: valortest[1], 
                    webkitRelativePath: "C:\\fakepath\\" + valortest[0]
                });
                
                const dataTransfer = new DataTransfer();
                dataTransfer.items.add(file);
                document.getElementById(campotest).files = dataTransfer.files;
            }
            
            let resultadotest;
            if (acciontest === 'SEARCH') {
                resultadotest = eval('this.comprobar_' + campotest + '_SEARCH()');
            } else {
                this.accion = acciontest;
                resultadotest = eval('this.comprobar_' + campotest + '()');
            }
            
            salidalinea += '<td>' + resultadotest + '</td>';
            salidalinea += '<td>' + respuestatest + '</td>';
            
            let resultadoestetest = (respuestatest === resultadotest) ? 'CORRECTO' : 'INCORRECTO';
            salidalinea += '<td>' + resultadoestetest + '</td>';
            
            // Verify correct types
            if (
                (typeof(element[0]) === 'string') &&
                (typeof(element[1]) === 'string') &&
                (typeof(element[2]) === 'number') &&
                (typeof(element[3]) === 'number') &&
                (typeof(element[4]) === 'string') &&
                (typeof(element[5]) === 'string') &&
                (typeof(element[6]) === 'object') &&
                ((typeof(element[7]) === 'string') || (typeof(element[7]) === 'boolean'))
            ) {
                salidalinea += '<td>CORRECTA</td>';
            } else {
                salidalinea += '<td>ERROR</td>';
                filacorrecta = false;
            }
            
            salidalinea += "</tr>";
            salidatabla += salidalinea;
        });

        document.getElementById('tablaresultadosprueba').innerHTML += salidatabla;

        if (filacorrecta) {
            document.getElementById('resultadoprueba').innerHTML = 'Formato correcto en las pruebas';
        }

        document.getElementById('contenidoPruebas').style.display = 'block';
    }
}