class Characteristic extends Entidad_Abstract_class {
    constructor() {
        super("characteristic", estructura_characteristic);
    }    
    change_value_IU(atributo, valoratributo) {
        if (atributo === 'file_characteristic') {
            if (!valoratributo || valoratributo === '') {
                return "no hay fichero";
            }
            // Asegurarse de que valoratributo es una cadena
            const fileName = typeof valoratributo === 'object' ? valoratributo.name : valoratributo;
            let baseUrl = "http://193.147.87.202/ET2/filesuploaded/files_file_characteristic/";
            let texto = `<a href="${baseUrl}${encodeURIComponent(fileName)}" target="_blank">`;
            texto += `<img src="./iconos/FILE.png" alt="Fichero"/>${fileName}</a>`;
            return texto;
        }
        return valoratributo;
    }

}
