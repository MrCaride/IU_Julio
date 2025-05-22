class Characteristic extends Entidad_Abstract_class {
    constructor() {
        super();
        this.entidad = 'characteristic';
        this.inicializar();
        
        // Ensure columnas_visibles_tabla is initialized from the structure
        const estructura = eval('estructura_' + this.entidad);
        this.columnasamostrar = estructura.columnas_visibles_tabla || [];
    }

    test_run() {
        // Create and run tests using Test_class
        let tester = new Test_class();
        tester.initialize(this.entidad, this);
        tester.test_run();
    }

    // No necesitamos change_value_IU o check_special_test para esta entidad
    // ya que no hay validaciones especiales o transformaciones de valores
}
