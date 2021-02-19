//String é construtora de string
//toda string possui as propriedades e métodos do prototype de String.

const comida = 'pizza'; // string
const agua = new String('agua'); // object

console.log(comida.length);
console.log(agua.length);

console.log(comida[comida.length - 1]);
console.log(agua.charAt(0));

const frase = 'A melhor linguagem é ';
const linguagem = 'JavaScript';

const fraseCompleta = frase.concat(linguagem, '!!', 'OK');
console.log(fraseCompleta);

const fruta = 'Banana';
const listaFrutas = 'Melancia, Banana, Laranja';

listaFrutas.includes(fruta); // true // Lista frutas contem fruta? verdadeiro
fruta.includes(listaFrutas); // false // Fruta contem lista frutas ? falso

fruta.endsWith('nana'); // true  // termina com nana
fruta.startsWith('Ba'); // true //começa com Ba
fruta.startsWith('na'); // false  //começa com na

const transacao1 = 'Depósito de cliente';
const transacao2 = 'Depósito de fornecedor';
const transacao3 = 'Taxa de camisas';

transacao1.slice(0, 3); // Dep
transacao2.slice(0, 3); // Dep
transacao3.slice(0, 3); // Tax

transacao1.slice(12); // cliente // corta os primeiros e deixa a partir do 12
transacao1.slice(-4); // ente // negativo corta de tras pra frente
transacao1.slice(3, 6); // ósi // do index 3 ao 6

console.log(fruta.indexOf('B')); // Index 0
console.log(fruta.lastIndexOf('na')); // Index 4

const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000'];
console.log(listaPrecos[0].padStart(20, '.'));
console.log(listaPrecos[0].padEnd(20, '.'));

listaPrecos.forEach((preco) => {
  console.log(preco.padStart(10, '.'));
});
