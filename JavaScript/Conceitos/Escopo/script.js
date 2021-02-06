'use strict' // para nao ter erros de variaves globais
var carro;

function mostrarCarro() {
    var carro = 'Fusca';
    console.log(carro);
}

mostrarCarro(); // Fusca no console
console.log(carro); // Erro, carro is not defined

// Não criar variaveis globais
if (true) {
    var carro = 'Fusca';
    console.log(carro);
}
// A variavel carro vaza o if
console.log(carro); // Carro

if (true) {
    let mes = 'Dezembro';
    console.log(mes);
}
// A let carro nao vaza vaza o if
// console.log(mes); // Carro

//Só vamos usar CONST e LET

var i = 100;
for (let i = 0; i < 10; i++) {
    //esse let i fica dentro do escopo do FOR
    console.log(`Número ${i}`);
}
console.log(i); // 100

//Const é uma CONSTANTE, ela não muda

const semana = 'Sexta';
console.log(semana);
// semana = 'Quinta'; // da erro
// console.log(semana); 

const data = {
    ano: 2021,
    mes: 1,
}
data.ano = 2020;
console.log(data.ano); // Da pra alterar as proprieadades de um objeto
// data = ''; // Da erro;
data.dia = 10; //Da certo

let ano;
ano = 2018;
ano++;
console.log(ano); // 2019

// let ano = 2020; // erro, redeclarou a variável
// Não pode abrir um let novamente

//------------- Exercicio -------------
console.log('------------------')
    // Por qual motivo o código abaixo retorna com erros?
    {
        var cor = 'preto';
        const marca = 'Fiat';
        let portas = 4;
    }
    // console.log(var, marca, portas);
    //Por que está atribuindo 'var' e nao pode se usar var para declarar uma variavel
    //Por que let e const não sai do escopo

// Como corrigir o erro abaixo?
const dois = 2;

function somarDois(x) {
    return x + dois;
}

function dividirDois(x) {
    return x / dois;
}
somarDois(4);
dividirDois(6);

// O que fazer para total retornar 500?
const numero = 50;
//Usando const no numero
//Usando let no LOOP
for (let numero = 0; numero < 10; numero++) {
    console.log(numero);
}

const total = 10 * numero;
console.log(total);