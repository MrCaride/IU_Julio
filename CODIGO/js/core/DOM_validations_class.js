class DOM_validations extends DOM_class {
    constructor() {
        super();
        this.validacionesatomicas = new Validaciones_Atomicas();
    }    
    load_validations(accion) {
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
        }
        
        // Comprobar si el campo es requerido (excepto en modo SEARCH)
        if (estructura.attributes[campo].is_not_null && accion !== 'SEARCH') {
            const elem = document.getElementById(campo);
        }
        
        // Validación de campo regular
        const elem = document.getElementById(campo);
        const fieldValue = elem?.value || '';
        
        // En modo SEARCH, saltarse validaciones si el campo está vacío
        if (accion === 'SEARCH' && (!fieldValue || fieldValue.trim() === '')) {
            this.mostrar_exito_campo(campo);
            return true;
        }        for (let regla in validacionesCampo) {
            if (typeof this.validacionesatomicas[regla] === 'function') {
                let valor, mensajeError;
                
                // Manejar diferentes formatos de reglas de validación
                if (regla === 'no_file') {
                    // Para no_file en ADD/EDIT, queremos que haya archivo
                    valor = 'y';
                    mensajeError = validacionesCampo[regla];
                } else if (Array.isArray(validacionesCampo[regla])) {
                    [valor, mensajeError] = validacionesCampo[regla];
                } else {
                    valor = validacionesCampo[regla];
                    mensajeError = regla + '_KO';
                }
                
                if (!this.validacionesatomicas[regla](campo, valor)) {
                    this.mostrar_error_campo(campo, mensajeError);
                    return false;
                }
            }
            // Las reglas que no son métodos atómicos se ignoran aquí
            // Se manejarán en check_special_tests si tienen método check_special_nombreatributo
        }

        // Ejecutar validaciones especiales si existen en la entidad
        if (!this.check_special_tests(campo)) {
            return false;
        }

        this.mostrar_exito_campo(campo);
        return true;
    }    
    
    check_special_tests(fieldId) {
        // Verificar si existe un método check_special_NOMBREATRIBUTO en la instancia actual de la entidad
        const specialMethodName = 'check_special_' + fieldId;
        
        // Primero buscar en la instancia de la entidad actual (window[this.entidad])
        const entityInstance = window[this.entidad];
        if (entityInstance && typeof entityInstance[specialMethodName] === 'function') {
            try {
                const result = entityInstance[specialMethodName]();
                if (result !== true) {
                    // Si el resultado no es true, puede ser un código de error o false
                    if (typeof result === 'string') {
                        // Es un código de error, mostrar el error (solo si no se ha mostrado ya)
                        this.mostrar_error_campo(fieldId, result);
                    }
                    return false;
                }
                return true;
            } catch (error) {
                console.error(`Error ejecutando validación especial ${specialMethodName} en entidad:`, error);
                return false;
            }
        }
        
        // Si no se encuentra en la entidad, buscar en window.validar (compatibilidad hacia atrás)
        if (window.validar && typeof window.validar[specialMethodName] === 'function') {
            try {
                const result = window.validar[specialMethodName]();
                if (result !== true) {
                    // Si el resultado no es true, puede ser un código de error o false
                    if (typeof result === 'string') {
                        // Es un código de error, mostrar el error (solo si no se ha mostrado ya)
                        this.mostrar_error_campo(fieldId, result);
                    }
                    return false;
                }
            } catch (error) {
                console.error(`Error ejecutando validación especial ${specialMethodName}:`, error);
                return false;
            }
        }
        
        return true; // Si no existe el método especial o la validación pasa
    }

    // Método genérico para validar un campo
    validate_field(fieldId, entity, action) {
        this.entidad = entity;
        return this.comprobarCampo(fieldId, action);
    }    
    comprobar_submit() {
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
            
            // Ejecutar validaciones especiales adicionales para todos los campos
            for (let i = 0; i < campos.length; i++) {
                const campo = campos[i];
                if (campo.type === 'submit' || !campo.id) continue;
                
                if (!this.check_special_tests(campo.id)) {
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