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
    }

}
