class Project extends Entidad_Abstract_class {
    constructor() {
        super('project', window.estructura_project);
    }
    
    change_value_IU(atributo, valoratributo) {
        if (atributo == 'file_project') {
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
