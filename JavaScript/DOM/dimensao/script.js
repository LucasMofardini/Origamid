const listaAnimais = document.querySelector('.animais-lista');


console.log(listaAnimais.clientHeight); // height + padding
console.log(listaAnimais.offsetHeight); // height + padding + border
console.log(listaAnimais.scrollHeight); // height total, mesmo dentro de scroll

const animaisTopo = listaAnimais.offsetTop; //distancia do topo
console.log(animaisTopo);

const raposa = document.querySelector('h2');
console.log(raposa.offsetLeft); // distancia a esquerda

const rect = raposa.getBoundingClientRect(); //cordenadas do elemento 
console.log(rect);


window.innerWidth; // width do janela
window.outerWidth; // soma dev tools também
window.innerHeight; // height do janela
window.outerHeight; // soma a barra de endereço

window.pageYOffset; // distância total do scroll horizontal
window.pageXOffset; // distância total do scroll vertical

if (window.innerWidth < 600) {
    console.log('Tela menor que 600px');
}
//media query
const small = window.matchMedia('(max-width:600px)');
console.log(small);
if (small.matches) {
    console.log('Usuário mobile');
} else {
    console.log('Usuário Desktop');
}
console.log('--------- Exercicios ---------');

// Verifique a distância da primeira imagem
// em relação ao topo da página
const firstImg = document.querySelector('img');
console.log(firstImg.offsetTop);

// Retorne a soma da largura de todas as imagens

window.onload = function() {
    const somaImagens = document.querySelectorAll('img');
    let soma = 0;
    somaImagens.forEach((item) => {
        soma = item.offsetWidth + soma;
        console.log(item.offsetWidth);
    });
    console.log('Soma das Imagens :' + soma);
}

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a');
console.log(links);
links.forEach((item) => {
    console.log('Altura : ' + item.clientHeight, 'Largura : ' + item.clientWidth);
    if ((item.clientWidth >= 48) && (item.clientHeight >= 48)) {
        console.log('Verdadeiro');
    } else {
        console.log('Falso');
    }
});
// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const menu = document.querySelector('.menu');
const menuSmall = window.matchMedia('(max-width:720px)').matches;
if (menuSmall) {
    menu.classList.add('menu-mobile');
    console.log('Menu Mobile');
} else {
    console.log('Menu Normal');
}