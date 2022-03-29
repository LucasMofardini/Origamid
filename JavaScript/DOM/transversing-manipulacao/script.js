//Texto
const h1 = document.querySelector('h1');
console.log(h1.innerHTML); // Animais fantasticos //vem o html completo

// h1.innerHTML = '<P>Novo Titulo</p>';

//Transversing
const lista = document.querySelector('.animais-lista');
console.log(lista.parentElement); // O pai que envolve
console.log(lista.nextElementSibling); // Proximo elemento
console.log(lista.previousElementSibling); // Elemento anterior

lista.children[--lista.children.length]; // Ultimo filho
console.log(lista.querySelector('li:last-child')); // Ultimo filho

console.log(lista.childNodes); // Pega os elementos com espaço, comentario, etc

const contato = document.querySelector('.contato');
const titulo = contato.querySelector('.titulo');
const mapa = document.querySelector('.mapa');

// contato.appendChild(lista); // move lista para o final de contato
// contato.insertBefore(animais, titulo); // insere animais antes de titulo
contato.removeChild(titulo); // remove titulo de contato
// contato.replaceChild(lista, titulo); // substitui titulo por lista

//Criação de elementos

const novoH1 = document.createElement('h1'); // Cria um h1
novoH1.innerText = 'Novo Titulo';
novoH1.classList.add('titulo');
console.log(novoH1);
mapa.appendChild(novoH1);

//Clonar elementos

const faq = document.querySelector('.faq');
const h1clonado = h1.cloneNode(true);
faq.appendChild(h1clonado);
//São elementos separados agora

// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu');
const copy = document.querySelector('.copy');
const cloneMenu = menu.cloneNode(true);
copy.appendChild(cloneMenu);

// Selecione o primeiro DT da dl de Faq
const firstDt = faq.querySelector('.faq-lista dt');
console.log(firstDt);
// Selecione o DD referente ao primeiro DT
const firstDd = firstDt.nextElementSibling;
console.log(firstDd);

// Substitua o conteúdo html de .faq pelo de .animais
faq.innerHTML = animais.innerHTML;
console.log(animais);
