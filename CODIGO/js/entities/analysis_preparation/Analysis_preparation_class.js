class Analysis_preparation extends Entidad_Abstract_class {
    constructor() {
        super('analysis_preparation', window.estructura_analysis_preparation);
        this.datosespecialestabla = ['file_analysis_preparation'];
    }    change_value_IU(atributo, valoratributo) {
        if (atributo === 'file_analysis_preparation') {
            if (!valoratributo || valoratributo === '') {
                return Textos['no_file'] || 'Sin archivo';
            }
            
            // Construir el enlace completo con icono y nombre de archivo
            let texto = `<a id="link_file_analysis_preparation" href="http://193.147.87.202/ET2/filesuploaded/files_file_analysis_preparation/${valoratributo}">`;
            texto += `<img src="./iconos/FILE.png" alt="Archivo" /> ${valoratributo}`;
            texto += `</a>`;

            return texto;
        }
        return valoratributo;
    }
}
