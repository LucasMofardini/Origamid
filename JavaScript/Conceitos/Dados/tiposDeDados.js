var nome = 'Lucas'; //String
var numero = 3; //Numero
var ok = true //Boolean
var time; //Undefined
var comida = null; //Nulo
var simbolo = Symbol() //Simbolo
var objt = {} //Objeto
    //-------------------------------//

console.log(typeof nome); // String
console.log(typeof comida); // Objeto

// Somar uma String
var sobrenome = 'Mofardini';
var nomeCompleto = nome + ' ' + sobrenome;
console.log(nomeCompleto);

// Template String
var gols = 1000;
var frase1 = "Lucas Fez " + gols + " |"; // String
var frase2 = `Lucas Fez ${gols * 5} Gols`; //Expressão
console.log(frase1, frase2);

// -------------------//
console.log('-------- Exercicios --------')
    // Declare uma variável contendo uma string
var str = 'Algo'
console.log(str);
// Declare uma variável contendo um número dentro de uma string
var content = ' Lucas ' + 1000;
console.log(content)
    // Declare uma variável com a sua idade
var idade = 18
console.log(idade);
// Declare duas variáveis, uma com seu nome
// e outra com seu sobrenome e some as mesmas
var meuNome = 'Lucas ';
var meuSobrenome = 'Mofardini';
var meuNomeInteiro = meuNome + meuSobrenome;
console.log(meuNomeInteiro);
// Coloque a seguinte frase em uma variável: It's time
var frase2 = " It's time";
console.log(frase2);
// Verifique o tipo da variável que contém o seu nome
var verifica = typeof meuNome;
console.log(verifica);