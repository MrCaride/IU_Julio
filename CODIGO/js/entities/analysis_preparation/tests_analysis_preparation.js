/**
 * Tests for analysis_preparation
 */

/**
 * Pruebas para campos que no son de tipo file
 */
window.analysis_preparation_tests = Array(    // Pruebas ID Analysis Preparation
    Array('analysis_preparation', 'id_analysis_preparation', 1, 1, 'SEARCH', 'abc123', '', 'id_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'id_analysis_preparation', 1, 2, 'SEARCH', '123', '', 'OK'),
    Array('analysis_preparation', 'id_analysis_preparation', 2, 3, 'SEARCH', '1234567890', '', 'id_analysis_preparation_max_size_KO'),
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
    Array('analysis_preparation', 'name_analysis_preparation', 8, 16, 'EDIT', 'Valid Name', '', 'OK'),    Array('analysis_preparation', 'name_analysis_preparation', 9, 17, 'SEARCH', 'a'.repeat(10), '', 'name_analysis_preparation_max_size_KO'),
    Array('analysis_preparation', 'name_analysis_preparation', 9, 18, 'SEARCH', 'Valid', '', 'OK'),
    Array('analysis_preparation', 'name_analysis_preparation', 10, 19, 'SEARCH', 'Bad@Name', '', 'name_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'name_analysis_preparation', 10, 20, 'SEARCH', 'Valid', '', 'OK'),// Pruebas Description Analysis Preparation
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
    Array('analysis_preparation', 'description_analysis_preparation', 16, 32, 'EDIT', 'a'.repeat(80), '', 'OK'),    Array('analysis_preparation', 'description_analysis_preparation', 17, 33, 'SEARCH', 'a'.repeat(5001), '', 'description_analysis_preparation_max_size_KO'),
    Array('analysis_preparation', 'description_analysis_preparation', 17, 34, 'SEARCH', 'Valid Description', '', 'OK'),
    Array('analysis_preparation', 'description_analysis_preparation', 18, 35, 'SEARCH', 'Invalid@Description123', '', 'description_analysis_preparation_format_KO'),
    Array('analysis_preparation', 'description_analysis_preparation', 18, 36, 'SEARCH', 'Valid Description', '', 'OK'),    // Pruebas Bibliographic Reference
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

    // Tests de File Analysis Preparation (text field)
    Array('analysis_preparation', 'file_analysis_preparation', 27, 53, 'SEARCH', 'a'.repeat(101), '', 'file_analysis_preparation_name_max_size_KO'),
    Array('analysis_preparation', 'file_analysis_preparation', 27, 54, 'SEARCH', 'valid.pdf', '', 'OK'),
    Array('analysis_preparation', 'file_analysis_preparation', 28, 55, 'SEARCH', 'invalid.txt', '', 'file_analysis_preparation_name_format_KO'),
    Array('analysis_preparation', 'file_analysis_preparation', 28, 56, 'SEARCH', 'valid.pdf', '', 'OK')
);

/**
 * Pruebas para campos de tipo file
 */
window.analysis_preparation_tests_files = Array(
    // Tests de Nuevo File Analysis Preparation
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
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 37, 73, 'EDIT', 'no_file', null, 'nuevo_file_analysis_preparation_no_file_KO'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 37, 74, 'EDIT', 'no_file', 'validfile.pdf', 'OK'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 38, 75, 'EDIT', 'file_type', 'invalid.txt', 'nuevo_file_analysis_preparation_file_type_KO'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 38, 76, 'EDIT', 'file_type', 'valid.pdf', 'OK'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 39, 77, 'EDIT', 'max_size_file', 2000001, 'nuevo_file_analysis_preparation_max_size_KO'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 39, 78, 'EDIT', 'max_size_file', 1000000, 'OK'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 40, 79, 'EDIT', 'format_name_file', 'invalid@file.pdf', 'nuevo_file_analysis_preparation_name_format_KO'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 40, 80, 'EDIT', 'format_name_file', 'validfile.pdf', 'OK')
);
