// Menu configuration and handling
const menuConfig = {
    entities: [
        {
            id: 'characteristic',
            textKey: 'characteristics',
            className: 'Characteristic'
        }
    ],
    initialize: function() {
        const menuDropdown = document.getElementById('menuDropdown');
        if (!menuDropdown) return;
        
        menuDropdown.innerHTML = '';
        
        // Add entity links
        this.entities.forEach(entity => {
            const link = document.createElement('a');
            link.href = 'javascript:void(0)';
            link.className = `menu-item menu_${entity.id}`;
            link.onclick = () => loadEntity(entity.id);
            link.textContent = Textos[entity.textKey] || entity.textKey;
            menuDropdown.appendChild(link);
        });
        
        // Add API documentation link
        const apiLink = document.createElement('a');
        apiLink.href = './API.html';
        apiLink.className = 'menu-item menu_api';
        apiLink.textContent = Textos['menu_api'];
        menuDropdown.appendChild(apiLink);
    },
    updateText: function() {
        const menuItems = document.querySelectorAll('.menu-item');
        menuItems.forEach(item => {
            const entityConfig = this.entities.find(entity => 
                item.className.includes(`menu_${entity.id}`));
            if (entityConfig) {
                item.textContent = Textos[entityConfig.textKey] || entityConfig.textKey;
            } else if (item.className.includes('menu_api')) {
                item.textContent = Textos['menu_api'];
            }
        });
    }
};

// Initialize menu when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    menuConfig.initialize();
});
