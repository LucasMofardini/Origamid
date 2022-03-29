//Navegação por tab
//Encontrando os elementos
function initTabNav() {
    const tabmenu = document.querySelectorAll('.js-tabmenu li');
    const tabcontent = document.querySelectorAll('.js-tabcontent section');
    if (tabmenu.length && tabcontent.length) {
        tabcontent[0].classList.add('ativo');

        function activeTab(index) {
            //Remove todos
            tabcontent.forEach((section) => {
                section.classList.remove('ativo');
            });
            //Adiciona ativo no index correspondente
            tabcontent[index].classList.add('ativo');
        }

        tabmenu.forEach((item, index) => {
            item.addEventListener('click', () => {
                activeTab(index);
            });
        });
    }
}
initTabNav();

function initAccordion() {
    const accordionList = document.querySelectorAll('.js-accordion dt');
    if (accordionList.length) {

        accordionList[0].nextElementSibling.classList.add('ativo');

        function activeAcordion() {
            this.classList.toggle('ativo');
            this.nextElementSibling.classList.toggle('ativo');
            console.log(this);
        }

        accordionList.forEach((item) => {
            item.addEventListener('click', activeAcordion);
            console.log('clickou')
        });
    }
}
initAccordion();