class Project extends Entidad_Abstract_class {
    constructor() {
        super('project', window.estructura_project);
        this.datosespecialestabla = ['file_project'];
    }    change_value_IU(atributo, valoratributo) {
        if (atributo === 'file_project') {
            if (!valoratributo || valoratributo === '') {
                return Textos['no_file'] || 'Sin archivo';
            }
            
            // Poner el enlace con icono ANTES del texto del archivo
            let texto = `<a id="link_file_project" href="http://193.147.87.202/ET2/filesuploaded/files_file_project/`;
            texto += valoratributo;
            texto += `"><img src="./iconos/FILE.png" /></a>`;
            texto += ` ${valoratributo}`; // Agregar el nombre del archivo después del icono

            return texto;
        }
        return valoratributo;
    }
}
