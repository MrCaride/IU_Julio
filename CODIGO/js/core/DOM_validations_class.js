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
            
            // Eliminar eventos existentes
            campo.removeEventListener(eventType, this._validateField);
            
            // Crear nuevo manejador para este campo
            this._validateField = (event) => {
                this.comprobarCampo(campos[i].id, accion);
            };
            
            // Agregar el evento
            campo.addEventListener(eventType, this._validateField);
        }
    }    comprobarCampo(campo, accion) {
        const estructura = eval('estructura_' + this.entidad);
        if (!estructura || !estructura.attributes[campo]) {
            return true;
        }

        const validacionesCampo = estructura.attributes[campo].validation_rules?.[accion];
        if (!validacionesCampo) {
            return true;
        }        // Manejo especial para entradas de archivo
        if (document.getElementById(campo).type === 'file') {
            return this.comprobar_file_characteristic(campo, validacionesCampo);
        }        // Comprobar si el campo es requerido
        if (estructura.attributes[campo].is_not_null) {
            const elem = document.getElementById(campo);
            const value = elem.value;
            if (!value || value === '') {
                this.mostrar_error_campo(campo, campo + '_required_KO');
                elem.style.borderColor = 'red';
                return false;
            }
        }

        // Validación de campo regular
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
        if (!fileInput) {
            console.error(`Campo no encontrado: ${campo}`);
            return false;
        }

        const file = fileInput.files[0];

        // Check existence first
        if (validacionesCampo.no_file && (!file || file.size === 0)) {
            this.mostrar_error_campo(campo, validacionesCampo.no_file);
            return false;
        }

        // Skip other validations if no file is required and none is provided
        if (!file && !validacionesCampo.no_file) {
            return true;
        }

        // Ordered validations for files
        const validationOrder = ['file_type', 'max_size_file', 'format_name_file'];

        for (const rule of validationOrder) {
            if (validacionesCampo[rule]) {
                const [param, errorMsg] = validacionesCampo[rule];
                if (!this.validacionesatomicas[rule](file, param)) {
                    this.mostrar_error_campo(campo, errorMsg);
                    return false;
                }
            }
        }

        // Regular validations (min_size, max_size, etc.)
        for (const rule in validacionesCampo) {
            if (!validationOrder.includes(rule) && rule !== 'no_file') {
                if (typeof this.validacionesatomicas[rule] === 'function') {
                    const [param, errorMsg] = validacionesCampo[rule];
                    if (!this.validacionesatomicas[rule](campo, param)) {
                        this.mostrar_error_campo(campo, errorMsg);
                        return false;
                    }
                }
            }
        }

        this.mostrar_exito_campo(campo);
        return true;
    }    // Método para manejar validaciones especiales definidas en la clase entidad
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
            
            // Obtener la acción actual
            const accion = window.accionActual || 'ADD';
            
            // Validar todos los campos
            for (let i = 0; i < campos.length; i++) {
                const campo = campos[i];
                if (campo.type === 'submit' || !campo.id) continue;
                
                if (!this.comprobarCampo(campo.id, accion)) {
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