// Configuración y manejo del menú
const menuConfig = {
    entities: [
        {
            id: 'characteristic',
            textKey: 'characteristics',
            className: 'Characteristic'
        },
        {
            id: 'project',
            textKey: 'projects',
            className: 'Project'
        },
        {
            id: 'analysis_preparation',
            textKey: 'analysis_preparations',
            className: 'Analysis_preparation'
        }
    ],
    initialize: function() {
        const menuDropdown = document.getElementById('menuDropdown');
        if (!menuDropdown) return;
        
        menuDropdown.innerHTML = '';
        
        // Agregar enlaces de entidades
        this.entities.forEach(entity => {
            const link = document.createElement('a');
            link.href = 'javascript:void(0)';
            link.className = `menu-item menu_${entity.id}`;
            link.onclick = () => loadEntity(entity.id);
            link.textContent = Textos[entity.textKey] || entity.textKey;
            menuDropdown.appendChild(link);
        });
          // Agregar enlace a documentación API
        const apiLink = document.createElement('a');
        apiLink.href = './API.html';
        apiLink.className = 'menu-item menu_api';
        apiLink.textContent = Textos['menu_api'];
        menuDropdown.appendChild(apiLink);
    }
};

// Inicializar menú cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
    menuConfig.initialize();
});
