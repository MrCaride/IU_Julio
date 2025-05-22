// Test definitions for characteristic entity
let def_tests_characteristic = Array(
    // ID Characteristic tests
    Array('characteristic', 'id_characteristic', 1, 'Probar valores mínimos', 'ADD', 'boolean', 'id_characteristic_min_size_KO'),
    Array('characteristic', 'id_characteristic', 2, 'Probar valores máximos', 'ADD', 'boolean', 'id_characteristic_max_size_KO'),
    Array('characteristic', 'id_characteristic', 3, 'Probar formato', 'ADD', 'boolean', 'id_characteristic_format_KO'),
    
    // Name Characteristic tests
    Array('characteristic', 'name_characteristic', 4, 'Probar longitud mínima', 'ADD', 'boolean', 'name_characteristic_min_size_KO'),
    Array('characteristic', 'name_characteristic', 5, 'Probar longitud máxima', 'ADD', 'boolean', 'name_characteristic_max_size_KO'),
    Array('characteristic', 'name_characteristic', 6, 'Probar formato', 'ADD', 'boolean', 'name_characteristic_format_KO'),
    
    // Description Characteristic tests
    Array('characteristic', 'description_characteristic', 7, 'Probar longitud mínima', 'ADD', 'boolean', 'description_characteristic_min_size_KO'),
    Array('characteristic', 'description_characteristic', 8, 'Probar longitud máxima', 'ADD', 'boolean', 'description_characteristic_max_size_KO'),
    Array('characteristic', 'description_characteristic', 9, 'Probar formato', 'ADD', 'boolean', 'description_characteristic_format_KO'),
    
    // Data Type Characteristic tests
    Array('characteristic', 'data_type_characteristic', 10, 'Probar valores válidos', 'ADD', 'boolean', 'data_type_characteristic_format_KO'),
    
    // Category Characteristic tests
    Array('characteristic', 'category_characteristic', 11, 'Probar valores válidos', 'ADD', 'boolean', 'category_characteristic_format_KO'),
    
    // Bibref Characteristic tests
    Array('characteristic', 'bibref_characteristic', 12, 'Probar longitud mínima', 'ADD', 'boolean', 'bibref_characteristic_min_size_KO'),
    Array('characteristic', 'bibref_characteristic', 13, 'Probar longitud máxima', 'ADD', 'boolean', 'bibref_characteristic_max_size_KO'),
    Array('characteristic', 'bibref_characteristic', 14, 'Probar formato', 'ADD', 'boolean', 'bibref_characteristic_format_KO'),
    
    // File Characteristic tests
    Array('characteristic', 'file_characteristic', 15, 'Probar tamaño archivo', 'ADD', 'boolean', 'file_characteristic_max_size_file_KO'),
    Array('characteristic', 'file_characteristic', 16, 'Probar tipo archivo', 'ADD', 'boolean', 'file_characteristic_type_KO'),
    Array('characteristic', 'file_characteristic', 17, 'Probar formato nombre', 'ADD', 'boolean', 'file_characteristic_format_KO')
);

