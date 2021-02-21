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
Math.floor(Math.random() * (max - min + 1)) + min;
