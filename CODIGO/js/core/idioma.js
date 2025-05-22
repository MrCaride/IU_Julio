// Language management module
window.current_lang = 'ES';
window.Textos = window.Textos_ES || {}

// Function to toggle between languages
function changeLang() {
    if (current_lang === 'ES') {
        current_lang = 'EN';
        window.Textos = window.Textos_EN;
        document.getElementById('idioma_img').src = './iconos/Spain.png';
    } else {
        current_lang = 'ES';
        window.Textos = window.Textos_ES;
        document.getElementById('idioma_img').src = './iconos/United-Kingdom.png';
    }
      // Update all text elements with the new language
    setLang();
    
    // Update menu text
    if (window.menuConfig) {
        menuConfig.updateText();
    }
}

// Function to set all text elements to the current language
function setLang() {
    // Update all elements that have translation classes
    document.querySelectorAll('[class*="text_"], [class*="menu_"]').forEach(element => {
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
    });
    
    // Update form labels
    document.querySelectorAll('label[id*="label_"]').forEach(label => {
        let fieldId = label.id.substring(6); // Remove 'label_' prefix
        if (window.Textos[fieldId]) {
            label.innerHTML = window.Textos[fieldId] + ':';
        }
    });
    
    // Update select options
    document.querySelectorAll('option').forEach(option => {
        if (option.value && window.Textos[option.value]) {
            option.innerHTML = window.Textos[option.value];
        }
    });
    
    // Update modal texts
    updateModalTexts();
}

// Function to update texts in modal windows
function updateModalTexts() {
    const errorModalTitle = document.getElementById('error-modal-title');
    if (errorModalTitle) {
        errorModalTitle.innerHTML = window.Textos['error_operation'];
    }
    
    const confirmModalTitle = document.getElementById('confirm-modal-title');
    if (confirmModalTitle) {
        confirmModalTitle.innerHTML = window.Textos['confirm_delete'];
    }
    
    document.querySelectorAll('.modal-button').forEach(button => {
        if (button.dataset.textKey && window.Textos[button.dataset.textKey]) {
            button.innerHTML = window.Textos[button.dataset.textKey];
        }
    });
}

// Initialize language when the page loads
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all text elements
    setLang();
});