// Test cases for non-file fields
let pruebas_characteristic = Array(
    // ID Characteristic
    Array('characteristic', 'id_characteristic', 1, 1, 'ADD', '', '', 'id_characteristic_min_size_KO'),
    Array('characteristic', 'id_characteristic', 2, 2, 'ADD', '123456789012', '', 'id_characteristic_max_size_KO'),
    Array('characteristic', 'id_characteristic', 3, 3, 'ADD', 'abc123', '', 'id_characteristic_format_KO'),
    Array('characteristic', 'id_characteristic', 3, 4, 'ADD', '123', '', true),
    
    // Name Characteristic
    Array('characteristic', 'name_characteristic', 4, 5, 'ADD', 'short', '', 'name_characteristic_min_size_KO'),
    Array('characteristic', 'name_characteristic', 5, 6, 'ADD', 'a'.repeat(101), '', 'name_characteristic_max_size_KO'),
    Array('characteristic', 'name_characteristic', 6, 7, 'ADD', 'Test Name 123', '', 'name_characteristic_format_KO'),
    Array('characteristic', 'name_characteristic', 6, 8, 'ADD', 'Valid Name Test', '', true),
    
    // Description Characteristic
    Array('characteristic', 'description_characteristic', 7, 9, 'ADD', 'short desc', '', 'description_characteristic_min_size_KO'),
    Array('characteristic', 'description_characteristic', 8, 10, 'ADD', 'a'.repeat(5001), '', 'description_characteristic_max_size_KO'),
    Array('characteristic', 'description_characteristic', 9, 11, 'ADD', 'Description with 123', '', 'description_characteristic_format_KO'),
    Array('characteristic', 'description_characteristic', 9, 12, 'ADD', 'a'.repeat(100), '', true),
    
    // Data Type Characteristic
    Array('characteristic', 'data_type_characteristic', 10, 13, 'ADD', 'invalid', '', 'data_type_characteristic_format_KO'),
    Array('characteristic', 'data_type_characteristic', 10, 14, 'ADD', 'number', '', true),
    Array('characteristic', 'data_type_characteristic', 10, 15, 'ADD', 'text', '', true),
    Array('characteristic', 'data_type_characteristic', 10, 16, 'ADD', 'set', '', true),
    
    // Category Characteristic
    Array('characteristic', 'category_characteristic', 11, 17, 'ADD', 'invalid', '', 'category_characteristic_format_KO'),
    Array('characteristic', 'category_characteristic', 11, 18, 'ADD', 'soil_site', '', true),
    Array('characteristic', 'category_characteristic', 11, 19, 'ADD', 'soil_chem', '', true),
    Array('characteristic', 'category_characteristic', 11, 20, 'ADD', 'soil_bio', '', true),
    
    // Bibref Characteristic
    Array('characteristic', 'bibref_characteristic', 12, 21, 'ADD', 'short', '', 'bibref_characteristic_min_size_KO'),
    Array('characteristic', 'bibref_characteristic', 13, 22, 'ADD', 'a'.repeat(201), '', 'bibref_characteristic_max_size_KO'),
    Array('characteristic', 'bibref_characteristic', 14, 23, 'ADD', 'Reference @123', '', 'bibref_characteristic_format_KO'),
    Array('characteristic', 'bibref_characteristic', 14, 24, 'ADD', 'Valid Reference (2023)', '', true)
);

// Test cases for file field
let pruebas_file_characteristic = Array(
    // File size tests
    Array('characteristic', 'file_characteristic', 15, 25, 'ADD', 'max_size_file', Array('test.pdf', 'application/pdf', 200001), 'file_characteristic_max_size_file_KO'),
    Array('characteristic', 'file_characteristic', 15, 26, 'ADD', 'max_size_file', Array('test.pdf', 'application/pdf', 199999), true),
    
    // File type tests
    Array('characteristic', 'file_characteristic', 16, 27, 'ADD', 'type_file', Array('test.jpg', 'image/jpeg', 1000), 'file_characteristic_type_KO'),
    Array('characteristic', 'file_characteristic', 16, 28, 'ADD', 'type_file', Array('test.pdf', 'application/pdf', 1000), true),
    Array('characteristic', 'file_characteristic', 16, 29, 'ADD', 'type_file', Array('test.doc', 'application/msword', 1000), true),
    
    // File name format tests
    Array('characteristic', 'file_characteristic', 17, 30, 'ADD', 'format_name_file', Array('test space.pdf', 'application/pdf', 1000), 'file_characteristic_format_KO'),
    Array('characteristic', 'file_characteristic', 17, 31, 'ADD', 'format_name_file', Array('test@.pdf', 'application/pdf', 1000), 'file_characteristic_format_KO'),
    Array('characteristic', 'file_characteristic', 17, 32, 'ADD', 'format_name_file', Array('valid.pdf', 'application/pdf', 1000), true)
);
