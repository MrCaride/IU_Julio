class DOM_validations extends DOM_class {
    constructor() {
        super();
        this.validacionesatomicas = new Validaciones_Atomicas();
    }    load_validations(accion) {
        let campos = document.forms['IU_form'].elements;
        
        for (let i = 0; i < campos.length; i++) {
            if (campos[i].id === 'submit_button') continue;
            
            const campo = document.getElementById(campos[i].id);
            const eventType = (campo.tagName === 'INPUT' && campo.type !== 'file') ? 'blur' : 'change';
            
            // Remove any existing event listeners
            campo.removeEventListener(eventType, this._validateField);
            
            // Create a new handler function for this field
            this._validateField = (event) => {
                this.comprobarCampo(campos[i].id, accion);
            };
            
            // Add the event listener
            campo.addEventListener(eventType, this._validateField);
        }
    }

    comprobarCampo(campo, accion) {
        const estructura = eval('estructura_' + this.entidad);
        if (!estructura || !estructura.attributes[campo]) {
            return true;
        }

        const validacionesCampo = estructura.attributes[campo].validation_rules?.[accion];
        if (!validacionesCampo) {
            return true;
        }

        // Special handling for file inputs
        if (document.getElementById(campo).type === 'file') {
            return this.comprobar_file_characteristic(campo, validacionesCampo);
        }

        // Regular field validation
        for (let regla in validacionesCampo) {
            if (typeof this.validacionesatomicas[regla] === 'function') {
                const [valor, mensajeError] = validacionesCampo[regla];
                if (!this.validacionesatomicas[regla](campo, valor)) {
                    this.mostrar_error_campo(campo, mensajeError);
                    return false;
                }
            }
        }

        this.mostrar_exito_campo(campo);
        return true;
    }    comprobar_file_characteristic(campo, validacionesCampo) {
        const fileInput = document.getElementById(campo);
        const file = fileInput.files[0];
        
        // Check if file is required
        if (!file && validacionesCampo.no_file) {
            this.mostrar_error_campo(campo, validacionesCampo.no_file);
            return false;
        }

        // If no file is selected and it's not required, validation passes
        if (!file) {
            this.mostrar_exito_campo(campo);
            return true;
        }

        if (file) {
            // Check file type
            if (validacionesCampo.file_type) {
                const [allowedTypes, errorMsg] = validacionesCampo.file_type;
                if (!this.validacionesatomicas.file_type(file, allowedTypes)) {
                    this.mostrar_error_campo(campo, errorMsg);
                    return false;
                }
            }

            // Check file size
            if (validacionesCampo.max_size_file) {
                const [maxSize, errorMsg] = validacionesCampo.max_size_file;
                if (!this.validacionesatomicas.max_size_file(file, maxSize)) {
                    this.mostrar_error_campo(campo, errorMsg);
                    return false;
                }
            }

            // Check file name format
            if (validacionesCampo.format_name_file) {
                const [formatRegex, errorMsg] = validacionesCampo.format_name_file;
                if (!this.validacionesatomicas.format_name_file(file, formatRegex)) {
                    this.mostrar_error_campo(campo, errorMsg);
                    return false;
                }
            }
        }

        this.mostrar_exito_campo(campo);
        return true;
    }

    // Method to handle special validations defined in the entity class
    check_special_tests(fieldId) {
        if (typeof window['validar']['check_special_' + fieldId] === 'function') {
            return validar['check_special_' + fieldId]();
        }
        return true;
    }

    // Método genérico para validar un campo
    validate_field(fieldId, entity, action) {
        this.entidad = entity;
        return this.comprobarCampo(fieldId, action);
    }    comprobar_submit() {
        try {
            const campos = document.forms['IU_form'].elements;
            let resultadoValidacion = true;
            
            // Validar todos los campos
            for (let i = 0; i < campos.length; i++) {
                const campo = campos[i];
                if (campo.type === 'submit') continue;
                
                if (!this.comprobarCampo(campo.id, 'ADD')) {
                    resultadoValidacion = false;
                }
            }
            
            return resultadoValidacion;
        } catch (error) {
            console.error('Error en comprobar_submit:', error);
            return false;
        }
    }

    comprobar_submit_SEARCH() {
        return true; // La búsqueda no necesita validación estricta
    }
}