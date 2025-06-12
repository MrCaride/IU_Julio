class Project extends Entidad_Abstract_class {
    constructor() {
        super('project', window.estructura_project);
    }    change_value_IU(atributo, valoratributo) {
        if (atributo === 'file_project') {
            if (!valoratributo || valoratributo === '') {
                return Textos['no_file'] || 'Sin archivo';
            }
            
            // Construir el enlace completo con icono y nombre de archivo
            let texto = `<a id="link_file_project" href="http://193.147.87.202/ET2/filesuploaded/files_file_project/${valoratributo}">`;
            texto += `<img src="./iconos/FILE.png" alt="Archivo" /> ${valoratributo}`;
            texto += `</a>`;

            return texto;
        }
        
        // Convertir fechas de formato yyyy-mm-dd a dd/mm/yyyy
        if ((atributo === 'start_date_project' || atributo === 'end_date_project') && valoratributo) {
            // Verificar si la fecha está en formato yyyy-mm-dd
            const dateRegex = /^(\d{4})-(\d{2})-(\d{2})$/;
            const match = valoratributo.match(dateRegex);
            if (match) {
                const [, year, month, day] = match;
                return `${day}/${month}/${year}`;
            }
        }
        
        return valoratributo;
    }// Validación especial para start_date_project
    check_special_start_date_project() {
        const startDateField = document.getElementById('start_date_project');
        if (!startDateField || !startDateField.value) {
            return true; // Si no hay valor, las validaciones regulares se encargan
        }

        const startDateValue = startDateField.value;
        
        // Validar formato de fecha (DD/MM/YYYY)
        const dateRegex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
        const match = startDateValue.match(dateRegex);
          if (!match) {
            window.validar.mostrar_error_campo('start_date_project', 'start_date_project_format_KO');
            return 'start_date_project_format_KO';
        }

        // Validar que sea una fecha válida
        const day = parseInt(match[1], 10);
        const month = parseInt(match[2], 10);
        const year = parseInt(match[3], 10);
        
        const date = new Date(year, month - 1, day);        if (date.getDate() !== day || date.getMonth() !== month - 1 || date.getFullYear() !== year) {
            window.validar.mostrar_error_campo('start_date_project', 'start_date_project_valid_KO');
            return 'start_date_project_valid_KO';
        }

        return true;
    }    // Validación especial para end_date_project
    check_special_end_date_project() {
        const endDateField = document.getElementById('end_date_project');
        
        if (!endDateField || !endDateField.value) {
            return true; // Si no hay valor, las validaciones regulares se encargan
        }

        const endDateValue = endDateField.value;
        
        // Validar formato de fecha (DD/MM/YYYY)
        const dateRegex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
        const endMatch = endDateValue.match(dateRegex);
        
        if (!endMatch) {
            window.validar.mostrar_error_campo('end_date_project', 'end_date_project_format_KO');
            return 'end_date_project_format_KO';
        }

        // Validar que sea una fecha válida
        const endDay = parseInt(endMatch[1], 10);
        const endMonth = parseInt(endMatch[2], 10);
        const endYear = parseInt(endMatch[3], 10);
        const endDate = new Date(endYear, endMonth - 1, endDay);
        
        if (endDate.getDate() !== endDay || endDate.getMonth() !== endMonth - 1 || endDate.getFullYear() !== endYear) {
            window.validar.mostrar_error_campo('end_date_project', 'end_date_project_valid_KO');
            return 'end_date_project_valid_KO';
        }

        // Si hay fecha de inicio, validar que end_date sea mayor que start_date
        const startDateField = document.getElementById('start_date_project');
        if (startDateField && startDateField.value) {
            const startDateValue = startDateField.value;
            const startMatch = startDateValue.match(dateRegex);
            
            if (startMatch) {
                const startDay = parseInt(startMatch[1], 10);
                const startMonth = parseInt(startMatch[2], 10);
                const startYear = parseInt(startMatch[3], 10);
                const startDate = new Date(startYear, startMonth - 1, startDay);
                
                // Solo validar comparación si la fecha de inicio es válida
                if (startDate.getDate() === startDay && startDate.getMonth() === startMonth - 1 && startDate.getFullYear() === startYear) {
                    if (endDate <= startDate) {
                        window.validar.mostrar_error_campo('end_date_project', 'end_date_project_greater_than_start_KO');
                        return 'end_date_project_greater_than_start_KO';
                    }
                }
            }
        }

        return true;
    }
}
