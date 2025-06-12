class Characteristic extends Entidad_Abstract_class {
    constructor() {
        super("characteristic", estructura_characteristic);
        this.datosespecialestabla = ['file_characteristic'];
    }    change_value_IU(atributo, valoratributo) {
        if (atributo === 'file_characteristic') {
            if (!valoratributo || valoratributo === '') {
                return Textos['no_file'] || 'Sin archivo';
            }
            
            // Construir el enlace completo con icono y nombre de archivo
            let texto = `<a id="link_file_characteristic" href="http://193.147.87.202/ET2/filesuploaded/files_file_characteristic/${valoratributo}">`;
            texto += `<img src="./iconos/FILE.png" alt="Archivo" /> ${valoratributo}`;
            texto += `</a>`;

            return texto;
        }
        return valoratributo;
    }

}
