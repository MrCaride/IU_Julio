/**
 * Definiciones de tests para characteristic
 */
window.characteristic_def_tests = Array(
    // Tests de ID Characteristic
    Array('characteristic', 'id_characteristic', 1, 'Validar formato SEARCH', 'SEARCH', 'boolean', 'id_characteristic_format_KO'),
    Array('characteristic', 'id_characteristic', 2, 'Validar tamaño máximo SEARCH', 'SEARCH', 'boolean', 'id_characteristic_max_size_KO'),

    // Tests de Name Characteristic
    Array('characteristic', 'name_characteristic', 3, 'Validar longitud mínima ADD', 'ADD', 'boolean', 'name_characteristic_min_size_KO'),
    Array('characteristic', 'name_characteristic', 4, 'Validar longitud máxima ADD', 'ADD', 'boolean', 'name_characteristic_max_size_KO'),
    Array('characteristic', 'name_characteristic', 5, 'Validar formato ADD', 'ADD', 'boolean', 'name_characteristic_format_KO'),
    Array('characteristic', 'name_characteristic', 6, 'Validar longitud mínima EDIT', 'EDIT', 'boolean', 'name_characteristic_min_size_KO'),
    Array('characteristic', 'name_characteristic', 7, 'Validar longitud máxima EDIT', 'EDIT', 'boolean', 'name_characteristic_max_size_KO'),
    Array('characteristic', 'name_characteristic', 8, 'Validar formato EDIT', 'EDIT', 'boolean', 'name_characteristic_format_KO'),
    Array('characteristic', 'name_characteristic', 9, 'Validar longitud máxima SEARCH', 'SEARCH', 'boolean', 'name_characteristic_max_size_KO'),
    Array('characteristic', 'name_characteristic', 10, 'Validar formato SEARCH', 'SEARCH', 'boolean', 'name_characteristic_format_KO'),

    // Tests de Description Characteristic
    Array('characteristic', 'description_characteristic', 11, 'Validar longitud mínima ADD', 'ADD', 'boolean', 'description_characteristic_min_size_KO'),
    Array('characteristic', 'description_characteristic', 12, 'Validar longitud máxima ADD', 'ADD', 'boolean', 'description_characteristic_max_size_KO'),
    Array('characteristic', 'description_characteristic', 13, 'Validar formato ADD', 'ADD', 'boolean', 'description_characteristic_format_KO'),
    Array('characteristic', 'description_characteristic', 14, 'Validar longitud mínima EDIT', 'EDIT', 'boolean', 'description_characteristic_min_size_KO'),
    Array('characteristic', 'description_characteristic', 15, 'Validar longitud máxima EDIT', 'EDIT', 'boolean', 'description_characteristic_max_size_KO'),
    Array('characteristic', 'description_characteristic', 16, 'Validar formato EDIT', 'EDIT', 'boolean', 'description_characteristic_format_KO'),
    Array('characteristic', 'description_characteristic', 17, 'Validar longitud máxima SEARCH', 'SEARCH', 'boolean', 'description_characteristic_max_size_KO'),
    Array('characteristic', 'description_characteristic', 18, 'Validar formato SEARCH', 'SEARCH', 'boolean', 'description_characteristic_format_KO'),

    // Tests de Bibliographic Reference
    Array('characteristic', 'bibref_characteristic', 19, 'Validar longitud mínima ADD', 'ADD', 'boolean', 'bibref_characteristic_min_size_KO'),
    Array('characteristic', 'bibref_characteristic', 20, 'Validar longitud máxima ADD', 'ADD', 'boolean', 'bibref_characteristic_max_size_KO'),
    Array('characteristic', 'bibref_characteristic', 21, 'Validar formato ADD', 'ADD', 'boolean', 'bibref_characteristic_format_KO'),
    Array('characteristic', 'bibref_characteristic', 22, 'Validar longitud mínima EDIT', 'EDIT', 'boolean', 'bibref_characteristic_min_size_KO'),
    Array('characteristic', 'bibref_characteristic', 23, 'Validar longitud máxima EDIT', 'EDIT', 'boolean', 'bibref_characteristic_max_size_KO'),
    Array('characteristic', 'bibref_characteristic', 24, 'Validar formato EDIT', 'EDIT', 'boolean', 'bibref_characteristic_format_KO'),
    Array('characteristic', 'bibref_characteristic', 25, 'Validar longitud máxima SEARCH', 'SEARCH', 'boolean', 'bibref_characteristic_max_size_KO'),
    Array('characteristic', 'bibref_characteristic', 26, 'Validar formato SEARCH', 'SEARCH', 'boolean', 'bibref_characteristic_format_KO'),

    // Tests de File
    Array('characteristic', 'file_characteristic', 27, 'Validar longitud máxima SEARCH', 'SEARCH', 'boolean', 'file_characteristic_name_max_size_KO'),
    Array('characteristic', 'file_characteristic', 28, 'Validar formato SEARCH', 'SEARCH', 'boolean', 'file_characteristic_name_format_KO'),

    // Tests de Nuevo File
    Array('characteristic', 'nuevo_file_characteristic', 29, 'Validar longitud mínima ADD', 'ADD', 'boolean', 'nuevo_file_characteristic_name_min_size_KO'),
    Array('characteristic', 'nuevo_file_characteristic', 30, 'Validar longitud máxima ADD', 'ADD', 'boolean', 'nuevo_file_characteristic_name_max_size_KO'),
    Array('characteristic', 'nuevo_file_characteristic', 31, 'Validar archivo requerido ADD', 'ADD', 'boolean', 'nuevo_file_characteristic_no_file_KO'),
    Array('characteristic', 'nuevo_file_characteristic', 32, 'Validar tipo de archivo ADD', 'ADD', 'boolean', 'nuevo_file_characteristic_file_type_KO'),
    Array('characteristic', 'nuevo_file_characteristic', 33, 'Validar tamaño de archivo ADD', 'ADD', 'boolean', 'nuevo_file_characteristic_max_size_KO'),
    Array('characteristic', 'nuevo_file_characteristic', 34, 'Validar formato nombre archivo ADD', 'ADD', 'boolean', 'nuevo_file_characteristic_name_format_KO'),
    Array('characteristic', 'nuevo_file_characteristic', 35, 'Validar longitud mínima EDIT', 'EDIT', 'boolean', 'nuevo_file_characteristic_name_min_size_KO'),
    Array('characteristic', 'nuevo_file_characteristic', 36, 'Validar longitud máxima EDIT', 'EDIT', 'boolean', 'nuevo_file_characteristic_name_max_size_KO'),
    Array('characteristic', 'nuevo_file_characteristic', 37, 'Validar archivo requerido EDIT', 'EDIT', 'boolean', 'nuevo_file_characteristic_no_file_KO'),
    Array('characteristic', 'nuevo_file_characteristic', 38, 'Validar tipo de archivo EDIT', 'EDIT', 'boolean', 'nuevo_file_characteristic_file_type_KO'),
    Array('characteristic', 'nuevo_file_characteristic', 39, 'Validar tamaño de archivo EDIT', 'EDIT', 'boolean', 'nuevo_file_characteristic_max_size_KO'),
    Array('characteristic', 'nuevo_file_characteristic', 40, 'Validar formato nombre archivo EDIT', 'EDIT', 'boolean', 'nuevo_file_characteristic_name_format_KO')
);

