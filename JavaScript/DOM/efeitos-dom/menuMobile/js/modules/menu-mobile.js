import outsideClick from './outsideclick.js';

export default function initMenuMobile() {
    const menuButton = document.querySelector('[data-menu="button"]');
    const menuList = document.querySelector('[data-menu="lista"]');
    const eventos = ['click', 'touchstart'];
    if (menuButton) {
        function openMenu(event) {

            menuList.classList.add('active');
            menuButton.classList.add('active');
            // Verifica se ele clica fora do menuList
            outsideClick(menuList, eventos, () => {
                menuList.classList.remove('active');
                menuButton.classList.remove('active');
            });
        }
        // Coloca o evento de click e click mobile 
        eventos.forEach((evento) => {
            menuButton.addEventListener(evento, openMenu);

        });
    }


}
