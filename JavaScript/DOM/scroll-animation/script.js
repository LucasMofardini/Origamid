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
            console.log('clickou');
        });
    }
}
initAccordion();

function scrollSuave() {
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

    function scroolToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });

        // forma alternativa
        // const topo = section.offsetTop;
        // window.scrollTo({
        //     top: topo,
        //     behavior: 'smooth',
        // });
    }
    linksInternos.forEach((item) => {
        item.addEventListener('click', scroolToSection);
    });
}
scrollSuave();

//Animação ao scroll
function InitAnimateScroll() {
    const section = document.querySelectorAll('.js-scroll');
    const windowHeight = window.innerHeight * 0.6;
    if (section) {
        function animateScroll() {
            section.forEach((item) => {
                const sectionTop = item.getBoundingClientRect().top - windowHeight;
                if (sectionTop < 0) {
                    item.classList.add('ativo');
                }
            })
        }
        animateScroll();
        window.addEventListener('scroll', animateScroll);
    }
}
InitAnimateScroll();