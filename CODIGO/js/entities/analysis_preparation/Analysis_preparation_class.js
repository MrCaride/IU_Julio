class Analysis_preparation extends Entidad_Abstract_class {
    constructor() {
        super('analysis_preparation', window.estructura_analysis_preparation);
        this.datosespecialestabla = ['file_analysis_preparation'];
    }    change_value_IU(atributo, valoratributo) {        if (atributo === 'file_analysis_preparation') {
            if (!valoratributo || valoratributo === '') {
                return Textos['no_file'] || 'Sin archivo';
            }
            
            // Verificar si estamos en un contexto de solo lectura (SHOWCURRENT o DELETE)
            const isReadOnlyContext = window.accionActual === 'SHOWCURRENT' || window.accionActual === 'DELETE';
            
            if (isReadOnlyContext) {
                // Para contextos de solo lectura, retornar solo el nombre del archivo
                return valoratributo;
            } else {
                // Para tabla y otros contextos, construir el enlace completo con icono
                let texto = `<a id="link_file_analysis_preparation" href="http://193.147.87.202/ET2/filesuploaded/files_file_analysis_preparation/${valoratributo}">`;
                texto += `<img src="./iconos/FILE.png" alt="Archivo" /> ${valoratributo}`;
                texto += `</a>`;
                return texto;
            }
        }
        return valoratributo;
    }
}
