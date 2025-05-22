class Entidad_Abstract_class extends DOM_class {

    constructor() {
        super();
    }    inicializar() {
        // Initialize entity structure
        const estructura = eval('estructura_' + this.entidad);
        if (!estructura) {
            throw new Error(`Structure not found for entity: ${this.entidad}`);
        }

        // Initialize special table data if exists
        this.datosespecialestabla = Array();

        // Get columns to show from structure
        this.columnasamostrar = estructura.columnas_visibles_tabla || [];
        this.columnasmodificadas = estructura.columnas_modificadas_tabla || [];
        this.atributos = estructura.attributes_list || [];

        this.access_functions = new ExternalAccess();
        this.validaciones = new Validaciones_Atomicas();

        this.cerrar_test();
        this.SEARCH();
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
                // Usando modal
                this.abrirModalError(respuesta['code']);
            }
        });
    }

    cambiacolumnastabla(atributo) {
        document.querySelector("th[class='"+atributo+"']").style.display = 'none';
    }
}