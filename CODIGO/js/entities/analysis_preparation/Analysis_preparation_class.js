class Analysis_preparation extends Entidad_Abstract_class {
    constructor() {
        super('analysis_preparation', window.estructura_analysis_preparation);
    }
    
    change_value_IU(atributo, valoratributo) {
        if (atributo == 'file_analysis_preparation') {
            if (valoratributo == null || valoratributo == '') {
                return Textos['no_file'];
            } else {
                return valoratributo;
            }
        } else {
            return valoratributo;
        }
    }
}
