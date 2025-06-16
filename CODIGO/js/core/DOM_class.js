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
    }    
    hacertabla() {
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
            this.columnasamostrar = this.estructura.columnas_visibles_tabla;        }        // Los campos especiales se obtienen de la estructura
        // No necesitamos datosespecialestabla en la clase

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
                if (this.estructura.columnas_modificadas_tabla && this.estructura.columnas_modificadas_tabla.includes(atributo)) {
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
    }    
    crearboton(entidad, accion, parametros) {
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
    }    createForm(entidad, accion, parametros = null) {        
        window.accionActual = accion;
        
        // Obtener los datos de estructura de la entidad
        let estructura = eval('estructura_' + entidad);
        
        // Crear un formulario basado en la estructura de la entidad
        let form = document.getElementById('IU_form');
        if (!form) {
            form = document.createElement('form');
            form.id = 'IU_form';
            form.name = 'IU_form';
            form.enctype = 'multipart/form-data';
            document.getElementById('div_IU_form').appendChild(form);
        }        
        // Establecer título basado en la acción
        let title = document.getElementById('class_contenido_titulo_form');
        title.className = 'text_contenido_titulo_form_' + entidad + '_' + accion;
        
        // Verificar si la entidad tiene un método de creación manual de formulario
        if (typeof window['validar']['cargar_formulario_html'] === 'function') {
            validar.cargar_formulario_html();        } else {
            // Recurrir a la creación dinámica de formulario
            this.cargar_formulario_dinamico(entidad, estructura);
        }

        // Mostrar el formulario primero para asegurar que los elementos estén en el DOM
        document.getElementById("div_IU_form").style.display = 'block';

        // Establecer atributos necesarios basados en la acción
        form.onsubmit = (e) => {
            e.preventDefault();
              switch(accion) {
                case 'ADD':
                    if (validar.submit_test()) {
                        validar.ADD();
                    }
                    break;
                case 'EDIT':
                    if (validar.submit_test()) {
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
            return false;        };
        
        // Agregar botón para la acción
        this.colocarboton(accion);
        
        // Establecer validaciones con un pequeño retraso para asegurar que los elementos existan
        setTimeout(() => {
            this.load_validations(accion);
            
            // Rellenar formulario con datos si se proporcionan
            if (parametros) {
                this.load_data(parametros);
            }
            
            // Manejar campos de solo lectura y ocultos basados en la acción
            this.ponernoactivoform(entidad, estructura, accion);
            
            // Establecer traducciones de idioma
            if (typeof setLang === 'function') {
                setLang();
            }
        }, 0);
    }
      
    cargar_formulario_dinamico(entidad, estructura) {
        let formulario = '';
        const accion = window.accionActual;
        
        // Si es una operación que requiere ID, añadir campos ocultos para las PKs
        if (accion === 'EDIT' || accion === 'DELETE') {
            for (let nombreCampo in estructura.attributes) {
                const campo = estructura.attributes[nombreCampo];
                if (campo.is_pk) {
                    formulario += `<input type="hidden" id="${nombreCampo}" name="${nombreCampo}">`;
                }
            }
        }        // Crear campos del formulario basados en la estructura
        for (let nombreCampo in estructura.attributes) {
            const campo = estructura.attributes[nombreCampo];
            campo.nombre = nombreCampo;

            // Filtrar campos según las reglas de validación y la acción
            const tieneValidationRules = campo.validation_rules && campo.validation_rules[accion];
            const esPKAutoincrement = campo.is_pk && campo.is_autoincrement;
            const esPKNoAutoincrement = campo.is_pk && !campo.is_autoincrement;            // Para SHOWCURRENT: mostrar TODOS los campos (es formulario de solo lectura)
            // Excepto campos de tipo file que no tienen sentido en modo readonly
            // Para DELETE: solo mostrar campos no-PK (las PKs ya están como hidden)
            if (accion === 'SHOWCURRENT') {
                // Excluir campos de subida de archivos (type='file') en modo readonly
                if (campo.html.type === 'file') {
                    continue;
                }
            } else if (accion === 'DELETE') {
                // En DELETE, excluir PKs porque ya están como campos hidden
                if (campo.is_pk) {
                    continue;
                }
            }
            // Para ADD: excluir PKs autoincrement, incluir solo campos con validation_rules para ADD
            else if (accion === 'ADD') {
                if (esPKAutoincrement || !tieneValidationRules) {
                    continue;
                }
            }
            
            else if (accion === 'EDIT' || accion === 'SEARCH') {
                const esCampoEspecial = accion === 'EDIT' && this.estructura.columnas_modificadas_tabla && this.estructura.columnas_modificadas_tabla.includes(campo.nombre) && campo.html.type === 'text';
                if (!tieneValidationRules && !esPKNoAutoincrement && !esCampoEspecial) {
                    continue;
                }
            }            // Crear etiqueta primero
            formulario += `<div class="campo-container">`;
            formulario += `<label class="label_${campo.nombre}" id="label_${campo.nombre}" for="${campo.nombre}">${Textos[campo.nombre] || campo.nombre}:</label>`;            // Manejar campos de archivo
            if (campo.html.type === 'file' || campo.html.tag === 'file') {
                formulario += `<div class="file-container" id="${campo.nombre}_container">`;
                
                // Para archivos existentes: mostrar link en EDIT, SHOWCURRENT y DELETE
                // Solo mostrar input file si es un campo de upload (type === 'file') y no estamos en modo readonly
                if ((accion === 'EDIT' || accion === 'SHOWCURRENT' || accion === 'DELETE') && campo.html.type !== 'file') {
                    formulario += `<div id="${campo.nombre}_link"></div>`;
                    // En EDIT, agregar campo oculto para mantener el valor actual del archivo
                    if (accion === 'EDIT') {
                        formulario += `<input type="hidden" name="${campo.nombre}" id="${campo.nombre}">`;
                    }
                } else if (campo.html.type === 'file' && accion !== 'SHOWCURRENT' && accion !== 'DELETE') {
                    // Para campos de input file (como nuevo_file_project) solo en ADD/EDIT
                    formulario += `<input type="file" name="${campo.nombre}" id="${campo.nombre}" `;
                    formulario += `accept=".pdf,.doc,.docx">`;
                }
                formulario += `</div>`;              } else if (this.estructura.columnas_modificadas_tabla && this.estructura.columnas_modificadas_tabla.includes(campo.nombre) && campo.html.type === 'text' && campo.nombre.includes('file_')) {
                // Manejar campos especiales de archivos que están definidos como text (como archivos existentes)
                formulario += `<div class="file-container" id="${campo.nombre}_container">`;                  if (accion === 'EDIT' || accion === 'SHOWCURRENT' || accion === 'DELETE') {
                    formulario += `<div id="${campo.nombre}_link"></div>`;
                    // En EDIT, agregar campo oculto para mantener el valor actual del archivo
                    if (accion === 'EDIT') {
                        formulario += `<input type="hidden" name="${campo.nombre}" id="${campo.nombre}">`;
                    }
                    // En SHOWCURRENT, agregar campo oculto para archivos existentes
                    if (accion === 'SHOWCURRENT') {
                        formulario += `<input type="text" name="${campo.nombre}" id="${campo.nombre}" style="display:none;">`;
                    }
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
        
        document.getElementById("IU_form").innerHTML = formulario;    }      
        
        load_data(parametros) {
        if (!parametros) return;
        // Obtener campos del formulario
        let campos = document.querySelectorAll('#IU_form input, #IU_form select, #IU_form textarea');
        
        // Rellenar campos del formulario con datos
        for (let i = 0; i < campos.length; i++) {
            const campo = campos[i];
            const elemento = document.getElementById(campo.id);
            
            if (!elemento) continue;            // Obtener el valor, posiblemente transformado
            let valor = parametros[campo.id];
            if (window.accionActual === 'SHOWCURRENT' && typeof window.validar?.change_value_IU === 'function') {
                    valor = window.validar.change_value_IU(campo.id, valor) || valor;

            }
            
            // Para DELETE, también aplicar transformaciones usando change_value_IU (especialmente para fechas)
            if (window.accionActual === 'DELETE' && typeof window.validar?.change_value_IU === 'function') {
                valor = window.validar.change_value_IU(campo.id, valor) || valor;
            }// Para EDIT, aplicar transformaciones específicas usando columnas_modificadas_tabla
            if (window.accionActual === 'EDIT' && typeof window.validar?.change_value_IU === 'function') {
                // Solo para campos marcados como especiales que NO sean archivos
                // Los archivos se procesan más tarde en el div del link
                // Identificamos archivos de forma abstracta: si change_value_IU devuelve HTML, es un archivo
                let esCampoDeArchivo = false;
                if (window.validar.estructura.columnas_modificadas_tabla?.includes(campo.id)) {
                    const valorTransformado = window.validar.change_value_IU(campo.id, valor);
                    esCampoDeArchivo = valorTransformado && 
                                      (valorTransformado.includes('<a') || valorTransformado.includes('<img'));
                }
                
                if (window.validar.estructura.columnas_modificadas_tabla && 
                    window.validar.estructura.columnas_modificadas_tabla.includes(campo.id) && 
                    !esCampoDeArchivo) {
                    valor = window.validar.change_value_IU(campo.id, valor) || valor;
                }
            }if (window.accionActual === 'SHOWCURRENT') {
                // Para elementos select, encontrar y seleccionar la opción correcta
                if (elemento.tagName === 'SELECT') {
                    for (let i = 0; i < elemento.options.length; i++) {
                        if (elemento.options[i].value === valor) {
                            elemento.selectedIndex = i;
                            break;
                        }
                    }                  
                } else if (window.validar && window.validar.estructura.columnas_modificadas_tabla && window.validar.estructura.columnas_modificadas_tabla.includes(campo.id)) {
                    // Para campos especiales en SHOWCURRENT, solo reemplazar con div si contienen HTML (archivos)
                    // Las fechas y otros campos que devuelven texto simple se muestran como inputs readonly
                    if (valor && (valor.includes('<a') || valor.includes('<img'))) {
                        // Es un archivo con HTML, reemplazar el input con un div que muestre HTML
                        const container = elemento.parentElement;
                        if (container) {
                            // Crear un div para mostrar el contenido HTML
                            const displayDiv = document.createElement('div');
                            displayDiv.id = elemento.id + '_display';
                            displayDiv.innerHTML = valor || 'Sin contenido';
                            displayDiv.style.border = '1px solid #ccc';
                            displayDiv.style.padding = '8px';
                            displayDiv.style.backgroundColor = '#f9f9f9';
                            displayDiv.style.borderRadius = '4px';
                            displayDiv.style.minHeight = '20px';
                              // Reemplazar el input con el div
                            container.replaceChild(displayDiv, elemento);
                        }                    } else {
                        // Es una fecha u otro campo especial sin HTML
                        // En SHOWCURRENT: readonly, en otros modos: editable
                        elemento.value = valor || '';
                        if (window.accionActual === 'SHOWCURRENT') {
                            elemento.setAttribute('readonly', 'readonly');
                        }
                    }
                } else {
                    // Para campos normales
                    elemento.value = valor || '';
                    if (window.accionActual === 'SHOWCURRENT') {
                        elemento.setAttribute('readonly', 'readonly');
                    }
                }
                // Para selects, aplicar disabled si aún existe el elemento
                const currentElement = document.getElementById(campo.id);
                if (currentElement && currentElement.tagName === 'SELECT') {
                    currentElement.disabled = true;
                }} else {                // Si es un campo de archivo especial, solo usar el div del link, no el input
                if (window.validar && window.validar.estructura.columnas_modificadas_tabla && window.validar.estructura.columnas_modificadas_tabla.includes(campo.id) && (elemento.type === 'hidden' || elemento.type === 'text')) {
                    const linkDiv = document.getElementById(campo.id + '_link');
                    if (linkDiv && valor && typeof window.validar?.change_value_IU === 'function') {
                        // Solo actualizar el div del link si el valor transformado contiene HTML (archivos)
                        const valorTransformado = window.validar.change_value_IU(campo.id, valor);
                        if (valorTransformado && (valorTransformado.includes('<a') || valorTransformado.includes('<img'))) {
                            linkDiv.innerHTML = valorTransformado;
                            // Para archivos, poner solo el nombre del archivo en el input (sin HTML)
                            elemento.value = valor || '';
                        } else {
                            // Para campos especiales que no son archivos (como fechas), usar el input normal
                            elemento.value = valor || '';
                        }
                    } else {
                        elemento.value = valor || '';
                    }
                } else {
                    // Para campos normales, usar el input
                    elemento.value = valor || '';
                }
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
                console.error('Formulario no encontrado');
                return;
            }            const campos = form.elements;
            if (!campos || campos.length === 0) {
                console.error('No se encontraron elementos del formulario');
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
                    }                
                }            
            } 
                    else if (accion === 'EDIT') {
                // Para edit, hacer los campos PK de solo lectura pero visibles
                for (let attr in estructura.attributes) {
                    if (estructura.attributes[attr].is_pk) {
                        const campo = document.getElementById(attr);
                        if (campo) {
                            campo.setAttribute('readonly', true);
                            campo.classList.add('readonly-field');
                        }                    }
                    }            
                } 
                else if (accion === 'ADD') {
                // Para add, solo manejar las claves primarias autoincrement
                for (let attr in estructura.attributes) {
                    const campo = document.getElementById(attr);
                    if (!campo) continue;
                    
                    if (estructura.attributes[attr].is_pk && estructura.attributes[attr].is_autoincrement) {
                        campo.setAttribute('readonly', true);                        
                        campo.style.display = 'none';
                        // También ocultar la etiqueta
                        const label = document.getElementById('label_' + attr);
                        if (label) {
                            label.style.display = 'none';                        }
                    } else if (estructura.attributes[attr].is_pk) {
                        // Las claves primarias que no son autoincrement deben ser editables en ADD
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
        // Obtener los elementos del formulario
        const form = document.getElementById("IU_form");
        if (form) {
            form.innerHTML = '';
            form.onsubmit = null;
            form.action = '';        }

        // Ocultar el contenedor del formulario
        const formContainer = document.getElementById("div_IU_form");
        if (formContainer) {
            formContainer.style.display = 'none';        }

        // Eliminar acción actual
        window.accionActual = null;
    }
}