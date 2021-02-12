// Class List

const menu = document.querySelector('.menu');
console.log(menu);
menu.className; // string
menu.className += ' vermelho';
console.log(menu.className);

menu.classList; // lista de classes
console.log(menu.classList);

menu.classList.add('ativo'); //Adiciona classe

menu.classList.add('ativo', 'mobile'); //Adiciona duas ou mais classes

menu.classList.remove('ativo');
menu.classList.toggle('ativo'); // adiciona/remove a classe
menu.classList.contains('ativo'); // true ou false // se possuir
menu.classList.replace('ativo', 'inativo'); // troca a classe de ativo para inativo


//Atributos
console.log('----------- Atributos -----------');
const animais = document.querySelector('.animais');
//Array like
console.log(animais.attributes.id);

//GET atribute e SET atribute
const img = document.querySelector('img');
console.log(img.getAttribute('src')); //retorna o source da imagem
console.log(img.setAttribute('alt', 'É uma raposa'));
console.log(img.hasAttribute('alt'));
console.log(img.removeAttribute('alt'));

// Propriedade read only

animais.attributes; // só leitura

//Exercicio 
console.log('-------- Exercicio --------');

// Adicione a classe ativo a todos os itens do menu
const itemMenu = document.querySelector('.menu');
const itensDoMenu = itemMenu.querySelectorAll('a');
const adicionaItem = itensDoMenu.forEach((item) => {
    item.classList.add('ativo');
});
console.log(itensDoMenu);
// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
const RemoveItem = itensDoMenu.forEach((item, index) => {
    item.classList.remove('ativo');
    itensDoMenu[0].classList.add('ativo');

});
console.log(itensDoMenu);

// Verifique se as imagens possuem o atributo alt
const imagens = document.querySelectorAll('img');
console.log('Com null - ');
imagens.forEach((item) => {
    if (item.getAttribute('alt') !== null) {
        console.log('Certos');
    } else {
        console.log('Errado');
    }
});
// ou
console.log('Com has -');
imagens.forEach((item) => {

    console.log(item.hasAttribute('alt'));
});
// Modifique o href do link externo no menu
const linksExterno = document.querySelector('a[href^="http"]');
linksExterno.setAttribute('href', 'https://www.google.com');
console.log(linksExterno);