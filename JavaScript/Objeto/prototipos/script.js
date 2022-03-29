// Prototype está só na function
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}
Pessoa.prototype.andar = function () {
  return `${this.nome} Andou`;
};
Pessoa.prototype.nadar = function () {
  return `${this.nome} Nadou`;
};
//Essas funçoes nao estao ligadas diretamente ao objeto 'lucas'
//e sim ao construtor 'Pessoa'
const lucas = new Pessoa('Lucas', 18);
console.log(lucas.prototype); // undefined
console.log(Pessoa.prototype); // retorna o objeto

// __proto__

// Tem em todo construtor
// Mas não usar nele direto
const pais = 'Brasil';
const cidade = new String('Rio');

pais.charAt(0); // B
cidade.charAt(0); // R

const listaAnimais = ['Cachorro', 'Gato', 'Cavalo'];

const lista = document.querySelectorAll('li'); // Node List
//Protoype de NodeList tem funçoes de NodeList
//São diferentes mas parecem iguais

// Transforma em uma array
const listaArray1 = Array.prototype.slice.call(lista); //Array
const listaArray2 = Array.from(lista); //Array
//Protoype de array tem funçoes de array

const carro = {
  marca: 'Ford',
  preco: 2000,
  andar() {
    return true;
  },
};
console.log(Number.prototype);
console.log(String.prototype);

// carro.andar().constructor.name = Boolean;
console.log(carro.andar()); // Retorna Boleano, True or False
// carro.andar.constructor.name = Function;
console.log(carro.andar); // Retorna a função e seus prototypes

console.log('---------- Exercicio ----------');

// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoas(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}
Pessoas.prototype.nomeCompleto = function () {
  return `${this.nome} ${this.sobrenome}`;
};
const p1 = new Pessoas('lucas', 'mofardini', 19);

// Liste os métodos acessados por
// dados criados com NodeList,
// HTMLCollection, Document

console.log(NodeList.prototype);
console.log(Object.getOwnPropertyNames(NodeList.prototype));
console.log(HTMLCollection.prototype);
console.log(Object.getOwnPropertyNames(HTMLCollection.prototype));
console.log(Document.prototype);
console.log(Object.getOwnPropertyNames(Document.prototype));

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li;
console.log(li.constructor.name); // Elemento Li Html
li.click;
console.log(li.click.constructor.name); // Function
li.innerText;
console.log(li.innerText.constructor.name); // String
li.value;
console.log(li.value.constructor.name); // Number
li.hidden;
console.log(li.hidden.constructor.name); // Boolean
li.offsetLeft;
console.log(li.offsetLeft.constructor.name); // Number
li.click();
console.log(li.click.constructor.name); // Undefined

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; // String devolvendo um valor 'Boolean'
console.log('Construtor do li: ' + li.hidden.constructor.name);

//Document = funçao construtora
//document = objeto construido a partir do Document
