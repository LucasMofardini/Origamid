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