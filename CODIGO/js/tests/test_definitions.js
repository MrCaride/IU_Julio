/**
 * Este archivo contiene las definiciones base para los tests de cada entidad
 */

/**
 * Definiciones de tests para characteristic
 * [entidad, campo, num_def_test, descripción, acción, resultado_esperado, mensaje_respuesta]
 */
window.characteristic_def_tests = Array(
    // ID Characteristic tests - ADD & EDIT
    Array('characteristic', 'id_characteristic', 1, 'Validar valor mínimo ADD', 'ADD', 'boolean', 'id_characteristic_min_size_KO'),
    Array('characteristic', 'id_characteristic', 2, 'Validar valor máximo ADD', 'ADD', 'boolean', 'id_characteristic_max_size_KO'),
    Array('characteristic', 'id_characteristic', 3, 'Validar formato ADD', 'ADD', 'boolean', 'id_characteristic_format_KO'),
    Array('characteristic', 'id_characteristic', 4, 'Validar valor mínimo EDIT', 'EDIT', 'boolean', 'id_characteristic_min_size_KO'),
    Array('characteristic', 'id_characteristic', 5, 'Validar valor máximo EDIT', 'EDIT', 'boolean', 'id_characteristic_max_size_KO'),
    Array('characteristic', 'id_characteristic', 6, 'Validar formato EDIT', 'EDIT', 'boolean', 'id_characteristic_format_KO'),    // Name Characteristic tests - ADD & EDIT
    Array('characteristic', 'name_characteristic', 7, 'Validar longitud mínima ADD', 'ADD', 'boolean', 'name_characteristic_min_size_KO'),
    Array('characteristic', 'name_characteristic', 8, 'Validar longitud máxima ADD', 'ADD', 'boolean', 'name_characteristic_max_size_KO'),
    Array('characteristic', 'name_characteristic', 9, 'Validar formato ADD', 'ADD', 'boolean', 'name_characteristic_format_KO'),
    Array('characteristic', 'name_characteristic', 10, 'Validar longitud mínima EDIT', 'EDIT', 'boolean', 'name_characteristic_min_size_KO'),
    Array('characteristic', 'name_characteristic', 11, 'Validar longitud máxima EDIT', 'EDIT', 'boolean', 'name_characteristic_max_size_KO'),
    Array('characteristic', 'name_characteristic', 12, 'Validar formato EDIT', 'EDIT', 'boolean', 'name_characteristic_format_KO'),    // Description tests - ADD & EDIT
    Array('characteristic', 'description_characteristic', 13, 'Validar longitud mínima ADD', 'ADD', 'boolean', 'description_characteristic_min_size_KO'),
    Array('characteristic', 'description_characteristic', 14, 'Validar longitud máxima ADD', 'ADD', 'boolean', 'description_characteristic_max_size_KO'),
    Array('characteristic', 'description_characteristic', 15, 'Validar formato ADD', 'ADD', 'boolean', 'description_characteristic_format_KO'),
    Array('characteristic', 'description_characteristic', 16, 'Validar longitud mínima EDIT', 'EDIT', 'boolean', 'description_characteristic_min_size_KO'),
    Array('characteristic', 'description_characteristic', 17, 'Validar longitud máxima EDIT', 'EDIT', 'boolean', 'description_characteristic_max_size_KO'),
    Array('characteristic', 'description_characteristic', 18, 'Validar formato EDIT', 'EDIT', 'boolean', 'description_characteristic_format_KO'),    // File Characteristic tests - ADD & EDIT
    Array('characteristic', 'file_characteristic', 19, 'Validar tamaño archivo ADD', 'ADD', 'boolean', 'file_characteristic_max_size_file_KO'),
    Array('characteristic', 'file_characteristic', 20, 'Validar tipo archivo ADD', 'ADD', 'boolean', 'file_characteristic_type_KO'),
    Array('characteristic', 'file_characteristic', 21, 'Validar formato nombre ADD', 'ADD', 'boolean', 'file_characteristic_format_KO'),
    Array('characteristic', 'file_characteristic', 22, 'Validar tamaño archivo EDIT', 'EDIT', 'boolean', 'file_characteristic_max_size_file_KO'),
    Array('characteristic', 'file_characteristic', 23, 'Validar tipo archivo EDIT', 'EDIT', 'boolean', 'file_characteristic_type_KO'),
    Array('characteristic', 'file_characteristic', 24, 'Validar formato nombre EDIT', 'EDIT', 'boolean', 'file_characteristic_format_KO')
);

/**
 * Pruebas para campos que no son de tipo file
 * [entidad, campo, num_def_test, num_prueba, acción, valor_prueba, valores_extra, código_error/éxito]
 */
