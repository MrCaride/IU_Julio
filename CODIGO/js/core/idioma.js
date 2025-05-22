// Language management module
let current_lang = 'ES';

// Initialize global texts with Spanish by default
if (typeof Textos_ES !== 'undefined') {
    window.Textos = Textos_ES;
} else {
    console.error('Error: Textos_ES not loaded');
    window.Textos = {};
}

// Function to toggle between languages
function changeLang() {
    try {
        if (current_lang === 'ES') {
            if (typeof Textos_EN === 'undefined') {
                console.error('Error: Textos_EN not loaded');
                return;
            }
            current_lang = 'EN';
            window.Textos = Textos_EN;
            document.getElementById('idioma_img').src = './iconos/Spain.png';
        } else {
            if (typeof Textos_ES === 'undefined') {
                console.error('Error: Textos_ES not loaded');
                return;
            }
            current_lang = 'ES';
            window.Textos = Textos_ES;
            document.getElementById('idioma_img').src = './iconos/United-Kingdom.png';
        }
        
        // Update all text elements with the new language
        setLang();
        
        // Update menu text if menu configuration exists
        if (typeof menuConfig !== 'undefined') {
            menuConfig.updateText();
        }
    } catch (e) {
        console.error('Error changing language:', e);
    }
}

// Function to set all text elements to the current language
function setLang() {
    try {
        if (!window.Textos) {
            console.error('Error: window.Textos is not defined');
            return;
        }

        // Update all elements that have translation classes
        document.querySelectorAll('[class*="text_"], [class*="menu_"]').forEach(element => {
            try {
                // Extract the key from the class
                let classes = element.className.split(' ');
                let langClass = classes.find(cls => cls.startsWith('text_') || cls.startsWith('menu_'));
                
                if (langClass) {
                    let key = langClass;
                    if (langClass.startsWith('text_')) {
                        key = langClass.substring(5); // Remove 'text_' prefix
                    }
                    
                    if (window.Textos[key]) {
                        element.innerHTML = window.Textos[key];
                    }
                }
            } catch (err) {
                console.error('Error updating element:', element, err);
            }
        });
        
        // Update form labels
        document.querySelectorAll('label[id*="label_"]').forEach(label => {
            try {
                let fieldId = label.id.substring(6); // Remove 'label_' prefix
                if (window.Textos[fieldId]) {
                    label.innerHTML = window.Textos[fieldId] + ':';
                }
            } catch (err) {
                console.error('Error updating label:', label, err);
            }
        });
        
        // Update select options
        document.querySelectorAll('option').forEach(option => {
            try {
                if (option.value && window.Textos[option.value]) {
                    option.innerHTML = window.Textos[option.value];
                }
            } catch (err) {
                console.error('Error updating option:', option, err);
            }
        });
        
        // Update modal texts
        updateModalTexts();
    } catch (e) {
        console.error('Error in setLang:', e);
    }
}

// Function to update texts in modal windows
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
                console.error('Error updating modal button:', button, err);
            }
        });
    } catch (e) {
        console.error('Error in updateModalTexts:', e);
    }
}

// Initialize language when the page loads
document.addEventListener('DOMContentLoaded', () => {
    try {
        // Set initial texts
        setLang();
    } catch (e) {
        console.error('Error in DOMContentLoaded:', e);
    }
});