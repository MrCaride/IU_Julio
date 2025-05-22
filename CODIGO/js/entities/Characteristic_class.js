class Characteristic extends Entidad_Abstract_class {
    constructor() {
        super();
        this.entidad = 'characteristic';
        this.inicializar();
    }

    // No necesitamos change_value_IU o check_special_test para esta entidad
    // ya que no hay validaciones especiales o transformaciones de valores
}
