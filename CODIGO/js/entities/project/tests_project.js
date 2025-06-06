/**
 * Definiciones de tests para project
 */
window.project_def_tests = Array(
    // Tests de ID Project
    Array('project', 'id_project', 1, 'Validar formato SEARCH', 'SEARCH', 'boolean', 'id_project_format_KO'),
    Array('project', 'id_project', 2, 'Validar tamaño máximo SEARCH', 'SEARCH', 'boolean', 'id_project_max_size_KO'),

    // Tests de Name Project
    Array('project', 'name_project', 3, 'Validar longitud mínima ADD', 'ADD', 'boolean', 'name_project_min_size_KO'),
    Array('project', 'name_project', 4, 'Validar longitud máxima ADD', 'ADD', 'boolean', 'name_project_max_size_KO'),
    Array('project', 'name_project', 5, 'Validar formato ADD', 'ADD', 'boolean', 'name_project_format_KO'),
    Array('project', 'name_project', 6, 'Validar longitud mínima EDIT', 'EDIT', 'boolean', 'name_project_min_size_KO'),
    Array('project', 'name_project', 7, 'Validar longitud máxima EDIT', 'EDIT', 'boolean', 'name_project_max_size_KO'),
    Array('project', 'name_project', 8, 'Validar formato EDIT', 'EDIT', 'boolean', 'name_project_format_KO'),
    Array('project', 'name_project', 9, 'Validar longitud máxima SEARCH', 'SEARCH', 'boolean', 'name_project_max_size_KO'),
    Array('project', 'name_project', 10, 'Validar formato SEARCH', 'SEARCH', 'boolean', 'name_project_format_KO'),

    // Tests de Date Fields
    Array('project', 'start_date_project', 11, 'Validar formato fecha ADD', 'ADD', 'boolean', 'start_date_project_format_KO'),
    Array('project', 'start_date_project', 12, 'Validar fecha válida ADD', 'ADD', 'boolean', 'start_date_project_valid_KO'),
    Array('project', 'start_date_project', 13, 'Validar formato fecha EDIT', 'EDIT', 'boolean', 'start_date_project_format_KO'),
    Array('project', 'start_date_project', 14, 'Validar fecha válida EDIT', 'EDIT', 'boolean', 'start_date_project_valid_KO'),
    Array('project', 'start_date_project', 15, 'Validar formato fecha SEARCH', 'SEARCH', 'boolean', 'start_date_project_format_KO'),
    Array('project', 'start_date_project', 16, 'Validar fecha válida SEARCH', 'SEARCH', 'boolean', 'start_date_project_valid_KO'),

    Array('project', 'end_date_project', 17, 'Validar formato fecha fin ADD', 'ADD', 'boolean', 'end_date_project_format_KO'),
    Array('project', 'end_date_project', 18, 'Validar fecha fin válida ADD', 'ADD', 'boolean', 'end_date_project_valid_KO'),
    Array('project', 'end_date_project', 19, 'Validar fecha fin mayor que inicio ADD', 'ADD', 'boolean', 'end_date_project_greater_than_start_KO'),
    Array('project', 'end_date_project', 20, 'Validar formato fecha fin EDIT', 'EDIT', 'boolean', 'end_date_project_format_KO'),
    Array('project', 'end_date_project', 21, 'Validar fecha fin válida EDIT', 'EDIT', 'boolean', 'end_date_project_valid_KO'),
    Array('project', 'end_date_project', 22, 'Validar fecha fin mayor que inicio EDIT', 'EDIT', 'boolean', 'end_date_project_greater_than_start_KO'),
    Array('project', 'end_date_project', 23, 'Validar formato fecha fin SEARCH', 'SEARCH', 'boolean', 'end_date_project_format_KO'),
    Array('project', 'end_date_project', 24, 'Validar fecha fin válida SEARCH', 'SEARCH', 'boolean', 'end_date_project_valid_KO'),

    // Tests de Responsable Project
    Array('project', 'responsable_project', 25, 'Validar longitud mínima ADD', 'ADD', 'boolean', 'responsable_project_min_size_KO'),
    Array('project', 'responsable_project', 26, 'Validar longitud máxima ADD', 'ADD', 'boolean', 'responsable_project_max_size_KO'),
    Array('project', 'responsable_project', 27, 'Validar formato ADD', 'ADD', 'boolean', 'responsable_project_format_KO'),
    Array('project', 'responsable_project', 28, 'Validar longitud mínima EDIT', 'EDIT', 'boolean', 'responsable_project_min_size_KO'),
    Array('project', 'responsable_project', 29, 'Validar longitud máxima EDIT', 'EDIT', 'boolean', 'responsable_project_max_size_KO'),
    Array('project', 'responsable_project', 30, 'Validar formato EDIT', 'EDIT', 'boolean', 'responsable_project_format_KO'),
    Array('project', 'responsable_project', 31, 'Validar longitud máxima SEARCH', 'SEARCH', 'boolean', 'responsable_project_max_size_KO'),
    Array('project', 'responsable_project', 32, 'Validar formato SEARCH', 'SEARCH', 'boolean', 'responsable_project_format_KO'),

    // Tests de Organization Project
    Array('project', 'organization_project', 33, 'Validar longitud mínima ADD', 'ADD', 'boolean', 'organization_project_min_size_KO'),
    Array('project', 'organization_project', 34, 'Validar longitud máxima ADD', 'ADD', 'boolean', 'organization_project_max_size_KO'),
    Array('project', 'organization_project', 35, 'Validar formato ADD', 'ADD', 'boolean', 'organization_project_format_KO'),
    Array('project', 'organization_project', 36, 'Validar longitud mínima EDIT', 'EDIT', 'boolean', 'organization_project_min_size_KO'),
    Array('project', 'organization_project', 37, 'Validar longitud máxima EDIT', 'EDIT', 'boolean', 'organization_project_max_size_KO'),
    Array('project', 'organization_project', 38, 'Validar formato EDIT', 'EDIT', 'boolean', 'organization_project_format_KO'),
    Array('project', 'organization_project', 39, 'Validar longitud máxima SEARCH', 'SEARCH', 'boolean', 'organization_project_max_size_KO'),
    Array('project', 'organization_project', 40, 'Validar formato SEARCH', 'SEARCH', 'boolean', 'organization_project_format_KO'),

    // Tests de Description Project
    Array('project', 'description_project', 41, 'Validar longitud mínima ADD', 'ADD', 'boolean', 'description_project_min_size_KO'),
    Array('project', 'description_project', 42, 'Validar longitud máxima ADD', 'ADD', 'boolean', 'description_project_max_size_KO'),
    Array('project', 'description_project', 43, 'Validar formato ADD', 'ADD', 'boolean', 'description_project_format_KO'),
    Array('project', 'description_project', 44, 'Validar longitud mínima EDIT', 'EDIT', 'boolean', 'description_project_min_size_KO'),
    Array('project', 'description_project', 45, 'Validar longitud máxima EDIT', 'EDIT', 'boolean', 'description_project_max_size_KO'),
    Array('project', 'description_project', 46, 'Validar formato EDIT', 'EDIT', 'boolean', 'description_project_format_KO'),
    Array('project', 'description_project', 47, 'Validar longitud máxima SEARCH', 'SEARCH', 'boolean', 'description_project_max_size_KO'),
    Array('project', 'description_project', 48, 'Validar formato SEARCH', 'SEARCH', 'boolean', 'description_project_format_KO')
);

