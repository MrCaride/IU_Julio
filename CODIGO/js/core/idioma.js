// Módulo de gestión de idiomas
let current_lang = 'ES';

// Inicializar textos globales con español por defecto
if (typeof Textos_ES !== 'undefined') {
    window.Textos = Textos_ES;
} else {
    console.error('Error: Textos_ES no está cargado');
    window.Textos = {};
}

// Función para alternar entre idiomas
function changeLang() {
    try {
        if (current_lang === 'ES') {
            if (typeof Textos_EN === 'undefined') {
                console.error('Error: Textos_EN no está cargado');
                return;
            }
            current_lang = 'EN';
            window.Textos = Textos_EN;
            document.getElementById('idioma_img').src = './iconos/Spain.png';
        } else {
            if (typeof Textos_ES === 'undefined') {
                console.error('Error: Textos_ES no está cargado');
                return;
            }
            current_lang = 'ES';
            window.Textos = Textos_ES;
            document.getElementById('idioma_img').src = './iconos/United-Kingdom.png';
        }
        
        // Actualizar todos los elementos de texto con el nuevo idioma
        setLang();
        
        // Actualizar el texto del menú si existe la configuración del menú
        if (typeof menuConfig !== 'undefined') {
            menuConfig.updateText();
        }
    } catch (e) {
        console.error('Error al cambiar el idioma:', e);
    }
}

// Función para establecer todos los elementos de texto en el idioma actual
function setLang() {
    try {
        if (!window.Textos) {
            console.error('Error: window.Textos no está definido');
            return;
        }        // Actualizar todos los elementos que tienen clases de traducción
        document.querySelectorAll('[class*="text_"], [class*="menu_"]').forEach(element => {
            try {
                // Primero intentar usar data-text-key si existe
                const textKey = element.getAttribute('data-text-key');
                if (textKey && window.Textos[textKey]) {
                    element.innerHTML = window.Textos[textKey];
                    return;
                }
                
                // Si no hay data-text-key, usar el método tradicional de clases
                let classes = element.className.split(' ');
                let langClass = classes.find(cls => cls.startsWith('text_') || cls.startsWith('menu_'));
                
                if (langClass) {
                    let key = langClass;
                    if (langClass.startsWith('text_')) {
                        key = langClass.substring(5); // Eliminar el prefijo 'text_'
                    }
                    
                    if (window.Textos[key]) {
                        element.innerHTML = window.Textos[key];
                    }
                }
            } catch (err) {
                console.error('Error al actualizar el elemento:', element, err);
            }
        });
        
        // Actualizar etiquetas de formulario
        document.querySelectorAll('label[id*="label_"]').forEach(label => {
            try {
                let fieldId = label.id.substring(6); // Eliminar el prefijo 'label_'
                if (window.Textos[fieldId]) {
                    label.innerHTML = window.Textos[fieldId] + ':';
                }
            } catch (err) {
                console.error('Error al actualizar la etiqueta:', label, err);
            }
        });
        
        // Actualizar opciones de selección
        document.querySelectorAll('option').forEach(option => {
            try {
                if (option.value && window.Textos[option.value]) {
                    option.innerHTML = window.Textos[option.value];
                }
            } catch (err) {
                console.error('Error al actualizar la opción:', option, err);
            }
        });
        
        // Actualizar textos de modales
        updateModalTexts();
    } catch (e) {
        console.error('Error en setLang:', e);
    }
}

// Función para actualizar textos en ventanas modales
function updateModalTexts() {
    try {
        const errorModalTitle = document.getElementById('error-modal-title');
        if (errorModalTitle && window.Textos['error_operation']) {
            errorModalTitle.innerHTML = window.Textos['error_operation'];
        }
        
        document.querySelectorAll('.modal-button').forEach(button => {
            try {
                if (button.dataset.textKey && window.Textos[button.dataset.textKey]) {
                    button.innerHTML = window.Textos[button.dataset.textKey];
                }
            } catch (err) {
                console.error('Error al actualizar el botón del modal:', button, err);
            }
        });
    } catch (e) {
        console.error('Error en updateModalTexts:', e);
    }
}

// Inicializar idioma cuando la página se carga
document.addEventListener('DOMContentLoaded', () => {
    try {
        // Establecer textos iniciales
        setLang();
    } catch (e) {
        console.error('Error en DOMContentLoaded:', e);
    }
});