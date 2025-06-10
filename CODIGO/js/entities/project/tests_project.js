/**
 * Tests for project
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
    Array('project', 'name_project', 9, 17, 'SEARCH', 'a'.repeat(16), '', 'name_project_max_size_KO'),
    Array('project', 'name_project', 9, 18, 'SEARCH', 'Valid', '', 'OK'),
    Array('project', 'name_project', 10, 19, 'SEARCH', 'Invalid@123', '', 'name_project_format_KO'),
    Array('project', 'name_project', 10, 20, 'SEARCH', 'Valid Name', '', 'OK'),    // Pruebas Start Date Project
    Array('project', 'start_date_project', 11, 21, 'ADD', '2025-01-01', '', 'start_date_project_format_KO'),
    Array('project', 'start_date_project', 11, 22, 'ADD', '01/01/2025', '', 'OK'),
    Array('project', 'start_date_project', 12, 23, 'ADD', '32/13/2025', '', 'start_date_project_valid_KO'),
    Array('project', 'start_date_project', 12, 24, 'ADD', '01/01/2025', '', 'OK'),
    Array('project', 'start_date_project', 13, 25, 'EDIT', '2025-01-01', '', 'start_date_project_format_KO'),
    Array('project', 'start_date_project', 13, 26, 'EDIT', '01/01/2025', '', 'OK'),
    Array('project', 'start_date_project', 14, 27, 'EDIT', '32/13/2025', '', 'start_date_project_valid_KO'),
    Array('project', 'start_date_project', 14, 28, 'EDIT', '01/01/2025', '', 'OK'),
    Array('project', 'start_date_project', 15, 29, 'SEARCH', '2025-01-01', '', 'start_date_project_format_KO'),
    Array('project', 'start_date_project', 15, 30, 'SEARCH', '01/01/2025', '', 'OK'),
    Array('project', 'start_date_project', 16, 31, 'SEARCH', '32/13/2025', '', 'start_date_project_valid_KO'),
    Array('project', 'start_date_project', 16, 32, 'SEARCH', '01/01/2025', '', 'OK'),

    // Pruebas End Date Project
    Array('project', 'end_date_project', 17, 33, 'ADD', '2025-12-31', '', 'end_date_project_format_KO'),
    Array('project', 'end_date_project', 17, 34, 'ADD', '31/12/2025', '', 'OK'),    Array('project', 'end_date_project', 18, 35, 'ADD', '32/13/2025', '', 'end_date_project_valid_KO'),
    Array('project', 'end_date_project', 18, 36, 'ADD', '31/12/2025', '', 'OK'),
    Array('project', 'end_date_project', 19, 37, 'ADD', '31/12/2020', {'start_date_project': '01/01/2025'}, 'end_date_project_greater_than_start_KO'),
    Array('project', 'end_date_project', 19, 38, 'ADD', '31/12/2025', {'start_date_project': '01/01/2025'}, 'OK'),
    Array('project', 'end_date_project', 20, 39, 'EDIT', '2025-12-31', '', 'end_date_project_format_KO'),
    Array('project', 'end_date_project', 20, 40, 'EDIT', '31/12/2025', '', 'OK'),    Array('project', 'end_date_project', 21, 41, 'EDIT', '32/13/2025', '', 'end_date_project_valid_KO'),
    Array('project', 'end_date_project', 21, 42, 'EDIT', '31/12/2025', '', 'OK'),
    Array('project', 'end_date_project', 22, 43, 'EDIT', '01/01/2020', {'start_date_project': '01/01/2025'}, 'end_date_project_greater_than_start_KO'),
    Array('project', 'end_date_project', 22, 44, 'EDIT', '31/12/2025', {'start_date_project': '01/01/2025'}, 'OK'),
    Array('project', 'end_date_project', 23, 45, 'SEARCH', '2025-12-31', '', 'end_date_project_format_KO'),
    Array('project', 'end_date_project', 23, 46, 'SEARCH', '31/12/2025', '', 'OK'),
    Array('project', 'end_date_project', 24, 47, 'SEARCH', '32/13/2025', '', 'end_date_project_valid_KO'),
    Array('project', 'end_date_project', 24, 48, 'SEARCH', '31/12/2025', '', 'OK'),    // Pruebas Responsable Project
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
    Array('project', 'organization_project', 40, 80, 'SEARCH', 'Valid Organization', '', 'OK'),    // Pruebas Description Project
    Array('project', 'description_project', 41, 81, 'ADD', 'short description', '', 'description_project_min_size_KO'),
    Array('project', 'description_project', 41, 82, 'ADD', 'This is a valid description with at least thirty characters long', '', 'OK'),
    Array('project', 'description_project', 42, 83, 'ADD', 'a'.repeat(501), '', 'description_project_max_size_KO'),
    Array('project', 'description_project', 42, 84, 'ADD', 'This is a valid description with at least thirty characters long', '', 'OK'),
    Array('project', 'description_project', 43, 85, 'ADD', 'IIIIIIIIIIIIIInvalid@Description123', '', 'description_project_format_KO'),
    Array('project', 'description_project', 43, 86, 'ADD', 'This is a valid description with at least thirty characters long', '', 'OK'),
    Array('project', 'description_project', 44, 87, 'EDIT', 'short', '', 'description_project_min_size_KO'),
    Array('project', 'description_project', 44, 88, 'EDIT', 'This is a valid description with at least thirty characters long', '', 'OK'),
    Array('project', 'description_project', 45, 89, 'EDIT', 'a'.repeat(501), '', 'description_project_max_size_KO'),
    Array('project', 'description_project', 45, 90, 'EDIT', 'This is a valid description with at least thirty characters long', '', 'OK'),
    Array('project', 'description_project', 46, 91, 'EDIT', 'IIIIIIIIIIIIIInvalidInvalid@Description123', '', 'description_project_format_KO'),
    Array('project', 'description_project', 46, 92, 'EDIT', 'This is a valid description with at least thirty characters long', '', 'OK'),
    Array('project', 'description_project', 47, 93, 'SEARCH', 'a'.repeat(501), '', 'description_project_max_size_KO'),
    Array('project', 'description_project', 47, 94, 'SEARCH', 'This is a valid description with at least thirty characters long', '', 'OK'),
    Array('project', 'description_project', 48, 95, 'SEARCH', 'Invalid@Description123', '', 'description_project_format_KO'),
    Array('project', 'description_project', 48, 96, 'SEARCH', 'This is a valid description with at least thirty characters long', '', 'OK')
);

/**
 * Pruebas para campos de tipo file
 */
