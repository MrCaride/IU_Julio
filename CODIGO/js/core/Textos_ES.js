// Textos en español
const Textos_ES = {
    // Elementos comunes
    'title': 'Sistema de Gestión',
    'welcome': 'Bienvenido al sistema de gestión',
    'menu': 'Menú',
    'entities': 'Entidades',
    'actions': 'Acciones',
    'title_page': 'Gestión de Entidades',
    'search': 'Buscar',
    'add': 'Añadir',
    'edit': 'Editar',
    'delete': 'Eliminar',
    'detail': 'Detalle',
    'submit': 'Enviar',
    'cancel': 'Cancelar',
    'back': 'Volver',
    'loading': 'Cargando...',
    'language': 'Idioma',
    'logout': 'Cerrar sesión',
    'test': 'Test',

    // Menú desplegable
    'menu_api': 'Documentación API',

    // Elementos comunes de formularios
    'select_data_type': '--Seleccionar Tipo de Dato--',
    'select_category': '--Seleccionar Categoría--',
    'new_file': 'Nuevo Archivo',

    // Etiquetas de formulario y mensajes de validación
    'min_length': 'No alcanza la longitud mínima',
    'max_length': 'Excede la longitud máxima',
    'format_error': 'Formato incorrecto',
    'file_size_error': 'Tamaño de archivo excedido',
    'file_type_error': 'Tipo de archivo no permitido',
    'file_name_error': 'Nombre de archivo incorrecto',
    'invalid_date': 'Fecha inválida',
    'invalid_number': 'Número inválido',
    'invalid_email': 'Email inválido',
    'success_operation': 'Operación completada con éxito',
    'error_operation': 'Error en la operación',
    'confirm_delete': '¿Está seguro de que desea eliminar este registro?',

    // Específico de la entidad - Característica
    'characteristic': 'Característica',
    'characteristics': 'Características',
    'id_characteristic': 'ID',
    'name_characteristic': 'Nombre',
    'description_characteristic': 'Descripción',
    'data_type_characteristic': 'Tipo de Dato',
    'category_characteristic': 'Categoría',
    'file_characteristic': 'Archivo',
    'acciones': 'Acciones',
    'bibref_characteristic': 'Referencia Bibliográfica',
    'file_characteristic': 'Archivo',
    'nuevo_file_characteristic': 'Subir Archivo',

    'id_characteristic_format_KO': 'El ID debe ser numérico',
    'id_characteristic_min_size_KO': 'El ID debe tener al menos 1 dígito',
    'id_characteristic_max_size_KO': 'El ID no puede tener más de 11 dígitos',

    'name_characteristic_format_KO': 'El nombre solo puede contener letras y espacios',
    'name_characteristic_min_size_KO': 'El nombre debe tener al menos 8 caracteres',
    'name_characteristic_max_size_KO': 'El nombre no puede tener más de 100 caracteres',

    'description_characteristic_format_KO': 'La descripción contiene caracteres inválidos',
    'description_characteristic_min_size_KO': 'La descripción debe tener al menos 80 caracteres',
    'description_characteristic_max_size_KO': 'La descripción no puede tener más de 5000 caracteres',

    'data_type_characteristic_format_KO': 'Tipo de dato inválido',

    'category_characteristic_format_KO': 'La categoría solo puede contener letras y espacios',
    'category_characteristic_min_size_KO': 'La categoría debe tener al menos 6 caracteres',
    'category_characteristic_max_size_KO': 'La categoría no puede tener más de 50 caracteres',

    'bibref_characteristic_format_KO': 'La referencia bibliográfica contiene caracteres inválidos',
    'bibref_characteristic_min_size_KO': 'La referencia debe tener al menos 16 caracteres',
    'bibref_characteristic_max_size_KO': 'La referencia no puede tener más de 200 caracteres',

    'file_characteristic_type_KO': 'Tipo de archivo inválido (debe ser PDF o DOC)',
    'file_characteristic_size_KO': 'El archivo es demasiado grande (máx 2MB)',
    'file_characteristic_format_KO': 'Formato de archivo inválido',

    // Mensajes de éxito para Característica
    'id_characteristic_OK': 'ID válido',
    'name_characteristic_OK': 'Nombre válido',
    'description_characteristic_OK': 'Descripción válida',
    'data_type_characteristic_OK': 'Tipo de dato válido',
    'category_characteristic_OK': 'Categoría válida',
    'bibref_characteristic_OK': 'Referencia bibliográfica válida',
    'file_characteristic_OK': 'Archivo válido',

    // Mensajes de nuevo_file_characteristic
    'nuevo_file_characteristic_name_min_size_KO': 'El nombre del archivo debe tener al menos 7 caracteres',
    'nuevo_file_characteristic_name_max_size_KO': 'El nombre del archivo no puede tener más de 100 caracteres',
    'nuevo_file_characteristic_no_file_KO': 'Debe seleccionar un archivo real',
    'nuevo_file_characteristic_file_type_KO': 'El archivo debe ser PDF o DOC/DOCX',
    'nuevo_file_characteristic_max_size_KO': 'El archivo no puede superar los 2MB',
    'nuevo_file_characteristic_name_format_KO': 'El nombre del archivo solo puede contener letras y punto',
    'nuevo_file_characteristic_OK': 'Archivo subido correctamente',

    // Mensajes de file_characteristic  
    'file_characteristic_name_max_size_KO': 'El nombre del archivo no puede tener más de 100 caracteres',
    'file_characteristic_name_format_KO': 'El nombre del archivo solo puede contener letras y punto',

    // Tipos de datos
    'number': 'Número',
    'text': 'Texto', 
    'set': 'Conjunto',

    // Categorías
    'soil_site': 'Sitio de Suelo',
    'soil_chem': 'Química del Suelo',
    'soil_bio': 'Biología del Suelo',

    // Mensajes de error
    'ERROR_CONNECTION': 'Error de conexión con el servidor',
    'ERROR_DB': 'Error de base de datos',
    'ERROR_VALIDATION': 'Error de validación de datos',
    'ERROR_NO_FILE': 'No se ha seleccionado ningún archivo',
    'ERROR_UPLOAD': 'Error al subir el archivo',
    'ERROR_AUTH': 'Error de autenticación',

    // Mensajes de archivo
    'no_file': 'Sin archivo',

    // Opciones de tipo de dato
    'select_data_type_characteristic': 'Seleccione tipo de dato',
    'number': 'Número',
    'text': 'Texto',
    'set': 'Conjunto',

    // Opciones de categoría
    'select_category_characteristic': 'Seleccione categoría',
    'soil_site': 'Sitio del suelo',
    'soil_chem': 'Química del suelo',
    'soil_bio': 'Biología del suelo',

    // Mensajes de administrador
    'admin_no_te_lo_deja_borrar_KO': 'El administrador no permite eliminar este elemento',

    // Específico de la entidad - Project
    'project': 'Proyecto',
    'projects': 'Proyectos',
    'menu_project': 'Gestión de Proyectos',
    'id_project': 'ID',
    'name_project': 'Nombre',
    'start_date_project': 'Fecha de Inicio',
    'end_date_project': 'Fecha de Fin',
    'responsable_project': 'Responsable',
    'organization_project': 'Organización',
    'description_project': 'Descripción',
    'file_project': 'Archivo',
    'nuevo_file_project': 'Nuevo Archivo',
    'code_project': 'Código',
    'acronym_project': 'Acrónimo',
    'id_sampling_methodology': 'ID Metodología',

    // Mensajes de error para Project
    'id_project_format_KO': 'El ID debe ser numérico',
    'id_project_min_size_KO': 'El ID debe tener al menos 1 dígito',
    'id_project_max_size_KO': 'El ID no puede tener más de 11 dígitos',

    'name_project_format_KO': 'El nombre solo puede contener letras y espacios',
    'name_project_min_size_KO': 'El nombre debe tener al menos 15 caracteres',
    'name_project_max_size_KO': 'El nombre no puede tener más de 100 caracteres',   
    'start_date_project_format_KO': 'La fecha solo acepta números y guiones en formato dd-mm-aaaa',
    'start_date_project_valid_KO': 'La fecha debe ser válida',

    'end_date_project_format_KO': 'La fecha solo acepta números y guiones en formato dd-mm-aaaa',
    'end_date_project_valid_KO': 'La fecha debe ser válida',
    'end_date_project_greater_than_start_KO': 'La fecha de fin no puede ser anterior a la fecha de inicio',    'responsable_project__KO': 'El responsable es obligatorio',
    'responsable_project_format_KO': 'El responsable solo puede contener letras, espacios, acentos y ñ',
    'responsable_project_min_size_KO': 'El responsable debe tener al menos 6 caracteres',
    'responsable_project_max_size_KO': 'El responsable no puede tener más de 60 caracteres',

    'organization_project_format_KO': 'La organización solo puede contener letras, espacios, acentos y ñ',
    'organization_project_min_size_KO': 'La organización debe tener al menos 6 caracteres',
    'organization_project_max_size_KO': 'La organización no puede tener más de 100 caracteres',

    'description_project_format_KO': 'La descripción contiene caracteres inválidos',
    'description_project_min_size_KO': 'La descripción debe tener al menos 30 caracteres',
    'description_project_max_size_KO': 'La descripción no puede tener más de 500 caracteres',

    'file_project_name_max_size_KO': 'El nombre del archivo no puede tener más de 100 caracteres',
    'file_project_name_format_KO': 'El nombre del archivo solo puede contener letras y punto',
    
    'nuevo_file_project_name_min_size_KO': 'El nombre del archivo debe tener al menos 6 caracteres',    'nuevo_file_project_name_max_size_KO': 'El nombre del archivo no puede tener más de 100 caracteres',
    'nuevo_file_project_no_file_KO': 'Debe seleccionar un archivo real',
    'nuevo_file_project_file_type_KO': 'El archivo debe ser PDF o DOC/DOCX',
    'nuevo_file_project_max_size_KO': 'El archivo no puede superar los 2MB',
    'nuevo_file_project_name_format_KO': 'El nombre del archivo solo puede contener letras y punto',

    'code_project_format_KO': 'El código contiene caracteres inválidos',
    'code_project_min_size_KO': 'El código debe tener al menos 6 caracteres',
    'code_project_max_size_KO': 'El código no puede tener más de 50 caracteres',

    'acronym_project_format_KO': 'El acrónimo contiene caracteres inválidos',
    'acronym_project_min_size_KO': 'El acrónimo debe tener al menos 6 caracteres',
    'acronym_project_max_size_KO': 'El acrónimo no puede tener más de 15 caracteres',

    'id_sampling_methodology_format_KO': 'El ID de metodología debe ser numérico',
    'id_sampling_methodology_min_size_KO': 'El ID de metodología debe tener al menos 1 dígito',
    'id_sampling_methodology_max_size_KO': 'El ID de metodología no puede tener más de 11 dígitos',

    // Específico de la entidad - Analysis Preparation
    'analysis_preparation': 'Preparación de Análisis',
    'analysis_preparations': 'Preparaciones de Análisis',
    'menu_analysis_preparation': 'Gestión de Preparaciones de Análisis',
    'id_analysis_preparation': 'ID',
    'name_analysis_preparation': 'Nombre',
    'description_analysis_preparation': 'Descripción',
    'bib_analysis_preparation': 'Referencias Bibliográficas',
    'file_analysis_preparation': 'Archivo',
    'nuevo_file_analysis_preparation': 'Nuevo Archivo',

    // Mensajes de error para Analysis Preparation
    'id_analysis_preparation_format_KO': 'El ID debe ser numérico',
    'id_analysis_preparation_min_size_KO': 'El ID debe tener al menos 1 dígito',
    'id_analysis_preparation_max_size_KO': 'El ID no puede tener más de 9 dígitos',

    'name_analysis_preparation_format_KO': 'El nombre solo puede contener letras y espacios',
    'name_analysis_preparation_min_size_KO': 'El nombre debe tener al menos 8 caracteres',
    'name_analysis_preparation_max_size_KO': 'El nombre no puede tener más de 100 caracteres',

    'description_analysis_preparation_format_KO': 'La descripción contiene caracteres inválidos',
    'description_analysis_preparation_min_size_KO': 'La descripción debe tener al menos 80 caracteres',
    'description_analysis_preparation_max_size_KO': 'La descripción no puede tener más de 5000 caracteres',

    'bib_analysis_preparation_format_KO': 'La referencia bibliográfica contiene caracteres inválidos',
    'bib_analysis_preparation_min_size_KO': 'La referencia debe tener al menos 6 caracteres',
    'bib_analysis_preparation_max_size_KO': 'La referencia no puede tener más de 200 caracteres',

    // Mensajes de nuevo_file_analysis_preparation
    'nuevo_file_analysis_preparation_name_min_size_KO': 'El nombre del archivo debe tener al menos 7 caracteres',
    'nuevo_file_analysis_preparation_name_max_size_KO': 'El nombre del archivo no puede tener más de 100 caracteres',
    'nuevo_file_analysis_preparation_no_file_KO': 'Debe seleccionar un archivo real',
    'nuevo_file_analysis_preparation_file_type_KO': 'El archivo debe ser PDF o DOC/DOCX',
    'nuevo_file_analysis_preparation_max_size_KO': 'El archivo no puede superar los 2MB',
    'nuevo_file_analysis_preparation_name_format_KO': 'El nombre del archivo solo puede contener letras y punto',
    'nuevo_file_analysis_preparation_OK': 'Archivo subido correctamente',

    // Mensajes de file_analysis_preparation
    'file_analysis_preparation_name_max_size_KO': 'El nombre del archivo no puede tener más de 100 caracteres',
    'file_analysis_preparation_name_format_KO': 'El nombre del archivo solo puede contener letras y punto'
};