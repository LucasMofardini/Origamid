// Armazena colecao de elementos
//String numero funçã array

// const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
// const carros = new Array('Corola', 'Mustang', 'Honda');

// carros[1] // Mustang
// carros[2] = 'Ferrari';
// carros[10] = 'Parati';
// carros.length; // 11 //Tamanho da array

const li = document.querySelectorAll('li');
console.log(li);
arrayaLi = Array.from(li);
console.log(arrayaLi);
console.log(Array.isArray(li));

Array.of(10); // [10]
Array.of(1, 2, 3, 4); // [1,2,3,4]
new Array(5); // [,,,,]
Array(5); // [,,,,]
Array(1, 2, 3, 4); // [1,2,3,4]

const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva Verde']];
frutas.length; // 3 itens

frutas[0].length; // 6
frutas[1].length; // 5
frutas[2].length; // 2

const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
instrumentos.sort(); // Ordem alfabetica

const carros = ['Ford', 'Fiat', 'VW'];
carros.unshift('Honda', 'Kia'); // 5  // Adiciona no inicio da array
carros; // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW'];

carros.push('Ferrari'); // 6  // Adiciona ao final da array
carros; // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW', 'Ferrari'];


const carros2 = ['Ford', 'Fiat', 'VW', 'Honda'];
const primeiroCarro = carros.shift(); // 'Ford' // Remove o primeiro elemento e retorna ele
carros2; // ['Fiat', 'VW', 'Honda'];

const ultimoCarro = carros.pop(); // 'Honda' // Remove o ultimo elemento e retorna ele
carros2; // ['Fiat', 'VW'];

carros2.reverse(); //Inverte a ordem da array