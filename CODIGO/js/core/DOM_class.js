class DOM_class {

    constructor() {
        // Create validation instance if it doesn't exist
        if (!window.validar) {
            window.validar = new Validaciones_Atomicas();
        }
    }

    mostrar_error_campo(id, codigoerror) {
        document.getElementById('div_error_' + id).style.display = 'block';
        document.getElementById('div_error_' + id).innerHTML = Textos[codigoerror];
        document.getElementById('div_error_' + id).style.color = 'red';
        document.getElementById(id).style.borderColor = 'red';
    }

    mostrar_exito_campo(id) {
        let codigoexito = id + '_OK';
        document.getElementById('div_error_' + id).style.display = 'block';
        document.getElementById('div_error_' + id).innerHTML = Textos[codigoexito];
        document.getElementById('div_error_' + id).style.color = 'green';
        document.getElementById(id).style.borderColor = 'green';
    }

    modificarcolumnasamostrar(atributo) {
        let nuevascolumnas = Array();
        if (this.columnasamostrar.includes(atributo)) {
            // Borrar ese atributo
            for (let i = 0; i < this.columnasamostrar.length; i++) {
                if (this.columnasamostrar[i] == atributo) {}
                else {
                    nuevascolumnas.push(this.columnasamostrar[i]);
                }
            }
            this.columnasamostrar = nuevascolumnas;
        }
        else {
            // Añadir
            this.columnasamostrar.push(atributo);
        }

        this.crearTablaDatos();
    }

    mostrarocultarcolumnas() {
        for (let columna of this.atributos) {
            if (this.columnasamostrar.includes(columna)) {}
            else {
                document.querySelector("th[class='" + columna + "']").style.display = 'none';
                let arraytds = document.querySelectorAll("td[class='tabla-td-" + columna + "']");
                for (let i = 0; i < arraytds.length; i++) {
                    arraytds[i].style.display = 'none';
                }
            }
        }
    }

    construirSelect() {
        document.getElementById("seleccioncolumnas").innerHTML = '';
        
        let optionselect = '';
        for (let atributo of this.atributos) {
            optionselect = document.createElement('option');
            optionselect.className = atributo;
            optionselect.innerHTML = atributo;
            optionselect.setAttribute("onclick", "validar.modificarcolumnasamostrar('" + atributo + "');");
            if (this.columnasamostrar.includes(atributo)) {
                optionselect.selected = true;
            }
            document.getElementById("seleccioncolumnas").append(optionselect);
        }
        setLang();
    }

    hacertabla() {
        // Titulos
        document.getElementById("text_title_page").className = "text_titulo_page_" + this.entidad;
        document.getElementById('title_page').style.display = 'block';

        this.atributos = Object.keys(this.datos[0]);

        var textolineatitulos = '<tr>';
        
        for (let atributo of this.atributos) {
            textolineatitulos += '<th class="' + atributo + '">' + atributo + '</th>';
        }
        
        textolineatitulos += '<th class="acciones">Acciones</th>';
        textolineatitulos += '</tr>';
        
        document.getElementById('titulostablacabecera').innerHTML = textolineatitulos;
        
        // Datos
        var textolineadatos = '';
        
        for (let i = 0; i < this.datos.length; i++) {
            textolineadatos += '<tr>';
            
            for (let clave of this.atributos) {
                if (this.datosespecialestabla.includes(clave)) {
                    let valorcolumna = this.change_value_IU(clave, this.datos[i][clave]);
                    textolineadatos += '<td class="tabla-td-' + clave + '">' + valorcolumna + '</td>';
                }
                else {
                    // Sanitize the value to prevent XSS
                    let san = (obj) => {
                        let value = obj?.toString() || '';
                        let sanitizedObj = value.replace(/[&<>"'`]/g, function(match) {
                            switch (match) {
                                case '&': return '&amp;';
                                case '<': return '&lt;';
                                case '>': return '&gt;';
                                case '"': return '&quot;';
                                case "'": return '&#039;';
                                case '`': return '&#x60;';
                            }
                        });
                        return sanitizedObj;
                    }
                    let valorE = san(this.datos[i][clave]);
                    textolineadatos += '<td class="tabla-td-' + clave + '">' + valorE + '</td>';
                }
            }
            
            // Crear los td para cada boton de llamada a funcion de formulario de accion (EDIT, DELETE O SHOWCURRENT)
            let lineaedit = this.crearboton(this.entidad, 'EDIT', JSON.stringify(this.datos[i]));
            let lineadelete = this.crearboton(this.entidad, 'DELETE', JSON.stringify(this.datos[i]));
            let lineashowcurrent = this.crearboton(this.entidad, 'SHOWCURRENT', JSON.stringify(this.datos[i]));
            
            textolineadatos += lineaedit + lineadelete + lineashowcurrent;
            
            textolineadatos += '</tr>';
        }
        
        let cuerpo = document.getElementById('muestradatostabla');
        cuerpo.innerHTML = textolineadatos;
        
        setLang();
    }

    crearboton(entidad, accion, parametros) {
        let columna = document.createElement('td');
        let opcion = document.createElement('img');
        opcion.src = "./iconos/" + accion + '.png';
        let textoonclick = "validar.createForm_" + accion + "(" + parametros + ");"
        opcion.setAttribute('onclick', textoonclick);
        columna.appendChild(opcion);
        return columna.outerHTML;
    }
      createForm(entidad, accion, parametros = null) {
        // Get the entity structure data
        let estructura = eval('estructura_' + entidad);
        
        // Create a form based on the entity structure
        let form = document.getElementById('IU_form');
        if (!form) {
            form = document.createElement('form');
            form.id = 'IU_form';
            form.name = 'IU_form';
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
        }        // Set necessary attributes based on action
        if (accion === 'ADD' || accion === 'EDIT' || accion === 'SEARCH') {
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
                }
                return false;
            };
            
            // Add button for the action
            this.colocarboton(accion);
            
            // Set validations
            this.load_validations(accion);
        }
          // Fill form with data if provided
        if (parametros) {
            this.load_data(parametros);
        }
        
        // Handle readonly and hidden fields based on action
        if (accion === 'ADD' || accion === 'EDIT' || accion === 'DELETE' || accion === 'SHOWCURRENT') {
            this.ponernoactivoform(entidad, estructura, accion);
        }
        
        // Display the form
        document.getElementById("div_IU_form").style.display = 'block';
        
        // Set language translations
        setLang();
    }
      cargar_formulario_dinamico(entidad, estructura) {
        let formulario = '';
        
        // Create form fields based on structure
        for (let nombreCampo in estructura.attributes) {
            const campo = estructura.attributes[nombreCampo];
            campo.nombre = nombreCampo; // Add nombre to campo object
              if (campo.html.tag === 'file') {
                // Handle file inputs with rename feature
                const fileId = campo.html.rename_to || campo.nombre;
                formulario += `<label class="label_${campo.nombre}" id="label_${campo.nombre}" for="${fileId}">${Textos[campo.nombre]}:</label>`;                formulario += `<input type="file" name="${fileId}" id="${fileId}" `;
                formulario += `accept=".pdf,.doc,.docx">`;
                formulario += `<span id="div_error_${campo.nombre}"></span><br>`;
                continue;
            }
            
            // Create label for non-file inputs
            formulario += `<label class="label_${campo.nombre}" id="label_${campo.nombre}" for="${campo.nombre}">${Textos[campo.nombre]}:</label>`;
            
            // Create input based on field type
            switch (campo.html.tag) {
                case 'input':
                    formulario += `<input type="${campo.html.type || 'text'}" name="${campo.nombre}" id="${campo.nombre}" `;
                    if (campo.validation_rules && campo.validation_rules.ADD && campo.validation_rules.ADD.max_size) {
                        formulario += `maxlength="${campo.validation_rules.ADD.max_size[0]}" `;
                    }
                formulario += `>`;
                    break;
                case 'textarea':
                    formulario += `<textarea name="${campo.nombre}" id="${campo.nombre}" `;
                    if (campo.html.rows) formulario += `rows="${campo.html.rows}" `;
                    if (campo.html.cols) formulario += `cols="${campo.html.cols}" `;
                    if (campo.validation_rules && campo.validation_rules.ADD && campo.validation_rules.ADD.max_size) {
                        formulario += `maxlength="${campo.validation_rules.ADD.max_size[0]}" `;                    }
                    formulario += `></textarea>`;
                    break;
                case 'select':                    formulario += `<select name="${campo.nombre}" id="${campo.nombre}">`;
                    if (campo.html.options) {
                        for (let i = 0; i < campo.html.options.length; i++) {
                            let opcion = campo.html.options[i];
                            let textoOpcion = i === 0 ? Textos['select_' + campo.nombre] : Textos[opcion];
                            formulario += `<option value="${opcion}">${textoOpcion}</option>`;
                        }
                    }
                    formulario += '</select>';
                    break;
                case 'date':                    formulario += `<input type="date" name="${campo.nombre}" id="${campo.nombre}">`;
                    break;
                case 'enum':                    formulario += `<select name="${campo.nombre}" id="${campo.nombre}">`;
                    formulario += `<option value="">${Textos['select_' + campo.nombre]}</option>`;
                    if (campo.html.valores) {
                        for (let valor of campo.html.valores) {
                            formulario += `<option value="${valor}">${Textos[valor]}</option>`;
                        }
                    }
                    formulario += '</select>';
                    break;
            }
            
            // Add error div for non-file inputs
            formulario += `<span id="div_error_${campo.nombre}"></span><br>`;
        }
        
        document.getElementById("IU_form").innerHTML = formulario;
    }
    
    load_data(parametros) {
        // Get form fields
        let campos = document.forms['IU_form'].elements;
        
        // Fill form fields with data
        for (let i = 0; i < campos.length; i++) {
            if (document.getElementById(campos[i].id).type !== 'file') {
                document.getElementById(campos[i].id).value = parametros[campos[i].id] || '';
            }
        }
    }      load_validations(accion) {
        let campos = document.forms['IU_form'].elements;
        
        for (let i = 0; i < campos.length; i++) {
            if (campos[i].id === 'submit_button') continue;
            
            const campo = document.getElementById(campos[i].id);
            const evento = (campo.tagName === 'INPUT' && campo.type !== 'file') ? 'onblur' : 'onchange';

            campo.setAttribute(evento, 'validar.comprobarCampo("' + campos[i].id + '", "' + accion + '");');
        }
    }    colocarboton(accion) {
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
        let campos = document.forms['IU_form'].elements;
        
        if (accion === 'SHOWCURRENT' || accion === 'DELETE') {
            // For showcurrent and delete, make all fields readonly
            for (let i = 0; i < campos.length; i++) {
                document.getElementById(campos[i].id).setAttribute('readonly', true);
            }
        } else if (accion === 'EDIT') {
            // For edit, make PK fields readonly
            for (let attr in estructura.attributes) {
                if (estructura.attributes[attr].is_pk) {
                    document.getElementById(attr).setAttribute('readonly', true);
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
    }

    cerrar_test() {
        document.getElementById('div_IU_test').style.display = 'none';
        document.getElementById('resultadodef').innerHTML = '';
        document.getElementById('tablaresultadostest').innerHTML = '';
        document.getElementById('resultadoprueba').innerHTML = '';
        document.getElementById('tablaresultadosprueba').innerHTML = '';
        document.getElementById('resultadotest').innerHTML = '';
        document.getElementById('salidaresultadosprueba').innerHTML = '';
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
}