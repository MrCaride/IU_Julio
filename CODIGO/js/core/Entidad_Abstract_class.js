class Entidad_Abstract_class extends DOM_class {

    constructor(entidad, estructura) {
        super();
        this.entidad = entidad;
        this.estructura = estructura;
          // Inicializar datos especiales de tabla si existen
        this.datosespecialestabla = Array();
        
        // Obtener columnas a mostrar de la estructura
        this.columnasamostrar = this.estructura.columnas_visibles_tabla || [];
        this.columnasmodificadas = this.estructura.columnas_modificadas_tabla || [];
        this.atributos = this.estructura.attributes_list || [];

        this.access_functions = new ExternalAccess();
        this.validaciones = new DOM_validations();
        this.validaciones.entidad = this.entidad;        // Inicializar funcionalidad de test
        this.test = new Test_class();
        this.test.initialize(this.entidad, this);

        // Retrasar inicialización hasta que el DOM esté listo
        setTimeout(() => {
            this.cerrar_test();
            this.SEARCH();
        }, 0);
    }

    comprobarCampo(campo, accion) {
        return this.validaciones.comprobarCampo(campo, accion);
    }

    comprobar_submit() {
        return this.validaciones.comprobar_submit();
    }

    comprobar_submit_SEARCH() {
        return this.validaciones.comprobar_submit_SEARCH();
    }

    cerrar_tabla() {
        const tabla = document.getElementById("id_tabla_datos");
        if (tabla) {
            tabla.style.display = 'none';
        }
    }

    crearTablaDatos() {
        document.getElementById("id_tabla_datos").style.display = 'block';

        // Construir tabla
        this.hacertabla();
        // Construir select
        this.construirSelect();
        
        // Ocultar según columnasamostrar
        if (this.datos != "") {
            this.mostrarocultarcolumnas();
        }
    }    cargar_formulario() {
        if (typeof this.cargar_formulario_html === 'function') {
            this.cargar_formulario_html();
        } else {
            this.cargar_formulario_dinamico(this.entidad, eval('estructura_' + this.entidad));
        }
    }

    // Método que puede ser sobrescrito por entidades particulares para modificar valores de presentación
    change_value_IU(atributo, valor) {
        return valor;
    }    async SEARCH() {
        await this.access_functions.peticionBackGeneral('IU_form', this.entidad, 'SEARCH')
        .then((respuesta) => {
            // Limpiar el formulario usando el método genérico
            this.cargar_formulario();
            // Quito los class de la muestra de filas
            document.getElementById('muestradatostabla').removeAttribute('class');

            // Poner el div del formulario no visible
            document.getElementById("div_IU_form").style.display = 'none';

            this.datos = respuesta['resource'];
            this.atributos = Object.keys(respuesta['criteriosbusqueda']);
           
            this.crearTablaDatos();
           
            setLang();
        });
    }    async ADD() {
        await this.access_functions.peticionBackGeneral('IU_form', this.entidad, 'ADD')
        .then((respuesta) => {
            if (respuesta['ok']) {
                if (respuesta['datos']) {
                    // Actualizar el formulario con los datos devueltos
                    this.load_data(respuesta['datos']);
                } else {
                    // Si no hay datos, limpiar el formulario
                    this.cargar_formulario();
                    // Poner el div del formulario no visible
                    document.getElementById("div_IU_form").style.display = 'none';
                }

                this.SEARCH();
            }
            else {
                // Check if it's a field validation error (like required fields)
                if (respuesta['code'].includes('_required_KO')) {
                    const field = respuesta['code'].replace('_required_KO', '');
                    this.validaciones.mostrar_error_campo(field, respuesta['code']);
                }
                else if (respuesta['code'].includes('_es_nulo_KO')) {
                    const field = respuesta['code'].replace('_es_nulo_KO', '');
                    this.validaciones.mostrar_error_campo(field, field + '_required_KO');
                }
                else {
                    // For other errors, use modal
                    this.abrirModalError(respuesta['code']);
                }
            }
        });
    }    async DELETE() {
        await this.access_functions.peticionBackGeneral('IU_form', this.entidad, 'DELETE')
        .then((respuesta) => {
            if (respuesta['ok']) {
                // Limpiar el formulario
                this.cargar_formulario();

                // Poner el div del formulario no visible
                document.getElementById("div_IU_form").style.display = 'none';

                this.SEARCH();
            }
            else {
                // Usando modal
                this.abrirModalError(respuesta['code']);
            }
        });
    }    async EDIT() {
        await this.access_functions.peticionBackGeneral('IU_form', this.entidad, 'EDIT')
        .then((respuesta) => {
            if (respuesta['ok']) {
                // Limpiar el formulario
                this.cargar_formulario();

                // Poner el div del formulario no visible
                document.getElementById("div_IU_form").style.display = 'none';

                this.SEARCH();
            }
            else {
                // Check if it's a field validation error (like required fields)
                if (respuesta['code'].includes('_required_KO')) {
                    const field = respuesta['code'].replace('_required_KO', '');
                    this.validaciones.mostrar_error_campo(field, respuesta['code']);
                }
                else if (respuesta['code'].includes('_es_nulo_KO')) {
                    const field = respuesta['code'].replace('_es_nulo_KO', '');
                    this.validaciones.mostrar_error_campo(field, field + '_required_KO');
                }
                else {
                    // For other errors, use modal
                    this.abrirModalError(respuesta['code']);
                }
            }
        });
    }

    cambiacolumnastabla(atributo) {
        document.querySelector("th[class='"+atributo+"']").style.display = 'none';
    }

    createForm_ADD() {
        this.createForm(this.entidad, 'ADD');
    }

    createForm_EDIT(datos) {
        this.createForm(this.entidad, 'EDIT', datos);
    }

    createForm_DELETE(datos) {
        this.createForm(this.entidad, 'DELETE', datos);
    }

    createForm_SEARCH() {
        this.createForm(this.entidad, 'SEARCH');
    }

    createForm_SHOWCURRENT(datos) {
        this.createForm(this.entidad, 'SHOWCURRENT', datos);
    }    // Método para ejecutar pruebas
    test_run() {
        // Inicializar modal de pruebas
        this.test.showTestModal();

        // Obtener los arrays de pruebas basados en el nombre de la entidad
        this.test.array_def = eval(`${this.entidad}_def_tests`);
        this.test.array_pruebas = eval(`${this.entidad}_tests`);
        this.test.array_pruebas_file = eval(`${this.entidad}_tests_files`);

        // Mostrar definiciones de pruebas y ejecutar pruebas
        this.test.mostrarDefTests();
        this.test.mostrarDefPruebas();
        this.test.test_entidad();
        if (this.test.array_pruebas_file) {
            this.test.test_entidad_files();
        }
    }
}