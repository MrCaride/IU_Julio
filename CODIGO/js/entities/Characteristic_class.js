class Characteristic extends Entidad_Abstract_class {
    constructor() {
        super("characteristic", estructura_characteristic);
    }

    change_value_IU(atributo, valoratributo) {
        if (atributo === 'file_characteristic') {
            if (valoratributo === '') {
                return "no hay fichero";
            }
            let baseUrl = "http://193.147.87.202/ET2/filesuploaded/files_file_characteristic/";
            let texto = `<a href="${baseUrl}${encodeURIComponent(valoratributo)}" target="_blank">`;
            texto += `<img src="./iconos/FILE.png" alt="Fichero"/>${valoratributo}</a>`;
            return texto;
        }
        return valoratributo;
    }

}
