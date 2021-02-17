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
