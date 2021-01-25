//Responsavel por guardar algo na memoria
var nome = 'lucas';
let idade = 18;
const possuiFaculdade = false;
console.log(nome, idade, possuiFaculdade);

//Usada para evitar repetição

var preco = 10;
var totalComprado = 5;
var totalPreco = totalComprado * preco;
console.log(totalPreco);

var sobrenome = 'Mofardini',
    cidade = 'SP',
    bairro = 'Capão';
console.log(sobrenome, cidade, bairro);

//js é CASE SENSITIVE
//Tem algumas palavras reservadas = Var, Break ...

//Sempre joga a variavel sem valor pra cima e atribui valor nela depois. 
console.log('Sem atribuir : ' +
    comida);
var comida = 'Calabresa';
console.log('Atribuindo : ' +
    comida);

//Mudar valor atribuido
var time = "Vasco";
time = "Palmeiras";
console.log('Time : ' + time);
let pizza = 'Calabresa';
pizza = 'Toscana';
console.log('Pizza : ', pizza);
//Const nunca muda


// -- Exercicio 
// 1 - Declarar uma variável com o seu nome
var nomeCompleto = 'Lucas Gabriel Mofardini de Almeida';
// 2 - Declarar uma variável com a sua idade
var idadePessoa = 18;
// 3 - Declarar uma variável com a sua comida
// favorita e não atribuir valor
var comidaFav;
// 4 - Atribuir valor a sua comida favorita
comidaFav = 'Pizza';
// 5 - Declarar 5 variáveis diferentes sem valores
var num1, num2, num3, num4, num5;

console.log('Nome Completo : ' +
    nome, 'Idade : ' + idade, 'Comida Favorita : ' + comidaFav);
//Variaveis