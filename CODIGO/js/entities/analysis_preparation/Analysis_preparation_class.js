class Analysis_preparation extends Entidad_Abstract_class {
    constructor() {
        super('analysis_preparation', window.estructura_analysis_preparation);
    }
    
    change_value_IU(atributo, valoratributo) {        
        if (atributo === 'file_analysis_preparation') {
            if (valoratributo === '' || !valoratributo) {
                return "no hay fichero";
            }
            
            // Verificar si estamos en un contexto de solo lectura (SHOWCURRENT o DELETE)
            const isReadOnlyContext = window.accionActual === 'SHOWCURRENT' || window.accionActual === 'DELETE';
            
            if (isReadOnlyContext) {
                // Para contextos de solo lectura, construir el enlace con icono
                let baseUrl = "http://193.147.87.202/ET2/filesuploaded/files_file_analysis_preparation/";
                let texto = `<a href="${baseUrl}${encodeURIComponent(valoratributo)}" target="_blank">`;
                texto += `<img src="./iconos/FILE.png" alt="Fichero"/> ${valoratributo}</a>`;
                return texto;
            } else {
                // Para tabla y otros contextos, construir el enlace completo con icono
                let baseUrl = "http://193.147.87.202/ET2/filesuploaded/files_file_analysis_preparation/";
                let texto = `<a href="${baseUrl}${encodeURIComponent(valoratributo)}" target="_blank">`;
                texto += `<img src="./iconos/FILE.png" alt="Fichero"/> ${valoratributo}</a>`;
                return texto;
            }
        }
        return valoratributo;
    }
}
