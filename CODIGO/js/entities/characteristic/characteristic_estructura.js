window.estructura_characteristic = {
    attributes_list: ['id_characteristic', 'name_characteristic', 'description_characteristic', 'data_type_characteristic', 'category_characteristic', 'bibref_characteristic', 'file_characteristic', 'nuevo_file_characteristic'],
    columnas_visibles_tabla : ['id_characteristic', 'name_characteristic','data_type_characteristic','category_characteristic', 'file_characteristic'],
    columnas_modificadas_tabla: ['file_characteristic'],
    attributes: {
        id_characteristic: {
            html: {
                tag: 'input',
                type: 'text',
            },
            is_pk: true,
            is_not_null: true,
            is_autoincrement: true,
            validation_rules: {
                SEARCH:{
				    max_size: [11,'id_characteristic_max_size_KO'],
                    reg_exp :  ['^[0-9]*$', 'id_characteristic_format_KO'],
                }
            }
        },
        name_characteristic: {
            html: {
                tag: 'input',
                type: 'text',
            },
            is_not_null: true,
            validation_rules: {
                ADD:{
                    min_size : [8, 'name_characteristic_min_size_KO'],
				    max_size: [100,'name_characteristic_max_size_KO'],
                    reg_exp : ['^[A-Za-z\\s]+$', 'name_characteristic_format_KO'],
                },
                EDIT:{
                    min_size : [8, 'name_characteristic_min_size_KO'],
				    max_size: [100,'name_characteristic_max_size_KO'],
                    reg_exp : ['^[A-Za-z\\s]*$', 'name_characteristic_format_KO'],
                },                SEARCH:{
				    max_size: [100,'name_characteristic_max_size_KO'],
                    reg_exp : ['^[A-Za-z\\s]*$', 'name_characteristic_format_KO'],
                }
            }
        },
        description_characteristic: {
            html: {
                tag: 'input',
                type: 'text',
            },
            is_not_null: true,
            validation_rules: {
                ADD:{
                    min_size : [80, 'description_characteristic_min_size_KO'],
				    max_size: [5000,'description_characteristic_max_size_KO'],
                    reg_exp : ['^[A-Za-z\\s]+$', 'description_characteristic_format_KO'],
                },
                EDIT:{
                    min_size : [80, 'description_characteristic_min_size_KO'],
				    max_size: [5000,'description_characteristic_max_size_KO'],
                    reg_exp : ['^[A-Za-z\\s]*$', 'description_characteristic_format_KO'],
                },
                SEARCH:{                max_size: [5000,'description_characteristic_max_size_KO'],
                    reg_exp : ['^[A-Za-z\\s]*$', 'description_characteristic_format_KO'],
                }
            }
        },        data_type_characteristic: {
            html: {
                tag: 'select',
                options: ['','number','text','set'],
            },
            is_not_null: true,
            default_value : '',
            validation_rules: {
                ADD:{
                    reg_exp : ['^(number|text|set)$', 'data_type_characteristic_format_KO'],
                },
                EDIT:{
                    reg_exp : ['^(number|text|set)$', 'data_type_characteristic_format_KO'],
                },
                SEARCH:{
                    reg_exp : ['^(number|text|set|)$', 'data_type_characteristic_format_KO'],
                }
            }
        },        category_characteristic: {
            html: {
                tag: 'select',
                options: ["","soil_site", "soil_chem", "soil_bio"],
            },
            is_not_null: true,
            default_value : '',
            validation_rules: {
                ADD:{
                    reg_exp : ['^(soil_site|soil_chem|soil_bio)$', 'category_characteristic_format_KO'],
                },
                EDIT:{
                    reg_exp : ['^(soil_site|soil_chem|soil_bio)$', 'category_characteristic_format_KO'],
                },
                SEARCH:{
                    reg_exp : ['^(soil_site|soil_chem|soil_bio|)$', 'category_characteristic_format_KO'],
                }
            }
        },
        bibref_characteristic: {
            html: {
                tag: 'input',
                type: 'text',
            },
            is_not_null: true,
            validation_rules: {
                ADD:{
                    min_size : [16, 'bibref_characteristic_min_size_KO'],
				    max_size: [200,'bibref_characteristic_max_size_KO'],
                    reg_exp : ['^[A-Za-zÀ-ÿñÑ\\s.,;:!¡¿?"\'-]+$', 'bibref_characteristic_format_KO'],
                },
                EDIT:{
                    min_size : [16, 'bibref_characteristic_min_size_KO'],
				    max_size: [200,'bibref_characteristic_max_size_KO'],
                    reg_exp : ['^[A-Za-zÀ-ÿñÑ\\s.,;:!¡¿?"\'-]*$', 'bibref_characteristic_format_KO'],
                },
                SEARCH:{
				    max_size: [200,'bibref_characteristic_max_size_KO'],
                    reg_exp : ['^[A-Za-zÀ-ÿñÑ\\s.,;:!¡¿?"\'-]*$', 'bibref_characteristic_format_KO'],
                }
            }
        },    
        file_characteristic: {
            html: {
                tag: 'input',
                type: 'text',
            },
            is_not_null: true,
            validation_rules: {
                SEARCH:{
				    max_size: [100,'file_characteristic_name_max_size_KO'],
                    reg_exp : ['(^$)|(^[A-Za-z]*\.(pdf|doc|docx)$)', 'file_characteristic_name_format_KO'],
                }
            }
        },
        nuevo_file_characteristic: {
            html: {
                tag: 'input',
                type: 'file',
            },
            is_not_null: true,
            validation_rules: {
                ADD:{                    
                    min_size : [7, 'nuevo_file_characteristic_name_min_size_KO'],
				    max_size: [100,'nuevo_file_characteristic_name_max_size_KO'],
                    no_file: ['y', 'nuevo_file_characteristic_no_file_KO'],                    file_type: [["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"],"nuevo_file_characteristic_file_type_KO"],                    max_size_file: [2097152, "nuevo_file_characteristic_max_size_KO"], // 2MB exactos (2 * 1024 * 1024)
                    format_name_file: ["^[A-Za-z]+$","nuevo_file_characteristic_name_format_KO"] // Solo letras en el nombre, sin incluir la extensión
                },                
                EDIT:{
                    min_size : [7, 'nuevo_file_characteristic_name_min_size_KO'],
				    max_size: [100,'nuevo_file_characteristic_name_max_size_KO'],
                    file_type :[["application/pdf", "application/msword","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],"nuevo_file_characteristic_file_type_KO"],
                    max_size_file: [ 2000000, "nuevo_file_characteristic_max_size_KO"],
                    format_name_file: ["^[A-Za-z.]*$","nuevo_file_characteristic_name_format_KO"]
                }
            }
        }
    },

};