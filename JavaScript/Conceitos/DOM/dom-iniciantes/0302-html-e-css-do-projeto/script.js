// Pega o elemento pelo Id
const animaisSection = document.getElementById('animais');
console.log(animaisSection);

//Pegar lista por classe ou Tag
const gridSection = document.getElementsByClassName('grid-section');
console.log(gridSection[0]);

//Seletor geral unico
const firstLi = document.querySelector('li');
console.log(firstLi);
const firstUl = document.querySelector('ul');
console.log(firstUl);

//Pegar o primeiro link que começa com # no href
const link = document.querySelector('[href^="#"]');
console.log(link.href);

//Pega TODOS
const imgAnimais = document.querySelectorAll('.animais img');
//Retorna nodeList
console.log(imgAnimais[1]);

//Diferença entre HTML colection e NodeList
console.log('-------------- Diferença --------------');
const gridSectionHtml = document.getElementsByClassName('grid-section'); //3 itens
const gridSectionNode = document.querySelectorAll('.grid-section'); // 3 itens

firstUl.classList.add('grid-section');

console.log(gridSectionHtml); // 4 itens //Ao vivo
console.log(gridSectionNode); // 3 itens //Estático

//ArrayLike
//Coloca todos as classes gridSectionNode
gridSectionNode.forEach(function(item, index) {
    console.log(item);
});

//Não da pra usar foreach no HTML Collection
console.log('---')
    //Arraygrid = gridSectionHtml porém NÃO É MAIS AO VIVO, ficou ESTÁTICA
const arrayGrid = Array.from(gridSectionHtml);
// arrayGrid.pop();
arrayGrid.forEach(function(item) {
    console.log(item);
});
firstLi.classList.add('grid-section');

console.log(arrayGrid); //4 Itens
console.log(gridSectionHtml); //5 Itens

console.log('------- Exercicio -------');
// Retorne no console todas as imagens do site
const allImg = document.querySelectorAll('img');
console.log(allImg);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imgFirst = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imgFirst);

// Selecione todos os links internos (onde o href começa com #)
const allLinks = document.querySelectorAll('[href^="#"]');
allLinks.forEach((item) => {
    console.log(item);
});
// Selecione o primeiro h2 dentro de .animais-descricao
const firstH2 = document.querySelector('.animais-descricao h2');
console.log(firstH2);
console.log(`first h2 =  ${firstH2.innerHTML}`);

// Selecione o último p do site
const Ps = document.querySelectorAll('p');
const lastP = Ps[--Ps.length];
console.log(lastP);