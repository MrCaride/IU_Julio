/**
 * Definiciones de tests para todas las entidades
 */

// Definiciones de tests para characteristic
window.characteristic_def_tests = Array(
    // Pruebas de ID Characteristic
    Array('characteristic', 'id_characteristic', 1, 'Validar formato SEARCH', 'SEARCH', 'string', 'id_characteristic_format_KO'),
    Array('characteristic', 'id_characteristic', 2, 'Validar tamaño máximo SEARCH', 'SEARCH', 'string', 'id_characteristic_max_size_KO'),

    // Pruebas de Name Characteristic
    Array('characteristic', 'name_characteristic', 3, 'Validar longitud mínima ADD', 'ADD', 'string', 'name_characteristic_min_size_KO'),
    Array('characteristic', 'name_characteristic', 4, 'Validar longitud máxima ADD', 'ADD', 'string', 'name_characteristic_max_size_KO'),
    Array('characteristic', 'name_characteristic', 5, 'Validar formato ADD', 'ADD', 'string', 'name_characteristic_format_KO'),
    Array('characteristic', 'name_characteristic', 6, 'Validar longitud mínima EDIT', 'EDIT', 'string', 'name_characteristic_min_size_KO'),
    Array('characteristic', 'name_characteristic', 7, 'Validar longitud máxima EDIT', 'EDIT', 'string', 'name_characteristic_max_size_KO'),
    Array('characteristic', 'name_characteristic', 8, 'Validar formato EDIT', 'EDIT', 'string', 'name_characteristic_format_KO'),
    Array('characteristic', 'name_characteristic', 9, 'Validar longitud máxima SEARCH', 'SEARCH', 'string', 'name_characteristic_max_size_KO'),    Array('characteristic', 'name_characteristic', 10, 'Validar formato SEARCH', 'SEARCH', 'string', 'name_characteristic_format_KO'),

    // Pruebas de Description Characteristic
    Array('characteristic', 'description_characteristic', 11, 'Validar longitud mínima ADD', 'ADD', 'string', 'description_characteristic_min_size_KO'),
    Array('characteristic', 'description_characteristic', 12, 'Validar longitud máxima ADD', 'ADD', 'string', 'description_characteristic_max_size_KO'),
    Array('characteristic', 'description_characteristic', 13, 'Validar formato ADD', 'ADD', 'string', 'description_characteristic_format_KO'),
    Array('characteristic', 'description_characteristic', 14, 'Validar longitud mínima EDIT', 'EDIT', 'string', 'description_characteristic_min_size_KO'),
    Array('characteristic', 'description_characteristic', 15, 'Validar longitud máxima EDIT', 'EDIT', 'string', 'description_characteristic_max_size_KO'),
    Array('characteristic', 'description_characteristic', 16, 'Validar formato EDIT', 'EDIT', 'string', 'description_characteristic_format_KO'),
    Array('characteristic', 'description_characteristic', 17, 'Validar longitud máxima SEARCH', 'SEARCH', 'string', 'description_characteristic_max_size_KO'),    Array('characteristic', 'description_characteristic', 18, 'Validar formato SEARCH', 'SEARCH', 'string', 'description_characteristic_format_KO'),

    // Pruebas de Bibliographic Reference
    Array('characteristic', 'bibref_characteristic', 19, 'Validar longitud mínima ADD', 'ADD', 'string', 'bibref_characteristic_min_size_KO'),
    Array('characteristic', 'bibref_characteristic', 20, 'Validar longitud máxima ADD', 'ADD', 'string', 'bibref_characteristic_max_size_KO'),
    Array('characteristic', 'bibref_characteristic', 21, 'Validar formato ADD', 'ADD', 'string', 'bibref_characteristic_format_KO'),
    Array('characteristic', 'bibref_characteristic', 22, 'Validar longitud mínima EDIT', 'EDIT', 'string', 'bibref_characteristic_min_size_KO'),
    Array('characteristic', 'bibref_characteristic', 23, 'Validar longitud máxima EDIT', 'EDIT', 'string', 'bibref_characteristic_max_size_KO'),
    Array('characteristic', 'bibref_characteristic', 24, 'Validar formato EDIT', 'EDIT', 'string', 'bibref_characteristic_format_KO'),
    Array('characteristic', 'bibref_characteristic', 25, 'Validar longitud máxima SEARCH', 'SEARCH', 'string', 'bibref_characteristic_max_size_KO'),    Array('characteristic', 'bibref_characteristic', 26, 'Validar formato SEARCH', 'SEARCH', 'string', 'bibref_characteristic_format_KO'),

    // Pruebas de File
    Array('characteristic', 'file_characteristic', 27, 'Validar longitud máxima SEARCH', 'SEARCH', 'string', 'file_characteristic_name_max_size_KO'),
    Array('characteristic', 'file_characteristic', 28, 'Validar formato SEARCH', 'SEARCH', 'string', 'file_characteristic_name_format_KO'),

    // Pruebas de Nuevo File
    Array('characteristic', 'nuevo_file_characteristic', 29, 'Validar longitud mínima ADD', 'ADD', 'string', 'nuevo_file_characteristic_name_min_size_KO'),
    Array('characteristic', 'nuevo_file_characteristic', 30, 'Validar longitud máxima ADD', 'ADD', 'string', 'nuevo_file_characteristic_name_max_size_KO'),
    Array('characteristic', 'nuevo_file_characteristic', 31, 'Validar archivo requerido ADD', 'ADD', 'string', 'nuevo_file_characteristic_no_file_KO'),
    Array('characteristic', 'nuevo_file_characteristic', 32, 'Validar tipo de archivo ADD', 'ADD', 'string', 'nuevo_file_characteristic_file_type_KO'),
    Array('characteristic', 'nuevo_file_characteristic', 33, 'Validar tamaño de archivo ADD', 'ADD', 'string', 'nuevo_file_characteristic_max_size_KO'),
    Array('characteristic', 'nuevo_file_characteristic', 34, 'Validar formato nombre archivo ADD', 'ADD', 'string', 'nuevo_file_characteristic_name_format_KO'),
    Array('characteristic', 'nuevo_file_characteristic', 35, 'Validar longitud mínima EDIT', 'EDIT', 'string', 'nuevo_file_characteristic_name_min_size_KO'),
    Array('characteristic', 'nuevo_file_characteristic', 36, 'Validar longitud máxima EDIT', 'EDIT', 'string', 'nuevo_file_characteristic_name_max_size_KO'),
    Array('characteristic', 'nuevo_file_characteristic', 37, 'Validar archivo requerido EDIT', 'EDIT', 'string', 'nuevo_file_characteristic_no_file_KO'),
    Array('characteristic', 'nuevo_file_characteristic', 38, 'Validar tipo de archivo EDIT', 'EDIT', 'string', 'nuevo_file_characteristic_file_type_KO'),
    Array('characteristic', 'nuevo_file_characteristic', 39, 'Validar tamaño de archivo EDIT', 'EDIT', 'string', 'nuevo_file_characteristic_max_size_KO'),
    Array('characteristic', 'nuevo_file_characteristic', 40, 'Validar formato nombre archivo EDIT', 'EDIT', 'string', 'nuevo_file_characteristic_name_format_KO')
);

