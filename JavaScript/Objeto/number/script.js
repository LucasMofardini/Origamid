//Number
//Função construtora de numeros
Number.isNaN(4 + 5); // False
Number.isInteger(20); //True
Number.isInteger(10.3); // False

parseFloat('99.50'); // Mesma função sem o Number
Number.parseFloat('99.50'); // 99.5
Number.parseFloat('100 Reais'); // 100
Number.parseFloat('R$ 100'); // NaN

parseInt('99.50', 10); // 99
parseInt(5.43434355555, 10); // 5
Number.parseInt('100 Reais', 10); // 100

const n = 2.99;
console.log(n.toFixed()); // 3 //sai em string por padrao

const a = 59.49;
a.toLocaleString('en-US', { style: 'currency', currency: 'USD' }); // $59.49
console.log(a.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })); // R$ 59,49

// Object Math

console.log(Math.PI);

Math.abs(-5.5); // 5.5 // valor absoluto
Math.ceil(4.8334); // 5 // arredonda integral pra cima
Math.ceil(4.3); // 5 // arredonda integral pra cima
Math.floor(4.8334); // 4 // arredonda integral pra baixo
Math.floor(4.3); // 4 // arredonda integral pra cima
Math.round(4.8334); // 5 // arredonda normal
Math.round(4.3); // 4 // arredonda normal

Math.max(5, 3, 10, 42, 2); // 42
Math.min(5, 3, 10, 42, 2); // 2

Math.random(); // 0.XXX
Math.floor(Math.random() * 100); // entre 0 e 100
Math.floor(Math.random() * 500); // entre 0 e 500

// Número random entre 72 e 32
Math.floor(Math.random() * (72 - 32 + 1)) + 32;
// Math.floor(Math.random() * (max - min + 1)) + min;

console.log('----- Exercicio -----');

// Retorne um número aleatório
// entre 1050 e 2000

console.log(Math.floor(Math.random() * (2000 - 1050 + 1) + 1050));
// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9';
const arrayN = numeros.split(',');
console.log(Math.max(...arrayN));
//ele passa cada item da array isolado esse spraed

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222', 'R$ 230  ', 'r$  200'];
let soma = 0;
listaPrecos.forEach((item) => {
    limpPreco = +item.slice(3).trim().replace(',', '.');
    soma += limpPreco;
    console.log('Number - ' + limpPreco.toFixed(2));
});
console.log(Math.round(soma));