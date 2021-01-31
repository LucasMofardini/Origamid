var nome = 'Lucas'; //String
var numero = 3; //Numero
var ok = true; //Boolean
var time; //Undefined
var comida = null; //Nulo
var simbolo = Symbol(); //Simbolo
var objt = {}; //Objeto
//-------------------------------//
// String //
console.log('-------- String --------');
console.log(typeof nome); // String
console.log(typeof comida); // Objeto

// Somar uma String
var sobrenome = 'Mofardini';
var nomeCompleto = nome + ' ' + sobrenome;
console.log(nomeCompleto);

// Template String
var gols = 1000;
var frase1 = 'Lucas Fez ' + gols + ' |'; // String
var frase2 = `Lucas Fez ${gols * 5} Gols`; //Expressão
console.log(frase1, frase2);

// -------------------//
console.log('-------- Exercicios String --------');
// Declare uma variável contendo uma string
var str = 'Algo';
console.log(str);
// Declare uma variável contendo um número dentro de uma string
var content = ' Lucas 1000 ' + 1000;
console.log(content);
// Declare uma variável com a sua idade
var idade = 18;
console.log(idade);
// Declare duas variáveis, uma com seu nome
// e outra com seu sobrenome e some as mesmas
var meuNome = 'Lucas';
var meuSobrenome = 'Mofardini';
var meuNomeInteiro = meuNome + meuSobrenome;
var nomeExpress = `${meuNome} ${meuSobrenome}`;
console.log(meuNomeInteiro);
console.log(nomeExpress);

// Coloque a seguinte frase em uma variável: It's time
var frase2 = " It's time";
console.log(frase2);
// Verifique o tipo da variável que contém o seu nome
var verifica = typeof meuNome;
console.log(verifica);

//-------------------------------//
// Numero //
console.log('-------- Número --------');
var idade = 18;
var decimal = 1.3; //Decimal é com '.'
var exp = 2e10;
console.log(idade, decimal, exp);

var num1 = 10,
    num2 = 3;
var soma = num1 + num2;
console.log(soma);
var divi = num1 / num2;
console.log(divi);

//Operadores Aritmeticos
var soma2 = 'Lucas ' + 10;
console.log(soma2); // Lucas 10
var divi1 = 'lucas' / 20;
console.log(divi1); // NAN
var divi2 = '10' / 2;
console.log(divi2); // 5
var mult1 = 'lucas' / 20;
console.log(divi1); // NAN
var mult2 = '10' * 2;
console.log(mult2); // 20

//Boolean
/* false ou true */

var possuiGraduacao = true;
// vai ser executado o true
if (possuiGraduacao) {
    console.log('Voce possui graduação ');
} else {
    console.log('Voce não possui graduação ');
}

//Boolean
/* false ou true */

var possuiGraduacao = true;
var possuiDoutorado = false;
// vai ser executado o true
if (possuiGraduacao) {
    console.log('Voce possui graduação ');
} else {
    console.log('Voce não possui graduação ');
}
//O else vai ser executado se não acontecer o if

if (possuiGraduacao) {
    console.log('SIM');
} else if (possuiGraduacao) {
    console.log('SIM');
} else {
    console.log('Nao possui nada');
}
var ab = '';
var l = 'lucas';
if (ab) {
    console.log(ab);
} else {
    console.log('Nao possui nome ');
}
//Com o 'ab' ele retorna 'Nao possui nome' pois uma variavel vazia da negativo
//com o 'l' da true
//TODOS QUE SAEM COMO FALSO
// Falsy
// if(false)
// if(0) // ou -0
// if(NaN)
// if(null)
// if(undefined)
// if('') // ou "" ou ``

if (!ab) {
    console.log(ab);
} else {
    console.log('possui nome ');
}
//O primeiro '!' inverte o valor
//Com '!!' voce verifica o valor;

console.log(!!ab); //false
console.log(!!l); //true

//Ultimo é o sinal de igual
// Operadores de comparação
// 10 > 5 true
// 10 >= 10 true
// 1 >= 2 false
// 123 <= 10 false

// 10 == 10 true
// 10 === '10' false
// 'Gato' !== 'Gato' false
// 'gato' !== 'Gato' true

// Operador 'E', 'and'

// true && true // true
// true && false //false
// false && false //false
// 'gato' && 'cao' //'cao'
// 'gato' && false //false

// Operador ou, 'or'