window.characteristic_tests = Array(
    // ID Characteristic tests
    Array('characteristic', 'id_characteristic', 1, 1, 'ADD', '', '', 'id_characteristic_min_size_KO'),
    Array('characteristic', 'id_characteristic', 2, 2, 'ADD', '123456789012', '', 'id_characteristic_max_size_KO'),
    Array('characteristic', 'id_characteristic', 3, 3, 'ADD', 'abc123', '', 'id_characteristic_format_KO'),
    Array('characteristic', 'id_characteristic', 3, 4, 'ADD', '123', '', true),
    Array('characteristic', 'id_characteristic', 4, 5, 'EDIT', '', '', 'id_characteristic_min_size_KO'),
    Array('characteristic', 'id_characteristic', 5, 6, 'EDIT', '123456789012', '', 'id_characteristic_max_size_KO'),
    Array('characteristic', 'id_characteristic', 6, 7, 'EDIT', 'abc123', '', 'id_characteristic_format_KO'),
    Array('characteristic', 'id_characteristic', 6, 8, 'EDIT', '456', '', true),

    // Name Characteristic - ADD
    Array('characteristic', 'name_characteristic', 7, 9, 'ADD', 'sh', '', 'name_characteristic_min_size_KO'),
    Array('characteristic', 'name_characteristic', 8, 10, 'ADD', 'a'.repeat(51), '', 'name_characteristic_max_size_KO'),
    Array('characteristic', 'name_characteristic', 9, 11, 'ADD', 'Name!@#', '', 'name_characteristic_format_KO'),
    Array('characteristic', 'name_characteristic', 9, 12, 'ADD', 'Valid Name', '', true),
    // Name Characteristic - EDIT
    Array('characteristic', 'name_characteristic', 10, 13, 'EDIT', 'a', '', 'name_characteristic_min_size_KO'),
    Array('characteristic', 'name_characteristic', 11, 14, 'EDIT', 'a'.repeat(51), '', 'name_characteristic_max_size_KO'),
    Array('characteristic', 'name_characteristic', 12, 15, 'EDIT', 'Name@123', '', 'name_characteristic_format_KO'),
    Array('characteristic', 'name_characteristic', 12, 16, 'EDIT', 'Another Valid Name', '', true),

    // Description - ADD
    Array('characteristic', 'description_characteristic', 13, 17, 'ADD', 'short', '', 'description_characteristic_min_size_KO'),
    Array('characteristic', 'description_characteristic', 14, 18, 'ADD', 'a'.repeat(5001), '', 'description_characteristic_max_size_KO'),
    Array('characteristic', 'description_characteristic', 15, 19, 'ADD', 'Description!@#', '', 'description_characteristic_format_KO'),
    Array('characteristic', 'description_characteristic', 15, 20, 'ADD', 'Valid description text', '', true),
    // Description - EDIT
    Array('characteristic', 'description_characteristic', 16, 21, 'EDIT', 'tiny', '', 'description_characteristic_min_size_KO'),
    Array('characteristic', 'description_characteristic', 17, 22, 'EDIT', 'a'.repeat(5001), '', 'description_characteristic_max_size_KO'),
    Array('characteristic', 'description_characteristic', 18, 23, 'EDIT', 'Invalid@Description#', '', 'description_characteristic_format_KO'),
    Array('characteristic', 'description_characteristic', 18, 24, 'EDIT', 'Another valid description text', '', true)
);

/**
 * Pruebas para campos de tipo file
 * [entidad, campo, num_def_test, num_prueba, acción, parámetro, valor_parámetro, código_error/éxito]
 */
window.characteristic_tests_files = Array(
    // File size tests - ADD
    Array('characteristic', 'file_characteristic', 19, 1, 'ADD', 'max_size_file', 5000001, 'file_characteristic_max_size_file_KO'),
    Array('characteristic', 'file_characteristic', 19, 2, 'ADD', 'max_size_file', 5000000, true),
    // File size tests - EDIT
    Array('characteristic', 'file_characteristic', 22, 3, 'EDIT', 'max_size_file', 5000001, 'file_characteristic_max_size_file_KO'),
    Array('characteristic', 'file_characteristic', 22, 4, 'EDIT', 'max_size_file', 4999999, true),
    
    // File type tests - ADD
    Array('characteristic', 'file_characteristic', 20, 5, 'ADD', 'type_file', 'image/jpeg', 'file_characteristic_type_KO'),
    Array('characteristic', 'file_characteristic', 20, 6, 'ADD', 'type_file', 'application/pdf', true),
    // File type tests - EDIT
    Array('characteristic', 'file_characteristic', 23, 7, 'EDIT', 'type_file', 'text/plain', 'file_characteristic_type_KO'),
    Array('characteristic', 'file_characteristic', 23, 8, 'EDIT', 'type_file', 'application/pdf', true),
    
    // Filename format tests - ADD
    Array('characteristic', 'file_characteristic', 21, 9, 'ADD', 'format_name_file', 'test!@#.pdf', 'file_characteristic_format_KO'),
    Array('characteristic', 'file_characteristic', 21, 10, 'ADD', 'format_name_file', 'valid_file.pdf', true),
    // Filename format tests - EDIT
    Array('characteristic', 'file_characteristic', 24, 11, 'EDIT', 'format_name_file', 'bad$file.pdf', 'file_characteristic_format_KO'),
    Array('characteristic', 'file_characteristic', 24, 12, 'EDIT', 'format_name_file', 'another_valid_file.pdf', true)
);
