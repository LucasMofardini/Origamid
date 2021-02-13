//Eventos

const img = document.querySelector('img');

function callback(event) {
    console.log('Clicou');
    console.log(event);
}
// elemento.addEventListener(event, callback, options)
img.addEventListener('click', callback); // 🚀
function callbackLista(e) {
    //   propriedades do event
    console.log(e.currentTarget); // o elemento .animais-lista
    console.log(e.target); // exatamente o click
    console.log(e.type); // tipo do evento
}
const imgListas = document.querySelector('.animais-lista');
imgListas.addEventListener('click', callbackLista);

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
    console.log(e.key)
}
window.addEventListener('keydown', handleKeyBoard);