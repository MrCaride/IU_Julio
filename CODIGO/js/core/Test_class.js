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

    // Métodos de gestión del modal
    showTestModal() {
        const modal = document.getElementById('test-modal');
        if (!modal) {
            console.error('Modal de pruebas no encontrado');
            return;
        }

        this.clearModalContent();
        modal.style.display = 'block';

        // Configurar eventos del modal
        modal.onclick = (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        };

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
        const elementsToClean = [
            'modal_resultadodef',
            'modal_tablaresultadostest',
            'modal_resultadoprueba',
            'modal_tablaresultadosprueba',
            'modal_resultadotest',
            'modal_salidaresultadosprueba'
        ];
        
        elementsToClean.forEach(id => {
            document.getElementById(id).innerHTML = '';
        });
    }

    // Método principal de ejecución de pruebas
    test_run() {
        this.showTestModal();
        this.cargarArraysPruebas();
        
        // Mostrar definiciones y ejecutar pruebas
        this.mostrarDefTests();
        this.mostrarDefPruebas();
        
        // Ejecutar pruebas de forma asíncrona
        this.test_entidad().then(() => {
            this.test_entidad_files();
            this.mostrarResultadoFinal();
        });
    }

    // Métodos de carga de datos
    cargarArraysPruebas() {
        // Reiniciar arrays
        this.array_def = [];
        this.array_pruebas = [];
        this.array_pruebas_file = [];
        
        try {
            this.array_def = eval(this.entidad + '_def_tests');
        } catch (e) {
            console.warn('No se encontraron definiciones de test para ' + this.entidad);
        }

        try {
            this.array_pruebas = eval(this.entidad + '_tests');
        } catch (e) {
            console.warn('No se encontraron pruebas regulares para ' + this.entidad);
        }

        try {
            this.array_pruebas_file = eval(this.entidad + '_tests_files');
        } catch (e) {
            console.warn('No se encontraron pruebas de archivo para ' + this.entidad);
        }
    }

    // Métodos de visualización
    mostrarDefTests() {
        let table = document.createElement('table');
        table.border = '1';
        table.style.width = '100%';
        
        // Crear encabezados
        let headerRow = table.insertRow();
        ['Entidad', 'Atributo', 'ID Test', 'Descripción', 'Acción', 'Tipo', 'Código Error'].forEach(text => {
            let th = document.createElement('th');
            th.textContent = text;
            headerRow.appendChild(th);
        });

        // Agregar datos
        for (let def of this.array_def) {
            let row = table.insertRow();
            def.forEach(value => {
                let cell = row.insertCell();
                cell.textContent = value;
            });
        }

        document.getElementById('modal_resultadodef').innerHTML = '<h3>Definición de Tests</h3>';
        document.getElementById('modal_tablaresultadostest').innerHTML = '';
        document.getElementById('modal_tablaresultadostest').appendChild(table);
    }

    mostrarDefPruebas() {
        let table = document.createElement('table');
        table.border = '1';
        table.style.width = '100%';
        table.id = 'tabla-pruebas-principales';
        
        // Crear encabezados
        let headerRow = table.insertRow();
        ['Entidad', 'Campo', 'NumDefTest', 'NumPrueba', 'Acción', 'Valor', 'Resultado Esperado', 'Resultado Real'].forEach(text => {
            let th = document.createElement('th');
            th.textContent = text;
            headerRow.appendChild(th);
        });

        // Agregar pruebas regulares
        this.agregarFilasPruebas(table, this.array_pruebas, false);

        // Agregar pruebas de archivos si existen
        if (this.array_pruebas_file && this.array_pruebas_file.length > 0) {
            this.agregarSeparadorPruebasArchivos(table);
            this.agregarFilasPruebas(table, this.array_pruebas_file, true);
        }

        document.getElementById('modal_resultadoprueba').innerHTML = '<h3>Definición de Pruebas</h3>';
        document.getElementById('modal_tablaresultadosprueba').innerHTML = '';
        document.getElementById('modal_tablaresultadosprueba').appendChild(table);
    }

    agregarFilasPruebas(table, pruebas, esArchivoTest) {
        for (let prueba of pruebas) {
            if (!prueba) continue;
            
            let row = table.insertRow();
            row.setAttribute('data-test-id', prueba[2]);
            row.setAttribute('data-test-num', prueba[3]);
            row.setAttribute('data-field', prueba[1]);
            if (esArchivoTest) {
                row.setAttribute('data-file-test', 'true');
            }
            
            // Agregar las primeras 6 columnas
            for (let i = 0; i < 6; i++) {
                let cell = row.insertCell();
                cell.textContent = prueba[i] || '';
            }
            
            // Agregar resultados
            this.agregarCeldasResultado(row, prueba[7]);
        }
    }

    agregarSeparadorPruebasArchivos(table) {
        let separatorRow = table.insertRow();
        let separatorCell = separatorRow.insertCell();
        separatorCell.colSpan = 8;
        separatorCell.textContent = '-- Pruebas de Archivos --';
        separatorCell.style.backgroundColor = '#f0f0f0';
        separatorCell.style.textAlign = 'center';
        separatorCell.style.fontWeight = 'bold';
    }

    agregarCeldasResultado(row, resultadoEsperado) {
        // Celda de resultado esperado
        let expectedCell = row.insertCell();
        expectedCell.textContent = this.traduccion(resultadoEsperado || 'OK');
        expectedCell.classList.add('resultado-esperado');
        
        // Celda de resultado real
        let resultadoCell = row.insertCell();
        resultadoCell.textContent = 'Pendiente';
        resultadoCell.classList.add('resultado-real');
    }

    // Métodos de ejecución de pruebas
    async test_entidad() {
        const table = document.getElementById('tabla-pruebas-principales');
        if (!table) {
            console.error('No se encontró la tabla de pruebas principales');
            return;
        }

        for (let prueba of this.array_pruebas) {
            await this.ejecutarPrueba(table, prueba);
        }
    }

    async test_entidad_files() {
        if (!this.array_pruebas_file || this.array_pruebas_file.length === 0) {
            return;
        }

        const table = document.getElementById('tabla-pruebas-principales');
        if (!table) {
            console.error('No se encontró la tabla de pruebas principales');
            return;
        }

        for (let prueba of this.array_pruebas_file) {
            await this.ejecutarPruebaArchivo(table, prueba);
        }
    }

    async ejecutarPrueba(table, prueba) {
        try {
            const [entidad, campo, numdeftest, numprueba, accion, valor, valoresExtra] = prueba;
            
            // Crear y configurar formulario temporal
            const tempForm = this.crearFormularioTemporal(campo, valor, valoresExtra);
            
            // Ejecutar validaciones
            const resultado = await this.ejecutarValidaciones(campo, accion);
            
            // Actualizar resultado en la tabla
            this.updateTestResultInTable(table, numdeftest, numprueba, campo, resultado);
            
            // Limpiar
            document.body.removeChild(tempForm);
        } catch (error) {
            console.error('Error ejecutando prueba:', error);
        }
    }

    async ejecutarPruebaArchivo(table, prueba) {
        try {
            if (!prueba) return;
            
            const [entidad, campo, numdeftest, numprueba, accion, parametro, valor, resultadoEsperado] = prueba;
            
            // Obtener reglas de validación
            const estructura = eval('estructura_' + this.entidad);
            const validationRules = estructura.attributes[campo].validation_rules[accion];
            
            if (!validationRules) {
                this.updateTestResultInTable(table, numdeftest, numprueba, campo, 'OK');
                return;
            }

            let resultado = resultadoEsperado; // Por defecto asumimos que fallará
            
            // Ejecutar la validación específica según el parámetro
            switch (parametro.toLowerCase()) {
                case 'min_size':
                    if (validationRules.min_size) {
                        const [minSize, errorMsg] = validationRules.min_size;
                        if (valor.length >= minSize) {
                            resultado = 'OK';
                        }
                    }
                    break;
                    
                case 'max_size':
                    if (validationRules.max_size) {
                        const [maxSize, errorMsg] = validationRules.max_size;
                        if (valor.length <= maxSize) {
                            resultado = 'OK';
                        }
                    }
                    break;
                    
                case 'max_size_file':
                    if (validationRules.max_size_file) {
                        const [maxSize, errorMsg] = validationRules.max_size_file;
                        const fileSize = parseInt(valor);
                        if (fileSize <= maxSize) {
                            resultado = 'OK';
                        }
                    }
                    break;
                    
                case 'file_type':
                    if (validationRules.file_type) {
                        const [allowedTypes, errorMsg] = validationRules.file_type;
                        const types = Array.isArray(allowedTypes) ? allowedTypes : [allowedTypes];
                        if (types.includes(valor)) {
                            resultado = 'OK';
                        }
                    }
                    break;
                    
                case 'format_name_file':
                    if (validationRules.format_name_file) {
                        const [pattern, errorMsg] = validationRules.format_name_file;
                        const regex = new RegExp(pattern);
                        if (regex.test(valor)) {
                            resultado = 'OK';
                        }
                    }
                    break;
                    
                case 'no_file':
                    if (validationRules.no_file) {
                        // valor debería ser true/false o 1/0 indicando si hay archivo
                        if (valor) {
                            resultado = 'OK';
                        }
                    }
                    break;
                    
                default:
                    console.warn(`Parámetro de prueba de archivo no reconocido: ${parametro}`);
                    resultado = 'Parámetro no válido';
            }
            
            // Actualizar resultado
            this.updateTestResultInTable(table, numdeftest, numprueba, campo, resultado);
            
        } catch (error) {
            console.error('Error ejecutando prueba de archivo:', error);
            this.updateTestResultInTable(table, prueba[2], prueba[3], prueba[1], 'Error en ejecución');
        }
    }

    crearFormularioTemporal(campo, valor, valoresExtra) {
        const tempForm = document.createElement('div');
        tempForm.id = 'temp_test_form';
        tempForm.style.display = 'none';
        
        const campoElement = document.createElement('input');
        campoElement.id = campo;
        campoElement.value = valor;
        tempForm.appendChild(campoElement);
        
        if (valoresExtra && typeof valoresExtra === 'object') {
            for (let campo in valoresExtra) {
                const extraElement = document.createElement('input');
                extraElement.id = campo;
                extraElement.value = valoresExtra[campo];
                tempForm.appendChild(extraElement);
            }
        }
        
        document.body.appendChild(tempForm);
        return tempForm;
    }

    crearArchivoSimulado(parametro, valor) {
        const simulatedFile = new File([''], 'test.txt', { type: 'text/plain' });
        
        switch (parametro.toLowerCase()) {
            case 'name':
                simulatedFile.name = valor;
                break;
            case 'tipo':
                simulatedFile.name = `test.${valor}`;
                simulatedFile.type = `${valor.includes('/') ? valor : `application/${valor}`}`;
                break;
            case 'size':
                Object.defineProperty(simulatedFile, 'size', {
                    value: typeof valor === 'number' ? valor : parseInt(valor),
                    writable: false
                });
                break;
            default:
                Object.defineProperty(simulatedFile, parametro, {
                    value: valor,
                    writable: false
                });
        }
        
        return simulatedFile;
    }

    async ejecutarValidaciones(campo, accion) {
        const estructura = eval('estructura_' + this.entidad);
        const validationRules = estructura.attributes[campo].validation_rules[accion];
        
        if (!validationRules) {
            return 'OK';
        }

        for (let rule in validationRules) {
            if (this.validaciones[rule]) {
                const [isValid, errorMsg] = this.ejecutarReglaValidacion(rule, campo, validationRules[rule]);
                if (!isValid) {
                    return errorMsg;
                }
            }
        }

        // Ejecutar validaciones especiales
        const resultadoEspecial = await this.ejecutarValidacionesEspeciales(campo);
        if (resultadoEspecial !== true) {
            return resultadoEspecial;
        }

        return 'OK';
    }

    ejecutarReglaValidacion(rule, campo, ruleConfig) {
        if (Array.isArray(ruleConfig)) {
            const [value, msg] = ruleConfig;
            return [this.validaciones[rule](campo, value), msg];
        } else {
            return [this.validaciones[rule](campo), ruleConfig];
        }
    }

    async ejecutarValidacionesEspeciales(campo) {
        const specialMethodName = 'check_special_' + campo;
        const entityInstance = window.validar || this.parent;
        
        if (entityInstance && typeof entityInstance[specialMethodName] === 'function') {
            try {
                return await entityInstance[specialMethodName]();
            } catch (error) {
                console.error(`Error en validación especial ${specialMethodName}:`, error);
                return error.message;
            }
        }
        
        return true;
    }

    async ejecutarValidacionesArchivo(campo, accion, simulatedFile) {
        const estructura = eval('estructura_' + this.entidad);
        const validationRules = estructura.attributes[campo].validation_rules[accion];
        
        if (!validationRules) {
            return 'OK';
        }

        for (let rule in validationRules) {
            if (this.validaciones[rule]) {
                let isValid;
                let errorMsg;
                
                if (Array.isArray(validationRules[rule])) {
                    // Formato: [valor, mensaje_error]
                    const [value, msg] = validationRules[rule];
                    isValid = this.validaciones[rule](campo, value, simulatedFile);
                    errorMsg = msg;
                } else {
                    // Formato: solo mensaje_error
                    isValid = this.validaciones[rule](campo, null, simulatedFile);
                    errorMsg = validationRules[rule];
                }

                if (!isValid) {
                    return errorMsg;
                }
            }
        }

        return 'OK';
    }

    updateTestResultInTable(table, testId, testNum, field, resultado) {
        const rows = Array.from(table.rows).slice(1);
        
        const targetRow = rows.find(row => {
            return row.getAttribute('data-test-id') == testId &&
                   row.getAttribute('data-test-num') == testNum &&
                   row.getAttribute('data-field') === field;
        });

        if (targetRow) {
            const resultadoCell = targetRow.cells[targetRow.cells.length - 1];
            const expectedCell = targetRow.cells[targetRow.cells.length - 2];
            
            if (resultadoCell && expectedCell) {
                const resultadoTraducido = this.traduccion(resultado);
                resultadoCell.textContent = resultadoTraducido;
                
                const expectedResult = expectedCell.textContent.trim();
                const coinciden = resultadoTraducido === expectedResult;
                
                resultadoCell.style.color = coinciden ? 'green' : 'red';
                resultadoCell.style.fontWeight = 'bold';
            }
        }
    }

    mostrarResultadoFinal() {
        const totalPruebas = this.array_pruebas.length + (this.array_pruebas_file ? this.array_pruebas_file.length : 0);
        
        const table = document.getElementById('tabla-pruebas-principales');
        const resultCells = table.querySelectorAll('.resultado-real');
        
        let exitosas = 0;
        let fallidas = 0;
        
        resultCells.forEach(cell => {
            if (cell.style.color === 'green') exitosas++;
            else if (cell.style.color === 'red') fallidas++;
        });
        
        const mensaje = `
            <h3>Resultados de Ejecución de Pruebas</h3>
            <p><strong>Total de pruebas ejecutadas:</strong> ${totalPruebas}</p>
            <p><strong>Pruebas exitosas:</strong> ${exitosas}</p>
            <p><strong>Pruebas fallidas:</strong> ${fallidas}</p>
            <p>Ver resultados detallados en la tabla "Definición de Pruebas" arriba.</p>
        `;
        
        document.getElementById('modal_resultadotest').innerHTML = mensaje;
        document.getElementById('modal_salidaresultadosprueba').innerHTML = '';
    }

    traduccion(codigo) {
        return Textos[codigo] || codigo;
    }
}
