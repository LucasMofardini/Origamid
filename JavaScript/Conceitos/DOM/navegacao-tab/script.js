//Navegação por tab
//Encontrando os elementos
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