/**
 * Pruebas para campos que no son de tipo file
 */
window.characteristic_tests = Array(
    // Pruebas ID Characteristic
    Array('characteristic', 'id_characteristic', 1, 1, 'SEARCH', 'abc123', '', 'id_characteristic_format_KO'),
    Array('characteristic', 'id_characteristic', 1, 2, 'SEARCH', '123', '', true),
    Array('characteristic', 'id_characteristic', 2, 1, 'SEARCH', '123456789012', '', 'id_characteristic_max_size_KO'),
    Array('characteristic', 'id_characteristic', 2, 2, 'SEARCH', '12345', '', true),

    // Pruebas Name Characteristic
    Array('characteristic', 'name_characteristic', 3, 1, 'ADD', 'short', '', 'name_characteristic_min_size_KO'),
    Array('characteristic', 'name_characteristic', 3, 2, 'ADD', 'Valid Characteristic Name', '', true),
    Array('characteristic', 'name_characteristic', 4, 1, 'ADD', 'a'.repeat(101), '', 'name_characteristic_max_size_KO'),
    Array('characteristic', 'name_characteristic', 4, 2, 'ADD', 'Valid Name', '', true),
    Array('characteristic', 'name_characteristic', 5, 1, 'ADD', 'Invalid@Name123', '', 'name_characteristic_format_KO'),
    Array('characteristic', 'name_characteristic', 5, 2, 'ADD', 'Valid Name', '', true),
    Array('characteristic', 'name_characteristic', 6, 1, 'EDIT', 'short', '', 'name_characteristic_min_size_KO'),
    Array('characteristic', 'name_characteristic', 6, 2, 'EDIT', 'Valid Characteristic Name', '', true),
    Array('characteristic', 'name_characteristic', 7, 1, 'EDIT', 'a'.repeat(101), '', 'name_characteristic_max_size_KO'),
    Array('characteristic', 'name_characteristic', 7, 2, 'EDIT', 'Valid Name', '', true),
    Array('characteristic', 'name_characteristic', 8, 1, 'EDIT', 'Invalid@Name123', '', 'name_characteristic_format_KO'),
    Array('characteristic', 'name_characteristic', 8, 2, 'EDIT', 'Valid Name', '', true),
    Array('characteristic', 'name_characteristic', 9, 1, 'SEARCH', 'a'.repeat(10), '', 'name_characteristic_max_size_KO'),
    Array('characteristic', 'name_characteristic', 9, 2, 'SEARCH', 'Valid', '', true),
    Array('characteristic', 'name_characteristic', 10, 1, 'SEARCH', 'Invalid@123', '', 'name_characteristic_format_KO'),
    Array('characteristic', 'name_characteristic', 10, 2, 'SEARCH', 'Valid Name', '', true),

    // Pruebas Description Characteristic
    Array('characteristic', 'description_characteristic', 11, 1, 'ADD', 'short description', '', 'description_characteristic_min_size_KO'),
    Array('characteristic', 'description_characteristic', 11, 2, 'ADD', 'a'.repeat(80), '', true),
    Array('characteristic', 'description_characteristic', 12, 1, 'ADD', 'a'.repeat(5001), '', 'description_characteristic_max_size_KO'),
    Array('characteristic', 'description_characteristic', 12, 2, 'ADD', 'Valid Description', '', true),
    Array('characteristic', 'description_characteristic', 13, 1, 'ADD', 'Invalid@Description123', '', 'description_characteristic_format_KO'),
    Array('characteristic', 'description_characteristic', 13, 2, 'ADD', 'Valid Description', '', true),
    Array('characteristic', 'description_characteristic', 14, 1, 'EDIT', 'short', '', 'description_characteristic_min_size_KO'),
    Array('characteristic', 'description_characteristic', 14, 2, 'EDIT', 'a'.repeat(80), '', true),
    Array('characteristic', 'description_characteristic', 15, 1, 'EDIT', 'a'.repeat(5001), '', 'description_characteristic_max_size_KO'),
    Array('characteristic', 'description_characteristic', 15, 2, 'EDIT', 'Valid Description', '', true),
    Array('characteristic', 'description_characteristic', 16, 1, 'EDIT', 'Invalid@Description123', '', 'description_characteristic_format_KO'),
    Array('characteristic', 'description_characteristic', 16, 2, 'EDIT', 'Valid Description', '', true),
    Array('characteristic', 'description_characteristic', 17, 1, 'SEARCH', 'a'.repeat(5001), '', 'description_characteristic_max_size_KO'),
    Array('characteristic', 'description_characteristic', 17, 2, 'SEARCH', 'Valid Description', '', true),
    Array('characteristic', 'description_characteristic', 18, 1, 'SEARCH', 'Invalid@Description123', '', 'description_characteristic_format_KO'),
    Array('characteristic', 'description_characteristic', 18, 2, 'SEARCH', 'Valid Description', '', true),

    // Pruebas Bibliographic Reference
    Array('characteristic', 'bibref_characteristic', 19, 1, 'ADD', 'short', '', 'bibref_characteristic_min_size_KO'),
    Array('characteristic', 'bibref_characteristic', 19, 2, 'ADD', 'Valid Reference 2023', '', true),
    Array('characteristic', 'bibref_characteristic', 20, 1, 'ADD', 'a'.repeat(201), '', 'bibref_characteristic_max_size_KO'),
    Array('characteristic', 'bibref_characteristic', 20, 2, 'ADD', 'Valid Reference 2023', '', true),
    Array('characteristic', 'bibref_characteristic', 21, 1, 'ADD', 'Invalid$Reference', '', 'bibref_characteristic_format_KO'),
    Array('characteristic', 'bibref_characteristic', 21, 2, 'ADD', 'Valid Reference, 2023', '', true),
    Array('characteristic', 'bibref_characteristic', 22, 1, 'EDIT', 'short', '', 'bibref_characteristic_min_size_KO'),
    Array('characteristic', 'bibref_characteristic', 22, 2, 'EDIT', 'Valid Reference 2023', '', true),
    Array('characteristic', 'bibref_characteristic', 23, 1, 'EDIT', 'a'.repeat(201), '', 'bibref_characteristic_max_size_KO'),
    Array('characteristic', 'bibref_characteristic', 23, 2, 'EDIT', 'Valid Reference 2023', '', true),
    Array('characteristic', 'bibref_characteristic', 24, 1, 'EDIT', 'Invalid$Reference', '', 'bibref_characteristic_format_KO'),
    Array('characteristic', 'bibref_characteristic', 24, 2, 'EDIT', 'Valid Reference, 2023', '', true),
    Array('characteristic', 'bibref_characteristic', 25, 1, 'SEARCH', 'a'.repeat(201), '', 'bibref_characteristic_max_size_KO'),
    Array('characteristic', 'bibref_characteristic', 25, 2, 'SEARCH', 'Valid Reference 2023', '', true),
    Array('characteristic', 'bibref_characteristic', 26, 1, 'SEARCH', 'Invalid$Reference', '', 'bibref_characteristic_format_KO'),
    Array('characteristic', 'bibref_characteristic', 26, 2, 'SEARCH', 'Valid Reference, 2023', '', true)
);

