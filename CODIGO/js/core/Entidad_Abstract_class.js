class Entidad_Abstract_class extends DOM_class {

    constructor() {
        super();
    }

    inicializar() {
        if (eval(this.datosespecialestabla)) {}
        else {
            this.datosespecialestabla = Array();
        }

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
    }

    cargar_formulario() {
        if (eval(this.cargar_formulario_html)) {
            this.cargar_formulario_html();
        }
        else {
            if (eval(this.cargar_formulario_dinamico)) {
                this.cargar_formulario_dinamico();
            }
            else {
                alert('No existe formulario');
            }
        }
    }

    // Método que puede ser sobrescrito por entidades particulares para modificar valores de presentación
    change_value_IU(atributo, valor) {
        return valor;
    }    async SEARCH() {
        await this.access_functions.peticionBackGeneral('IU_form', this.entidad, 'SEARCH')
        .then((respuesta) => {
            // Limpiar el formulario
            this.cargar_formulario_html();
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