class DOM_validations extends DOM_class {
    constructor() {
        super();
    }
    
    // Method to check if a field passes all validation rules
    submit_test(form, entity, action) {
        let isValid = true;
        
        // Get entity structure
        let estructura = eval('estructura_' + entity);
        
        // Get form fields
        let campos = document.forms[form].elements;
        
        // Check each field validation
        for (let i = 0; i < campos.length; i++) {
            let fieldId = campos[i].id;
            
            // Skip submit button and other non-data fields
            if (fieldId === 'submit_button' || !estructura.attributes[fieldId]) {
                continue;
            }
            
            let validationRules = estructura.attributes[fieldId].validation_rules;
            
            // Skip if there are no validation rules for this action
            if (!validationRules || !validationRules[action]) {
                continue;
            }
            
            // Check if the field has a specific validation method
            if (action === 'SEARCH') {
                if (typeof window['validar']['comprobar_' + fieldId + '_SEARCH'] === 'function') {
                    let result = validar['comprobar_' + fieldId + '_SEARCH']();
                    if (result !== true) {
                        isValid = false;
                    }
                }
            } else {
                if (typeof window['validar']['comprobar_' + fieldId] === 'function') {
                    let result = validar['comprobar_' + fieldId]();
                    if (result !== true) {
                        isValid = false;
                    }
                }
            }
            
            // Check special validations if they exist
            let specialResult = this.check_special_tests(fieldId);
            if (specialResult !== true) {
                isValid = false;
            }
        }
        
        return isValid;
    }
    
    // Method to handle special validations defined in the entity class
    check_special_tests(fieldId) {
        // Check if there's a special validation method for this field
        if (typeof window['validar']['check_special_' + fieldId] === 'function') {
            return validar['check_special_' + fieldId]();
        }
        
        return true;
    }
    
    // Generic field validation method based on validation rules
    validate_field(fieldId, entity, action) {
        // Get entity structure
        let estructura = eval('estructura_' + entity);
        
        // Get field validation rules
        let validationRules = estructura.attributes[fieldId].validation_rules[action];
        
        // If no rules, field is valid
        if (!validationRules) {
            return true;
        }
        
        // Get field value
        let value = document.getElementById(fieldId).value;
        
        // Check required
        if (validationRules.required && !value) {
            this.mostrar_error_campo(fieldId, validationRules.required);
            return validationRules.required;
        }
        
        // If empty and not required, it's valid
        if (!value && !validationRules.required) {
            this.mostrar_exito_campo(fieldId);
            return true;
        }
        
        // Check min length
        if (validationRules.min_length && value.length < validationRules.min_length.value) {
            this.mostrar_error_campo(fieldId, validationRules.min_length.message);
            return validationRules.min_length.message;
        }
        
        // Check max length
        if (validationRules.max_length && value.length > validationRules.max_length.value) {
            this.mostrar_error_campo(fieldId, validationRules.max_length.message);
            return validationRules.max_length.message;
        }
        
        // Check format (regex)
        if (validationRules.format) {
            let regex = new RegExp(validationRules.format.value);
            if (!regex.test(value)) {
                this.mostrar_error_campo(fieldId, validationRules.format.message);
                return validationRules.format.message;
            }
        }
        
        // Check file size
        if (validationRules.max_size_file && document.getElementById(fieldId).files.length > 0) {
            let file = document.getElementById(fieldId).files[0];
            if (file.size > validationRules.max_size_file.value) {
                this.mostrar_error_campo(fieldId, validationRules.max_size_file.message);
                return validationRules.max_size_file.message;
            }
        }
        
        // Check file type
        if (validationRules.type_file && document.getElementById(fieldId).files.length > 0) {
            let file = document.getElementById(fieldId).files[0];
            if (!validationRules.type_file.value.includes(file.type)) {
                this.mostrar_error_campo(fieldId, validationRules.type_file.message);
                return validationRules.type_file.message;
            }
        }
        
        // Check personalized validation
        if (validationRules.personalized) {
            // Extract function name and parameters
            const functionText = validationRules.personalized;
            const functionName = functionText.substring(0, functionText.indexOf('('));
            
            // Check if the function exists in the current object
            if (typeof window['validar'][functionName] === 'function') {
                const result = window['validar'][functionName](value);
                if (result !== true) {
                    this.mostrar_error_campo(fieldId, result);
                    return result;
                }
            }
        }
        
        // All validations passed
        this.mostrar_exito_campo(fieldId);
        return true;
    }
}