window.project_tests_files = Array(    // Tests de nuevo_file_project - max_size_file validation (file size in bytes)
    Array('project', 'nuevo_file_project', 49, 97, 'ADD', 'max_size_file', 3000001, 'nuevo_file_project_max_size_KO'),
    Array('project', 'nuevo_file_project', 49, 98, 'ADD', 'max_size_file', 1000000, 'OK'),
    
    // Tests de nuevo_file_project - file_type validation  
    Array('project', 'nuevo_file_project', 50, 99, 'ADD', 'file_type', 'text/plain', 'nuevo_file_project_file_type_KO'),
    Array('project', 'nuevo_file_project', 50, 100, 'ADD', 'file_type', 'application/pdf', 'OK'),
    
    // Tests de nuevo_file_project - min_size validation
    Array('project', 'nuevo_file_project', 51, 101, 'ADD', 'min_size', 5, 'nuevo_file_project_name_min_size_KO'),
    Array('project', 'nuevo_file_project', 51, 102, 'ADD', 'min_size', 10, 'OK'),    // Tests de nuevo_file_project - max_size validation (filename length)
    Array('project', 'nuevo_file_project', 52, 103, 'ADD', 'max_size', 'a'.repeat(101) + '.pdf', 'nuevo_file_project_name_max_size_KO'),
    Array('project', 'nuevo_file_project', 52, 104, 'ADD', 'max_size', 'validfile.pdf', 'OK')
);
