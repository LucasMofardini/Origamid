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

//Ordem importa
var conta1 = 20 + 5 * 2; //Primeiro Multiplicação depois a adição // 30
var conta2 = (20 + 5) * 2; // 50

// Operadores Aritmeticos Unarios
var x = 5;
console.log(x++);
console.log(x);
console.log(++x);
console.log(x);

var transNumero = +'10'; //Transformar String em um numero
console.log(transNumero);

//-------------------------------//
//----------------Exercicio---------------//

// Qual o resultado da seguinte expressão?
var total = 10 + (5 * 2) / 2 + 20;
//35
// Crie duas expressões que retornem NaN
var exp1 = 'teste' / 2;
var exp2 = 'aaa' - 213;
// Somar a string '200' com o número 50 e retornar 250
var a = +'200';
var aS = a + 50;
console.log(aS);

// Incremente o número 5 e retorne o seu valor incrementado
var b = 5;
console.log(++b);
// Como dividir o peso por 2?
var numero = +'80' / 2;
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso; // NaN (Not a Number)
console.log(pesoPorDois);
