/**
 * Definiciones de tests para todas las entidades
 * Consolidación de todos los tests de las entidades project, characteristic y analysis_preparation
 */

/**
 * DEFINICIONES DE TESTS (METADATA)
 * Estas definen la estructura y descripción de los tests
 */

// Definiciones de tests para characteristic
window.characteristic_def_tests = Array(
    // Pruebas de ID Characteristic
    Array('characteristic', 'id_characteristic', 1, 'Validar formato SEARCH', 'SEARCH', 'El ID debe ser numérico', 'id_characteristic_format_KO'),
    Array('characteristic', 'id_characteristic', 2, 'Validar tamaño máximo SEARCH', 'SEARCH', 'El ID no puede tener más de 11 dígitos', 'id_characteristic_max_size_KO'),

    // Pruebas de Name Characteristic
    Array('characteristic', 'name_characteristic', 3, 'Validar longitud mínima ADD', 'ADD', 'El nombre debe tener al menos 8 caracteres', 'name_characteristic_min_size_KO'),
    Array('characteristic', 'name_characteristic', 4, 'Validar longitud máxima ADD', 'ADD', 'El nombre no puede tener más de 100 caracteres', 'name_characteristic_max_size_KO'),
    Array('characteristic', 'name_characteristic', 5, 'Validar formato ADD', 'ADD', 'El nombre solo puede contener letras y espacios', 'name_characteristic_format_KO'),
    Array('characteristic', 'name_characteristic', 6, 'Validar longitud mínima EDIT', 'EDIT', 'El nombre debe tener al menos 8 caracteres', 'name_characteristic_min_size_KO'),
    Array('characteristic', 'name_characteristic', 7, 'Validar longitud máxima EDIT', 'EDIT', 'El nombre no puede tener más de 100 caracteres', 'name_characteristic_max_size_KO'),
    Array('characteristic', 'name_characteristic', 8, 'Validar formato EDIT', 'EDIT', 'El nombre solo puede contener letras y espacios', 'name_characteristic_format_KO'),
    Array('characteristic', 'name_characteristic', 9, 'Validar longitud máxima SEARCH', 'SEARCH', 'El nombre no puede tener más de 100 caracteres', 'name_characteristic_max_size_KO'),
    Array('characteristic', 'name_characteristic', 10, 'Validar formato SEARCH', 'SEARCH', 'El nombre solo puede contener letras y espacios', 'name_characteristic_format_KO'),    
   
    // Pruebas de Description Characteristic
    Array('characteristic', 'description_characteristic', 11, 'Validar longitud mínima ADD', 'ADD', 'La descripción debe tener al menos 80 caracteres', 'description_characteristic_min_size_KO'),
    Array('characteristic', 'description_characteristic', 12, 'Validar longitud máxima ADD', 'ADD', 'La descripción no puede tener más de 5000 caracteres', 'description_characteristic_max_size_KO'),
    Array('characteristic', 'description_characteristic', 13, 'Validar formato ADD', 'ADD', 'La descripción solo puede contener letras sin acento y espacios.', 'description_characteristic_format_KO'),
    Array('characteristic', 'description_characteristic', 14, 'Validar longitud mínima EDIT', 'EDIT', 'La descripción debe tener al menos 80 caracteres', 'description_characteristic_min_size_KO'),
    Array('characteristic', 'description_characteristic', 15, 'Validar longitud máxima EDIT', 'EDIT', 'La descripción no puede tener más de 5000 caracteres', 'description_characteristic_max_size_KO'),
    Array('characteristic', 'description_characteristic', 16, 'Validar formato EDIT', 'EDIT', 'La descripción solo puede contener letras sin acento y espacios.', 'description_characteristic_format_KO'),
    Array('characteristic', 'description_characteristic', 17, 'Validar longitud máxima SEARCH', 'SEARCH', 'La descripción no puede tener más de 5000 caracteres', 'description_characteristic_max_size_KO'),
    Array('characteristic', 'description_characteristic', 18, 'Validar formato SEARCH', 'SEARCH', 'La descripción solo puede contener letras sin acento y espacios.', 'description_characteristic_format_KO'),    
      // Pruebas de Data Type Characteristic
    Array('characteristic', 'data_type_characteristic', 40, 'Validar formato ADD', 'ADD', 'Tipo de dato inválido', 'data_type_characteristic_format_KO'),
    Array('characteristic', 'data_type_characteristic', 41, 'Validar formato EDIT', 'EDIT', 'Tipo de dato inválido', 'data_type_characteristic_format_KO'),
    Array('characteristic', 'data_type_characteristic', 42, 'Validar formato SEARCH', 'SEARCH', 'Tipo de dato inválido', 'data_type_characteristic_format_KO'),
    
    // Pruebas de Category Characteristic
    Array('characteristic', 'category_characteristic', 43, 'Validar formato ADD', 'ADD', 'Tipo de categoría inválida', 'category_characteristic_format_KO'),
    Array('characteristic', 'category_characteristic', 44, 'Validar formato EDIT', 'EDIT', 'Tipo de categoría inválida', 'category_characteristic_format_KO'),
    Array('characteristic', 'category_characteristic', 45, 'Validar formato SEARCH', 'SEARCH', 'Tipo de categoría inválida', 'category_characteristic_format_KO'),

    // Pruebas de Bibliographic Reference
    Array('characteristic', 'bibref_characteristic', 19, 'Validar longitud mínima ADD', 'ADD', 'La referencia debe tener al menos 16 caracteres', 'bibref_characteristic_min_size_KO'),
    Array('characteristic', 'bibref_characteristic', 20, 'Validar longitud máxima ADD', 'ADD', 'La referencia no puede tener más de 200 caracteres', 'bibref_characteristic_max_size_KO'),
    Array('characteristic', 'bibref_characteristic', 21, 'Validar formato ADD', 'ADD', 'La referencia bibliográfica solo puede contener letras con acentos, ñ, espacios y signos de puntuación', 'bibref_characteristic_format_KO'),
    Array('characteristic', 'bibref_characteristic', 22, 'Validar longitud mínima EDIT', 'EDIT', 'La referencia debe tener al menos 16 caracteres', 'bibref_characteristic_min_size_KO'),
    Array('characteristic', 'bibref_characteristic', 23, 'Validar longitud máxima EDIT', 'EDIT', 'La referencia no puede tener más de 200 caracteres', 'bibref_characteristic_max_size_KO'),
    Array('characteristic', 'bibref_characteristic', 24, 'Validar formato EDIT', 'EDIT', 'La referencia bibliográfica solo puede contener letras con acentos, ñ, espacios y signos de puntuación', 'bibref_characteristic_format_KO'),
    Array('characteristic', 'bibref_characteristic', 25, 'Validar longitud máxima SEARCH', 'SEARCH', 'La referencia no puede tener más de 200 caracteres', 'bibref_characteristic_max_size_KO'),
    Array('characteristic', 'bibref_characteristic', 26, 'Validar formato SEARCH', 'SEARCH', 'La referencia bibliográfica solo puede contener letras con acentos, ñ, espacios y signos de puntuación', 'bibref_characteristic_format_KO'),
    
    // Pruebas de File
    Array('characteristic', 'file_characteristic', 27, 'Validar longitud máxima SEARCH', 'SEARCH', 'El nombre del archivo no puede tener más de 100 caracteres', 'file_characteristic_name_max_size_KO'),
    Array('characteristic', 'file_characteristic', 28, 'Validar formato SEARCH', 'SEARCH', 'El nombre del archivo solo puede contener letras y punto', 'file_characteristic_name_format_KO'),

    // Pruebas de Nuevo File
    Array('characteristic', 'nuevo_file_characteristic', 29, 'Validar longitud mínima ADD', 'ADD', 'El nombre del archivo debe tener al menos 7 caracteres', 'nuevo_file_characteristic_name_min_size_KO'),
    Array('characteristic', 'nuevo_file_characteristic', 30, 'Validar longitud máxima ADD', 'ADD', 'El nombre del archivo no puede tener más de 100 caracteres', 'nuevo_file_characteristic_name_max_size_KO'),
    Array('characteristic', 'nuevo_file_characteristic', 31, 'Validar archivo requerido ADD', 'ADD', 'Debe seleccionar un archivo real', 'nuevo_file_characteristic_no_file_KO'),
    Array('characteristic', 'nuevo_file_characteristic', 32, 'Validar tipo de archivo ADD', 'ADD', 'El archivo debe ser PDF o DOC/DOCX', 'nuevo_file_characteristic_file_type_KO'),
    Array('characteristic', 'nuevo_file_characteristic', 33, 'Validar tamaño de archivo ADD', 'ADD', 'El archivo no puede superar los 2MB', 'nuevo_file_characteristic_max_size_KO'),
    Array('characteristic', 'nuevo_file_characteristic', 34, 'Validar formato nombre archivo ADD', 'ADD', 'El nombre del archivo solo puede contener letras y punto', 'nuevo_file_characteristic_name_format_KO'),
    Array('characteristic', 'nuevo_file_characteristic', 35, 'Validar longitud mínima EDIT', 'EDIT', 'El nombre del archivo debe tener al menos 7 caracteres', 'nuevo_file_characteristic_name_min_size_KO'),
    Array('characteristic', 'nuevo_file_characteristic', 36, 'Validar longitud máxima EDIT', 'EDIT', 'El nombre del archivo no puede tener más de 100 caracteres', 'nuevo_file_characteristic_name_max_size_KO'),
    Array('characteristic', 'nuevo_file_characteristic', 37, 'Validar tipo de archivo EDIT', 'EDIT', 'El archivo debe ser PDF o DOC/DOCX', 'nuevo_file_characteristic_file_type_KO'),
    Array('characteristic', 'nuevo_file_characteristic', 38, 'Validar tamaño de archivo EDIT', 'EDIT', 'El archivo no puede superar los 2MB', 'nuevo_file_characteristic_max_size_KO'),
    Array('characteristic', 'nuevo_file_characteristic', 39, 'Validar formato nombre archivo EDIT', 'EDIT', 'El nombre del archivo solo puede contener letras y punto', 'nuevo_file_characteristic_name_format_KO')
);

