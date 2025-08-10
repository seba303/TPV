window.addEventListener('DOMContentLoaded', () => {
    if (!document.getElementById('menu-navegacion')) {
        const menu = document.createElement('nav');
        menu.id = 'menu-navegacion';
        menu.innerHTML = `
            <a href="index.html">Dashboard</a>
            <a href="productos.html">Productos</a>
        `;
        document.body.insertBefore(menu, document.body.firstChild);
    }
});
