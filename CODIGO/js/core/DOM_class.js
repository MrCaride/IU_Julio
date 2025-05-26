class DOM_class {

    constructor() {
        // Create validation instance if it doesn't exist
        if (!window.validar) {
            window.validar = new Validaciones_Atomicas();
        }
    }

    mostrar_error_campo(id, codigoerror) {
        try {
            // Find the elements
            let errorDiv = document.getElementById('div_error_' + id);
            let campo = document.getElementById(id);

            // Create error div if it doesn't exist
            if (!errorDiv && campo) {
                errorDiv = document.createElement('span');
                errorDiv.id = 'div_error_' + id;
                errorDiv.className = 'error-message';
                // Insert after the field
                campo.parentNode.insertBefore(errorDiv, campo.nextSibling);
            }

            // Update the error message
            if (errorDiv) {
                errorDiv.style.display = 'block';
                errorDiv.innerHTML = Textos[codigoerror] || codigoerror;
                errorDiv.style.color = 'red';
            }
            
            // Update field styling
            if (campo) {
                campo.style.borderColor = 'red';
                campo.classList.add('errorcampo');
            } 
        } catch (error) {
            console.warn(`Error displaying error for field ${id}:`, error);
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
            console.warn(`Error displaying success for field ${id}:`, error);
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
        // Titulos
        let titleElement = document.getElementById("text_title_page");
        let titlePage = document.getElementById('title_page');
        if (titleElement && titlePage) {
            titleElement.className = "text_titulo_page_" + this.entidad;
            titlePage.style.display = 'block';
        }

        if (!this.datos || this.datos.length === 0) {
            document.getElementById("id_tabla_datos").style.display = 'block';
            document.getElementById("titulostablacabecera").innerHTML = "";
            document.getElementById("muestradatostabla").innerHTML = "";
            return;
        }

        // Initialize attributes and columns if not already set
        if (!this.atributos || this.atributos.length === 0) {
            this.atributos = this.estructura.attributes_list;
        }
        if (!this.columnasamostrar || this.columnasamostrar.length === 0) {
            this.columnasamostrar = this.estructura.columnas_visibles_tabla;
        }
        if (!this.datosespecialestabla) {
            this.datosespecialestabla = this.estructura.columnas_modificadas_tabla || [];
        }

        // Initialize column selector
        this.construirSelect();

        // Create table header
        let textolineatitulos = '<tr>';
        for (let atributo of this.atributos) {
            let display = this.columnasamostrar.includes(atributo) ? '' : 'display:none;';
            textolineatitulos += `<th class="${atributo}" style="${display}">${Textos[atributo] || atributo}</th>`;
        }
        textolineatitulos += '<th class="acciones">' + (Textos['acciones'] || 'Acciones') + '</th>';
        textolineatitulos += '</tr>';
        
        document.getElementById('titulostablacabecera').innerHTML = textolineatitulos;
        
        // Create table rows
        let textolineadatos = '';
        for (let i = 0; i < this.datos.length; i++) {
            textolineadatos += '<tr>';
            
            for (let atributo of this.atributos) {
                let display = this.columnasamostrar.includes(atributo) ? '' : 'display:none;';
                let valor = this.datos[i][atributo];                if (this.estructura.columnas_modificadas_tabla && this.estructura.columnas_modificadas_tabla.includes(atributo)) {
                    // Usamos change_value_IU del validar (que es la instancia de la entidad)
                    let valorcolumna = valor;
                    if (window.validar && typeof window.validar.change_value_IU === 'function') {
                        valorcolumna = window.validar.change_value_IU(atributo, valor);
                    }
                    textolineadatos += `<td class="tabla-td-${atributo}" style="${display}">${valorcolumna}</td>`;
                } else {
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
            
            // Add action buttons
            let acciones = '';
            try {
                acciones += this.crearboton(this.entidad, 'EDIT', JSON.stringify(this.datos[i]));
                acciones += this.crearboton(this.entidad, 'DELETE', JSON.stringify(this.datos[i]));
                acciones += this.crearboton(this.entidad, 'SHOWCURRENT', JSON.stringify(this.datos[i]));
            } catch (error) {
                console.error('Error creating action buttons:', error);
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
            this.cargar_formulario_dinamico(entidad, estructura);
        }

        // Display the form first to ensure elements are in DOM
        document.getElementById("div_IU_form").style.display = 'block';

        // Set necessary attributes based on action
        if (accion === 'ADD' || accion === 'EDIT' || accion === 'SEARCH' || accion === 'DELETE') {
            form.onsubmit = (e) => {
                e.preventDefault();
                if (accion === 'ADD') {
                    if (validar.validaciones.comprobar_submit()) {
                        validar.ADD();
                    }
                } else if (accion === 'EDIT') {
                    if (validar.validaciones.comprobar_submit()) {
                        validar.EDIT();
                    }
                } else if (accion === 'SEARCH') {
                    if (validar.validaciones.comprobar_submit_SEARCH()) {
                        validar.SEARCH();
                    }
                } else if (accion === 'DELETE') {
                    validar.DELETE();
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
                if (accion === 'ADD' || accion === 'EDIT' || accion === 'DELETE' || accion === 'SHOWCURRENT') {
                    this.ponernoactivoform(entidad, estructura, accion);
                }
                
                // Set language translations
                if (typeof setLang === 'function') {
                    setLang();
                }
            }, 0);
        }
    }
      cargar_formulario_dinamico(entidad, estructura) {
        let formulario = '';
        const accion = window.accionActual;
        
        // Create form fields based on structure
        for (let nombreCampo in estructura.attributes) {
            const campo = estructura.attributes[nombreCampo];
            campo.nombre = nombreCampo;

            // Excluir campos según la acción
            if (accion === 'ADD') {
                if (campo.is_autoincrement || nombreCampo.startsWith('file_')) {
                    continue;
                }
            } else if (accion === 'EDIT') {
                if (campo.is_pk || nombreCampo.startsWith('file_')) {
                    continue;
                }
            } else if (accion === 'SEARCH') {
                if (nombreCampo.startsWith('nuevo_file_')) {
                    continue;
                }
            } else if (accion === 'DELETE' || accion === 'SHOWCURRENT') {
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
                if (accion === 'EDIT') {
                    formulario += `<div id="${campo.nombre}_link"></div>`;
                }
                formulario += `<input type="file" name="${campo.nombre}" id="${campo.nombre}" `;
                formulario += `accept=".pdf,.doc,.docx">`;
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
        // Get form fields
        let campos = document.forms['IU_form'].elements;
        
        // Fill form fields with data
        for (let i = 0; i < campos.length; i++) {
            const campo = campos[i];
            const elemento = document.getElementById(campo.id);
            
            if (!elemento) continue;

            // Manejo especial para archivos
            if (elemento.type === 'file') {
                const linkContainer = document.getElementById(campo.id + '_link');
                if (linkContainer && parametros[campo.id]) {
                    // Crear enlace para ver el archivo actual
                    let link = document.createElement('a');
                    link.href = `http://193.147.87.202/ET2/filesuploaded/files_${campo.id}/${parametros[campo.id]}`;
                    link.target = '_blank';
                    link.className = 'file-link';
                    
                    // Agregar icono de archivo
                    let img = document.createElement('img');
                    img.src = './iconos/FILE.png';
                    img.alt = 'Ver archivo';
                    img.className = 'file-icon';
                    
                    link.appendChild(img);
                    link.appendChild(document.createTextNode(parametros[campo.id]));
                    
                    linkContainer.innerHTML = '';
                    linkContainer.appendChild(link);
                }
                continue;
            }
            
            // Para otros tipos de campos
            if (window.accionActual === 'SHOWCURRENT') {
                const valorTransformado = this.change_value_IU ? 
                    this.change_value_IU(campo.id, parametros[campo.id]) : 
                    parametros[campo.id];
                    
                if (elemento.tagName === 'DIV') {
                    elemento.innerHTML = valorTransformado || '';
                } else {
                    elemento.value = parametros[campo.id] || '';
                }
            } else {
                elemento.value = parametros[campo.id] || '';
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
    }

    colocarboton(accion) {
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
        // Add small delay to ensure DOM elements are created
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
                // For showcurrent and delete, make all fields readonly
                for (let i = 0; i < campos.length; i++) {
                    const field = document.getElementById(campos[i].id);
                    if (field) {
                        field.setAttribute('readonly', true);
                    }
                }
            } else if (accion === 'EDIT') {
                // For edit, make PK fields readonly
                for (let attr in estructura.attributes) {
                    if (estructura.attributes[attr].is_pk) {
                        const field = document.getElementById(attr);
                        if (field) {
                            field.setAttribute('readonly', true);
                        }
                    }
                }
            } else if (accion === 'ADD') {
                // For add, make autoincrement fields readonly and hidden
                for (let attr in estructura.attributes) {
                    if (estructura.attributes[attr].is_autoincrement) {
                        const field = document.getElementById(attr);
                        if (field) {
                            field.setAttribute('readonly', true);
                            field.style.display = 'none';
                            // Also hide the label
                            const label = document.getElementById('label_' + attr);
                            if (label) {
                                label.style.display = 'none';
                            }
                        }
                    }
                }
            }
        }, 0);
    }
    
    colocarvalidaciones(accion) {
        let evento;
        // Get form fields
        let campos = document.forms['IU_form'].elements;
        
        // Iterate through all fields
        for (let i = 0; i < campos.length; i++) {
            if ((document.getElementById(campos[i].id).tagName === 'INPUT') && 
                (document.getElementById(campos[i].id).type !== 'file')) {
                evento = 'onblur';
            } else {
                evento = 'onchange';
            }
            
            if (accion === 'SEARCH') {
                document.getElementById(campos[i].id).setAttribute(evento, 'validar.comprobar_' + campos[i].id + '_' + accion + '();');
            } else {
                document.getElementById(campos[i].id).setAttribute(evento, 'validar.comprobar_' + campos[i].id + '();');
            }
        }
    }
    
    cerrar_formulario() {
        document.getElementById("IU_form").innerHTML = '';
        document.getElementById("IU_form").setAttribute('onsubmit', "");
        document.getElementById("IU_form").setAttribute('action', "");
        document.getElementById("div_IU_form").style.display = 'none';
    }    cerrar_test() {
        const elements = [
            'div_IU_test',
            'resultadodef',
            'tablaresultadostest',
            'resultadoprueba',
            'tablaresultadosprueba',
            'resultadotest',
            'salidaresultadosprueba'
        ];
        
        elements.forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                if (id === 'div_IU_test') {
                    element.style.display = 'none';
                } else {
                    element.innerHTML = '';
                }
            }
        });
    }

    cerrar_tabla() {
        document.getElementById("titulostablacabecera").innerHTML = '';
        document.getElementById("muestradatostabla").innerHTML = '';
        document.getElementById("id_tabla_datos").style.display = 'none';
        document.getElementById("title_page").style.display = 'none';

        this.ocultar_boton_test();
        this.cerrar_test();
    }

    ocultar_boton_test() {
        document.getElementById('boton_test').style.display = 'none';
    }

    mostrar_boton_test() {
        document.getElementById('boton_test').style.display = 'inline';
    }

    abrirModalError(errorMsg) {
        document.getElementById('modal-error-message').textContent = Textos[errorMsg] || errorMsg;
        document.getElementById('error-modal').style.display = 'block';
    }

    cerrarModalError() {
        document.getElementById('error-modal').style.display = 'none';
    }

    crearTablaDatos() {
        if (!this.datos || !this.atributos) {
            console.error('No data or attributes available');
            return;
        }

        document.getElementById('id_tabla_datos').style.display = 'block';
        
        // Create header
        let textolineatitulos = '<tr>';
        for (let atributo of this.atributos) {
            let display = this.columnasamostrar.includes(atributo) ? '' : 'display:none;';
            textolineatitulos += `<th class="${atributo}" style="${display}">${Textos[atributo] || atributo}</th>`;
        }
        textolineatitulos += '<th class="acciones">' + (Textos['acciones'] || 'Acciones') + '</th>';
        textolineatitulos += '</tr>';
        
        document.getElementById('titulostablacabecera').innerHTML = textolineatitulos;
        
        // Create data rows
        let textolineadatos = '';
        for (let i = 0; i < this.datos.length; i++) {
            textolineadatos += '<tr>';
            
            for (let atributo of this.atributos) {
                let display = this.columnasamostrar.includes(atributo) ? '' : 'display:none;';
                
                if (this.datosespecialestabla && this.datosespecialestabla.includes(atributo)) {
                    let valorcolumna = this.change_value_IU(atributo, this.datos[i][atributo]);
                    textolineadatos += `<td class="tabla-td-${atributo}" style="${display}">${valorcolumna}</td>`;
                } else {
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
                    let valorE = san(this.datos[i][atributo]);
                    textolineadatos += `<td class="tabla-td-${atributo}" style="${display}">${valorE}</td>`;
                }
            }
            
            // Add action buttons
            let acciones = '';
            try {
                acciones += this.crearboton(this.entidad, 'EDIT', JSON.stringify(this.datos[i]));
                acciones += this.crearboton(this.entidad, 'DELETE', JSON.stringify(this.datos[i]));
                acciones += this.crearboton(this.entidad, 'SHOWCURRENT', JSON.stringify(this.datos[i]));
            } catch (error) {
                console.error('Error creating action buttons:', error);
            }
            
            textolineadatos += '<td class="acciones">' + acciones + '</td>';
            textolineadatos += '</tr>';
        }
        
        document.getElementById('muestradatostabla').innerHTML = textolineadatos;

        if (typeof setLang === 'function') {
            setLang();
        }
    }
}