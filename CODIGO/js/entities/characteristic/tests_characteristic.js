// Definiciones de test movidas a /js/core/test_definitions.js

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
    Array('characteristic', 'bibref_characteristic', 20, 39, 'ADD', 'a'.repeat(201), '', 'bibref_characteristic_max_size_KO'),
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
    Array('characteristic', 'bibref_characteristic', 26, 51, 'SEARCH', 'Invalid$Reference', '', 'bibref_characteristic_format_KO'),
    Array('characteristic', 'bibref_characteristic', 26, 52, 'SEARCH', 'Valid Reference Test', '', 'OK'),

    // Pruebas File Characteristic (campo de texto)
    Array('characteristic', 'file_characteristic', 27, 53, 'SEARCH', 'a'.repeat(101), '', 'file_characteristic_name_max_size_KO'),
    Array('characteristic', 'file_characteristic', 27, 54, 'SEARCH', 'valid.pdf', '', 'OK'),
    Array('characteristic', 'file_characteristic', 28, 55, 'SEARCH', 'invalid.txt', '', 'file_characteristic_name_format_KO'),
    Array('characteristic', 'file_characteristic', 28, 56, 'SEARCH', 'valid.pdf', '', 'OK')
);

/**
 * Pruebas para campos de tipo file
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
    Array('characteristic', 'nuevo_file_characteristic', 33, 65, 'ADD', 'max_size_file', 2000001, 'nuevo_file_characteristic_max_size_KO'),
    Array('characteristic', 'nuevo_file_characteristic', 33, 66, 'ADD', 'max_size_file', 1000000, 'OK'),
    Array('characteristic', 'nuevo_file_characteristic', 34, 67, 'ADD', 'format_name_file', 'invalid@file.pdf', 'nuevo_file_characteristic_name_format_KO'),
    Array('characteristic', 'nuevo_file_characteristic', 34, 68, 'ADD', 'format_name_file', 'valid.pdf', 'OK'),
    Array('characteristic', 'nuevo_file_characteristic', 35, 69, 'EDIT', 'min_size', 'short', 'nuevo_file_characteristic_name_min_size_KO'),
    Array('characteristic', 'nuevo_file_characteristic', 35, 70, 'EDIT', 'min_size', 'validfile.pdf', 'OK'),
    Array('characteristic', 'nuevo_file_characteristic', 36, 71, 'EDIT', 'max_size', 'a'.repeat(101), 'nuevo_file_characteristic_name_max_size_KO'),
    Array('characteristic', 'nuevo_file_characteristic', 36, 72, 'EDIT', 'max_size', 'validfile.pdf', 'OK'),
    Array('characteristic', 'nuevo_file_characteristic', 37, 73, 'EDIT', 'no_file', null, 'nuevo_file_characteristic_no_file_KO'),
    Array('characteristic', 'nuevo_file_characteristic', 37, 74, 'EDIT', 'no_file', 'validfile.pdf', 'OK'),
    Array('characteristic', 'nuevo_file_characteristic', 38, 75, 'EDIT', 'file_type', 'invalid.txt', 'nuevo_file_characteristic_file_type_KO'),
    Array('characteristic', 'nuevo_file_characteristic', 38, 76, 'EDIT', 'file_type', 'valid.pdf', 'OK'),
    Array('characteristic', 'nuevo_file_characteristic', 39, 77, 'EDIT', 'max_size_file', 2000001, 'nuevo_file_characteristic_max_size_KO'),
    Array('characteristic', 'nuevo_file_characteristic', 39, 78, 'EDIT', 'max_size_file', 1000000, 'OK'),
    Array('characteristic', 'nuevo_file_characteristic', 40, 79, 'EDIT', 'format_name_file', 'invalid@file.pdf', 'nuevo_file_characteristic_name_format_KO'),
    Array('characteristic', 'nuevo_file_characteristic', 40, 80, 'EDIT', 'format_name_file', 'valid.pdf', 'OK')
);