// Definiciones de tests para analysis_preparation 
window.analysis_preparation_def_tests = Array(
    // Pruebas de ID Analysis Preparation
    Array('analysis_preparation', 'id_analysis_preparation', 1, 'Validar formato SEARCH', 'SEARCH', 'string', 'id_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'id_analysis_preparation', 2, 'Validar tamaño máximo SEARCH', 'SEARCH', 'string', 'id_analysis_preparation_format_KO'),

    // Pruebas de Name Analysis Preparation
    Array('analysis_preparation', 'name_analysis_preparation', 3, 'Validar longitud mínima ADD', 'ADD', 'string', 'name_analysis_preparation_min_size_KO'),
    Array('analysis_preparation', 'name_analysis_preparation', 4, 'Validar longitud máxima ADD', 'ADD', 'string', 'name_analysis_preparation_max_size_KO'),
    Array('analysis_preparation', 'name_analysis_preparation', 5, 'Validar formato ADD', 'ADD', 'string', 'name_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'name_analysis_preparation', 6, 'Validar longitud mínima EDIT', 'EDIT', 'string', 'name_analysis_preparation_min_size_KO'),
    Array('analysis_preparation', 'name_analysis_preparation', 7, 'Validar longitud máxima EDIT', 'EDIT', 'string', 'name_analysis_preparation_max_size_KO'),
    Array('analysis_preparation', 'name_analysis_preparation', 8, 'Validar formato EDIT', 'EDIT', 'string', 'name_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'name_analysis_preparation', 9, 'Validar longitud máxima SEARCH', 'SEARCH', 'string', 'name_analysis_preparation_max_size_KO'),    Array('analysis_preparation', 'name_analysis_preparation', 10, 'Validar formato SEARCH', 'SEARCH', 'string', 'name_analysis_preparation_format_KO'),

    // Pruebas de Description Analysis Preparation
    Array('analysis_preparation', 'description_analysis_preparation', 11, 'Validar longitud mínima ADD', 'ADD', 'string', 'description_analysis_preparation_min_size_KO'),
    Array('analysis_preparation', 'description_analysis_preparation', 12, 'Validar longitud máxima ADD', 'ADD', 'string', 'description_analysis_preparation_max_size_KO'),
    Array('analysis_preparation', 'description_analysis_preparation', 13, 'Validar formato ADD', 'ADD', 'string', 'description_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'description_analysis_preparation', 14, 'Validar longitud mínima EDIT', 'EDIT', 'string', 'description_analysis_preparation_min_size_KO'),
    Array('analysis_preparation', 'description_analysis_preparation', 15, 'Validar longitud máxima EDIT', 'EDIT', 'string', 'description_analysis_preparation_max_size_KO'),
    Array('analysis_preparation', 'description_analysis_preparation', 16, 'Validar formato EDIT', 'EDIT', 'string', 'description_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'description_analysis_preparation', 17, 'Validar longitud máxima SEARCH', 'SEARCH', 'string', 'description_analysis_preparation_max_size_KO'),    Array('analysis_preparation', 'description_analysis_preparation', 18, 'Validar formato SEARCH', 'SEARCH', 'string', 'description_analysis_preparation_format_KO'),

    // Pruebas de Bibliographic Reference
    Array('analysis_preparation', 'bib_analysis_preparation', 19, 'Validar longitud mínima ADD', 'ADD', 'string', 'bib_analysis_preparation_min_size_KO'),
    Array('analysis_preparation', 'bib_analysis_preparation', 20, 'Validar longitud máxima ADD', 'ADD', 'string', 'bib_analysis_preparation_max_size_KO'),
    Array('analysis_preparation', 'bib_analysis_preparation', 21, 'Validar formato ADD', 'ADD', 'string', 'bib_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'bib_analysis_preparation', 22, 'Validar longitud mínima EDIT', 'EDIT', 'string', 'bib_analysis_preparation_min_size_KO'),
    Array('analysis_preparation', 'bib_analysis_preparation', 23, 'Validar longitud máxima EDIT', 'EDIT', 'string', 'bib_analysis_preparation_max_size_KO'),
    Array('analysis_preparation', 'bib_analysis_preparation', 24, 'Validar formato EDIT', 'EDIT', 'string', 'bib_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'bib_analysis_preparation', 25, 'Validar longitud máxima SEARCH', 'SEARCH', 'string', 'bib_analysis_preparation_max_size_KO'),    Array('analysis_preparation', 'bib_analysis_preparation', 26, 'Validar formato SEARCH', 'SEARCH', 'string', 'bib_analysis_preparation_format_KO'),

    // Pruebas de File
    Array('analysis_preparation', 'file_analysis_preparation', 27, 'Validar longitud máxima SEARCH', 'SEARCH', 'string', 'file_analysis_preparation_name_max_size_KO'),
    Array('analysis_preparation', 'file_analysis_preparation', 28, 'Validar formato SEARCH', 'SEARCH', 'string', 'file_analysis_preparation_name_format_KO'),

    // Pruebas de Nuevo File
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 29, 'Validar longitud mínima ADD', 'ADD', 'string', 'nuevo_file_analysis_preparation_name_min_size_KO'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 30, 'Validar longitud máxima ADD', 'ADD', 'string', 'nuevo_file_analysis_preparation_name_max_size_KO'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 31, 'Validar archivo requerido ADD', 'ADD', 'string', 'nuevo_file_analysis_preparation_no_file_KO'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 32, 'Validar tipo de archivo ADD', 'ADD', 'string', 'nuevo_file_analysis_preparation_file_type_KO'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 33, 'Validar tamaño de archivo ADD', 'ADD', 'string', 'nuevo_file_analysis_preparation_max_size_KO'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 34, 'Validar formato nombre archivo ADD', 'ADD', 'string', 'nuevo_file_analysis_preparation_name_format_KO'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 35, 'Validar longitud mínima EDIT', 'EDIT', 'string', 'nuevo_file_analysis_preparation_name_min_size_KO'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 36, 'Validar longitud máxima EDIT', 'EDIT', 'string', 'nuevo_file_analysis_preparation_name_max_size_KO'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 37, 'Validar archivo requerido EDIT', 'EDIT', 'string', 'nuevo_file_analysis_preparation_no_file_KO'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 38, 'Validar tipo de archivo EDIT', 'EDIT', 'string', 'nuevo_file_analysis_preparation_file_type_KO'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 39, 'Validar tamaño de archivo EDIT', 'EDIT', 'string', 'nuevo_file_analysis_preparation_max_size_KO'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 40, 'Validar formato nombre archivo EDIT', 'EDIT', 'string', 'nuevo_file_analysis_preparation_name_format_KO')
);

// Definiciones de tests para project
window.project_def_tests = Array(
    // Pruebas de ID Project    Array('project', 'id_project', 1, 'Validar formato SEARCH', 'SEARCH', 'string', 'id_project_format_KO'),
    Array('project', 'id_project', 2, 'Validar tamaño máximo SEARCH', 'SEARCH', 'string', 'id_project_max_size_KO'),

    // Pruebas de Name Project
    Array('project', 'name_project', 3, 'Validar longitud mínima ADD', 'ADD', 'string', 'name_project_min_size_KO'),
    Array('project', 'name_project', 4, 'Validar longitud máxima ADD', 'ADD', 'string', 'name_project_max_size_KO'),
    Array('project', 'name_project', 5, 'Validar formato ADD', 'ADD', 'string', 'name_project_format_KO'),
    Array('project', 'name_project', 6, 'Validar longitud mínima EDIT', 'EDIT', 'string', 'name_project_min_size_KO'),
    Array('project', 'name_project', 7, 'Validar longitud máxima EDIT', 'EDIT', 'string', 'name_project_max_size_KO'),
    Array('project', 'name_project', 8, 'Validar formato EDIT', 'EDIT', 'string', 'name_project_format_KO'),
    Array('project', 'name_project', 9, 'Validar longitud máxima SEARCH', 'SEARCH', 'string', 'name_project_max_size_KO'),    Array('project', 'name_project', 10, 'Validar formato SEARCH', 'SEARCH', 'string', 'name_project_format_KO'),

    // Pruebas de Date Fields
    Array('project', 'start_date_project', 11, 'Validar formato fecha ADD', 'ADD', 'string', 'start_date_project_format_KO'),
    Array('project', 'start_date_project', 12, 'Validar fecha válida ADD', 'ADD', 'string', 'start_date_project_valid_KO'),
    Array('project', 'start_date_project', 13, 'Validar formato fecha EDIT', 'EDIT', 'string', 'start_date_project_format_KO'),
    Array('project', 'start_date_project', 14, 'Validar fecha válida EDIT', 'EDIT', 'string', 'start_date_project_valid_KO'),
    Array('project', 'start_date_project', 15, 'Validar formato fecha SEARCH', 'SEARCH', 'string', 'start_date_project_format_KO'),
    Array('project', 'start_date_project', 16, 'Validar fecha válida SEARCH', 'SEARCH', 'string', 'start_date_project_valid_KO'),

    Array('project', 'end_date_project', 17, 'Validar formato fecha fin ADD', 'ADD', 'string', 'end_date_project_format_KO'),
    Array('project', 'end_date_project', 18, 'Validar fecha fin válida ADD', 'ADD', 'string', 'end_date_project_valid_KO'),
    Array('project', 'end_date_project', 19, 'Validar fecha fin mayor que inicio ADD', 'ADD', 'string', 'end_date_project_greater_than_start_KO'),
    Array('project', 'end_date_project', 20, 'Validar formato fecha fin EDIT', 'EDIT', 'string', 'end_date_project_format_KO'),
    Array('project', 'end_date_project', 21, 'Validar fecha fin válida EDIT', 'EDIT', 'string', 'end_date_project_valid_KO'),
    Array('project', 'end_date_project', 22, 'Validar fecha fin mayor que inicio EDIT', 'EDIT', 'string', 'end_date_project_greater_than_start_KO'),
    Array('project', 'end_date_project', 23, 'Validar formato fecha fin SEARCH', 'SEARCH', 'string', 'end_date_project_format_KO'),    Array('project', 'end_date_project', 24, 'Validar fecha fin válida SEARCH', 'SEARCH', 'string', 'end_date_project_valid_KO'),

    // Pruebas de Responsable Project
    Array('project', 'responsable_project', 25, 'Validar longitud mínima ADD', 'ADD', 'string', 'responsable_project_min_size_KO'),
    Array('project', 'responsable_project', 26, 'Validar longitud máxima ADD', 'ADD', 'string', 'responsable_project_max_size_KO'),
    Array('project', 'responsable_project', 27, 'Validar formato ADD', 'ADD', 'string', 'responsable_project_format_KO'),
    Array('project', 'responsable_project', 28, 'Validar longitud mínima EDIT', 'EDIT', 'string', 'responsable_project_min_size_KO'),
    Array('project', 'responsable_project', 29, 'Validar longitud máxima EDIT', 'EDIT', 'string', 'responsable_project_max_size_KO'),
    Array('project', 'responsable_project', 30, 'Validar formato EDIT', 'EDIT', 'string', 'responsable_project_format_KO'),
    Array('project', 'responsable_project', 31, 'Validar longitud máxima SEARCH', 'SEARCH', 'string', 'responsable_project_max_size_KO'),    Array('project', 'responsable_project', 32, 'Validar formato SEARCH', 'SEARCH', 'string', 'responsable_project_format_KO'),

    // Pruebas de Organization Project
    Array('project', 'organization_project', 33, 'Validar longitud mínima ADD', 'ADD', 'string', 'organization_project_min_size_KO'),
    Array('project', 'organization_project', 34, 'Validar longitud máxima ADD', 'ADD', 'string', 'organization_project_max_size_KO'),
    Array('project', 'organization_project', 35, 'Validar formato ADD', 'ADD', 'string', 'organization_project_format_KO'),
    Array('project', 'organization_project', 36, 'Validar longitud mínima EDIT', 'EDIT', 'string', 'organization_project_min_size_KO'),
    Array('project', 'organization_project', 37, 'Validar longitud máxima EDIT', 'EDIT', 'string', 'organization_project_max_size_KO'),
    Array('project', 'organization_project', 38, 'Validar formato EDIT', 'EDIT', 'string', 'organization_project_format_KO'),
    Array('project', 'organization_project', 39, 'Validar longitud máxima SEARCH', 'SEARCH', 'string', 'organization_project_max_size_KO'),    Array('project', 'organization_project', 40, 'Validar formato SEARCH', 'SEARCH', 'string', 'organization_project_format_KO'),

    // Pruebas de Description Project
    Array('project', 'description_project', 41, 'Validar longitud mínima ADD', 'ADD', 'string', 'description_project_min_size_KO'),
    Array('project', 'description_project', 42, 'Validar longitud máxima ADD', 'ADD', 'string', 'description_project_max_size_KO'),
    Array('project', 'description_project', 43, 'Validar formato ADD', 'ADD', 'string', 'description_project_format_KO'),
    Array('project', 'description_project', 44, 'Validar longitud mínima EDIT', 'EDIT', 'string', 'description_project_min_size_KO'),
    Array('project', 'description_project', 45, 'Validar longitud máxima EDIT', 'EDIT', 'string', 'description_project_max_size_KO'),
    Array('project', 'description_project', 46, 'Validar formato EDIT', 'EDIT', 'string', 'description_project_format_KO'),
    Array('project', 'description_project', 47, 'Validar longitud máxima SEARCH', 'SEARCH', 'string', 'description_project_max_size_KO'),
    Array('project', 'description_project', 48, 'Validar formato SEARCH', 'SEARCH', 'string', 'description_project_format_KO')
);