/**
 * Pruebas para campos de tipo file
 */
window.characteristic_tests_files = Array(
    // Tests de File Characteristic
    Array('characteristic', 'file_characteristic', 27, 1, 'SEARCH', 'max_size', 'a'.repeat(101), 'file_characteristic_name_max_size_KO'),
    Array('characteristic', 'file_characteristic', 27, 2, 'SEARCH', 'max_size', 'valid.pdf', true),
    Array('characteristic', 'file_characteristic', 28, 1, 'SEARCH', 'format', 'invalid.txt', 'file_characteristic_name_format_KO'),
    Array('characteristic', 'file_characteristic', 28, 2, 'SEARCH', 'format', 'valid.pdf', true),

    // Tests de Nuevo File Characteristic
    Array('characteristic', 'nuevo_file_characteristic', 29, 1, 'ADD', 'min_size', 'short', 'nuevo_file_characteristic_name_min_size_KO'),
    Array('characteristic', 'nuevo_file_characteristic', 29, 2, 'ADD', 'min_size', 'validfile.pdf', true),
    Array('characteristic', 'nuevo_file_characteristic', 30, 1, 'ADD', 'max_size', 'a'.repeat(101), 'nuevo_file_characteristic_name_max_size_KO'),
    Array('characteristic', 'nuevo_file_characteristic', 30, 2, 'ADD', 'max_size', 'validfile.pdf', true),
    Array('characteristic', 'nuevo_file_characteristic', 31, 1, 'ADD', 'no_file', null, 'nuevo_file_characteristic_no_file_KO'),
    Array('characteristic', 'nuevo_file_characteristic', 31, 2, 'ADD', 'no_file', 'validfile.pdf', true),
    Array('characteristic', 'nuevo_file_characteristic', 32, 1, 'ADD', 'file_type', 'invalid.txt', 'nuevo_file_characteristic_file_type_KO'),
    Array('characteristic', 'nuevo_file_characteristic', 32, 2, 'ADD', 'file_type', 'valid.pdf', true),
    Array('characteristic', 'nuevo_file_characteristic', 33, 1, 'ADD', 'max_size_file', 2000001, 'nuevo_file_characteristic_max_size_KO'),
    Array('characteristic', 'nuevo_file_characteristic', 33, 2, 'ADD', 'max_size_file', 1000000, true),
    Array('characteristic', 'nuevo_file_characteristic', 34, 1, 'ADD', 'format_name_file', 'invalid@file.pdf', 'nuevo_file_characteristic_name_format_KO'),
    Array('characteristic', 'nuevo_file_characteristic', 34, 2, 'ADD', 'format_name_file', 'validfile.pdf', true),
    Array('characteristic', 'nuevo_file_characteristic', 35, 1, 'EDIT', 'min_size', 'short', 'nuevo_file_characteristic_name_min_size_KO'),
    Array('characteristic', 'nuevo_file_characteristic', 35, 2, 'EDIT', 'min_size', 'validfile.pdf', true),
    Array('characteristic', 'nuevo_file_characteristic', 36, 1, 'EDIT', 'max_size', 'a'.repeat(101), 'nuevo_file_characteristic_name_max_size_KO'),
    Array('characteristic', 'nuevo_file_characteristic', 36, 2, 'EDIT', 'max_size', 'validfile.pdf', true),
    Array('characteristic', 'nuevo_file_characteristic', 37, 1, 'EDIT', 'no_file', null, 'nuevo_file_characteristic_no_file_KO'),
    Array('characteristic', 'nuevo_file_characteristic', 37, 2, 'EDIT', 'no_file', 'validfile.pdf', true),
    Array('characteristic', 'nuevo_file_characteristic', 38, 1, 'EDIT', 'file_type', 'invalid.txt', 'nuevo_file_characteristic_file_type_KO'),
    Array('characteristic', 'nuevo_file_characteristic', 38, 2, 'EDIT', 'file_type', 'valid.pdf', true),
    Array('characteristic', 'nuevo_file_characteristic', 39, 1, 'EDIT', 'max_size_file', 2000001, 'nuevo_file_characteristic_max_size_KO'),
    Array('characteristic', 'nuevo_file_characteristic', 39, 2, 'EDIT', 'max_size_file', 1000000, true),
    Array('characteristic', 'nuevo_file_characteristic', 40, 1, 'EDIT', 'format_name_file', 'invalid@file.pdf', 'nuevo_file_characteristic_name_format_KO'),
    Array('characteristic', 'nuevo_file_characteristic', 40, 2, 'EDIT', 'format_name_file', 'validfile.pdf', true)
);
