class Characteristic extends Entidad_Abstract_class {
    constructor() {
        super("characteristic", estructura_characteristic);
    }    
    
    change_value_IU(atributo, valoratributo) {
        if (atributo === 'file_characteristic') {
            if (!valoratributo || valoratributo === '') {
                return Textos['no_file'] || 'no hay fichero';
            }
            
            // Asegurarse de que valoratributo es una cadena y no está vacío
            if (typeof valoratributo === 'object') {
                valoratributo = valoratributo.name;
            }
            if (!valoratributo || valoratributo.trim() === '') {
                return Textos['no_file'] || 'no hay fichero';
            }

            let fileName = valoratributo;
            let baseUrl = "http://193.147.87.202/ET2/filesuploaded/files_file_characteristic/";
            return `<a href="${baseUrl}${encodeURIComponent(fileName)}" target="_blank">
                <img src="./iconos/FILE.png" alt="Fichero" style="width:20px; height:20px; margin-right:5px;"/>
                ${fileName}
            </a>`;
        }
        return valoratributo;
    }

}
