class Validaciones_Atomicas{


    constructor(){

    }    
    min_size(id, parametro){
        const valor = document.getElementById(id)?.value; 
        
        // For file inputs, check if there's a file selected
        if (document.getElementById(id)?.type === 'file') {
            const fileInput = document.getElementById(id);
            if (!fileInput.files || fileInput.files.length === 0) {
                return false;
            }
        }
        
        // Verificar que el campo existe y tiene valor
        if (!valor && valor !== '') {
            return false;
        }
        
        if (valor.length < parametro){
            return false;
        }
        return true;
    }

    max_size(id,parametro){
        const valor = document.getElementById(id)?.value;
        // Verificar que el campo existe y tiene valor 
        if (!valor) {
            return false;
        }

        if (valor.length > parametro){
            return false;
        }
        return true;
    }    

    reg_exp(id, parametro){
        const valor = document.getElementById(id)?.value; 
        // Verificar que el campo existe y tiene valor
        if (!valor) {
            return false;
        }
        const expresionregular = new RegExp(parametro, 'u'); // Agregar bandera 'u' para Unicode
        const result = expresionregular.test(valor);
        return result;
    }
    max_size_file(id, maxsize) {
        const fileInput = document.getElementById(id);
        if (!fileInput || !fileInput.files || fileInput.files.length === 0) {
            return false;
        }
        
        const file = fileInput.files[0];
        if (!file) {
            return false;
        }
        
        return file.size <= maxsize;
    }    
    file_type(id, array_tipos) {
        const fileInput = document.getElementById(id);
        if (!fileInput || !fileInput.files || fileInput.files.length === 0) {
            return false;
        }
        
        const file = fileInput.files[0];
        if (!file || !file.type) {
            return false;
        }
        
        return array_tipos.includes(file.type);
    }      
    format_name_file(id, exprreg) {
        const fileInput = document.getElementById(id);
        if (!fileInput || !fileInput.files || fileInput.files.length === 0) {
            return false;
        }
        
        const fileName = fileInput.files[0].name;
        // Extraer el nombre del archivo sin la extensión
        const fileNameWithoutExt = fileName.substring(0, fileName.lastIndexOf('.'));
        
        const expresionregular = new RegExp(exprreg);
        return expresionregular.test(fileNameWithoutExt);
    }    
    min_size_name_file(objfile,param){
        // Validar tamaño mínimo del nombre del archivo
        if (!objfile || !objfile.name) {
            return false;
        }
        let valor = objfile.name;
        if (valor.length < param){
            return false;
        }
        return true;
    }    
    max_size_name_file(objfile,param){
        // Validar tamaño máximo del nombre del archivo
        if (!objfile || !objfile.name) {
            return false;
        }
        let valor = objfile.name;
        if (valor.length > param){
            return false;
        }
        return true;
    }    
    no_file(id, parametro) {
        const fileInput = document.getElementById(id);
        if (!fileInput || fileInput.type !== 'file') {
            return false;
        }

        // Si el parámetro es 'n', significa que NO debe haber archivo
        // Si el parámetro es 'y', significa que SÍ debe haber archivo
        const shouldHaveFile = parametro === 'y';
        const hasFile = fileInput.files && fileInput.files.length > 0;
        
        return shouldHaveFile === hasFile;
    }
}