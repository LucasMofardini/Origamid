//Eventos

const img = document.querySelector('img');

function callback(event) {
    console.log('Clicou');
    console.log(event);
}
// elemento.addEventListener(event, callback, options)
// img.addEventListener('click', callback); // 🚀
function callbackLista(e) {
    //   propriedades do event
    console.log(e.currentTarget); // o elemento .animais-lista
    console.log(e.target); // exatamente o click
    console.log(e.type); // tipo do evento
}
const imgListas = document.querySelector('.animais-lista');
// imgListas.addEventListener('click', callbackLista);

function handleLink(e) {
    e.preventDefault(); // Metodo que previne o padrão
    console.log(this);
}
const linkExterno = document.querySelector('a[href^="http"]');

linkExterno.addEventListener('click', handleLink);

const h1 = document.querySelector('h1');

function handleEvent(e) {
    console.log(e.type, e);
}

// h1.addEventListener('click', handleEvent);
// h1.addEventListener('mouseenter', handleEvent);
// h1.addEventListener('mousemove', handleEvent);

// window.addEventListener('scroll', handleEvent);
// h1.addEventListener('resize', handleEvent);
function handleKeyBoard(e) {
    if (e.key === 'F') {
        document.body.classList.toggle('fullscreen');
        console.log('Apertou');
    }
}
window.addEventListener('keydown', handleKeyBoard);

//Foreach e eventos
function handleImg(e) {
    console.log(e.target.getAttribute('src'));

}
const imagens = document.querySelectorAll('img');
// imagens.forEach((item) => {
//     item.addEventListener('click', handleImg);
// })

console.log('----------- Exercicios ----------- ');
// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const links = document.querySelectorAll('a[href^="#"]');
console.log(links);

function handleInterno(e) {
    console.log(e.target);
    e.preventDefault();
    links.forEach((link) => {
        link.classList.remove('ativo');
    });
    this.classList.add('ativo');
}
links.forEach((link) => {
    link.addEventListener('click', handleInterno);
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const allElements = document.body;

function handleBody(e) {
    console.log(e.target);
}
allElements.addEventListener('click', handleBody);

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

// function handleBodyRemove(e) {
//     e.target.remove();
// }
// allElements.addEventListener('click', handleBodyRemove);

// Se o usuário clicar na tecla (t), aumente todo o texto do site.

function handleKey(e) {
    if (e.key === 't') {
        // console.log('aperto t');
        document.documentElement.style.fontSize = "150%";
    } else if (document.documentElement.style.fontSize === "150%") {
        document.documentElement.style.fontSize = "100%";

    }
}
window.addEventListener('keydown', handleKey);