// Definiciones de tests para analysis_preparation 
window.analysis_preparation_def_tests = Array(
    // Pruebas de ID Analysis Preparation
    Array('analysis_preparation', 'id_analysis_preparation', 1, 'Validar formato SEARCH', 'SEARCH', 'El ID debe ser numérico', 'id_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'id_analysis_preparation', 2, 'Validar tamaño máximo SEARCH', 'SEARCH', 'El ID no puede tener más de 11 dígitos', 'id_analysis_preparation_max_size_KO'),

    // Pruebas de Name Analysis Preparation
    Array('analysis_preparation', 'name_analysis_preparation', 3, 'Validar longitud mínima ADD', 'ADD', 'El nombre debe tener al menos 8 caracteres', 'name_analysis_preparation_min_size_KO'),
    Array('analysis_preparation', 'name_analysis_preparation', 4, 'Validar longitud máxima ADD', 'ADD', 'El nombre no puede tener más de 100 caracteres', 'name_analysis_preparation_max_size_KO'),
    Array('analysis_preparation', 'name_analysis_preparation', 5, 'Validar formato ADD', 'ADD', 'El nombre solo puede contener letras y espacios', 'name_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'name_analysis_preparation', 6, 'Validar longitud mínima EDIT', 'EDIT', 'El nombre debe tener al menos 8 caracteres', 'name_analysis_preparation_min_size_KO'),
    Array('analysis_preparation', 'name_analysis_preparation', 7, 'Validar longitud máxima EDIT', 'EDIT', 'El nombre no puede tener más de 100 caracteres', 'name_analysis_preparation_max_size_KO'),
    Array('analysis_preparation', 'name_analysis_preparation', 8, 'Validar formato EDIT', 'EDIT', 'El nombre solo puede contener letras y espacios', 'name_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'name_analysis_preparation', 9, 'Validar longitud máxima SEARCH', 'SEARCH', 'El nombre no puede tener más de 100 caracteres', 'name_analysis_preparation_max_size_KO'),
    Array('analysis_preparation', 'name_analysis_preparation', 10, 'Validar formato SEARCH', 'SEARCH', 'El nombre solo puede contener letras y espacios', 'name_analysis_preparation_format_KO'),

    // Pruebas de Description Analysis Preparation
    Array('analysis_preparation', 'description_analysis_preparation', 11, 'Validar longitud mínima ADD', 'ADD', 'La descripción debe tener al menos 80 caracteres', 'description_analysis_preparation_min_size_KO'),
    Array('analysis_preparation', 'description_analysis_preparation', 12, 'Validar longitud máxima ADD', 'ADD', 'La descripción no puede tener más de 5000 caracteres', 'description_analysis_preparation_max_size_KO'),
    Array('analysis_preparation', 'description_analysis_preparation', 13, 'Validar formato ADD', 'ADD', 'La descripción contiene caracteres inválidos', 'description_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'description_analysis_preparation', 14, 'Validar longitud mínima EDIT', 'EDIT', 'La descripción debe tener al menos 80 caracteres', 'description_analysis_preparation_min_size_KO'),
    Array('analysis_preparation', 'description_analysis_preparation', 15, 'Validar longitud máxima EDIT', 'EDIT', 'La descripción no puede tener más de 5000 caracteres', 'description_analysis_preparation_max_size_KO'),
    Array('analysis_preparation', 'description_analysis_preparation', 16, 'Validar formato EDIT', 'EDIT', 'La descripción contiene caracteres inválidos', 'description_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'description_analysis_preparation', 17, 'Validar longitud máxima SEARCH', 'SEARCH', 'La descripción no puede tener más de 5000 caracteres', 'description_analysis_preparation_max_size_KO'),
    Array('analysis_preparation', 'description_analysis_preparation', 18, 'Validar formato SEARCH', 'SEARCH', 'La descripción contiene caracteres inválidos', 'description_analysis_preparation_format_KO'),

    // Pruebas de Bibliographic Reference
    Array('analysis_preparation', 'bib_analysis_preparation', 19, 'Validar longitud mínima ADD', 'ADD', 'La referencia debe tener al menos 6 caracteres', 'bib_analysis_preparation_min_size_KO'),
    Array('analysis_preparation', 'bib_analysis_preparation', 20, 'Validar longitud máxima ADD', 'ADD', 'La referencia no puede tener más de 200 caracteres', 'bib_analysis_preparation_max_size_KO'),
    Array('analysis_preparation', 'bib_analysis_preparation', 21, 'Validar formato ADD', 'ADD', 'La referencia bibliográfica contiene caracteres inválidos', 'bib_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'bib_analysis_preparation', 22, 'Validar longitud mínima EDIT', 'EDIT', 'La referencia debe tener al menos 6 caracteres', 'bib_analysis_preparation_min_size_KO'),
    Array('analysis_preparation', 'bib_analysis_preparation', 23, 'Validar longitud máxima EDIT', 'EDIT', 'La referencia no puede tener más de 200 caracteres', 'bib_analysis_preparation_max_size_KO'),
    Array('analysis_preparation', 'bib_analysis_preparation', 24, 'Validar formato EDIT', 'EDIT', 'La referencia bibliográfica contiene caracteres inválidos', 'bib_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'bib_analysis_preparation', 25, 'Validar longitud máxima SEARCH', 'SEARCH', 'La referencia no puede tener más de 200 caracteres', 'bib_analysis_preparation_max_size_KO'),
    Array('analysis_preparation', 'bib_analysis_preparation', 26, 'Validar formato SEARCH', 'SEARCH', 'La referencia bibliográfica contiene caracteres inválidos', 'bib_analysis_preparation_format_KO'),

    // Pruebas de File
    Array('analysis_preparation', 'file_analysis_preparation', 27, 'Validar longitud máxima SEARCH', 'SEARCH', 'El nombre del archivo no puede tener más de 100 caracteres', 'file_analysis_preparation_name_max_size_KO'),    Array('analysis_preparation', 'file_analysis_preparation', 28, 'Validar formato SEARCH', 'SEARCH', 'El nombre del archivo solo puede contener letras y punto', 'file_analysis_preparation_name_format_KO'),

    // Pruebas de Nuevo File
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 29, 'Validar longitud mínima ADD', 'ADD', 'El nombre del archivo debe tener al menos 7 caracteres', 'nuevo_file_analysis_preparation_name_min_size_KO'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 30, 'Validar longitud máxima ADD', 'ADD', 'El nombre del archivo no puede tener más de 100 caracteres', 'nuevo_file_analysis_preparation_name_max_size_KO'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 31, 'Validar archivo requerido ADD', 'ADD', 'Debe seleccionar un archivo real', 'nuevo_file_analysis_preparation_no_file_KO'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 32, 'Validar tipo de archivo ADD', 'ADD', 'El archivo debe ser PDF o DOC/DOCX', 'nuevo_file_analysis_preparation_file_type_KO'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 33, 'Validar tamaño de archivo ADD', 'ADD', 'El archivo no puede superar los 2MB', 'nuevo_file_analysis_preparation_max_size_KO'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 34, 'Validar formato nombre archivo ADD', 'ADD', 'El nombre del archivo solo puede contener letras y punto', 'nuevo_file_analysis_preparation_name_format_KO'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 35, 'Validar longitud mínima EDIT', 'EDIT', 'El nombre del archivo debe tener al menos 7 caracteres', 'nuevo_file_analysis_preparation_name_min_size_KO'),    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 36, 'Validar longitud máxima EDIT', 'EDIT', 'El nombre del archivo no puede tener más de 100 caracteres', 'nuevo_file_analysis_preparation_name_max_size_KO'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 37, 'Validar tipo de archivo EDIT', 'EDIT', 'El archivo debe ser PDF o DOC/DOCX', 'nuevo_file_analysis_preparation_file_type_KO'),    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 38, 'Validar tamaño de archivo EDIT', 'EDIT', 'El archivo no puede superar los 2MB', 'nuevo_file_analysis_preparation_max_size_KO'),    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 39, 'Validar formato nombre archivo EDIT', 'EDIT', 'El nombre del archivo solo puede contener letras y punto', 'nuevo_file_analysis_preparation_name_format_KO')
);

// Definiciones de tests para project
window.project_def_tests = Array(
    // Pruebas de ID Project
    Array('project', 'id_project', 1, 'Validar formato SEARCH', 'SEARCH', 'El ID debe ser numérico', 'id_project_format_KO'),
    Array('project', 'id_project', 2, 'Validar tamaño máximo SEARCH', 'SEARCH', 'El ID no puede tener más de 11 dígitos', 'id_project_max_size_KO'),

    // Pruebas de Name Project
    Array('project', 'name_project', 3, 'Validar longitud mínima ADD', 'ADD', 'El nombre debe tener al menos 8 caracteres', 'name_project_min_size_KO'),
    Array('project', 'name_project', 4, 'Validar longitud máxima ADD', 'ADD', 'El nombre no puede tener más de 100 caracteres', 'name_project_max_size_KO'),
    Array('project', 'name_project', 5, 'Validar formato ADD', 'ADD', 'El nombre solo puede contener letras y espacios', 'name_project_format_KO'),
    Array('project', 'name_project', 6, 'Validar longitud mínima EDIT', 'EDIT', 'El nombre debe tener al menos 8 caracteres', 'name_project_min_size_KO'),
    Array('project', 'name_project', 7, 'Validar longitud máxima EDIT', 'EDIT', 'El nombre no puede tener más de 100 caracteres', 'name_project_max_size_KO'),
    Array('project', 'name_project', 8, 'Validar formato EDIT', 'EDIT', 'El nombre solo puede contener letras y espacios', 'name_project_format_KO'),
    Array('project', 'name_project', 9, 'Validar longitud máxima SEARCH', 'SEARCH', 'El nombre no puede tener más de 100 caracteres', 'name_project_max_size_KO'),
    Array('project', 'name_project', 10, 'Validar formato SEARCH', 'SEARCH', 'El nombre solo puede contener letras y espacios', 'name_project_format_KO'),

    // Pruebas de Date Fields
    Array('project', 'start_date_project', 11, 'Validar formato fecha ADD', 'ADD', 'La fecha debe estar en formato dd/mm/aaaa (ej: 15/11/2010)', 'start_date_project_format_KO'),
    Array('project', 'start_date_project', 12, 'Validar fecha válida ADD', 'ADD', 'La fecha debe ser válida', 'start_date_project_valid_KO'),
    Array('project', 'start_date_project', 13, 'Validar formato fecha EDIT', 'EDIT', 'La fecha debe estar en formato dd/mm/aaaa (ej: 15/11/2010)', 'start_date_project_format_KO'),
    Array('project', 'start_date_project', 14, 'Validar fecha válida EDIT', 'EDIT', 'La fecha debe ser válida', 'start_date_project_valid_KO'),
    Array('project', 'start_date_project', 15, 'Validar formato fecha SEARCH', 'SEARCH', 'La fecha debe estar en formato dd/mm/aaaa (ej: 15/11/2010)', 'start_date_project_format_KO'),
    Array('project', 'start_date_project', 16, 'Validar fecha válida SEARCH', 'SEARCH', 'La fecha debe ser válida', 'start_date_project_valid_KO'),

    Array('project', 'end_date_project', 17, 'Validar formato fecha fin ADD', 'ADD', 'La fecha debe estar en formato dd/mm/aaaa (ej: 15/12/2010)', 'end_date_project_format_KO'),
    Array('project', 'end_date_project', 18, 'Validar fecha fin válida ADD', 'ADD', 'La fecha debe ser válida', 'end_date_project_valid_KO'),
    Array('project', 'end_date_project', 19, 'Validar fecha fin mayor que inicio ADD', 'ADD', 'La fecha de fin debe ser posterior a la fecha de inicio', 'end_date_project_greater_than_start_KO'),
    Array('project', 'end_date_project', 20, 'Validar formato fecha fin EDIT', 'EDIT', 'La fecha debe estar en formato dd/mm/aaaa (ej: 15/12/2010)', 'end_date_project_format_KO'),
    Array('project', 'end_date_project', 21, 'Validar fecha fin válida EDIT', 'EDIT', 'La fecha debe ser válida', 'end_date_project_valid_KO'),
    Array('project', 'end_date_project', 22, 'Validar fecha fin mayor que inicio EDIT', 'EDIT', 'La fecha de fin debe ser posterior a la fecha de inicio', 'end_date_project_greater_than_start_KO'),
    Array('project', 'end_date_project', 23, 'Validar formato fecha fin SEARCH', 'SEARCH', 'La fecha debe estar en formato dd/mm/aaaa (ej: 15/12/2010)', 'end_date_project_format_KO'),
    Array('project', 'end_date_project', 24, 'Validar fecha fin válida SEARCH', 'SEARCH', 'La fecha debe ser válida', 'end_date_project_valid_KO'),

    // Pruebas de Responsable Project
    Array('project', 'responsable_project', 25, 'Validar longitud mínima ADD', 'ADD', 'El responsable debe tener al menos 6 caracteres', 'responsable_project_min_size_KO'),
    Array('project', 'responsable_project', 26, 'Validar longitud máxima ADD', 'ADD', 'El responsable no puede tener más de 60 caracteres', 'responsable_project_max_size_KO'),
    Array('project', 'responsable_project', 27, 'Validar formato ADD', 'ADD', 'El responsable solo puede contener letras, espacios, acentos y ñ', 'responsable_project_format_KO'),
    Array('project', 'responsable_project', 28, 'Validar longitud mínima EDIT', 'EDIT', 'El responsable debe tener al menos 6 caracteres', 'responsable_project_min_size_KO'),
    Array('project', 'responsable_project', 29, 'Validar longitud máxima EDIT', 'EDIT', 'El responsable no puede tener más de 60 caracteres', 'responsable_project_max_size_KO'),
    Array('project', 'responsable_project', 30, 'Validar formato EDIT', 'EDIT', 'El responsable solo puede contener letras, espacios, acentos y ñ', 'responsable_project_format_KO'),
    Array('project', 'responsable_project', 31, 'Validar longitud máxima SEARCH', 'SEARCH', 'El responsable no puede tener más de 60 caracteres', 'responsable_project_max_size_KO'),
    Array('project', 'responsable_project', 32, 'Validar formato SEARCH', 'SEARCH', 'El responsable solo puede contener letras, espacios, acentos y ñ', 'responsable_project_format_KO'),

    // Pruebas de Organization Project
    Array('project', 'organization_project', 33, 'Validar longitud mínima ADD', 'ADD', 'La organización debe tener al menos 6 caracteres', 'organization_project_min_size_KO'),
    Array('project', 'organization_project', 34, 'Validar longitud máxima ADD', 'ADD', 'La organización no puede tener más de 100 caracteres', 'organization_project_max_size_KO'),
    Array('project', 'organization_project', 35, 'Validar formato ADD', 'ADD', 'La organización solo puede contener letras, espacios, acentos y ñ', 'organization_project_format_KO'),
    Array('project', 'organization_project', 36, 'Validar longitud mínima EDIT', 'EDIT', 'La organización debe tener al menos 6 caracteres', 'organization_project_min_size_KO'),
    Array('project', 'organization_project', 37, 'Validar longitud máxima EDIT', 'EDIT', 'La organización no puede tener más de 100 caracteres', 'organization_project_max_size_KO'),
    Array('project', 'organization_project', 38, 'Validar formato EDIT', 'EDIT', 'La organización solo puede contener letras, espacios, acentos y ñ', 'organization_project_format_KO'),
    Array('project', 'organization_project', 39, 'Validar longitud máxima SEARCH', 'SEARCH', 'La organización no puede tener más de 100 caracteres', 'organization_project_max_size_KO'),
    Array('project', 'organization_project', 40, 'Validar formato SEARCH', 'SEARCH', 'La organización solo puede contener letras, espacios, acentos y ñ', 'organization_project_format_KO'),

    // Pruebas de Description Project
    Array('project', 'description_project', 41, 'Validar longitud mínima ADD', 'ADD', 'La descripción debe tener al menos 30 caracteres', 'description_project_min_size_KO'),
    Array('project', 'description_project', 42, 'Validar longitud máxima ADD', 'ADD', 'La descripción no puede tener más de 500 caracteres', 'description_project_max_size_KO'),
    Array('project', 'description_project', 43, 'Validar formato ADD', 'ADD', 'La descripción contiene caracteres inválidos (Solo admite ASCII)', 'description_project_format_KO'),
    Array('project', 'description_project', 44, 'Validar longitud mínima EDIT', 'EDIT', 'La descripción debe tener al menos 30 caracteres', 'description_project_min_size_KO'),
    Array('project', 'description_project', 45, 'Validar longitud máxima EDIT', 'EDIT', 'La descripción no puede tener más de 500 caracteres', 'description_project_max_size_KO'),
    Array('project', 'description_project', 46, 'Validar formato EDIT', 'EDIT', 'La descripción contiene caracteres inválidos (Solo admite ASCII)', 'description_project_format_KO'),
    Array('project', 'description_project', 47, 'Validar longitud máxima SEARCH', 'SEARCH', 'La descripción no puede tener más de 500 caracteres', 'description_project_max_size_KO'),
    Array('project', 'description_project', 48, 'Validar formato SEARCH', 'SEARCH', 'La descripción contiene caracteres inválidos (Solo admite ASCII)', 'description_project_format_KO'),    
    // Pruebas de File Project
    Array('project', 'nuevo_file_project', 49, 'Validar tamaño máximo archivo ADD', 'ADD', 'El archivo no puede superar los 2MB', 'nuevo_file_project_max_size_KO'),
    Array('project', 'nuevo_file_project', 50, 'Validar tipo archivo ADD', 'ADD', 'El archivo debe ser PDF o DOC/DOCX', 'nuevo_file_project_file_type_KO'),
    Array('project', 'nuevo_file_project', 51, 'Validar longitud mínima nombre ADD', 'ADD', 'El nombre del archivo debe tener al menos 6 caracteres', 'nuevo_file_project_name_min_size_KO'),
    Array('project', 'nuevo_file_project', 52, 'Validar longitud máxima nombre ADD', 'ADD', 'El nombre del archivo no puede tener más de 100 caracteres', 'nuevo_file_project_name_max_size_KO'),
    Array('project', 'nuevo_file_project', 53, 'Validar formato nombre archivo ADD', 'ADD', 'El nombre del archivo solo puede contener letras y punto', 'nuevo_file_project_name_format_KO'),
    Array('project', 'nuevo_file_project', 54, 'Validar archivo requerido ADD', 'ADD', 'Debe seleccionar un archivo real', 'nuevo_file_project_no_file_KO'),
    Array('project', 'nuevo_file_project', 55, 'Validar longitud mínima nombre EDIT', 'EDIT', 'El nombre del archivo debe tener al menos 6 caracteres', 'nuevo_file_project_name_min_size_KO'),
    Array('project', 'nuevo_file_project', 56, 'Validar longitud máxima nombre EDIT', 'EDIT', 'El nombre del archivo no puede tener más de 100 caracteres', 'nuevo_file_project_name_max_size_KO'),
    Array('project', 'nuevo_file_project', 57, 'Validar tipo archivo EDIT', 'EDIT', 'El archivo debe ser PDF o DOC/DOCX', 'nuevo_file_project_file_type_KO'),
    Array('project', 'nuevo_file_project', 58, 'Validar tamaño máximo archivo EDIT', 'EDIT', 'El archivo no puede superar los 2MB', 'nuevo_file_project_max_size_KO'),
    Array('project', 'nuevo_file_project', 59, 'Validar formato nombre archivo EDIT', 'EDIT', 'El nombre del archivo solo puede contener letras y punto', 'nuevo_file_project_name_format_KO'),

    // Pruebas de Code Project
    Array('project', 'code_project', 60, 'Validar longitud mínima ADD', 'ADD', 'El código debe tener al menos 6 caracteres', 'code_project_min_size_KO'),
    Array('project', 'code_project', 61, 'Validar longitud máxima ADD', 'ADD', 'El código no puede tener más de 50 caracteres', 'code_project_max_size_KO'),
    Array('project', 'code_project', 62, 'Validar formato ADD', 'ADD', 'El código contiene caracteres inválidos', 'code_project_format_KO'),
    Array('project', 'code_project', 63, 'Validar longitud mínima EDIT', 'EDIT', 'El código debe tener al menos 6 caracteres', 'code_project_min_size_KO'),
    Array('project', 'code_project', 64, 'Validar longitud máxima EDIT', 'EDIT', 'El código no puede tener más de 50 caracteres', 'code_project_max_size_KO'),
    Array('project', 'code_project', 65, 'Validar formato EDIT', 'EDIT', 'El código contiene caracteres inválidos', 'code_project_format_KO'),
    Array('project', 'code_project', 66, 'Validar longitud máxima SEARCH', 'SEARCH', 'El código no puede tener más de 50 caracteres', 'code_project_max_size_KO'),
    Array('project', 'code_project', 67, 'Validar formato SEARCH', 'SEARCH', 'El código contiene caracteres inválidos', 'code_project_format_KO'),

    // Pruebas de Acronym Project
    Array('project', 'acronym_project', 68, 'Validar longitud mínima ADD', 'ADD', 'El acrónimo debe tener al menos 6 caracteres', 'acronym_project_min_size_KO'),
    Array('project', 'acronym_project', 69, 'Validar longitud máxima ADD', 'ADD', 'El acrónimo no puede tener más de 15 caracteres', 'acronym_project_max_size_KO'),
    Array('project', 'acronym_project', 70, 'Validar formato ADD', 'ADD', 'El acrónimo contiene caracteres inválidos', 'acronym_project_format_KO'),
    Array('project', 'acronym_project', 71, 'Validar longitud mínima EDIT', 'EDIT', 'El acrónimo debe tener al menos 6 caracteres', 'acronym_project_min_size_KO'),
    Array('project', 'acronym_project', 72, 'Validar longitud máxima EDIT', 'EDIT', 'El acrónimo no puede tener más de 15 caracteres', 'acronym_project_max_size_KO'),
    Array('project', 'acronym_project', 73, 'Validar formato EDIT', 'EDIT', 'El acrónimo contiene caracteres inválidos', 'acronym_project_format_KO'),
    Array('project', 'acronym_project', 74, 'Validar longitud máxima SEARCH', 'SEARCH', 'El acrónimo no puede tener más de 15 caracteres', 'acronym_project_max_size_KO'),
    Array('project', 'acronym_project', 75, 'Validar formato SEARCH', 'SEARCH', 'El acrónimo contiene caracteres inválidos', 'acronym_project_format_KO'),    // Pruebas de ID Sampling Methodology
    Array('project', 'id_sampling_methodology', 76, 'Validar longitud mínima ADD', 'ADD', 'El ID de metodología debe tener al menos 1 dígito', 'id_sampling_methodology_min_size_KO'),
    Array('project', 'id_sampling_methodology', 77, 'Validar longitud máxima ADD', 'ADD', 'El ID de metodología no puede tener más de 11 dígitos', 'id_sampling_methodology_max_size_KO'),
    Array('project', 'id_sampling_methodology', 78, 'Validar formato ADD', 'ADD', 'El ID de metodología debe ser numérico', 'id_sampling_methodology_format_KO'),
    Array('project', 'id_sampling_methodology', 79, 'Validar longitud mínima EDIT', 'EDIT', 'El ID de metodología debe tener al menos 1 dígito', 'id_sampling_methodology_min_size_KO'),
    Array('project', 'id_sampling_methodology', 80, 'Validar longitud máxima EDIT', 'EDIT', 'El ID de metodología no puede tener más de 11 dígitos', 'id_sampling_methodology_max_size_KO'),
    Array('project', 'id_sampling_methodology', 81, 'Validar formato EDIT', 'EDIT', 'El ID de metodología debe ser numérico', 'id_sampling_methodology_format_KO'),
    Array('project', 'id_sampling_methodology', 82, 'Validar longitud máxima SEARCH', 'SEARCH', 'El ID de metodología no puede tener más de 11 dígitos', 'id_sampling_methodology_max_size_KO'),
    Array('project', 'id_sampling_methodology', 83, 'Validar formato SEARCH', 'SEARCH', 'El ID de metodología debe ser numérico', 'id_sampling_methodology_format_KO')
);

/**
 * TESTS REALES CON VALORES
 * Estos contienen los datos específicos para ejecutar las pruebas
 */

/**
 * Tests para Project
 */

/**
 * Pruebas para campos que no son de tipo file
 */
window.project_tests = Array(
    // Pruebas ID Project
    Array('project', 'id_project', 1, 1, 'SEARCH', 'abc123', '', 'id_project_format_KO'),
    Array('project', 'id_project', 1, 2, 'SEARCH', '123', '', 'OK'),
    Array('project', 'id_project', 2, 3, 'SEARCH', '123456789012', '', 'id_project_max_size_KO'),
    Array('project', 'id_project', 2, 4, 'SEARCH', '12345', '', 'OK'),

    // Pruebas Name Project
    Array('project', 'name_project', 3, 5, 'ADD', 'short', '', 'name_project_min_size_KO'),
    Array('project', 'name_project', 3, 6, 'ADD', 'Valid Project Name Test', '', 'OK'),
    Array('project', 'name_project', 4, 7, 'ADD', 'a'.repeat(101), '', 'name_project_max_size_KO'),
    Array('project', 'name_project', 4, 8, 'ADD', 'Valid Project Name', '', 'OK'),
    Array('project', 'name_project', 5, 9, 'ADD', 'Invalid@Name123', '', 'name_project_format_KO'),
    Array('project', 'name_project', 5, 10, 'ADD', 'Valid Project Name', '', 'OK'),
    Array('project', 'name_project', 6, 11, 'EDIT', 'short', '', 'name_project_min_size_KO'),
    Array('project', 'name_project', 6, 12, 'EDIT', 'Valid Project Name Test', '', 'OK'),
    Array('project', 'name_project', 7, 13, 'EDIT', 'a'.repeat(101), '', 'name_project_max_size_KO'),
    Array('project', 'name_project', 7, 14, 'EDIT', 'Valid Project Name', '', 'OK'),
    Array('project', 'name_project', 8, 15, 'EDIT', 'Invalid@Name123', '', 'name_project_format_KO'),
    Array('project', 'name_project', 8, 16, 'EDIT', 'Valid Project Name', '', 'OK'),
    Array('project', 'name_project', 9, 17, 'SEARCH', 'a'.repeat(101), '', 'name_project_max_size_KO'),
    Array('project', 'name_project', 9, 18, 'SEARCH', 'Valid', '', 'OK'),
    Array('project', 'name_project', 10, 19, 'SEARCH', 'Invalid@123', '', 'name_project_format_KO'),
    Array('project', 'name_project', 10, 20, 'SEARCH', 'Valid Name', '', 'OK'),    // Pruebas Start Date Project
    Array('project', 'start_date_project', 11, 21, 'ADD', '2025/01/01', '', 'start_date_project_format_KO'),
    Array('project', 'start_date_project', 11, 22, 'ADD', '01/01/2025', '', 'OK'),
    Array('project', 'start_date_project', 12, 23, 'ADD', '32/13/2025', '', 'start_date_project_valid_KO'),
    Array('project', 'start_date_project', 12, 24, 'ADD', '01/01/2025', '', 'OK'),
    Array('project', 'start_date_project', 13, 25, 'EDIT', '2025/01/01', '', 'start_date_project_format_KO'),
    Array('project', 'start_date_project', 13, 26, 'EDIT', '01/01/2025', '', 'OK'),
    Array('project', 'start_date_project', 14, 27, 'EDIT', '32/13/2025', '', 'start_date_project_valid_KO'),
    Array('project', 'start_date_project', 14, 28, 'EDIT', '01/01/2025', '', 'OK'),
    Array('project', 'start_date_project', 15, 29, 'SEARCH', '2025/01/01', '', 'start_date_project_format_KO'),
    Array('project', 'start_date_project', 15, 30, 'SEARCH', '01/01/2025', '', 'OK'),
    Array('project', 'start_date_project', 16, 31, 'SEARCH', '32/13/2025', '', 'start_date_project_valid_KO'),
    Array('project', 'start_date_project', 16, 32, 'SEARCH', '01/01/2025', '', 'OK'),

    // Pruebas End Date Project
    Array('project', 'end_date_project', 17, 33, 'ADD', '2025/12/31', '', 'end_date_project_format_KO'),
    Array('project', 'end_date_project', 17, 34, 'ADD', '31/12/2025', '', 'OK'),
    Array('project', 'end_date_project', 18, 35, 'ADD', '32/13/2025', '', 'end_date_project_valid_KO'),
    Array('project', 'end_date_project', 18, 36, 'ADD', '31/12/2025', '', 'OK'),
    Array('project', 'end_date_project', 19, 37, 'ADD', '31/12/2020', {'start_date_project': '01/01/2025'}, 'end_date_project_greater_than_start_KO'),
    Array('project', 'end_date_project', 19, 38, 'ADD', '31/12/2025', {'start_date_project': '01/01/2025'}, 'OK'),
    Array('project', 'end_date_project', 20, 39, 'EDIT', '2025/12/31', '', 'end_date_project_format_KO'),
    Array('project', 'end_date_project', 20, 40, 'EDIT', '31/12/2025', '', 'OK'),
    Array('project', 'end_date_project', 21, 41, 'EDIT', '32/13/2025', '', 'end_date_project_valid_KO'),
    Array('project', 'end_date_project', 21, 42, 'EDIT', '31/12/2025', '', 'OK'),
    Array('project', 'end_date_project', 22, 43, 'EDIT', '01/01/2020', {'start_date_project': '01/01/2025'}, 'end_date_project_greater_than_start_KO'),
    Array('project', 'end_date_project', 22, 44, 'EDIT', '31/12/2025', {'start_date_project': '01/01/2025'}, 'OK'),
    Array('project', 'end_date_project', 23, 45, 'SEARCH', '2025/12/31', '', 'end_date_project_format_KO'),
    Array('project', 'end_date_project', 23, 46, 'SEARCH', '31/12/2025', '', 'OK'),
    Array('project', 'end_date_project', 24, 47, 'SEARCH', '32/13/2025', '', 'end_date_project_valid_KO'),
    Array('project', 'end_date_project', 24, 48, 'SEARCH', '31/12/2025', '', 'OK'),

    // Pruebas Responsable Project
    Array('project', 'responsable_project', 25, 49, 'ADD', 'short', '', 'responsable_project_min_size_KO'),
    Array('project', 'responsable_project', 25, 50, 'ADD', 'Valid Responsable', '', 'OK'),
    Array('project', 'responsable_project', 26, 51, 'ADD', 'a'.repeat(61), '', 'responsable_project_max_size_KO'),
    Array('project', 'responsable_project', 26, 52, 'ADD', 'Valid Responsable', '', 'OK'),
    Array('project', 'responsable_project', 27, 53, 'ADD', 'Invalid@123', '', 'responsable_project_format_KO'),
    Array('project', 'responsable_project', 27, 54, 'ADD', 'Valid Responsable', '', 'OK'),
    Array('project', 'responsable_project', 28, 55, 'EDIT', 'short', '', 'responsable_project_min_size_KO'),
    Array('project', 'responsable_project', 28, 56, 'EDIT', 'Valid Responsable', '', 'OK'),
    Array('project', 'responsable_project', 29, 57, 'EDIT', 'a'.repeat(61), '', 'responsable_project_max_size_KO'),
    Array('project', 'responsable_project', 29, 58, 'EDIT', 'Valid Responsable', '', 'OK'),
    Array('project', 'responsable_project', 30, 59, 'EDIT', 'Invalid@123', '', 'responsable_project_format_KO'),
    Array('project', 'responsable_project', 30, 60, 'EDIT', 'Valid Responsable', '', 'OK'),
    Array('project', 'responsable_project', 31, 61, 'SEARCH', 'a'.repeat(61), '', 'responsable_project_max_size_KO'),
    Array('project', 'responsable_project', 31, 62, 'SEARCH', 'Valid Responsable', '', 'OK'),
    Array('project', 'responsable_project', 32, 63, 'SEARCH', 'Invalid@123', '', 'responsable_project_format_KO'),
    Array('project', 'responsable_project', 32, 64, 'SEARCH', 'Valid Responsable', '', 'OK'),

    // Pruebas Organization Project
    Array('project', 'organization_project', 33, 65, 'ADD', 'short', '', 'organization_project_min_size_KO'),
    Array('project', 'organization_project', 33, 66, 'ADD', 'Valid Organization', '', 'OK'),
    Array('project', 'organization_project', 34, 67, 'ADD', 'a'.repeat(101), '', 'organization_project_max_size_KO'),
    Array('project', 'organization_project', 34, 68, 'ADD', 'Valid Organization', '', 'OK'),
    Array('project', 'organization_project', 35, 69, 'ADD', 'Invalid@123', '', 'organization_project_format_KO'),
    Array('project', 'organization_project', 35, 70, 'ADD', 'Valid Organization', '', 'OK'),
    Array('project', 'organization_project', 36, 71, 'EDIT', 'short', '', 'organization_project_min_size_KO'),
    Array('project', 'organization_project', 36, 72, 'EDIT', 'Valid Organization', '', 'OK'),
    Array('project', 'organization_project', 37, 73, 'EDIT', 'a'.repeat(101), '', 'organization_project_max_size_KO'),
    Array('project', 'organization_project', 37, 74, 'EDIT', 'Valid Organization', '', 'OK'),
    Array('project', 'organization_project', 38, 75, 'EDIT', 'Invalid@123', '', 'organization_project_format_KO'),
    Array('project', 'organization_project', 38, 76, 'EDIT', 'Valid Organization', '', 'OK'),
    Array('project', 'organization_project', 39, 77, 'SEARCH', 'a'.repeat(101), '', 'organization_project_max_size_KO'),
    Array('project', 'organization_project', 39, 78, 'SEARCH', 'Valid Organization', '', 'OK'),
    Array('project', 'organization_project', 40, 79, 'SEARCH', 'Invalid@123', '', 'organization_project_format_KO'),
    Array('project', 'organization_project', 40, 80, 'SEARCH', 'Valid Organization', '', 'OK'),

    // Pruebas Description Project
    Array('project', 'description_project', 41, 81, 'ADD', 'short description', '', 'description_project_min_size_KO'),
    Array('project', 'description_project', 41, 82, 'ADD', 'This is a valid description with at least thirty characters long', '', 'OK'),
    Array('project', 'description_project', 42, 83, 'ADD', 'a'.repeat(501), '', 'description_project_max_size_KO'),
    Array('project', 'description_project', 42, 84, 'ADD', 'This is a valid description with at least thirty characters long', '', 'OK'),
    Array('project', 'description_project', 43, 85, 'ADD', 'IIIIIIIIII€IIIInvalid@Description123', '', 'description_project_format_KO'),
    Array('project', 'description_project', 43, 86, 'ADD', 'This is a valid description with at least thirty characters long', '', 'OK'),
    Array('project', 'description_project', 44, 87, 'EDIT', 'short', '', 'description_project_min_size_KO'),
    Array('project', 'description_project', 44, 88, 'EDIT', 'This is a valid description with at least thirty characters long', '', 'OK'),
    Array('project', 'description_project', 45, 89, 'EDIT', 'a'.repeat(501), '', 'description_project_max_size_KO'),
    Array('project', 'description_project', 45, 90, 'EDIT', 'This is a valid description with at least thirty characters long', '', 'OK'),
    Array('project', 'description_project', 46, 91, 'EDIT', 'IIIIII€IIIIIIIInvalidInvalid@Description123', '', 'description_project_format_KO'),
    Array('project', 'description_project', 46, 92, 'EDIT', 'This is a valid description with at least thirty characters long', '', 'OK'),
    Array('project', 'description_project', 47, 93, 'SEARCH', 'a'.repeat(501), '', 'description_project_max_size_KO'),
    Array('project', 'description_project', 47, 94, 'SEARCH', 'This is a valid description with at least thirty characters long', '', 'OK'),    
    Array('project', 'description_project', 48, 95, 'SEARCH', 'Inval€id@Description123', '', 'description_project_format_KO'),
    Array('project', 'description_project', 48, 96, 'SEARCH', 'This is a valid description with at least thirty characters long', '', 'OK'),
    
    // Pruebas Code Project
    Array('project', 'code_project', 60, 97, 'ADD', 'short', '', 'code_project_min_size_KO'),
    Array('project', 'code_project', 60, 98, 'ADD', 'Code123', '', 'OK'),
    Array('project', 'code_project', 61, 99, 'ADD', 'a'.repeat(21), '', 'code_project_max_size_KO'),
    Array('project', 'code_project', 61, 100, 'ADD', 'ValidCode', '', 'OK'),
    Array('project', 'code_project', 62, 101, 'ADD', 'Invalid@Code', '', 'code_project_format_KO'),
    Array('project', 'code_project', 62, 102, 'ADD', 'Valid-Code', '', 'OK'),
    Array('project', 'code_project', 63, 103, 'EDIT', 'short', '', 'code_project_min_size_KO'),
    Array('project', 'code_project', 63, 104, 'EDIT', 'Code123', '', 'OK'),
    Array('project', 'code_project', 64, 105, 'EDIT', 'a'.repeat(21), '', 'code_project_max_size_KO'),
    Array('project', 'code_project', 64, 106, 'EDIT', 'ValidCode', '', 'OK'),
    Array('project', 'code_project', 65, 107, 'EDIT', 'Invalid@Code', '', 'code_project_format_KO'),
    Array('project', 'code_project', 65, 108, 'EDIT', 'Valid-Code', '', 'OK'),
    Array('project', 'code_project', 66, 109, 'SEARCH', 'a'.repeat(21), '', 'code_project_max_size_KO'),
    Array('project', 'code_project', 66, 110, 'SEARCH', 'ValidCode', '', 'OK'),
    Array('project', 'code_project', 67, 111, 'SEARCH', 'Invalid@Code', '', 'code_project_format_KO'),
    Array('project', 'code_project', 67, 112, 'SEARCH', 'Valid-Code', '', 'OK'),

    // Pruebas Acronym Project
    Array('project', 'acronym_project', 68, 113, 'ADD', 'AB', '', 'acronym_project_min_size_KO'),
    Array('project', 'acronym_project', 68, 114, 'ADD', 'ABCDEF', '', 'OK'),
    Array('project', 'acronym_project', 69, 113,'ADD','El acrónimo no puede tener más de 15 caracteres','', 'acronym_project_max_size_KO'),
    Array('project', 'acronym_project', 69, 116, 'ADD', 'ACRONYM', '', 'OK'),
    Array('project', 'acronym_project', 70, 117, 'ADD', 'ACR123', '', 'acronym_project_format_KO'),
    Array('project', 'acronym_project', 70, 118, 'ADD', 'ACRONYM', '', 'OK'),
    Array('project', 'acronym_project', 71, 119, 'EDIT', 'AB', '', 'acronym_project_min_size_KO'),
    Array('project', 'acronym_project', 71, 120, 'EDIT', 'ABCDEF', '', 'OK'),
    Array('project', 'acronym_project', 72, 121, 'EDIT', 'a'.repeat(16), '', 'acronym_project_max_size_KO'),
    Array('project', 'acronym_project', 72, 122, 'EDIT', 'ACRONYM', '', 'OK'),
    Array('project', 'acronym_project', 73, 123, 'EDIT', 'ACR123', '', 'acronym_project_format_KO'),
    Array('project', 'acronym_project', 73, 124, 'EDIT', 'ACRONYM', '', 'OK'),
    Array('project', 'acronym_project', 74, 125, 'SEARCH', 'a'.repeat(16), '', 'acronym_project_max_size_KO'),
    Array('project', 'acronym_project', 74, 126, 'SEARCH', 'ACRONYM', '', 'OK'),
    Array('project', 'acronym_project', 75, 127, 'SEARCH', 'ACR123', '', 'acronym_project_format_KO'),
    Array('project', 'acronym_project', 75, 128, 'SEARCH', 'ACRONYM', '', 'OK'),

    // Pruebas ID Sampling Methodology
    Array('project', 'id_sampling_methodology', 76, 129, 'ADD', '', '', 'id_sampling_methodology_min_size_KO'),
    Array('project', 'id_sampling_methodology', 76, 130, 'ADD', '123', '', 'OK'),
    Array('project', 'id_sampling_methodology', 77, 131, 'ADD', '123456789012', '', 'id_sampling_methodology_max_size_KO'),
    Array('project', 'id_sampling_methodology', 77, 132, 'ADD', '12345', '', 'OK'),
    Array('project', 'id_sampling_methodology', 78, 133, 'ADD', 'abc123', '', 'id_sampling_methodology_format_KO'),
    Array('project', 'id_sampling_methodology', 78, 134, 'ADD', '123', '', 'OK'),
    Array('project', 'id_sampling_methodology', 79, 135, 'EDIT', '', '', 'id_sampling_methodology_min_size_KO'),
    Array('project', 'id_sampling_methodology', 79, 136, 'EDIT', '123', '', 'OK'),
    Array('project', 'id_sampling_methodology', 80, 137, 'EDIT', '123456789012', '', 'id_sampling_methodology_max_size_KO'),
    Array('project', 'id_sampling_methodology', 80, 138, 'EDIT', '12345', '', 'OK'),
    Array('project', 'id_sampling_methodology', 81, 139, 'EDIT', 'abc123', '', 'id_sampling_methodology_format_KO'),
    Array('project', 'id_sampling_methodology', 81, 140, 'EDIT', '123', '', 'OK'),
    Array('project', 'id_sampling_methodology', 82, 141, 'SEARCH', '123456789012', '', 'id_sampling_methodology_max_size_KO'),
    Array('project', 'id_sampling_methodology', 82, 142, 'SEARCH', '12345', '', 'OK'),
    Array('project', 'id_sampling_methodology', 83, 143, 'SEARCH', 'abc123', '', 'id_sampling_methodology_format_KO'),
    Array('project', 'id_sampling_methodology', 83, 144, 'SEARCH', '123', '', 'OK'),

);

/**
 * Pruebas para campos de tipo file de Project
 */
window.project_tests_files = Array(
    // Pruebas de nuevo_file_project - validación max_size_file (tamaño de archivo en bytes)
    Array('project', 'nuevo_file_project', 49, 97, 'ADD', 'max_size_file', 3000001, 'nuevo_file_project_max_size_KO'),
    Array('project', 'nuevo_file_project', 49, 98, 'ADD', 'max_size_file', 1000000, 'OK'),
    
    // Pruebas de nuevo_file_project - validación file_type  
    Array('project', 'nuevo_file_project', 50, 99, 'ADD', 'file_type', 'text/plain', 'nuevo_file_project_file_type_KO'),
    Array('project', 'nuevo_file_project', 50, 100, 'ADD', 'file_type', 'application/pdf', 'OK'),
    
    // Pruebas de nuevo_file_project - validación min_size
    Array('project', 'nuevo_file_project', 51, 101, 'ADD', 'min_size', 5, 'nuevo_file_project_name_min_size_KO'),
    Array('project', 'nuevo_file_project', 51, 102, 'ADD', 'min_size', 10, 'OK'),
    
    // Pruebas de nuevo_file_project - validación max_size (longitud del nombre de archivo)
    Array('project', 'nuevo_file_project', 52, 103, 'ADD', 'max_size', 'a'.repeat(101) + '.pdf', 'nuevo_file_project_name_max_size_KO'),
    Array('project', 'nuevo_file_project', 52, 104, 'ADD', 'max_size', 'validfile.pdf', 'OK'),
    
    // Pruebas de nuevo_file_project - validación format_name_file
    Array('project', 'nuevo_file_project', 53, 105, 'ADD', 'format_name_file', 'invalid@file.pdf', 'nuevo_file_project_name_format_KO'),
    Array('project', 'nuevo_file_project', 53, 106, 'ADD', 'format_name_file', 'validfile.pdf', 'OK'),
    
    // Pruebas de nuevo_file_project - validación no_file
    Array('project', 'nuevo_file_project', 54, 107, 'ADD', 'no_file', null, 'nuevo_file_project_no_file_KO'),
    Array('project', 'nuevo_file_project', 54, 108, 'ADD', 'no_file', 'validfile.pdf', 'OK'),
    
    // Pruebas de nuevo_file_project - EDIT validaciones
    Array('project', 'nuevo_file_project', 55, 109, 'EDIT', 'min_size', 5, 'nuevo_file_project_name_min_size_KO'),
    Array('project', 'nuevo_file_project', 55, 110, 'EDIT', 'min_size', 10, 'OK'),
    Array('project', 'nuevo_file_project', 56, 111, 'EDIT', 'max_size', 'a'.repeat(101) + '.pdf', 'nuevo_file_project_name_max_size_KO'),
    Array('project', 'nuevo_file_project', 56, 112, 'EDIT', 'max_size', 'validfile.pdf', 'OK'),
    Array('project', 'nuevo_file_project', 57, 113, 'EDIT', 'file_type', 'text/plain', 'nuevo_file_project_file_type_KO'),
    Array('project', 'nuevo_file_project', 57, 114, 'EDIT', 'file_type', 'application/pdf', 'OK'),
    Array('project', 'nuevo_file_project', 58, 115, 'EDIT', 'max_size_file', 3000001, 'nuevo_file_project_max_size_KO'),
    Array('project', 'nuevo_file_project', 58, 116, 'EDIT', 'max_size_file', 1000000, 'OK'),
    Array('project', 'nuevo_file_project', 59, 117, 'EDIT', 'format_name_file', 'invalid@file.pdf', 'nuevo_file_project_name_format_KO'),
    Array('project', 'nuevo_file_project', 59, 118, 'EDIT', 'format_name_file', 'validfile.pdf', 'OK')
);

/**
 * Tests para Characteristic
 */

/**
 * Pruebas para campos que no son de tipo file
 */
window.characteristic_tests = Array(
    // Pruebas ID Characteristic
    Array('characteristic', 'id_characteristic', 1, 1, 'SEARCH', 'abc123', '', 'id_characteristic_format_KO'),
    Array('characteristic', 'id_characteristic', 1, 2, 'SEARCH', '123', '', 'OK'),
    Array('characteristic', 'id_characteristic', 2, 3, 'SEARCH', '123456789012', '', 'id_characteristic_max_size_KO'),
    Array('characteristic', 'id_characteristic', 2, 4, 'SEARCH', '12345', '', 'OK'),

    // Pruebas Name Characteristic
    Array('characteristic', 'name_characteristic', 3, 5, 'ADD', 'short', '', 'name_characteristic_min_size_KO'),
    Array('characteristic', 'name_characteristic', 3, 6, 'ADD', 'Valid Characteristic Name', '', 'OK'),
    Array('characteristic', 'name_characteristic', 4, 7, 'ADD', 'a'.repeat(101), '', 'name_characteristic_max_size_KO'),
    Array('characteristic', 'name_characteristic', 4, 8, 'ADD', 'Valid Name', '', 'OK'),
    Array('characteristic', 'name_characteristic', 5, 9, 'ADD', 'Invalid@Name123', '', 'name_characteristic_format_KO'),
    Array('characteristic', 'name_characteristic', 5, 10, 'ADD', 'Valid Name', '', 'OK'),
    Array('characteristic', 'name_characteristic', 6, 11, 'EDIT', 'short', '', 'name_characteristic_min_size_KO'),
    Array('characteristic', 'name_characteristic', 6, 12, 'EDIT', 'Valid Characteristic Name', '', 'OK'),
    Array('characteristic', 'name_characteristic', 7, 13, 'EDIT', 'a'.repeat(101), '', 'name_characteristic_max_size_KO'),
    Array('characteristic', 'name_characteristic', 7, 14, 'EDIT', 'Valid Name', '', 'OK'),
    Array('characteristic', 'name_characteristic', 8, 15, 'EDIT', 'Invalid@Name123', '', 'name_characteristic_format_KO'),
    Array('characteristic', 'name_characteristic', 8, 16, 'EDIT', 'Valid Name', '', 'OK'),
    Array('characteristic', 'name_characteristic', 9, 17, 'SEARCH', 'a'.repeat(101), '', 'name_characteristic_max_size_KO'),
    Array('characteristic', 'name_characteristic', 9, 18, 'SEARCH', 'Valid', '', 'OK'),
    Array('characteristic', 'name_characteristic', 10, 19, 'SEARCH', 'Invalid@123', '', 'name_characteristic_format_KO'),
    Array('characteristic', 'name_characteristic', 10, 20, 'SEARCH', 'Valid Name', '', 'OK'),

    // Pruebas Description Characteristic
    Array('characteristic', 'description_characteristic', 11, 21, 'ADD', 'short description', '', 'description_characteristic_min_size_KO'),
    Array('characteristic', 'description_characteristic', 11, 22, 'ADD', 'a'.repeat(80), '', 'OK'),
    Array('characteristic', 'description_characteristic', 12, 23, 'ADD', 'a'.repeat(5001), '', 'description_characteristic_max_size_KO'),
    Array('characteristic', 'description_characteristic', 12, 24, 'ADD', 'a'.repeat(80) + ' Valid Description Content', '', 'OK'),
    Array('characteristic', 'description_characteristic', 13, 25, 'ADD', 'a'.repeat(80) + ' Invalid@Description123', '', 'description_characteristic_format_KO'),
    Array('characteristic', 'description_characteristic', 13, 26, 'ADD', 'a'.repeat(80) + ' Valid Description Content', '', 'OK'),
    Array('characteristic', 'description_characteristic', 14, 27, 'EDIT', 'short', '', 'description_characteristic_min_size_KO'),
    Array('characteristic', 'description_characteristic', 14, 28, 'EDIT', 'a'.repeat(80), '', 'OK'),
    Array('characteristic', 'description_characteristic', 15, 29, 'EDIT', 'a'.repeat(5001), '', 'description_characteristic_max_size_KO'),
    Array('characteristic', 'description_characteristic', 15, 30, 'EDIT', 'a'.repeat(80) + ' Valid Description Content', '', 'OK'),
    Array('characteristic', 'description_characteristic', 16, 31, 'EDIT', 'a'.repeat(80) + ' Invalid@Description123', '', 'description_characteristic_format_KO'),
    Array('characteristic', 'description_characteristic', 16, 32, 'EDIT', 'a'.repeat(80) + ' Valid Description Content', '', 'OK'),
    Array('characteristic', 'description_characteristic', 17, 33, 'SEARCH', 'a'.repeat(5001), '', 'description_characteristic_max_size_KO'),
    Array('characteristic', 'description_characteristic', 17, 34, 'SEARCH', 'Valid Description', '', 'OK'),
    Array('characteristic', 'description_characteristic', 18, 35, 'SEARCH', 'Invalid@Description123', '', 'description_characteristic_format_KO'),
    Array('characteristic', 'description_characteristic', 18, 36, 'SEARCH', 'Valid Description', '', 'OK'),

    // Pruebas Bibliographic Reference
    Array('characteristic', 'bibref_characteristic', 19, 37, 'ADD', 'short', '', 'bibref_characteristic_min_size_KO'),
    Array('characteristic', 'bibref_characteristic', 19, 38, 'ADD', 'Valid Reference Test', '', 'OK'),
    Array('characteristic', 'bibref_characteristic', 20, 39, 'ADD', 'a'.repeat(300),'', 'bibref_characteristic_max_size_KO'),
    Array('characteristic', 'bibref_characteristic', 20, 40, 'ADD', 'Valid Reference Test', '', 'OK'),
    Array('characteristic', 'bibref_characteristic', 21, 41, 'ADD', 'Invalid$Reference', '', 'bibref_characteristic_format_KO'),
    Array('characteristic', 'bibref_characteristic', 21, 42, 'ADD', 'Valid Reference Test', '', 'OK'),
    Array('characteristic', 'bibref_characteristic', 22, 43, 'EDIT', 'short', '', 'bibref_characteristic_min_size_KO'),
    Array('characteristic', 'bibref_characteristic', 22, 44, 'EDIT', 'Valid Reference Test', '', 'OK'),
    Array('characteristic', 'bibref_characteristic', 23, 45, 'EDIT', 'a'.repeat(201), '', 'bibref_characteristic_max_size_KO'),
    Array('characteristic', 'bibref_characteristic', 23, 46, 'EDIT', 'Valid Reference Test', '', 'OK'),
    Array('characteristic', 'bibref_characteristic', 24, 47, 'EDIT', 'Invalid$Reference', '', 'bibref_characteristic_format_KO'),
    Array('characteristic', 'bibref_characteristic', 24, 48, 'EDIT', 'Valid Reference Test', '', 'OK'),
    Array('characteristic', 'bibref_characteristic', 25, 49, 'SEARCH', 'a'.repeat(201), '', 'bibref_characteristic_max_size_KO'),
    Array('characteristic', 'bibref_characteristic', 25, 50, 'SEARCH', 'Valid Reference Test', '', 'OK'),
    Array('characteristic', 'bibref_characteristic', 26, 51, 'SEARCH', 'Invalid$Reference', '', 'bibref_characteristic_format_KO'),    Array('characteristic', 'bibref_characteristic', 26, 52, 'SEARCH', 'Valid Reference, Study', '', 'OK'),
    
    // Pruebas File Characteristic (campo de texto)
    Array('characteristic', 'file_characteristic', 27, 53, 'SEARCH', 'a'.repeat(101), '', 'file_characteristic_name_max_size_KO'),
    Array('characteristic', 'file_characteristic', 27, 54, 'SEARCH', 'valid.pdf', '', 'OK'),
    Array('characteristic', 'file_characteristic', 28, 55, 'SEARCH', 'invalid.txt', '', 'file_characteristic_name_format_KO'),
    Array('characteristic', 'file_characteristic', 28, 56, 'SEARCH', 'valid.pdf', '', 'OK'),
    
    // Pruebas Data Type Characteristic
    Array('characteristic', 'data_type_characteristic', 40, 57, 'ADD', 'invalid_type', '', 'data_type_characteristic_format_KO'),
    Array('characteristic', 'data_type_characteristic', 40, 58, 'ADD', 'number', '', 'OK'),
    Array('characteristic', 'data_type_characteristic', 41, 59, 'EDIT', 'invalid_type', '', 'data_type_characteristic_format_KO'),
    Array('characteristic', 'data_type_characteristic', 41, 60, 'EDIT', 'text', '', 'OK'),
    Array('characteristic', 'data_type_characteristic', 42, 61, 'SEARCH', 'invalid_type', '', 'data_type_characteristic_format_KO'),
    Array('characteristic', 'data_type_characteristic', 42, 62, 'SEARCH', 'set', '', 'OK'),
    
    // Pruebas Category Characteristic
    Array('characteristic', 'category_characteristic', 43, 63, 'ADD', 'invalid_category', '', 'category_characteristic_format_KO'),
    Array('characteristic', 'category_characteristic', 43, 64, 'ADD', 'soil_site', '', 'OK'),
    Array('characteristic', 'category_characteristic', 44, 65, 'EDIT', 'invalid_category', '', 'category_characteristic_format_KO'),
    Array('characteristic', 'category_characteristic', 44, 66, 'EDIT', 'soil_chem', '', 'OK'),
    Array('characteristic', 'category_characteristic', 45, 67, 'SEARCH', 'invalid_category', '', 'category_characteristic_format_KO'),
    Array('characteristic', 'category_characteristic', 45, 68, 'SEARCH', 'soil_bio', '', 'OK')
);

/**
 * Pruebas para campos de tipo file de Characteristic
 */
window.characteristic_tests_files = Array(
    // Pruebas de Nuevo File Characteristic
    Array('characteristic', 'nuevo_file_characteristic', 29, 57, 'ADD', 'min_size', 'short', 'nuevo_file_characteristic_name_min_size_KO'),
    Array('characteristic', 'nuevo_file_characteristic', 29, 58, 'ADD', 'min_size', 'validfile.pdf', 'OK'),
    Array('characteristic', 'nuevo_file_characteristic', 30, 59, 'ADD', 'max_size', 'a'.repeat(101), 'nuevo_file_characteristic_name_max_size_KO'),
    Array('characteristic', 'nuevo_file_characteristic', 30, 60, 'ADD', 'max_size', 'validfile.pdf', 'OK'),
    Array('characteristic', 'nuevo_file_characteristic', 31, 61, 'ADD', 'no_file', null, 'nuevo_file_characteristic_no_file_KO'),
    Array('characteristic', 'nuevo_file_characteristic', 31, 62, 'ADD', 'no_file', 'validfile.pdf', 'OK'),
    Array('characteristic', 'nuevo_file_characteristic', 32, 63, 'ADD', 'file_type', 'invalid.txt', 'nuevo_file_characteristic_file_type_KO'),
    Array('characteristic', 'nuevo_file_characteristic', 32, 64, 'ADD', 'file_type', 'valid.pdf', 'OK'),
    Array('characteristic', 'nuevo_file_characteristic', 33, 65, 'ADD', 'max_size_file', 20000001, 'nuevo_file_characteristic_max_size_KO'),
    Array('characteristic', 'nuevo_file_characteristic', 33, 66, 'ADD', 'max_size_file', 1000000, 'OK'),
    Array('characteristic', 'nuevo_file_characteristic', 34, 67, 'ADD', 'format_name_file', 'invalid@file.pdf', 'nuevo_file_characteristic_name_format_KO'),
    Array('characteristic', 'nuevo_file_characteristic', 34, 68, 'ADD', 'format_name_file', 'valid.pdf', 'OK'),
    // Pruebas de Nuevo File Characteristic - EDIT
    Array('characteristic', 'nuevo_file_characteristic', 35, 69, 'EDIT', 'min_size', 'short', 'nuevo_file_characteristic_name_min_size_KO'),
    Array('characteristic', 'nuevo_file_characteristic', 35, 70, 'EDIT', 'min_size', 'validfile.pdf', 'OK'),
    Array('characteristic', 'nuevo_file_characteristic', 36, 71, 'EDIT', 'max_size', 'a'.repeat(101), 'nuevo_file_characteristic_name_max_size_KO'),
    Array('characteristic', 'nuevo_file_characteristic', 36, 72, 'EDIT', 'max_size', 'validfile.pdf', 'OK'),
    Array('characteristic', 'nuevo_file_characteristic', 37, 75, 'EDIT', 'file_type', 'invalid.txt', 'nuevo_file_characteristic_file_type_KO'),
    Array('characteristic', 'nuevo_file_characteristic', 37, 76, 'EDIT', 'file_type', 'valid.pdf', 'OK'),
    Array('characteristic', 'nuevo_file_characteristic', 38, 77, 'EDIT', 'max_size_file', 2000001, 'nuevo_file_characteristic_max_size_KO'),
    Array('characteristic', 'nuevo_file_characteristic', 38, 78, 'EDIT', 'max_size_file', 1000000, 'OK'),
    Array('characteristic', 'nuevo_file_characteristic', 39, 79, 'EDIT', 'format_name_file', 'invalid@file.pdf', 'nuevo_file_characteristic_name_format_KO'),
    Array('characteristic', 'nuevo_file_characteristic', 39, 80, 'EDIT', 'format_name_file', 'valid.pdf', 'OK')
);

/**
 * Tests para Analysis_preparation
 */

/**
 * Pruebas para campos que no son de tipo file
 */
window.analysis_preparation_tests = Array(
    // Pruebas ID Analysis Preparation
    Array('analysis_preparation', 'id_analysis_preparation', 1, 1, 'SEARCH', 'abc123', '', 'id_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'id_analysis_preparation', 1, 2, 'SEARCH', '123', '', 'OK'),
    Array('analysis_preparation', 'id_analysis_preparation', 2, 3, 'SEARCH', '123456789000', '', 'id_analysis_preparation_max_size_KO'),
    Array('analysis_preparation', 'id_analysis_preparation', 2, 4, 'SEARCH', '12345', '', 'OK'),

    // Pruebas Name Analysis Preparation
    Array('analysis_preparation', 'name_analysis_preparation', 3, 5, 'ADD', 'short', '', 'name_analysis_preparation_min_size_KO'),
    Array('analysis_preparation', 'name_analysis_preparation', 3, 6, 'ADD', 'Valid Analysis Name', '', 'OK'),
    Array('analysis_preparation', 'name_analysis_preparation', 4, 7, 'ADD', 'a'.repeat(101), '', 'name_analysis_preparation_max_size_KO'),
    Array('analysis_preparation', 'name_analysis_preparation', 4, 8, 'ADD', 'Valid Name', '', 'OK'),
    Array('analysis_preparation', 'name_analysis_preparation', 5, 9, 'ADD', 'Invalid@Name123', '', 'name_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'name_analysis_preparation', 5, 10, 'ADD', 'Valid Name', '', 'OK'),
    Array('analysis_preparation', 'name_analysis_preparation', 6, 11, 'EDIT', 'short', '', 'name_analysis_preparation_min_size_KO'),
    Array('analysis_preparation', 'name_analysis_preparation', 6, 12, 'EDIT', 'Valid Analysis Name', '', 'OK'),
    Array('analysis_preparation', 'name_analysis_preparation', 7, 13, 'EDIT', 'a'.repeat(101), '', 'name_analysis_preparation_max_size_KO'),
    Array('analysis_preparation', 'name_analysis_preparation', 7, 14, 'EDIT', 'Valid Name', '', 'OK'),
    Array('analysis_preparation', 'name_analysis_preparation', 8, 15, 'EDIT', 'Invalid@Name123', '', 'name_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'name_analysis_preparation', 8, 16, 'EDIT', 'Valid Name', '', 'OK'),
    Array('analysis_preparation', 'name_analysis_preparation', 9, 17, 'SEARCH', 'a'.repeat(10), '', 'name_analysis_preparation_max_size_KO'),
    Array('analysis_preparation', 'name_analysis_preparation', 9, 18, 'SEARCH', 'Valid', '', 'OK'),
    Array('analysis_preparation', 'name_analysis_preparation', 10, 19, 'SEARCH', 'Bad@Name', '', 'name_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'name_analysis_preparation', 10, 20, 'SEARCH', 'Valid', '', 'OK'),

    // Pruebas Description Analysis Preparation
    Array('analysis_preparation', 'description_analysis_preparation', 11, 21, 'ADD', 'short description', '', 'description_analysis_preparation_min_size_KO'),
    Array('analysis_preparation', 'description_analysis_preparation', 11, 22, 'ADD', 'a'.repeat(80), '', 'OK'),
    Array('analysis_preparation', 'description_analysis_preparation', 12, 23, 'ADD', 'a'.repeat(5001), '', 'description_analysis_preparation_max_size_KO'),
    Array('analysis_preparation', 'description_analysis_preparation', 12, 24, 'ADD', 'a'.repeat(80), '', 'OK'),
    Array('analysis_preparation', 'description_analysis_preparation', 13, 25, 'ADD', 'IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIInvalid@Description123', '', 'description_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'description_analysis_preparation', 13, 26, 'ADD', 'a'.repeat(80), '', 'OK'),
    Array('analysis_preparation', 'description_analysis_preparation', 14, 27, 'EDIT', 'short', '', 'description_analysis_preparation_min_size_KO'),
    Array('analysis_preparation', 'description_analysis_preparation', 14, 28, 'EDIT', 'a'.repeat(80), '', 'OK'),
    Array('analysis_preparation', 'description_analysis_preparation', 15, 29, 'EDIT', 'a'.repeat(5001), '', 'description_analysis_preparation_max_size_KO'),
    Array('analysis_preparation', 'description_analysis_preparation', 15, 30, 'EDIT', 'a'.repeat(80), '', 'OK'),
    Array('analysis_preparation', 'description_analysis_preparation', 16, 31, 'EDIT', 'IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIInvalidS@Description123', '', 'description_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'description_analysis_preparation', 16, 32, 'EDIT', 'a'.repeat(80), '', 'OK'),
    Array('analysis_preparation', 'description_analysis_preparation', 17, 33, 'SEARCH', 'a'.repeat(5001), '', 'description_analysis_preparation_max_size_KO'),
    Array('analysis_preparation', 'description_analysis_preparation', 17, 34, 'SEARCH', 'Valid Description', '', 'OK'),
    Array('analysis_preparation', 'description_analysis_preparation', 18, 35, 'SEARCH', 'Invalid@Description123', '', 'description_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'description_analysis_preparation', 18, 36, 'SEARCH', 'Valid Description', '', 'OK'),

    // Pruebas Bibliographic Reference
    Array('analysis_preparation', 'bib_analysis_preparation', 19, 37, 'ADD', 'short', '', 'bib_analysis_preparation_min_size_KO'),
    Array('analysis_preparation', 'bib_analysis_preparation', 19, 38, 'ADD', 'Valid Reference Study', '', 'OK'),
    Array('analysis_preparation', 'bib_analysis_preparation', 20, 39, 'ADD', 'a'.repeat(201), '', 'bib_analysis_preparation_max_size_KO'),
    Array('analysis_preparation', 'bib_analysis_preparation', 20, 40, 'ADD', 'Valid Reference Study', '', 'OK'),
    Array('analysis_preparation', 'bib_analysis_preparation', 21, 41, 'ADD', 'Invalid$Reference', '', 'bib_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'bib_analysis_preparation', 21, 42, 'ADD', 'Valid Reference, Study', '', 'OK'),
    Array('analysis_preparation', 'bib_analysis_preparation', 22, 43, 'EDIT', 'short', '', 'bib_analysis_preparation_min_size_KO'),
    Array('analysis_preparation', 'bib_analysis_preparation', 22, 44, 'EDIT', 'Valid Reference Study', '', 'OK'),
    Array('analysis_preparation', 'bib_analysis_preparation', 23, 45, 'EDIT', 'a'.repeat(201), '', 'bib_analysis_preparation_max_size_KO'),
    Array('analysis_preparation', 'bib_analysis_preparation', 23, 46, 'EDIT', 'Valid Reference Study', '', 'OK'),
    Array('analysis_preparation', 'bib_analysis_preparation', 24, 47, 'EDIT', 'Invalid$Reference', '', 'bib_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'bib_analysis_preparation', 24, 48, 'EDIT', 'Valid Reference, Study', '', 'OK'),
    Array('analysis_preparation', 'bib_analysis_preparation', 25, 49, 'SEARCH', 'a'.repeat(201), '', 'bib_analysis_preparation_max_size_KO'),
    Array('analysis_preparation', 'bib_analysis_preparation', 25, 50, 'SEARCH', 'Valid Reference Study', '', 'OK'),
    Array('analysis_preparation', 'bib_analysis_preparation', 26, 51, 'SEARCH', 'Invalid$Reference', '', 'bib_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'bib_analysis_preparation', 26, 52, 'SEARCH', 'Valid Reference, Study', '', 'OK'),

    // Pruebas de File Analysis Preparation (campo de texto)
    Array('analysis_preparation', 'file_analysis_preparation', 27, 53, 'SEARCH', 'a'.repeat(101), '', 'file_analysis_preparation_name_max_size_KO'),
    Array('analysis_preparation', 'file_analysis_preparation', 27, 54, 'SEARCH', 'valid.pdf', '', 'OK'),
    Array('analysis_preparation', 'file_analysis_preparation', 28, 55, 'SEARCH', 'invalid.txt', '', 'file_analysis_preparation_name_format_KO'),
    Array('analysis_preparation', 'file_analysis_preparation', 28, 56, 'SEARCH', 'valid.pdf', '', 'OK')
);

/**
 * Pruebas para campos de tipo file de Analysis_preparation
 */
window.analysis_preparation_tests_files = Array(
    // Pruebas de Nuevo File Analysis Preparation
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 29, 57, 'ADD', 'min_size', 'short', 'nuevo_file_analysis_preparation_name_min_size_KO'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 29, 58, 'ADD', 'min_size', 'validfile.pdf', 'OK'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 30, 59, 'ADD', 'max_size', 'a'.repeat(101), 'nuevo_file_analysis_preparation_name_max_size_KO'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 30, 60, 'ADD', 'max_size', 'validfile.pdf', 'OK'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 31, 61, 'ADD', 'no_file', null, 'nuevo_file_analysis_preparation_no_file_KO'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 31, 62, 'ADD', 'no_file', 'validfile.pdf', 'OK'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 32, 63, 'ADD', 'file_type', 'invalid.txt', 'nuevo_file_analysis_preparation_file_type_KO'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 32, 64, 'ADD', 'file_type', 'valid.pdf', 'OK'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 33, 65, 'ADD', 'max_size_file', 2000001, 'nuevo_file_analysis_preparation_max_size_KO'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 33, 66, 'ADD', 'max_size_file', 1000000, 'OK'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 34, 67, 'ADD', 'format_name_file', 'invalid@file.pdf', 'nuevo_file_analysis_preparation_name_format_KO'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 34, 68, 'ADD', 'format_name_file', 'validfile.pdf', 'OK'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 35, 69, 'EDIT', 'min_size', 'short', 'nuevo_file_analysis_preparation_name_min_size_KO'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 35, 70, 'EDIT', 'min_size', 'validfile.pdf', 'OK'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 36, 71, 'EDIT', 'max_size', 'a'.repeat(101), 'nuevo_file_analysis_preparation_name_max_size_KO'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 36, 72, 'EDIT', 'max_size', 'validfile.pdf', 'OK'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 37, 75, 'EDIT', 'file_type', 'invalid.txt', 'nuevo_file_analysis_preparation_file_type_KO'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 37, 76, 'EDIT', 'file_type', 'valid.pdf', 'OK'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 38, 77, 'EDIT', 'max_size_file', 2000001, 'nuevo_file_analysis_preparation_max_size_KO'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 38, 78, 'EDIT', 'max_size_file', 1000000, 'OK'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 39, 79, 'EDIT', 'format_name_file', 'invalid@file.pdf', 'nuevo_file_analysis_preparation_name_format_KO'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 39, 80, 'EDIT', 'format_name_file', 'validfile.pdf', 'OK')
);
