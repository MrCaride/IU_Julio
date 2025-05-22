class Validaciones_Atomicas {
    constructor() {
        // Constructor for Validaciones_Atomicas class
    }
    
    // Validates minimum size of a field
    min_size(id, minsize) {
        let elemento = document.getElementById(id);
        
        switch (elemento.tagName) {
            case 'INPUT':
                switch (elemento.type) {
                    case 'number':
                    case 'email':
                    case 'text':
                        let valorelemento = elemento.value.trim();
                        return valorelemento.length >= minsize;
                    
                    case 'file':
                        if (elemento.files.length === 0) return false;
                        let valornombre = elemento.files[0].name;
                        return valornombre.length >= minsize;
                        
                    default:
                        return true;
                }
            
            case 'TEXTAREA':
                let valorelementoTextArea = elemento.value.trim();
                return valorelementoTextArea.length >= minsize;
                
            case 'SELECT':
                return true;
                
            default:
                return true;
        }
    }
    
    // Validates maximum size of a field
    max_size(id, maxsize) {
        let elemento = document.getElementById(id);
        
        switch (elemento.tagName) {
            case 'INPUT':
                switch (elemento.type) {
                    case 'number':
                    case 'email':
                    case 'text':
                        let valorelemento = elemento.value;
                        return valorelemento.length <= maxsize;
                    
                    case 'file':
                        if (elemento.files.length === 0) return true;
                        let valornombre = elemento.files[0].name;
                        return valornombre.length <= maxsize;
                        
                    default:
                        return true;
                }
            
            case 'TEXTAREA':
                let valorelementoTextArea = elemento.value;
                return valorelementoTextArea.length <= maxsize;
                
            case 'SELECT':
                return true;
                
            default:
                return true;
        }
    }
    
    // Validates if a field matches a regex format
    format(id, exprreg) {
        let expresionregular = new RegExp(exprreg);
        let valor = document.getElementById(id).value;
        return expresionregular.test(valor);
    }
    
    // Validates maximum file size
    max_size_file(objfile, maxsize) {
        if (!objfile) return true;
        return objfile.size <= maxsize;
    }
    
    // Validates file type
    type_file(objfile, array_tipos) {
        if (!objfile) return true;
        return array_tipos.includes(objfile.type);
    }
    
    // Validates file name format
    format_name_file(objfile, exprreg) {
        if (!objfile) return true;
        let expresionregular = new RegExp(exprreg);
        return expresionregular.test(objfile.name);
    }
    
    // Validates if a date is in correct format (dd/mm/yyyy)
    validate_date_format(dateStr) {
        if (!dateStr) return true;
        
        const regex = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;
        if (!regex.test(dateStr)) return false;
        
        const [, day, month, year] = dateStr.match(regex);
        
        // Create a date object and check if it's valid
        const date = new Date(year, month - 1, day);
        
        return (
            date.getFullYear() == year &&
            date.getMonth() + 1 == month &&
            date.getDate() == day
        );
    }
    
    // Validates if a value is numeric
    is_numeric(value) {
        return !isNaN(parseFloat(value)) && isFinite(value);
    }
    
    // Check if email format is valid
    validate_email(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
}