/**
 * Pruebas para campos que no son de tipo file
 */
window.project_tests = Array(
    // Pruebas ID Project
    Array('project', 'id_project', 1, 1, 'SEARCH', 'abc123', '', 'id_project_format_KO'),
    Array('project', 'id_project', 1, 2, 'SEARCH', '123', '', true),
    Array('project', 'id_project', 2, 1, 'SEARCH', '123456789012', '', 'id_project_max_size_KO'),
    Array('project', 'id_project', 2, 2, 'SEARCH', '12345', '', true),

    // Pruebas Name Project
    Array('project', 'name_project', 3, 1, 'ADD', 'short', '', 'name_project_min_size_KO'),
    Array('project', 'name_project', 3, 2, 'ADD', 'Valid Project Name Test', '', true),
    Array('project', 'name_project', 4, 1, 'ADD', 'a'.repeat(101), '', 'name_project_max_size_KO'),
    Array('project', 'name_project', 4, 2, 'ADD', 'Valid Project Name', '', true),
    Array('project', 'name_project', 5, 1, 'ADD', 'Invalid@Name123', '', 'name_project_format_KO'),
    Array('project', 'name_project', 5, 2, 'ADD', 'Valid Project Name', '', true),
    Array('project', 'name_project', 6, 1, 'EDIT', 'short', '', 'name_project_min_size_KO'),
    Array('project', 'name_project', 6, 2, 'EDIT', 'Valid Project Name Test', '', true),
    Array('project', 'name_project', 7, 1, 'EDIT', 'a'.repeat(101), '', 'name_project_max_size_KO'),
    Array('project', 'name_project', 7, 2, 'EDIT', 'Valid Project Name', '', true),
    Array('project', 'name_project', 8, 1, 'EDIT', 'Invalid@Name123', '', 'name_project_format_KO'),
    Array('project', 'name_project', 8, 2, 'EDIT', 'Valid Project Name', '', true),
    Array('project', 'name_project', 9, 1, 'SEARCH', 'a'.repeat(16), '', 'name_project_max_size_KO'),
    Array('project', 'name_project', 9, 2, 'SEARCH', 'Valid', '', true),
    Array('project', 'name_project', 10, 1, 'SEARCH', 'Invalid@123', '', 'name_project_format_KO'),
    Array('project', 'name_project', 10, 2, 'SEARCH', 'Valid Name', '', true),

    // Pruebas Start Date Project
    Array('project', 'start_date_project', 11, 1, 'ADD', '2025-01-01', '', 'start_date_project_format_KO'),
    Array('project', 'start_date_project', 11, 2, 'ADD', '01/01/2025', '', true),
    Array('project', 'start_date_project', 12, 1, 'ADD', '32/13/2025', '', 'start_date_project_valid_KO'),
    Array('project', 'start_date_project', 12, 2, 'ADD', '01/01/2025', '', true),
    Array('project', 'start_date_project', 13, 1, 'EDIT', '2025-01-01', '', 'start_date_project_format_KO'),
    Array('project', 'start_date_project', 13, 2, 'EDIT', '01/01/2025', '', true),
    Array('project', 'start_date_project', 14, 1, 'EDIT', '32/13/2025', '', 'start_date_project_valid_KO'),
    Array('project', 'start_date_project', 14, 2, 'EDIT', '01/01/2025', '', true),
    Array('project', 'start_date_project', 15, 1, 'SEARCH', '2025-01-01', '', 'start_date_project_format_KO'),
    Array('project', 'start_date_project', 15, 2, 'SEARCH', '01/01/2025', '', true),
    Array('project', 'start_date_project', 16, 1, 'SEARCH', '32/13/2025', '', 'start_date_project_valid_KO'),
    Array('project', 'start_date_project', 16, 2, 'SEARCH', '01/01/2025', '', true),

    // Pruebas End Date Project
    Array('project', 'end_date_project', 17, 1, 'ADD', '2025-12-31', '', 'end_date_project_format_KO'),
    Array('project', 'end_date_project', 17, 2, 'ADD', '31/12/2025', '', true),
    Array('project', 'end_date_project', 18, 1, 'ADD', '32/13/2025', '', 'end_date_project_valid_KO'),
    Array('project', 'end_date_project', 18, 2, 'ADD', '31/12/2025', '', true),
    Array('project', 'end_date_project', 19, 1, 'ADD', '01/01/2024', '', 'end_date_project_greater_than_start_KO'),
    Array('project', 'end_date_project', 19, 2, 'ADD', '31/12/2025', '', true),
    Array('project', 'end_date_project', 20, 1, 'EDIT', '2025-12-31', '', 'end_date_project_format_KO'),
    Array('project', 'end_date_project', 20, 2, 'EDIT', '31/12/2025', '', true),
    Array('project', 'end_date_project', 21, 1, 'EDIT', '32/13/2025', '', 'end_date_project_valid_KO'),
    Array('project', 'end_date_project', 21, 2, 'EDIT', '31/12/2025', '', true),
    Array('project', 'end_date_project', 22, 1, 'EDIT', '01/01/2024', '', 'end_date_project_greater_than_start_KO'),
    Array('project', 'end_date_project', 22, 2, 'EDIT', '31/12/2025', '', true),
    Array('project', 'end_date_project', 23, 1, 'SEARCH', '2025-12-31', '', 'end_date_project_format_KO'),
    Array('project', 'end_date_project', 23, 2, 'SEARCH', '31/12/2025', '', true),
    Array('project', 'end_date_project', 24, 1, 'SEARCH', '32/13/2025', '', 'end_date_project_valid_KO'),
    Array('project', 'end_date_project', 24, 2, 'SEARCH', '31/12/2025', '', true),

    // Pruebas Responsable Project
    Array('project', 'responsable_project', 25, 1, 'ADD', 'short', '', 'responsable_project_min_size_KO'),
    Array('project', 'responsable_project', 25, 2, 'ADD', 'Valid Responsable', '', true),
    Array('project', 'responsable_project', 26, 1, 'ADD', 'a'.repeat(61), '', 'responsable_project_max_size_KO'),
    Array('project', 'responsable_project', 26, 2, 'ADD', 'Valid Responsable', '', true),
    Array('project', 'responsable_project', 27, 1, 'ADD', 'Invalid@123', '', 'responsable_project_format_KO'),
    Array('project', 'responsable_project', 27, 2, 'ADD', 'Valid Responsable', '', true),
    Array('project', 'responsable_project', 28, 1, 'EDIT', 'short', '', 'responsable_project_min_size_KO'),
    Array('project', 'responsable_project', 28, 2, 'EDIT', 'Valid Responsable', '', true),
    Array('project', 'responsable_project', 29, 1, 'EDIT', 'a'.repeat(61), '', 'responsable_project_max_size_KO'),
    Array('project', 'responsable_project', 29, 2, 'EDIT', 'Valid Responsable', '', true),
    Array('project', 'responsable_project', 30, 1, 'EDIT', 'Invalid@123', '', 'responsable_project_format_KO'),
    Array('project', 'responsable_project', 30, 2, 'EDIT', 'Valid Responsable', '', true),
    Array('project', 'responsable_project', 31, 1, 'SEARCH', 'a'.repeat(61), '', 'responsable_project_max_size_KO'),
    Array('project', 'responsable_project', 31, 2, 'SEARCH', 'Valid Responsable', '', true),
    Array('project', 'responsable_project', 32, 1, 'SEARCH', 'Invalid@123', '', 'responsable_project_format_KO'),
    Array('project', 'responsable_project', 32, 2, 'SEARCH', 'Valid Responsable', '', true),

    // Pruebas Organization Project
    Array('project', 'organization_project', 33, 1, 'ADD', 'short', '', 'organization_project_min_size_KO'),
    Array('project', 'organization_project', 33, 2, 'ADD', 'Valid Organization', '', true),
    Array('project', 'organization_project', 34, 1, 'ADD', 'a'.repeat(101), '', 'organization_project_max_size_KO'),
    Array('project', 'organization_project', 34, 2, 'ADD', 'Valid Organization', '', true),
    Array('project', 'organization_project', 35, 1, 'ADD', 'Invalid@123', '', 'organization_project_format_KO'),
    Array('project', 'organization_project', 35, 2, 'ADD', 'Valid Organization', '', true),
    Array('project', 'organization_project', 36, 1, 'EDIT', 'short', '', 'organization_project_min_size_KO'),
    Array('project', 'organization_project', 36, 2, 'EDIT', 'Valid Organization', '', true),
    Array('project', 'organization_project', 37, 1, 'EDIT', 'a'.repeat(101), '', 'organization_project_max_size_KO'),
    Array('project', 'organization_project', 37, 2, 'EDIT', 'Valid Organization', '', true),
    Array('project', 'organization_project', 38, 1, 'EDIT', 'Invalid@123', '', 'organization_project_format_KO'),
    Array('project', 'organization_project', 38, 2, 'EDIT', 'Valid Organization', '', true),
    Array('project', 'organization_project', 39, 1, 'SEARCH', 'a'.repeat(101), '', 'organization_project_max_size_KO'),
    Array('project', 'organization_project', 39, 2, 'SEARCH', 'Valid Organization', '', true),
    Array('project', 'organization_project', 40, 1, 'SEARCH', 'Invalid@123', '', 'organization_project_format_KO'),
    Array('project', 'organization_project', 40, 2, 'SEARCH', 'Valid Organization', '', true),

    // Pruebas Description Project
    Array('project', 'description_project', 41, 1, 'ADD', 'short description', '', 'description_project_min_size_KO'),
    Array('project', 'description_project', 41, 2, 'ADD', 'a'.repeat(30), '', true),
    Array('project', 'description_project', 42, 1, 'ADD', 'a'.repeat(501), '', 'description_project_max_size_KO'),
    Array('project', 'description_project', 42, 2, 'ADD', 'Valid Description', '', true),
    Array('project', 'description_project', 43, 1, 'ADD', 'Invalid@Description123', '', 'description_project_format_KO'),
    Array('project', 'description_project', 43, 2, 'ADD', 'Valid Description', '', true),
    Array('project', 'description_project', 44, 1, 'EDIT', 'short', '', 'description_project_min_size_KO'),
    Array('project', 'description_project', 44, 2, 'EDIT', 'a'.repeat(30), '', true),
    Array('project', 'description_project', 45, 1, 'EDIT', 'a'.repeat(501), '', 'description_project_max_size_KO'),
    Array('project', 'description_project', 45, 2, 'EDIT', 'Valid Description', '', true),
    Array('project', 'description_project', 46, 1, 'EDIT', 'Invalid@Description123', '', 'description_project_format_KO'),
    Array('project', 'description_project', 46, 2, 'EDIT', 'Valid Description', '', true),
    Array('project', 'description_project', 47, 1, 'SEARCH', 'a'.repeat(501), '', 'description_project_max_size_KO'),
    Array('project', 'description_project', 47, 2, 'SEARCH', 'Valid Description', '', true),
    Array('project', 'description_project', 48, 1, 'SEARCH', 'Invalid@Description123', '', 'description_project_format_KO'),
    Array('project', 'description_project', 48, 2, 'SEARCH', 'Valid Description', '', true)
);

/**
 * Pruebas para campos de tipo file
 */
window.project_tests_files = Array(
    // Tests de File Project
    Array('project', 'file_project', 19, 1, 'ADD', 'max_size_file', 5000001, 'file_project_max_size_file_KO'),
    Array('project', 'file_project', 19, 2, 'ADD', 'max_size_file', 5000000, true)
);
