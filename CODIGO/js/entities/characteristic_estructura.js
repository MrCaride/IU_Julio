// Estructura de datos para la entidad characteristic
const estructura_characteristic = {
    attributes_list: [
        'id_characteristic',
        'name_characteristic',
        'description_characteristic',
        'data_type_characteristic',
        'category_characteristic',
        'bibref_characteristic',
        'file_characteristic'
    ],
    columnas_visibles_tabla: [
        'id_characteristic',
        'name_characteristic',
        'data_type_characteristic',
        'category_characteristic'
    ],
    attributes: {
        id_characteristic: {
            html: {
                tag: 'input',
                type: 'text',
                component_visible_size: 11
            },
            is_pk: true,
            is_autoincrement: true,
            is_not_null: true,
            validation_rules: {
                ADD: {
                    min_size: [1, 'id_characteristic_min_size_KO'],
                    max_size: [11, 'id_characteristic_max_size_KO'],
                    format: ['^[0-9]+$', 'id_characteristic_format_KO']
                },
                EDIT: {
                    min_size: [1, 'id_characteristic_min_size_KO'],
                    max_size: [11, 'id_characteristic_max_size_KO'],
                    format: ['^[0-9]+$', 'id_characteristic_format_KO']
                },
                SEARCH: {
                    min_size: [1, 'id_characteristic_min_size_KO'],
                    max_size: [11, 'id_characteristic_max_size_KO'],
                    format: ['^[0-9]+$', 'id_characteristic_format_KO']
                }
            }
        },
        name_characteristic: {
            html: {
                tag: 'input',
                type: 'text',
                component_visible_size: 100
            },
            is_not_null: true,
            validation_rules: {
                ADD: {
                    min_size: [8, 'name_characteristic_min_size_KO'],
                    max_size: [100, 'name_characteristic_max_size_KO'],
                    format: ['^[a-zA-Z\\s]+$', 'name_characteristic_format_KO']
                },
                EDIT: {
                    min_size: [8, 'name_characteristic_min_size_KO'],
                    max_size: [100, 'name_characteristic_max_size_KO'],
                    format: ['^[a-zA-Z\\s]+$', 'name_characteristic_format_KO']
                },
                SEARCH: {
                    min_size: [8, 'name_characteristic_min_size_KO'],
                    max_size: [100, 'name_characteristic_max_size_KO'],
                    format: ['^[a-zA-Z\\s]+$', 'name_characteristic_format_KO']
                }
            }
        },
        description_characteristic: {
            html: {
                tag: 'textarea',
                rows: 5,
                cols: 100
            },
            is_not_null: true,
            validation_rules: {
                ADD: {
                    min_size: [80, 'description_characteristic_min_size_KO'],
                    max_size: [5000, 'description_characteristic_max_size_KO'],
                    format: ['^[a-zA-Z\\s]+$', 'description_characteristic_format_KO']
                },
                EDIT: {
                    min_size: [80, 'description_characteristic_min_size_KO'],
                    max_size: [5000, 'description_characteristic_max_size_KO'],
                    format: ['^[a-zA-Z\\s]+$', 'description_characteristic_format_KO']
                },
                SEARCH: {
                    min_size: [80, 'description_characteristic_min_size_KO'],
                    max_size: [5000, 'description_characteristic_max_size_KO'],
                    format: ['^[a-zA-Z\\s]+$', 'description_characteristic_format_KO']
                }
            }
        },
        data_type_characteristic: {
            html: {
                tag: 'select',
                options: ['number', 'text', 'set']
            },
            is_not_null: true,
            validation_rules: {
                ADD: {
                    required: true
                },
                EDIT: {
                    required: true
                }
            }
        },
        category_characteristic: {
            html: {
                tag: 'select',
                options: ['soil_site', 'soil_chem', 'soil_bio']
            },
            is_not_null: true,
            validation_rules: {
                ADD: {
                    required: true
                },
                EDIT: {
                    required: true
                }
            }
        },
        bibref_characteristic: {
            html: {
                tag: 'textarea',
                rows: 3,
                cols: 100
            },
            is_not_null: true,
            validation_rules: {
                ADD: {
                    min_size: [16, 'bibref_characteristic_min_size_KO'],
                    max_size: [200, 'bibref_characteristic_max_size_KO'],
                    format: ['^[a-zA-ZáéíóúÁÉÍÓÚñÑ\\s.,;:¿?¡!()\\[\\]{}]+$', 'bibref_characteristic_format_KO']
                },
                EDIT: {
                    min_size: [16, 'bibref_characteristic_min_size_KO'],
                    max_size: [200, 'bibref_characteristic_max_size_KO'],
                    format: ['^[a-zA-ZáéíóúÁÉÍÓÚñÑ\\s.,;:¿?¡!()\\[\\]{}]+$', 'bibref_characteristic_format_KO']
                },
                SEARCH: {
                    min_size: [16, 'bibref_characteristic_min_size_KO'],
                    max_size: [200, 'bibref_characteristic_max_size_KO'],
                    format: ['^[a-zA-ZáéíóúÁÉÍÓÚñÑ\\s.,;:¿?¡!()\\[\\]{}]+$', 'bibref_characteristic_format_KO']
                }
            }
        },
        file_characteristic: {
            html: {
                tag: 'input',
                type: 'file'
            },
            is_not_null: true,
            validation_rules: {
                ADD: {
                    min_size: [7, 'file_characteristic_min_size_KO'],
                    max_size: [100, 'file_characteristic_max_size_KO'],
                    format: ['^[a-zA-Z]+\\.[a-zA-Z]+$', 'file_characteristic_format_KO'],
                    file_type: ['application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'file_characteristic_type_KO'],
                    max_size_file: [200000, 'file_characteristic_max_size_file_KO']
                },
                EDIT: {
                    min_size: [7, 'file_characteristic_min_size_KO'],
                    max_size: [100, 'file_characteristic_max_size_KO'],
                    format: ['^[a-zA-Z]+\\.[a-zA-Z]+$', 'file_characteristic_format_KO'],
                    file_type: ['application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'file_characteristic_type_KO'],
                    max_size_file: [200000, 'file_characteristic_max_size_file_KO']
                }
            }
        }
    }
};
