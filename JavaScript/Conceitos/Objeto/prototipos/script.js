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
