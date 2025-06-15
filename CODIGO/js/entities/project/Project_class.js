class Project extends Entidad_Abstract_class {
    constructor() {
        super('project', window.estructura_project);
        this.datosespecialestabla = ['file_project', 'start_date_project', 'end_date_project'];
    }    
    
      change_value_IU(atributo, valoratributo){
        if (atributo === 'file_project'){
            if (valoratributo === ''){
                return "no hay fichero";
            }
            let baseUrl = "http://193.147.87.202/ET2/filesuploaded/files_file_project/";
            let texto = `<a href="${baseUrl}${encodeURIComponent(valoratributo)}" target="_blank">`;
            texto += `<img src="./iconos/FILE.png" alt="Fichero"/>${valoratributo}</a>`;
            return texto;
        }
        if (['start_date_project', 'end_date_project'].includes(atributo)){
			let fech = valoratributo.split('-');
            let fechaformateada = fech[2] + '/' + fech[1] + '/' + fech[0];
            return fechaformateada;
		}
    }

    // Validación especial para start_date_project (formato dd/mm/yyyy)
    check_special_start_date_project() {
        const startDateField = document.getElementById('start_date_project');
        if (!startDateField || !startDateField.value) {
            return true; // Si no hay valor, las validaciones regulares se encargan
        }

        const startDateValue = startDateField.value;
        // Validar formato de fecha (DD/MM/YYYY)
        const dateRegex = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;
        const match = startDateValue.match(dateRegex);
        
        if (!match) {
            return 'start_date_project_format_KO';
        }

        // Validar que sea una fecha válida
        const day = parseInt(match[1], 10);
        const month = parseInt(match[2], 10);
        const year = parseInt(match[3], 10);
        
        // Verificar rangos básicos
        if (month < 1 || month > 12 || day < 1 || day > 31) {
            return 'start_date_project_valid_KO';
        }
        
        const date = new Date(year, month - 1, day);
        if (date.getDate() !== day || date.getMonth() !== month - 1 || date.getFullYear() !== year) {
            return 'start_date_project_valid_KO';
        }

        return true;
    }

    // Validación especial para end_date_project (formato dd/mm/yyyy)
    check_special_end_date_project() {
        const endDateField = document.getElementById('end_date_project');
        
        if (!endDateField || !endDateField.value) {
            return true; // Si no hay valor, las validaciones regulares se encargan
        }

        const endDateValue = endDateField.value;
        // Validar formato de fecha (DD/MM/YYYY)
        const dateRegex = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;
        const endMatch = endDateValue.match(dateRegex);
        
        if (!endMatch) {
            return 'end_date_project_format_KO';
        }

        // Validar que sea una fecha válida
        const endDay = parseInt(endMatch[1], 10);
        const endMonth = parseInt(endMatch[2], 10);
        const endYear = parseInt(endMatch[3], 10);
        
        // Verificar rangos básicos
        if (endMonth < 1 || endMonth > 12 || endDay < 1 || endDay > 31) {
            return 'end_date_project_valid_KO';
        }
        
        const endDate = new Date(endYear, endMonth - 1, endDay);
        
        if (endDate.getDate() !== endDay || endDate.getMonth() !== endMonth - 1 || endDate.getFullYear() !== endYear) {
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
                        return 'end_date_project_greater_than_start_KO';
                    }
                }
            }
        }

        return true;    }

    // Convertir fechas antes del envío para evitar errores PHP
    convertDatesBeforeSubmit() {
        const startField = document.getElementById('start_date_project');
        const endField = document.getElementById('end_date_project');
        
        if (startField && startField.value) {
            // Si está en formato yyyy-mm-dd, convertir a dd/mm/yyyy
            const dbMatch = startField.value.match(/^(\d{4})-(\d{2})-(\d{2})$/);
            if (dbMatch) {
                const [, year, month, day] = dbMatch;
                startField.value = `${day}/${month}/${year}`;
            }
        }
        
        if (endField && endField.value) {
            // Si está en formato yyyy-mm-dd, convertir a dd/mm/yyyy
            const dbMatch = endField.value.match(/^(\d{4})-(\d{2})-(\d{2})$/);
            if (dbMatch) {
                const [, year, month, day] = dbMatch;
                endField.value = `${day}/${month}/${year}`;
            }
        }
    }

    async ADD() {
        this.convertDatesBeforeSubmit();
        return super.ADD();
    }

    async EDIT() {
        this.convertDatesBeforeSubmit();
        return super.EDIT();
    }

    async DELETE() {
        this.convertDatesBeforeSubmit();
        return super.DELETE();
    }
}
