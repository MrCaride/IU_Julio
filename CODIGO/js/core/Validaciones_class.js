class Validaciones_Atomicas{
    /*los métodos estándar en la clase validacionesatomicas son min_size(), max_size(). exprreg(),
     max_size_file(), type_file(), format_name_file(). */
    constructor(){

    }

    min_size(id, parametro){
        const valor = document.getElementById(id)?.value; // Verificar que el campo existe
        if (!valor) {
            console.warn(`El campo con id "${id}" no existe o no tiene valor.`);
            return false;
        }
        if (valor.length < parametro){
            return false;
        }
        else{
            return true;
        }
    }

    max_size(id,parametro){
        const valor = document.getElementById(id)?.value; // Verificar que el campo existe
        if (!valor) {
            console.warn(`El campo con id "${id}" no existe o no tiene valor.`);
            return false;
        }
        if(valor.length > parametro){
            return false;
        }
        else{
            return true;
        }
    }

    reg_exp(id, parametro){
        const valor = document.getElementById(id)?.value; // Verificar que el campo existe
        if (!valor) {
            console.warn(`El campo con id "${id}" no existe o no tiene valor.`);
            return false;
        }
        const expresionregular = new RegExp(parametro, 'u'); // Añadir bandera 'u' para Unicode
        return expresionregular.test(valor);
    }
    max_size_file(objfile, maxsize){
		if (objfile.size > maxsize){
			return false;
		}
		return true;
	}

	file_type(objfile, array_tipos){
		if (!(array_tipos.includes(objfile.type))){
			return false;
		}
		return true;
	}

	format_name_file(objfile, exprreg){
		let expresionregular = new RegExp(exprreg);
		let valor = objfile.name;
		return expresionregular.test(valor);
	}

    min_size_name_file(objfile,param){
        let valor = objfile.name;
        if (valor.length < param){
            return false;
        }
        return true;
}
    max_size_name_file(objfile,param){
        let valor = objfile.name;
        if (valor.length > param){
            return false;
        }
        return true;
    }
    no_file(objfile){
        if (objfile.size == 0){
            return false;
        }
        return true;
    }
}