class Validaciones_Atomicas{
    /*Los métodos estándar en la clase validacionesatomicas son:
    - min_size(): Validar tamaño mínimo
    - max_size(): Validar tamaño máximo
    - reg_exp(): Validar expresión regular
    - max_size_file(): Validar tamaño máximo de archivo
    - type_file(): Validar tipo de archivo 
    - format_name_file(): Validar formato de nombre de archivo */

    constructor(){

    }

    min_size(id, parametro){
        const valor = document.getElementById(id)?.value; 
        // Verificar que el campo existe y tiene valor
        if (!valor) {
            console.warn(`El campo con id "${id}" no existe o no tiene valor.`);
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
            console.warn(`El campo con id "${id}" no existe o no tiene valor.`);
            return false;
        }

        if (valor.length > parametro){
            return false;
        }
        return true;
    }    reg_exp(id, parametro){
        const valor = document.getElementById(id)?.value; 
        // Verificar que el campo existe y tiene valor
        if (!valor) {
            console.warn(`El campo con id "${id}" no existe o no tiene valor.`);
            return false;
        }
        const expresionregular = new RegExp(parametro, 'u'); // Agregar bandera 'u' para Unicode
        return expresionregular.test(valor);
    }    max_size_file(objfile, maxsize){
        // Validar que el tamaño del archivo no exceda el máximo
        if (!objfile || typeof objfile.size === 'undefined') {
            return false;
        }
        if (objfile.size > maxsize){
            return false;
        }
        return true;
    }file_type(objfile, array_tipos){
        // Validar que el tipo de archivo esté permitido
        if (!objfile || !objfile.type) {
            return false;
        }
        if (!(array_tipos.includes(objfile.type))){
            return false;
        }
        return true;
    }    format_name_file(objfile, exprreg){
        // Validar formato del nombre del archivo
        if (!objfile || !objfile.name) {
            return false;
        }
        let expresionregular = new RegExp(exprreg);
        let valor = objfile.name;
        return expresionregular.test(valor);
    }    min_size_name_file(objfile,param){
        // Validar tamaño mínimo del nombre del archivo
        if (!objfile || !objfile.name) {
            return false;
        }
        let valor = objfile.name;
        if (valor.length < param){
            return false;
        }
        return true;
    }    max_size_name_file(objfile,param){
        // Validar tamaño máximo del nombre del archivo
        if (!objfile || !objfile.name) {
            return false;
        }
        let valor = objfile.name;
        if (valor.length > param){
            return false;
        }
        return true;
    }no_file(objfile){
        // Validar que se haya seleccionado un archivo
        // En modo EDIT, si ya existe un archivo, no es necesario subir uno nuevo
        
        // Si hay archivo seleccionado, validación exitosa
        if (objfile && objfile.size > 0){
            return true;
        }
        
        // Si no hay archivo seleccionado y estamos en modo EDIT, verificar si ya existe uno
        if (window.accionActual === 'EDIT') {
            // Buscar campos de archivo existente en el formulario
            const form = document.forms['IU_form'];
            if (form) {
                const formData = new FormData(form);
                
                // Buscar campos que terminen en '_link' (donde se muestran archivos existentes)
                const linkElements = document.querySelectorAll('[id$="_link"]');
                for (let linkElement of linkElements) {
                    if (linkElement.innerHTML.trim() !== '') {
                        // Hay un archivo existente mostrado
                        return true;
                    }
                }
                
                // También buscar campos de tipo texto que contengan nombres de archivo
                for (let element of form.elements) {
                    if (element.id && element.id.startsWith('file_') && 
                        element.type === 'text' && element.value.trim() !== '') {
                        // Hay un archivo existente en el campo de texto
                        return true;
                    }
                }
            }
        }
        
        // Si llegamos aquí, no hay archivo ni seleccionado ni existente
        return false;
    }
}