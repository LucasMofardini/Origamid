//ForEach
//Method do array

const imgs = document.querySelectorAll('img');

//For each do array imgs
imgs.forEach(function(item, index, array) {
    console.log(index);
    console.log(item);
    console.log(array);
    console.log('---')
});
//Primeiro parametro é o item
//Segundo parametro é a posição do item no array
//Terceiro parametro é o array

//Transformando um HTML COLLECTION
const titulos = document.getElementsByClassName('titulo'); //HTML COLLECTION
const titulosArray = Array.from(titulos); // Array

titulosArray.forEach(function(item) {
    console.log(item);
});

//Arrow Function
//Encuta a função
const image = document.querySelectorAll('img');
image.forEach((item) => {
    console.log(item);
});

console.log('------- Exercicios -------');
// Mostre no console cada parágrado do site
const parag = document.querySelectorAll('p');
parag.forEach((item) => {
    console.log(item);
});
// Mostre o texto dos parágrafos no console
parag.forEach((item) => {
    console.log(item.innerHTML);
});
// Como corrigir os erros abaixo:
const imgs2 = document.querySelectorAll('img');

imgs2.forEach((item, index) => {
    console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
    console.log(i++);
});

imgs.forEach(() => i++);