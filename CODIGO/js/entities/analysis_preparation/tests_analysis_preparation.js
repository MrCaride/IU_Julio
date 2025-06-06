/**
 * Definiciones de tests para analysis_preparation
 */
window.analysis_preparation_def_tests = Array(
    // Tests de ID Analysis Preparation
    Array('analysis_preparation', 'id_analysis_preparation', 1, 'Validar formato SEARCH', 'SEARCH', 'boolean', 'id_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'id_analysis_preparation', 2, 'Validar tamaño máximo SEARCH', 'SEARCH', 'boolean', 'id_analysis_preparation_format_KO'),

    // Tests de Name Analysis Preparation
    Array('analysis_preparation', 'name_analysis_preparation', 3, 'Validar longitud mínima ADD', 'ADD', 'boolean', 'name_analysis_preparation_min_size_KO'),
    Array('analysis_preparation', 'name_analysis_preparation', 4, 'Validar longitud máxima ADD', 'ADD', 'boolean', 'name_analysis_preparation_max_size_KO'),
    Array('analysis_preparation', 'name_analysis_preparation', 5, 'Validar formato ADD', 'ADD', 'boolean', 'name_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'name_analysis_preparation', 6, 'Validar longitud mínima EDIT', 'EDIT', 'boolean', 'name_analysis_preparation_min_size_KO'),
    Array('analysis_preparation', 'name_analysis_preparation', 7, 'Validar longitud máxima EDIT', 'EDIT', 'boolean', 'name_analysis_preparation_max_size_KO'),
    Array('analysis_preparation', 'name_analysis_preparation', 8, 'Validar formato EDIT', 'EDIT', 'boolean', 'name_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'name_analysis_preparation', 9, 'Validar longitud máxima SEARCH', 'SEARCH', 'boolean', 'name_analysis_preparation_max_size_KO'),
    Array('analysis_preparation', 'name_analysis_preparation', 10, 'Validar formato SEARCH', 'SEARCH', 'boolean', 'name_analysis_preparation_format_KO'),

    // Tests de Description Analysis Preparation
    Array('analysis_preparation', 'description_analysis_preparation', 11, 'Validar longitud mínima ADD', 'ADD', 'boolean', 'description_analysis_preparation_min_size_KO'),
    Array('analysis_preparation', 'description_analysis_preparation', 12, 'Validar longitud máxima ADD', 'ADD', 'boolean', 'description_analysis_preparation_max_size_KO'),
    Array('analysis_preparation', 'description_analysis_preparation', 13, 'Validar formato ADD', 'ADD', 'boolean', 'description_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'description_analysis_preparation', 14, 'Validar longitud mínima EDIT', 'EDIT', 'boolean', 'description_analysis_preparation_min_size_KO'),
    Array('analysis_preparation', 'description_analysis_preparation', 15, 'Validar longitud máxima EDIT', 'EDIT', 'boolean', 'description_analysis_preparation_max_size_KO'),
    Array('analysis_preparation', 'description_analysis_preparation', 16, 'Validar formato EDIT', 'EDIT', 'boolean', 'description_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'description_analysis_preparation', 17, 'Validar longitud máxima SEARCH', 'SEARCH', 'boolean', 'description_analysis_preparation_max_size_KO'),
    Array('analysis_preparation', 'description_analysis_preparation', 18, 'Validar formato SEARCH', 'SEARCH', 'boolean', 'description_analysis_preparation_format_KO'),

    // Tests de Bibliographic Reference
    Array('analysis_preparation', 'bib_analysis_preparation', 19, 'Validar longitud mínima ADD', 'ADD', 'boolean', 'bib_analysis_preparation_min_size_KO'),
    Array('analysis_preparation', 'bib_analysis_preparation', 20, 'Validar longitud máxima ADD', 'ADD', 'boolean', 'bib_analysis_preparation_max_size_KO'),
    Array('analysis_preparation', 'bib_analysis_preparation', 21, 'Validar formato ADD', 'ADD', 'boolean', 'bib_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'bib_analysis_preparation', 22, 'Validar longitud mínima EDIT', 'EDIT', 'boolean', 'bib_analysis_preparation_min_size_KO'),
    Array('analysis_preparation', 'bib_analysis_preparation', 23, 'Validar longitud máxima EDIT', 'EDIT', 'boolean', 'bib_analysis_preparation_max_size_KO'),
    Array('analysis_preparation', 'bib_analysis_preparation', 24, 'Validar formato EDIT', 'EDIT', 'boolean', 'bib_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'bib_analysis_preparation', 25, 'Validar longitud máxima SEARCH', 'SEARCH', 'boolean', 'bib_analysis_preparation_max_size_KO'),
    Array('analysis_preparation', 'bib_analysis_preparation', 26, 'Validar formato SEARCH', 'SEARCH', 'boolean', 'bib_analysis_preparation_format_KO'),

    // Tests de File
    Array('analysis_preparation', 'file_analysis_preparation', 27, 'Validar longitud máxima SEARCH', 'SEARCH', 'boolean', 'file_analysis_preparation_name_max_size_KO'),
    Array('analysis_preparation', 'file_analysis_preparation', 28, 'Validar formato SEARCH', 'SEARCH', 'boolean', 'file_analysis_preparation_name_format_KO'),

    // Tests de Nuevo File
    Array('analysis_preparatio n', 'nuevo_file_analysis_preparation', 29, 'Validar longitud mínima ADD', 'ADD', 'boolean', 'nuevo_file_analysis_preparation_name_min_size_KO'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 30, 'Validar longitud máxima ADD', 'ADD', 'boolean', 'nuevo_file_analysis_preparation_name_max_size_KO'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 31, 'Validar archivo requerido ADD', 'ADD', 'boolean', 'nuevo_file_analysis_preparation_no_file_KO'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 32, 'Validar tipo de archivo ADD', 'ADD', 'boolean', 'nuevo_file_analysis_preparation_file_type_KO'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 33, 'Validar tamaño de archivo ADD', 'ADD', 'boolean', 'nuevo_file_analysis_preparation_max_size_KO'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 34, 'Validar formato nombre archivo ADD', 'ADD', 'boolean', 'nuevo_file_analysis_preparation_name_format_KO'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 35, 'Validar longitud mínima EDIT', 'EDIT', 'boolean', 'nuevo_file_analysis_preparation_name_min_size_KO'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 36, 'Validar longitud máxima EDIT', 'EDIT', 'boolean', 'nuevo_file_analysis_preparation_name_max_size_KO'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 37, 'Validar archivo requerido EDIT', 'EDIT', 'boolean', 'nuevo_file_analysis_preparation_no_file_KO'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 38, 'Validar tipo de archivo EDIT', 'EDIT', 'boolean', 'nuevo_file_analysis_preparation_file_type_KO'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 39, 'Validar tamaño de archivo EDIT', 'EDIT', 'boolean', 'nuevo_file_analysis_preparation_max_size_KO'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 40, 'Validar formato nombre archivo EDIT', 'EDIT', 'boolean', 'nuevo_file_analysis_preparation_name_format_KO')
);

/**
 * Pruebas para campos que no son de tipo file
 */
window.analysis_preparation_tests = Array(
    // Pruebas ID Analysis Preparation
    Array('analysis_preparation', 'id_analysis_preparation', 1, 1, 'SEARCH', 'abc123', '', 'id_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'id_analysis_preparation', 1, 2, 'SEARCH', '123', '', true),
    Array('analysis_preparation', 'id_analysis_preparation', 2, 1, 'SEARCH', '1234567890', '', 'id_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'id_analysis_preparation', 2, 2, 'SEARCH', '123456789', '', true),

    // Pruebas Name Analysis Preparation
    Array('analysis_preparation', 'name_analysis_preparation', 3, 1, 'ADD', 'short', '', 'name_analysis_preparation_min_size_KO'),
    Array('analysis_preparation', 'name_analysis_preparation', 3, 2, 'ADD', 'ValidName Test', '', true),
    Array('analysis_preparation', 'name_analysis_preparation', 4, 1, 'ADD', 'a'.repeat(101), '', 'name_analysis_preparation_max_size_KO'),
    Array('analysis_preparation', 'name_analysis_preparation', 4, 2, 'ADD', 'Valid Name', '', true),
    Array('analysis_preparation', 'name_analysis_preparation', 5, 1, 'ADD', 'Invalid@Name123', '', 'name_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'name_analysis_preparation', 5, 2, 'ADD', 'Valid Name', '', true),
    Array('analysis_preparation', 'name_analysis_preparation', 6, 1, 'EDIT', 'short', '', 'name_analysis_preparation_min_size_KO'),
    Array('analysis_preparation', 'name_analysis_preparation', 6, 2, 'EDIT', 'Valid Name Test', '', true),
    Array('analysis_preparation', 'name_analysis_preparation', 7, 1, 'EDIT', 'a'.repeat(101), '', 'name_analysis_preparation_max_size_KO'),
    Array('analysis_preparation', 'name_analysis_preparation', 7, 2, 'EDIT', 'Valid Name', '', true),
    Array('analysis_preparation', 'name_analysis_preparation', 8, 1, 'EDIT', 'Invalid@Name123', '', 'name_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'name_analysis_preparation', 8, 2, 'EDIT', 'Valid Name', '', true),
    Array('analysis_preparation', 'name_analysis_preparation', 9, 1, 'SEARCH', 'a'.repeat(10), '', 'name_analysis_preparation_max_size_KO'),
    Array('analysis_preparation', 'name_analysis_preparation', 9, 2, 'SEARCH', 'Valid', '', true),
    Array('analysis_preparation', 'name_analysis_preparation', 10, 1, 'SEARCH', 'Invalid@123', '', 'name_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'name_analysis_preparation', 10, 2, 'SEARCH', 'Valid Name', '', true),

    // Pruebas Description Analysis Preparation
    Array('analysis_preparation', 'description_analysis_preparation', 11, 1, 'ADD', 'short desc', '', 'description_analysis_preparation_min_size_KO'),
    Array('analysis_preparation', 'description_analysis_preparation', 11, 2, 'ADD', 'a'.repeat(80), '', true),
    Array('analysis_preparation', 'description_analysis_preparation', 12, 1, 'ADD', 'a'.repeat(5001), '', 'description_analysis_preparation_max_size_KO'),
    Array('analysis_preparation', 'description_analysis_preparation', 12, 2, 'ADD', 'Valid Description', '', true),
    Array('analysis_preparation', 'description_analysis_preparation', 13, 1, 'ADD', 'Invalid@Description123', '', 'description_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'description_analysis_preparation', 13, 2, 'ADD', 'Valid Description', '', true),
    Array('analysis_preparation', 'description_analysis_preparation', 14, 1, 'EDIT', 'short', '', 'description_analysis_preparation_min_size_KO'),
    Array('analysis_preparation', 'description_analysis_preparation', 14, 2, 'EDIT', 'a'.repeat(80), '', true),
    Array('analysis_preparation', 'description_analysis_preparation', 15, 1, 'EDIT', 'a'.repeat(5001), '', 'description_analysis_preparation_max_size_KO'),
    Array('analysis_preparation', 'description_analysis_preparation', 15, 2, 'EDIT', 'Valid Description', '', true),
    Array('analysis_preparation', 'description_analysis_preparation', 16, 1, 'EDIT', 'Invalid@Description123', '', 'description_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'description_analysis_preparation', 16, 2, 'EDIT', 'Valid Description', '', true),
    Array('analysis_preparation', 'description_analysis_preparation', 17, 1, 'SEARCH', 'a'.repeat(5001), '', 'description_analysis_preparation_max_size_KO'),
    Array('analysis_preparation', 'description_analysis_preparation', 17, 2, 'SEARCH', 'Valid Description', '', true),
    Array('analysis_preparation', 'description_analysis_preparation', 18, 1, 'SEARCH', 'Invalid@Description123', '', 'description_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'description_analysis_preparation', 18, 2, 'SEARCH', 'Valid Description', '', true),

    // Pruebas Bibliographic Reference
    Array('analysis_preparation', 'bib_analysis_preparation', 19, 1, 'ADD', 'short', '', 'bib_analysis_preparation_min_size_KO'),
    Array('analysis_preparation', 'bib_analysis_preparation', 19, 2, 'ADD', 'Valid Reference', '', true),
    Array('analysis_preparation', 'bib_analysis_preparation', 20, 1, 'ADD', 'a'.repeat(201), '', 'bib_analysis_preparation_max_size_KO'),
    Array('analysis_preparation', 'bib_analysis_preparation', 20, 2, 'ADD', 'Valid Reference', '', true),
    Array('analysis_preparation', 'bib_analysis_preparation', 21, 1, 'ADD', 'Invalid$Reference', '', 'bib_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'bib_analysis_preparation', 21, 2, 'ADD', 'Valid Reference', '', true),
    Array('analysis_preparation', 'bib_analysis_preparation', 22, 1, 'EDIT', 'short', '', 'bib_analysis_preparation_min_size_KO'),
    Array('analysis_preparation', 'bib_analysis_preparation', 22, 2, 'EDIT', 'Valid Reference', '', true),
    Array('analysis_preparation', 'bib_analysis_preparation', 23, 1, 'EDIT', 'a'.repeat(201), '', 'bib_analysis_preparation_max_size_KO'),
    Array('analysis_preparation', 'bib_analysis_preparation', 23, 2, 'EDIT', 'Valid Reference', '', true),
    Array('analysis_preparation', 'bib_analysis_preparation', 24, 1, 'EDIT', 'Invalid$Reference', '', 'bib_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'bib_analysis_preparation', 24, 2, 'EDIT', 'Valid Reference', '', true),
    Array('analysis_preparation', 'bib_analysis_preparation', 25, 1, 'SEARCH', 'a'.repeat(201), '', 'bib_analysis_preparation_max_size_KO'),
    Array('analysis_preparation', 'bib_analysis_preparation', 25, 2, 'SEARCH', 'Valid Reference', '', true),
    Array('analysis_preparation', 'bib_analysis_preparation', 26, 1, 'SEARCH', 'Invalid$Reference', '', 'bib_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'bib_analysis_preparation', 26, 2, 'SEARCH', 'Valid Reference', '', true)
);

/**
 * Pruebas para campos de tipo file
 */
window.analysis_preparation_tests_files = Array(
    // Tests de File Analysis Preparation
    Array('analysis_preparation', 'file_analysis_preparation', 27, 1, 'SEARCH', 'max_size', 'a'.repeat(101), 'file_analysis_preparation_name_max_size_KO'),
    Array('analysis_preparation', 'file_analysis_preparation', 27, 2, 'SEARCH', 'max_size', 'valid.pdf', true),
    Array('analysis_preparation', 'file_analysis_preparation', 28, 1, 'SEARCH', 'format', 'invalid.txt', 'file_analysis_preparation_name_format_KO'),
    Array('analysis_preparation', 'file_analysis_preparation', 28, 2, 'SEARCH', 'format', 'valid.pdf', true),

    // Tests de Nuevo File Analysis Preparation
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 29, 1, 'ADD', 'min_size', 'short', 'nuevo_file_analysis_preparation_name_min_size_KO'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 29, 2, 'ADD', 'min_size', 'validfile.pdf', true),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 30, 1, 'ADD', 'max_size', 'a'.repeat(101), 'nuevo_file_analysis_preparation_name_max_size_KO'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 30, 2, 'ADD', 'max_size', 'validfile.pdf', true),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 31, 1, 'ADD', 'no_file', null, 'nuevo_file_analysis_preparation_no_file_KO'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 31, 2, 'ADD', 'no_file', 'validfile.pdf', true),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 32, 1, 'ADD', 'file_type', 'invalid.txt', 'nuevo_file_analysis_preparation_file_type_KO'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 32, 2, 'ADD', 'file_type', 'valid.pdf', true),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 33, 1, 'ADD', 'max_size_file', 2000001, 'nuevo_file_analysis_preparation_max_size_KO'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 33, 2, 'ADD', 'max_size_file', 1000000, true),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 34, 1, 'ADD', 'format_name_file', 'invalid@file.pdf', 'nuevo_file_analysis_preparation_name_format_KO'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 34, 2, 'ADD', 'format_name_file', 'validfile.pdf', true),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 35, 1, 'EDIT', 'min_size', 'short', 'nuevo_file_analysis_preparation_name_min_size_KO'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 35, 2, 'EDIT', 'min_size', 'validfile.pdf', true),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 36, 1, 'EDIT', 'max_size', 'a'.repeat(101), 'nuevo_file_analysis_preparation_name_max_size_KO'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 36, 2, 'EDIT', 'max_size', 'validfile.pdf', true),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 37, 1, 'EDIT', 'no_file', null, 'nuevo_file_analysis_preparation_no_file_KO'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 37, 2, 'EDIT', 'no_file', 'validfile.pdf', true),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 38, 1, 'EDIT', 'file_type', 'invalid.txt', 'nuevo_file_analysis_preparation_file_type_KO'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 38, 2, 'EDIT', 'file_type', 'valid.pdf', true),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 39, 1, 'EDIT', 'max_size_file', 2000001, 'nuevo_file_analysis_preparation_max_size_KO'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 39, 2, 'EDIT', 'max_size_file', 1000000, true),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 40, 1, 'EDIT', 'format_name_file', 'invalid@file.pdf', 'nuevo_file_analysis_preparation_name_format_KO'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 40, 2, 'EDIT', 'format_name_file', 'validfile.pdf', true)
);
