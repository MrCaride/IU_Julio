// Textos en español
const Textos_ES = {
    // Elementos comunes
    'title': 'Sistema de Gestión',
    'welcome': 'Bienvenido al sistema de gestión',
    'menu': 'Menú',
    'entities': 'Entidades',
    'actions': 'Acciones',
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
    'required_field': 'Este campo es obligatorio',
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
    'menu_characteristic': 'Gestión de Características',
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

    'id_characteristic_required_KO': 'El ID es obligatorio',
    'id_characteristic_format_KO': 'El ID debe ser numérico',
    'id_characteristic_min_size_KO': 'El ID debe tener al menos 1 dígito',
    'id_characteristic_max_size_KO': 'El ID no puede tener más de 11 dígitos',

    'name_characteristic_required_KO': 'El nombre es obligatorio',
    'name_characteristic_format_KO': 'El nombre solo puede contener letras y espacios',
    'name_characteristic_min_size_KO': 'El nombre debe tener al menos 8 caracteres',
    'name_characteristic_max_size_KO': 'El nombre no puede tener más de 100 caracteres',

    'description_characteristic_required_KO': 'La descripción es obligatoria',
    'description_characteristic_format_KO': 'La descripción contiene caracteres inválidos',
    'description_characteristic_min_size_KO': 'La descripción debe tener al menos 80 caracteres',
    'description_characteristic_max_size_KO': 'La descripción no puede tener más de 5000 caracteres',

    'data_type_characteristic_required_KO': 'El tipo de dato es obligatorio',
    'data_type_characteristic_format_KO': 'Tipo de dato inválido',

    'category_characteristic_required_KO': 'La categoría es obligatoria',
    'category_characteristic_format_KO': 'La categoría solo puede contener letras y espacios',
    'category_characteristic_min_size_KO': 'La categoría debe tener al menos 6 caracteres',
    'category_characteristic_max_size_KO': 'La categoría no puede tener más de 50 caracteres',

    'bibref_characteristic_required_KO': 'La referencia bibliográfica es obligatoria',
    'bibref_characteristic_format_KO': 'La referencia bibliográfica contiene caracteres inválidos',
    'bibref_characteristic_min_size_KO': 'La referencia debe tener al menos 16 caracteres',
    'bibref_characteristic_max_size_KO': 'La referencia no puede tener más de 200 caracteres',

    'file_characteristic_required_KO': 'El archivo es obligatorio',
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
    'nuevo_file_characteristic_required_KO': 'Tienes que adjuntar un archivo',
    'nuevo_file_characteristic_name_min_size_KO': 'El nombre del archivo debe tener al menos 7 caracteres',
    'nuevo_file_characteristic_name_max_size_KO': 'El nombre del archivo no puede tener más de 100 caracteres',
    'nuevo_file_characteristic_no_file_KO': 'Debe seleccionar un archivo real',
    'nuevo_file_characteristic_file_type_KO': 'El archivo debe ser PDF o DOC/DOCX',
    'nuevo_file_characteristic_max_size_KO': 'El archivo no puede superar los 2MB',
    'nuevo_file_characteristic_name_format_KO': 'El nombre del archivo solo puede contener letras y punto',
    'nuevo_file_characteristic_OK': 'Archivo subido correctamente',

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
};