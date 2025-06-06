class DOM_class {

    constructor() {
        // Crear instancia de validación si no existe
        if (!window.validar) {
            window.validar = new Validaciones_Atomicas();
        }
    }

    mostrar_error_campo(id, codigoerror) {
        try {
            // Buscar los elementos
            let errorDiv = document.getElementById('div_error_' + id);
            let campo = document.getElementById(id);

            // Crear div de error si no existe
            if (!errorDiv && campo) {
                errorDiv = document.createElement('span');
                errorDiv.id = 'div_error_' + id;
                errorDiv.className = 'error-message';
                // Insertar después del campo
                campo.parentNode.insertBefore(errorDiv, campo.nextSibling);
            }

            // Actualizar el mensaje de error
            if (errorDiv) {
                errorDiv.style.display = 'block';
                errorDiv.innerHTML = Textos[codigoerror] || codigoerror;
                errorDiv.style.color = 'red';
            }
            
            // Actualizar estilo del campo
            if (campo) {
                campo.style.borderColor = 'red';
                campo.classList.add('errorcampo');
            } 
        } catch (error) {
            console.warn(`Error al mostrar error del campo ${id}:`, error);
        }
    }

    mostrar_exito_campo(id) {
        try {
            let errorDiv = document.getElementById('div_error_' + id);
            let campo = document.getElementById(id);

            if (errorDiv) {
                if (Textos[id + '_OK']) {
                    errorDiv.style.display = 'block';
                    errorDiv.innerHTML = Textos[id + '_OK'];
                    errorDiv.style.color = 'green';
                } else {
                    errorDiv.style.display = 'none';
                    errorDiv.innerHTML = '';
                }
            }

            if (campo) {
                campo.style.borderColor = 'green';
                campo.classList.remove('errorcampo');
                campo.classList.add('exitocampo');
            }
        } catch (error) {
            console.warn(`Error al mostrar éxito del campo ${id}:`, error);
        }
    }

    modificarcolumnasamostrar(atributo) {
        let nuevascolumnas = [];
        
        if (this.columnasamostrar.includes(atributo)) {
            // Borrar ese atributo
            for (let i = 0; i < this.columnasamostrar.length; i++) {
                if (this.columnasamostrar[i] !== atributo) {
                    nuevascolumnas.push(this.columnasamostrar[i]);
                }
            }
            this.columnasamostrar = nuevascolumnas;
        } else {
            // Añadir el atributo
            this.columnasamostrar.push(atributo);
        }

        // Actualizar la tabla con las nuevas columnas visibles
        this.hacertabla();
    }

    mostrarocultarcolumnas() {
        for (let columna of this.atributos) {
            if (!this.columnasamostrar.includes(columna)) {
                // Ocultar cabecera
                let th = document.querySelector(`th[class='${columna}']`);
                if (th) {
                    th.style.display = 'none';
                }
                
                // Ocultar celdas
                let arraytds = document.querySelectorAll(`td[class='tabla-td-${columna}']`);
                if (arraytds) {
                    arraytds.forEach(td => {
                        td.style.display = 'none';
                    });
                }
            } else {
                // Mostrar cabecera
                let th = document.querySelector(`th[class='${columna}']`);
                if (th) {
                    th.style.display = '';
                }
                
                // Mostrar celdas
                let arraytds = document.querySelectorAll(`td[class='tabla-td-${columna}']`);
                if (arraytds) {
                    arraytds.forEach(td => {
                        td.style.display = '';
                    });
                }
            }
        }
    }

    construirSelect() {
        let select = document.getElementById("seleccioncolumnas");
        if (!select) return;
        
        select.innerHTML = '';
        select.style.display = 'inline-block';
        
        let optionselect;
        for (let atributo of this.atributos) {
            optionselect = document.createElement('option');
            optionselect.className = atributo;
            optionselect.value = atributo;
            optionselect.innerHTML = Textos[atributo] || atributo;
            optionselect.setAttribute('onclick', `validar.modificarcolumnasamostrar('${atributo}');`);
            
            if (this.columnasamostrar.includes(atributo)) {
                optionselect.selected = true;
            }
            select.appendChild(optionselect);
        }

        // No usamos onchange, sino que cada opción tiene su propio onclick
        select.removeAttribute('onchange');
        
        setLang();
    }    hacertabla() {
        // Títulos
        let titleElement = document.getElementById("text_title_page");
        let titlePage = document.getElementById('title_page');
        if (titleElement && titlePage) {
            titleElement.className = "text_titulo_page_" + this.entidad;
            titlePage.style.display = 'block';
        }

        // Inicializar atributos y columnas si no están configurados
        if (!this.atributos || this.atributos.length === 0) {
            this.atributos = this.estructura.attributes_list;
        }
        if (!this.columnasamostrar || this.columnasamostrar.length === 0) {
            this.columnasamostrar = this.estructura.columnas_visibles_tabla;
        }
        if (!this.datosespecialestabla) {
            this.datosespecialestabla = this.estructura.columnas_modificadas_tabla || [];
        }

        // Construir selector de columnas
        this.construirSelect();        // Crear encabezado de tabla
        let textolineatitulos = '<tr>';
        for (let atributo of this.atributos) {
            let display = this.columnasamostrar.includes(atributo) ? '' : 'display:none;';
            textolineatitulos += `<th class="${atributo} text_${atributo}" style="${display}" data-text-key="${`titulo_tabla_${this.entidad}_${atributo}`}">${Textos[`titulo_tabla_${this.entidad}_${atributo}`] || Textos[atributo] || atributo}</th>`;
        }
        textolineatitulos += '<th class="acciones text_acciones">' + (Textos['acciones'] || 'Acciones') + '</th>';
        textolineatitulos += '</tr>';
        document.getElementById('titulostablacabecera').innerHTML = textolineatitulos;

        // Asegurar que se aplican las traducciones después de modificar el HTML
        if (typeof setLang === 'function') {
            setLang();
        }
        
        // Crear filas de la tabla
        let textolineadatos = '';
        for (let i = 0; i < this.datos.length; i++) {
            textolineadatos += '<tr>';
            
            // Procesar cada columna
            for (let atributo of this.atributos) {
                let display = this.columnasamostrar.includes(atributo) ? '' : 'display:none;';
                let valor = this.datos[i][atributo];
                
                if (this.estructura.columnas_modificadas_tabla && 
                    this.estructura.columnas_modificadas_tabla.includes(atributo)) {
                    // Usar change_value_IU del validador para modificar el valor
                    let valorcolumna = valor;
                    if (window.validar && typeof window.validar.change_value_IU === 'function') {
                        valorcolumna = window.validar.change_value_IU(atributo, valor);
                    }
                    textolineadatos += `<td class="tabla-td-${atributo}" style="${display}">${valorcolumna}</td>`;
                } else {
                    // Sanitizar valor para prevenir XSS
                    let san = (obj) => {
                        let value = obj?.toString() || '';
                        return value.replace(/[&<>"'`]/g, match => ({
                            '&': '&amp;',
                            '<': '&lt;',
                            '>': '&gt;',
                            '"': '&quot;',
                            "'": '&#039;',
                            '`': '&#x60;'
                        })[match]);
                    };
                    let valorE = san(valor);
                    textolineadatos += `<td class="tabla-td-${atributo}" style="${display}">${valorE}</td>`;
                }
            }
            
            // Agregar botones de acción
            let acciones = '';
            try {
                acciones += this.crearboton(this.entidad, 'EDIT', JSON.stringify(this.datos[i]));
                acciones += this.crearboton(this.entidad, 'DELETE', JSON.stringify(this.datos[i]));
                acciones += this.crearboton(this.entidad, 'SHOWCURRENT', JSON.stringify(this.datos[i]));
            } catch (error) {
                console.error('Error al crear botones de acción:', error);
            }
            
            textolineadatos += '<td class="acciones">' + acciones + '</td>';
            textolineadatos += '</tr>';
        }
        
        document.getElementById('muestradatostabla').innerHTML = textolineadatos;

        if (typeof setLang === 'function') {
            setLang();
        }
    }    crearboton(entidad, accion, parametros) {
        let columna = document.createElement('td');
        let boton = document.createElement('button');
        boton.className = 'boton';
        let opcion = document.createElement('img');
        opcion.src = "./iconos/" + accion + '.png';
        opcion.alt = accion;
        opcion.className = 'img--boton';
        let textoonclick = `validar.createForm('${entidad}', '${accion}', ${parametros});`
        boton.setAttribute('onclick', textoonclick);
        boton.appendChild(opcion);
        columna.appendChild(boton);
        return columna.outerHTML;
    }createForm(entidad, accion, parametros = null) {
        // Store current action globally
        window.accionActual = accion;
        
        // Get the entity structure data
        let estructura = eval('estructura_' + entidad);
        
        // Create a form based on the entity structure
        let form = document.getElementById('IU_form');
        if (!form) {
            form = document.createElement('form');
            form.id = 'IU_form';
            form.name = 'IU_form';
            form.enctype = 'multipart/form-data';
            document.getElementById('div_IU_form').appendChild(form);
        }
        
        // Set title based on action
        let title = document.getElementById('class_contenido_titulo_form');
        title.className = 'text_contenido_titulo_form_' + entidad + '_' + accion;
        
        // Check if the entity has a manual form creation method
        if (typeof window['validar']['cargar_formulario_html'] === 'function') {
            validar.cargar_formulario_html();
        } else {
            // Fallback to dynamic form creation
            this.cargar_formulario_dinamico(entidad, estructura);
        }

        // Display the form first to ensure elements are in DOM
        document.getElementById("div_IU_form").style.display = 'block';

        // Set necessary attributes based on action
        form.onsubmit = (e) => {
            e.preventDefault();
            
            switch(accion) {
                case 'ADD':
                    if (validar.comprobar_submit()) {
                        validar.ADD();
                    }
                    break;
                case 'EDIT':
                    if (validar.comprobar_submit()) {
                        validar.EDIT();
                    }
                    break;
                case 'SEARCH':
                    if (validar.comprobar_submit_SEARCH()) {
                        validar.SEARCH();
                    }
                    break;
                case 'DELETE':
                    validar.DELETE();
                    break;
            }
            return false;
        };
        
        // Add button for the action
        this.colocarboton(accion);
        
        // Set validations with a small delay to ensure elements exist
        setTimeout(() => {
            this.load_validations(accion);
            
            // Fill form with data if provided
            if (parametros) {
                this.load_data(parametros);
            }
            
            // Handle readonly and hidden fields based on action
            this.ponernoactivoform(entidad, estructura, accion);
            
            // Set language translations
            if (typeof setLang === 'function') {
                setLang();
            }
        }, 0);
    }
      cargar_formulario_dinamico(entidad, estructura) {
        let formulario = '';
        const accion = window.accionActual;
          // Crear campos del formulario basados en la estructura
        for (let nombreCampo in estructura.attributes) {
            const campo = estructura.attributes[nombreCampo];
            campo.nombre = nombreCampo;

            // Excluir campos según la acción
            if (accion === 'ADD') {
                if ((campo.is_pk && campo.is_autoincrement) || nombreCampo.startsWith('file_')) {
                    continue;
                }
            } else if (accion === 'EDIT') {
                if (nombreCampo.startsWith('nuevo_file_')) {
                    continue;
                }
            } else if (accion === 'SEARCH' || accion === 'DELETE' || accion === 'SHOWCURRENT') {
                if (nombreCampo.startsWith('nuevo_file_')) {
                    continue;
                }
            }

            // Create label first
            formulario += `<div class="campo-container">`;
            formulario += `<label class="label_${campo.nombre}" id="label_${campo.nombre}" for="${campo.nombre}">${Textos[campo.nombre] || campo.nombre}:</label>`;
              // Manejar campos de archivo
            if (campo.html.type === 'file' || campo.html.tag === 'file') {
                formulario += `<div class="file-container" id="${campo.nombre}_container">`;
                
                // Para archivos existentes en EDIT
                if (accion === 'EDIT') {
                    formulario += `<div id="${campo.nombre}_link"></div>`;
                    // Solo mostrar input para nuevo_file en EDIT
                    if (nombreCampo.startsWith('nuevo_file_')) {
                        formulario += `<input type="file" name="${campo.nombre}" id="${campo.nombre}" `;
                        formulario += `accept=".pdf,.doc,.docx">`;
                    }
                } else {
                    formulario += `<input type="file" name="${campo.nombre}" id="${campo.nombre}" `;
                    formulario += `accept=".pdf,.doc,.docx">`;
                }
                formulario += `</div>`;
            } else {
                // Crear input basado en el tipo de campo
                switch (campo.html.tag) {
                    case 'input':
                        formulario += `<input type="${campo.html.type || 'text'}" name="${campo.nombre}" id="${campo.nombre}" `;
                        if (campo.validation_rules && campo.validation_rules[accion] && campo.validation_rules[accion].max_size) {
                            formulario += `maxlength="${campo.validation_rules[accion].max_size[0]}" `;
                        }
                        formulario += `>`;
                        break;
                    case 'textarea':
                        formulario += `<textarea name="${campo.nombre}" id="${campo.nombre}" `;
                        if (campo.html.rows) formulario += `rows="${campo.html.rows}" `;
                        if (campo.html.cols) formulario += `cols="${campo.html.cols}" `;
                        if (campo.validation_rules && campo.validation_rules[accion] && campo.validation_rules[accion].max_size) {
                            formulario += `maxlength="${campo.validation_rules[accion].max_size[0]}" `;
                        }
                        formulario += `></textarea>`;
                        break;
                    case 'select':
                        formulario += `<select name="${campo.nombre}" id="${campo.nombre}">`;
                        if (campo.html.options) {
                            for (let i = 0; i < campo.html.options.length; i++) {
                                let opcion = campo.html.options[i];
                                let textoOpcion = i === 0 ? (Textos['select_' + campo.nombre] || 'Seleccione...') : (Textos[opcion] || opcion);
                                formulario += `<option value="${opcion}">${textoOpcion}</option>`;
                            }
                        }
                        formulario += '</select>';
                        break;
                    case 'date':
                        formulario += `<input type="date" name="${campo.nombre}" id="${campo.nombre}">`;
                        break;
                }
            }
            
            formulario += `<span id="div_error_${campo.nombre}" class="error-message"></span>`;
            formulario += `</div>`;
        }
        
        document.getElementById("IU_form").innerHTML = formulario;
    }      load_data(parametros) {
        if (!parametros) return;
    
    // Obtener campos del formulario
        let campos = document.forms['IU_form'].elements;
        
        // Rellenar campos del formulario con datos
        for (let i = 0; i < campos.length; i++) {
            const campo = campos[i];
            const elemento = document.getElementById(campo.id);
            
            if (!elemento) continue;
            
            // Obtener el valor, posiblemente transformado
            let valor = parametros[campo.id];
            if (window.accionActual === 'SHOWCURRENT' && typeof window.validar?.change_value_IU === 'function') {
                valor = window.validar.change_value_IU(campo.id, valor) || valor;
            }

            // Special handling for files
            if (elemento.type === 'file') {
                const linkContainer = document.getElementById(campo.id + '_link');
                if (linkContainer && valor) {
                    // Create link to view current file
                    let link = document.createElement('a');
                    link.href = `http://193.147.87.202/ET2/filesuploaded/files_${campo.id}/${valor}`;
                    link.target = '_blank';
                    link.className = 'file-link';
                          // Añadir icono de archivo
                    let img = document.createElement('img');
                    img.src = './iconos/FILE.png';
                    img.alt = 'Ver archivo';
                    img.className = 'file-icon';
                    
                    link.appendChild(img);
                    link.appendChild(document.createTextNode(valor));
                    
                    linkContainer.innerHTML = '';
                    linkContainer.appendChild(link);
                }
                continue;
            }
              // Para otros tipos de campos
            if (window.accionActual === 'SHOWCURRENT') {
                // Para elementos select, encontrar y seleccionar la opción correcta
                if (elemento.tagName === 'SELECT') {
                    for (let i = 0; i < elemento.options.length; i++) {
                        if (elemento.options[i].value === valor) {
                            elemento.selectedIndex = i;
                            break;
                        }
                    }
                } else {
                    elemento.value = valor || '';
                }
                // Make all fields readonly in SHOWCURRENT
                elemento.setAttribute('readonly', 'readonly');
                if (elemento.tagName === 'SELECT') {
                    elemento.disabled = true;
                }
            } else {
                elemento.value = valor || '';
            }
        }
    }

    load_validations(accion) {
        let campos = document.forms['IU_form'].elements;
        
        for (let i = 0; i < campos.length; i++) {
            if (campos[i].id === 'submit_button') continue;
            
            const campo = document.getElementById(campos[i].id);
            const evento = (campo.tagName === 'INPUT' && campo.type !== 'file') ? 'onblur' : 'onchange';

            campo.setAttribute(evento, 'validar.comprobarCampo("' + campos[i].id + '", "' + accion + '");');
        }
    }    colocarboton(accion) {
        // No colocar botón de submit para SHOWCURRENT
        if (accion === 'SHOWCURRENT') {
            return;
        }

        let divboton = document.createElement('div');
        divboton.id = 'div_boton';
        document.getElementById('IU_form').appendChild(divboton);
        
        let boton = document.createElement('button');
        boton.id = 'submit_button';
        boton.type = 'submit';
        
        let img = document.createElement('img');
        img.src = './iconos/' + accion + '.png';
        img.alt = accion;
        
        boton.appendChild(img);
        document.getElementById('div_boton').appendChild(boton);
    }
      ponernoactivoform(entidad, estructura, accion) {
        // Agregar pequeño retraso para asegurar que los elementos del DOM estén creados
        setTimeout(() => {
            const form = document.getElementById('IU_form');
            if (!form) {
                console.error('Form not found');
                return;
            }

            const campos = form.elements;
            if (!campos || campos.length === 0) {
                console.error('No form elements found');
                return;
            }

            if (accion === 'SHOWCURRENT' || accion === 'DELETE') {
        // Para showcurrent y delete, hacer todos los campos de solo lectura
                for (let i = 0; i < campos.length; i++) {
                    const campo = document.getElementById(campos[i].id);
                    if (!campo) continue;
                    
                    if (campo.type === 'file') {
                        campo.style.display = 'none';
                        continue;
                    }
                    
                    campo.setAttribute('readonly', true);
                    if (campo.tagName === 'SELECT') {
                        campo.disabled = true;
                    }                }            } else if (accion === 'EDIT') {
                // Para edit, hacer los campos PK de solo lectura pero visibles
                for (let attr in estructura.attributes) {
                    if (estructura.attributes[attr].is_pk) {
                        const campo = document.getElementById(attr);
                        if (campo) {
                            campo.setAttribute('readonly', true);
                            campo.classList.add('readonly-field');
                        }                    }
                }            } else if (accion === 'ADD') {
                // Para add, solo manejar las claves primarias autoincrement
                for (let attr in estructura.attributes) {
                    const campo = document.getElementById(attr);
                    if (!campo) continue;
                    
                    if (estructura.attributes[attr].is_pk && estructura.attributes[attr].is_autoincrement) {
                        campo.setAttribute('readonly', true);
                        campo.style.display = 'none';
                        // Also hide the label
                        const label = document.getElementById('label_' + attr);
                        if (label) {
                            label.style.display = 'none';
                        }
                    } else if (estructura.attributes[attr].is_pk) {
                        // Primary keys that are not autoincrement should be editable in ADD
                        campo.removeAttribute('readonly');
                        campo.style.display = '';
                        campo.classList.remove('readonly-field');
                    }
                }
            }
        }, 0);
    }

    cerrar_test() {        // Obtener elementos requeridos
        const divIUTest = document.getElementById('div_IU_test');
        const modal = document.getElementById('test-modal');
        
        // Ocultar div de test y modal si existen
        if (divIUTest) {
            divIUTest.style.display = 'none';
        }
        if (modal) {
            modal.style.display = 'none';
        }

        // Limpiar contenido del test
        const testElements = [
            'resultadodef',
            'tablaresultadostest',
            'resultadoprueba',
            'tablaresultadosprueba',
            'resultadotest',
            'salidaresultadosprueba'
        ];
        
        testElements.forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                element.innerHTML = '';
            }
        });
    }

    cerrar_formulario() {
        // Get the form elements
        const form = document.getElementById("IU_form");
        if (form) {
            form.innerHTML = '';
            form.onsubmit = null;
            form.action = '';
        }

        // Hide the form container
        const formContainer = document.getElementById("div_IU_form");
        if (formContainer) {
            formContainer.style.display = 'none';
        }

        // Remove current action
        window.accionActual = null;
    }
}