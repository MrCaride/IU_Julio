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
    }

    max_size_file(objfile, maxsize){
        // Validar que el tamaño del archivo no exceda el máximo
        if (objfile.size > maxsize){
            return false;
        }
        return true;
    }

    file_type(objfile, array_tipos){
        // Validar que el tipo de archivo esté permitido
        if (!(array_tipos.includes(objfile.type))){
            return false;
        }
        return true;
    }

    format_name_file(objfile, exprreg){
        // Validar formato del nombre del archivo
        let expresionregular = new RegExp(exprreg);
        let valor = objfile.name;
        return expresionregular.test(valor);
    }

    min_size_name_file(objfile,param){
        // Validar tamaño mínimo del nombre del archivo
        let valor = objfile.name;
        if (valor.length < param){
            return false;
        }
        return true;
    }

    max_size_name_file(objfile,param){
        // Validar tamaño máximo del nombre del archivo
        let valor = objfile.name;
        if (valor.length > param){
            return false;
        }
        return true;
    }    no_file(objfile){
        // Validar que se haya seleccionado un archivo
        if (objfile.size == 0){
            return false;
        }
        return true;
    }
}