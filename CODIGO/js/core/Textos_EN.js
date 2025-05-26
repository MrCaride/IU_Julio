// English texts
const Textos_EN = {
    // Common elements
    'title': 'Management System',
    'welcome': 'Welcome to the management system',
    'menu': 'Menu',
    'entities': 'Entities',
    'actions': 'Actions',
    'search': 'Search',
    'add': 'Add',
    'edit': 'Edit',
    'delete': 'Delete',
    'detail': 'Detail',
    'submit': 'Submit',
    'cancel': 'Cancel',
    'back': 'Back',
    'loading': 'Loading...',
    'language': 'Language',
    'logout': 'Logout',
    'test': 'Test',

    // Menu dropdown
    'menu_api': 'API Documentation',

    // Common form elements
    'select_data_type': '--Select Data Type--',
    'select_category': '--Select Category--',
    'new_file': 'New File',

    // Form labels and validation messages
    'required_field': 'This field is required',
    'min_length': 'Minimum length not reached',
    'max_length': 'Maximum length exceeded',
    'format_error': 'Incorrect format',
    'file_size_error': 'File size exceeded',
    'file_type_error': 'File type not allowed',
    'file_name_error': 'Incorrect file name',
    'invalid_date': 'Invalid date',
    'invalid_number': 'Invalid number',
    'invalid_email': 'Invalid email',
    'success_operation': 'Operation completed successfully',
    'error_operation': 'Error in operation',
    'confirm_delete': 'Are you sure you want to delete this record?',

    // Entity specific - Project
    'project': 'Project',
    'projects': 'Projects',
    'project_id': 'Project ID',
    'project_name': 'Project Name',
    'project_description': 'Project Description',
    'project_date': 'Project Date',
    'project_manager': 'Project Manager',

    // Project empty field messages
    'name_project_empty_KO': 'Project name cannot be empty',
    'description_project_empty_KO': 'Project description cannot be empty',
    'start_date_project_empty_KO': 'Start date cannot be empty',
    'end_date_project_empty_KO': 'End date cannot be empty',
    'responsable_project_empty_KO': 'Project manager cannot be empty',
    'organization_project_empty_KO': 'Organization cannot be empty',
    'code_project_empty_KO': 'Project code cannot be empty',
    'acronym_project_empty_KO': 'Project acronym cannot be empty',
    'id_sampling_methodology_empty_KO': 'Sampling methodology cannot be empty',

    // Mensajes de error para Project
    // ID Project
    'id_project_min_size_KO': 'ID must have at least 1 digit',
    'id_project_max_size_KO': 'ID exceeds maximum number of digits (11)',
    'id_project_format_KO': 'ID can only contain digits',

    // Name Project
    'name_project_min_size_KO': 'Name must have at least 15 characters',
    'name_project_max_size_KO': 'Name exceeds maximum number of characters (100)',
    'name_project_format_KO': 'Name can only contain letters and spaces (no accents or ñ)',

    // Description Project
    'description_project_min_size_KO': 'Description must have at least 30 characters',
    'description_project_max_size_KO': 'Description exceeds maximum number of characters (500)',

    // Start Date Project
    'start_date_project_format_KO': 'Date only accepts numbers and slashes in format dd/mm/yyyy',
    'start_date_project_valid_KO': 'Date must be valid',

    // End Date Project
    'end_date_project_format_KO': 'Date only accepts numbers and slashes in format dd/mm/yyyy',
    'end_date_project_valid_KO': 'Date must be valid',
    'end_date_project_greater_than_start_KO': 'End date cannot be earlier than start date',

    // Responsible Project
    'responsable_project_min_size_KO': 'Manager must have at least 6 characters',
    'responsable_project_max_size_KO': 'Manager exceeds maximum number of characters (60)',
    'responsable_project_format_KO': 'Manager can only contain letters, spaces, accents and ñ',

    // Organization Project
    'organization_project_min_size_KO': 'Organization must have at least 6 characters',
    'organization_project_max_size_KO': 'Organization exceeds maximum number of characters (100)',
    'organization_project_format_KO': 'Organization can only contain letters, spaces, accents and ñ',

    // Code Project
    'code_project_min_size_KO': 'Code must have at least 6 characters',
    'code_project_max_size_KO': 'Code exceeds maximum number of characters (50)',
    'code_project_format_KO': 'Code can only contain letters, ñ, spaces and punctuation marks (no accents)',

    // Acronym Project
    'acronym_project_min_size_KO': 'Acronym must have at least 6 characters',
    'acronym_project_max_size_KO': 'Acronym exceeds maximum number of characters (15)',
    'acronym_project_format_KO': 'Acronym can only contain letters, ñ and punctuation marks (no accents or spaces)',

    // Sampling Methodology
    'id_sampling_methodology_min_size_KO': 'Methodology ID must have at least 1 digit',
    'id_sampling_methodology_max_size_KO': 'Methodology ID exceeds maximum number of digits (11)',
    'id_sampling_methodology_format_KO': 'Methodology ID can only contain digits',

    // File Project
    'nuevo_file_project_max_size_file_KO': 'File cannot exceed 2000000 bytes',
    'nuevo_file_project_type_file_KO': 'File can only be pdf, doc or docx',
    'nuevo_file_project_format_name_file_KO': 'File name can only contain letters and dot',
    'nuevo_file_project_min_size_name_KO': 'File name must have at least 6 characters',
    'nuevo_file_project_max_size_name_KO': 'File name exceeds maximum number of characters (100)',

    // Success messages for Project
    'id_project_OK': 'Project ID is valid',
    'name_project_OK': 'Project name is valid',
    'description_project_OK': 'Project description is valid',
    'start_date_project_OK': 'Start date is valid',
    'end_date_project_OK': 'End date is valid',
    'responsable_project_OK': 'Project manager is valid',
    'organization_project_OK': 'Organization is valid',
    'code_project_OK': 'Project code is valid',
    'acronym_project_OK': 'Project acronym is valid',
    'id_sampling_methodology_OK': 'Methodology ID is valid',
    'nuevo_file_project_OK': 'Project file is valid',

    // Entity specific - Analysis Preparation
    'analysis_preparation': 'Analysis Preparation',
    'analysis_preparations': 'Analysis Preparations',
    'analysis_preparation_id': 'Preparation ID',
    'analysis_type': 'Analysis Type',
    'analysis_date': 'Analysis Date',
    'analysis_description': 'Analysis Description',
    'analysis_method': 'Analysis Method',

    // Analysis Preparation empty field messages
    'id_analysis_preparation_empty_KO': 'Preparation ID cannot be empty',
    'name_analysis_preparation_empty_KO': 'Preparation name cannot be empty',
    'description_analysis_preparation_empty_KO': 'Preparation description cannot be empty',
    'bib_analysis_preparation_empty_KO': 'Bibliographic reference cannot be empty',

    // Analysis Preparation error messages
    // ID Analysis Preparation
    'id_analysis_preparation_min_size_KO': 'ID must have at least 1 digit',
    'id_analysis_preparation_max_size_KO': 'ID exceeds maximum number of digits (11)',
    'id_analysis_preparation_format_KO': 'ID can only contain digits',

    // Name Analysis Preparation
    'name_analysis_preparation_min_size_KO': 'Name must have at least 8 characters',
    'name_analysis_preparation_max_size_KO': 'Name exceeds maximum number of characters (100)',
    'name_analysis_preparation_format_KO': 'Name can only contain letters and spaces',

    // Description Analysis Preparation
    'description_analysis_preparation_min_size_KO': 'Description must have at least 80 characters',
    'description_analysis_preparation_max_size_KO': 'Description exceeds maximum number of characters (5000)',
    'description_analysis_preparation_format_KO': 'Description can only contain letters and spaces',

    // Bibliographic Reference
    'bib_analysis_preparation_min_size_KO': 'Bibliographic reference must have at least 6 characters',
    'bib_analysis_preparation_max_size_KO': 'Bibliographic reference exceeds maximum number of characters (200)',
    'bib_analysis_preparation_format_KO': 'Bibliographic reference can only contain letters, spaces, punctuation marks and accents',

    // File Analysis Preparation
    'nuevo_file_analysis_preparation_max_size_file_KO': 'File cannot exceed 2MB',
    'nuevo_file_analysis_preparation_type_file_KO': 'File can only be pdf, doc or docx',
    'nuevo_file_analysis_preparation_format_name_file_KO': 'File name can only contain letters and dot',
    'nuevo_file_analysis_preparation_min_size_name_KO': 'File name must have at least 7 characters',
    'nuevo_file_analysis_preparation_max_size_name_KO': 'File name exceeds maximum number of characters (100)',

    // Success messages for Analysis Preparation
    'id_analysis_preparation_OK': 'Preparation ID is valid',
    'name_analysis_preparation_OK': 'Preparation name is valid',
    'description_analysis_preparation_OK': 'Preparation description is valid',
    'bib_analysis_preparation_OK': 'Bibliographic reference is valid',
    'nuevo_file_analysis_preparation_OK': 'Preparation file is valid',

    // Entity specific - Characteristic
    'characteristic': 'Characteristic',
    'characteristics': 'Characteristics',
    'menu_characteristic': 'Characteristic Management',
    'id_characteristic': 'Characteristic ID',
    'name_characteristic': 'Name',
    'description_characteristic': 'Description',
    'data_type_characteristic': 'Data Type',
    'category_characteristic': 'Category',
    'bibref_characteristic': 'Bibliographic Reference',
    'file_characteristic': 'File',
    'nuevo_file_characteristic': 'Upload File',

    'id_characteristic_required_KO': 'ID is required',
    'id_characteristic_format_KO': 'ID must be numeric',
    'id_characteristic_min_size_KO': 'ID must have at least 1 digit',
    'id_characteristic_max_size_KO': 'ID cannot have more than 11 digits',

    // Messages for nuevo_file_characteristic
    'nuevo_file_characteristic_name_min_size_KO': 'File name must be at least 7 characters long',
    'nuevo_file_characteristic_name_max_size_KO': 'File name cannot exceed 100 characters',
    'nuevo_file_characteristic_no_file_KO': 'You must select a file',
    'nuevo_file_characteristic_file_type_KO': 'File must be PDF or DOC/DOCX',
    'nuevo_file_characteristic_max_size_KO': 'File cannot exceed 2MB',
    'nuevo_file_characteristic_name_format_KO': 'File name can only contain letters and dot',

    'name_characteristic_required_KO': 'Name is required',
    'name_characteristic_format_KO': 'Name can only contain letters and spaces',
    'name_characteristic_min_size_KO': 'Name must be at least 8 characters',
    'name_characteristic_max_size_KO': 'Name cannot be longer than 100 characters',

    'description_characteristic_required_KO': 'Description is required',
    'description_characteristic_format_KO': 'Description contains invalid characters',
    'description_characteristic_min_size_KO': 'Description must be at least 80 characters',
    'description_characteristic_max_size_KO': 'Description cannot be longer than 5000 characters',

    'data_type_characteristic_required_KO': 'Data type is required',
    'data_type_characteristic_format_KO': 'Invalid data type',

    'category_characteristic_required_KO': 'Category is required',
    'category_characteristic_format_KO': 'Category can only contain letters and spaces',
    'category_characteristic_min_size_KO': 'Category must be at least 6 characters',
    'category_characteristic_max_size_KO': 'Category cannot be longer than 50 characters',

    'bibref_characteristic_required_KO': 'Bibliographic reference is required',
    'bibref_characteristic_format_KO': 'Bibliographic reference contains invalid characters',
    'bibref_characteristic_min_size_KO': 'Reference must be at least 16 characters',
    'bibref_characteristic_max_size_KO': 'Reference cannot be longer than 200 characters',

    'file_characteristic_required_KO': 'File is required',
    'file_characteristic_type_KO': 'Invalid file type (must be PDF or DOC)',
    'file_characteristic_size_KO': 'File is too large (max 2MB)',
    'file_characteristic_format_KO': 'Invalid file format',

    // Data types
    'number': 'Number',
    'text': 'Text', 
    'set': 'Set',

    // Categories
    'soil_site': 'Soil Site',
    'soil_chem': 'Soil Chemistry',
    'soil_bio': 'Soil Biology',

    // Error messages
    'ERROR_CONNECTION': 'Connection error with server',
    'ERROR_DB': 'Database error',
    'ERROR_VALIDATION': 'Data validation error',
    'ERROR_NO_FILE': 'No file selected',
    'ERROR_UPLOAD': 'Error uploading file',
    'ERROR_AUTH': 'Authentication error',

    // File messages
    'no_file': 'No file',
    'admin_no_te_lo_deja_borrar_KO': 'The administrator does not allow deleting this item'
};