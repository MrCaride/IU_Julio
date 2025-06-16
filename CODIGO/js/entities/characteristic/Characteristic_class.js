class Characteristic extends Entidad_Abstract_class {
    constructor() {
        super("characteristic", window.estructura_characteristic);
    }
    
    change_value_IU(atributo, valoratributo) {        
        if (atributo === 'file_characteristic') {
            if (valoratributo === '' || !valoratributo) {
                return "no hay fichero";
            }
            
            // Verificar si estamos en un contexto de solo lectura (SHOWCURRENT o DELETE)
            const isReadOnlyContext = window.accionActual === 'SHOWCURRENT' || window.accionActual === 'DELETE';
            
            if (isReadOnlyContext) {
                // Para contextos de solo lectura, construir el enlace con icono
                let baseUrl = "http://193.147.87.202/ET2/filesuploaded/files_file_characteristic/";
                let texto = `<a href="${baseUrl}${encodeURIComponent(valoratributo)}" target="_blank">`;
                texto += `<img src="./iconos/FILE.png" alt="Fichero"/> ${valoratributo}</a>`;
                return texto;
            } else {
                // Para tabla y otros contextos, construir el enlace completo con icono
                let baseUrl = "http://193.147.87.202/ET2/filesuploaded/files_file_characteristic/";
                let texto = `<a href="${baseUrl}${encodeURIComponent(valoratributo)}" target="_blank">`;
                texto += `<img src="./iconos/FILE.png" alt="Fichero"/> ${valoratributo}</a>`;
                return texto;
            }
        }
        return valoratributo;
    }    // Validación especial para nuevo_file_characteristic en EDIT
    check_special_nuevo_file_characteristic() {
        console.log('=== check_special_nuevo_file_characteristic ejecutándose ===');
        console.log('Acción actual:', window.accionActual);
        
        // En EDIT, si el campo de subida está vacío, se permite (archivo opcional)
        if (window.accionActual === 'EDIT') {
            const nuevoFileField = document.getElementById('nuevo_file_characteristic');
            console.log('Campo nuevo_file encontrado:', !!nuevoFileField);
            console.log('Valor del campo:', nuevoFileField?.value);
            
            if (!nuevoFileField || !nuevoFileField.value || nuevoFileField.value.trim() === '') {
                console.log('Campo vacío en EDIT - marcando como válido');
                // Campo vacío en EDIT - no mostrar error, es válido
                const validaciones = window.validaciones || window.validar;
                if (validaciones) {
                    validaciones.mostrar_exito_campo('nuevo_file_characteristic');
                }
                return true; // Archivo opcional en EDIT - no validar
            } else {
                console.log('Campo tiene archivo - aplicar validaciones normales');
            }
        }
        
        console.log('Continuando con validaciones normales');
        // Para ADD o si hay un archivo seleccionado, aplicar validaciones normales
        return true; // Las validaciones regulares se encargan del resto
    }

}
