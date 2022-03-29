//Construtor de objeto

const pessoa = new Object({
    nome: 'Lucas',
});

//Object create

const carro = {
    // marca: 'Marca',
    init(valor) {
        this.marca = valor;
        return this;
    },
    portas: 4,
    novo: 'Sim',
    acelerar() {
        return this.marca + " Acelerou";
    },
};
// carro.acelerar; // marca Acelerou
//Todo o objeto vai fazer parte do prototipo do honda
const honda = Object.create(carro).init("Honda");
honda.marca; // Honda acelerou

const ferrari = Object.create(carro).init("Ferrari");
ferrari.marca; // Ferrari acelerou

const funcaoAutomovel = {
    acelerar() {
        return 'acelerou';
    },
    buzinar() {
        return 'buzinou';
    },
}


const moto = {};
//Adiciona funçao automovel ao objeto moto
//Entra dentro dela direto
//Se a propriedade existir ele coloca em cima
// Object.assign(moto, funcaoAutomovel);
// Object.assign(carro, funcaoAutomovel);

Object.defineProperties(moto, {
    rodas: {
        // value: 2, //Valor
        //Nao pode ter valor quando tem get e set
        configurable: false, //Nao é modificavel
        // writable: false, //[Por padrao é false] mudar o valor 
        // enumerable: false, //[Por padrao é false] torna numeravel
        get() {

            return this._rodas;
            //Toda vez que pedir rodas da moto, retorna 2

        },
        set(valor) {
            return this._rodas = valor * 2;
        },
    },
    capacete: {
        value: true,
    }
});

// moto.rodas = 2; // Setei a quantidade de rodas
// moto.rodas; // O get dela sai 4 pois multipliquei por 2

//Lista as propriedades de um objeto
Object.getOwnPropertyDescriptors(Array);
// Lista com métodos e propriedades e Array

Object.getOwnPropertyDescriptors(Array.prototype);
// Lista com métodos e propriedades do protótipo de Array

Object.getOwnPropertyDescriptor(window, 'innerHeight');
// Puxa de uma única propriedade


Object.keys(Array);
// [] vazia, pois não possui propriedades enumeráveis

const carro1 = {
    marca: 'Ford',
    ano: 2018,
}
Object.keys(carro1);
// ['marca', 'ano']]
//propriedade
Object.values(carro1);
// ['Ford', 2018]
//Valor
Object.entries(carro1);
// [['marca', 'Ford'], ['ano', 2018]]
//propriedade valor

Object.getOwnPropertyNames(Array);
// ['length', 'name', 'prototype', 'isArray', 'from', 'of']

Object.getOwnPropertyNames(Array.prototype);
// [..., 'filter', 'map', 'every', 'some', 'reduce', ...]
//Mostra em string
const carro2 = {
    marca: 'Ford',
    ano: 2018,
}
Object.getOwnPropertyNames(carro2);
// ['marca', 'ano']

const frutas = ['Banana', 'Pêra'];
//Prototipo de frutas
Object.getPrototypeOf(frutas);
//Prototipo do objeto String
Object.getPrototypeOf(''); // String

const frutas1 = ['Banana', 'Pêra'];
const frutas2 = ['Banana', 'Pêra'];

Object.is(frutas1, frutas2); // false
//Os 2 objetos nao são iguais

const car = {
    marca: 'Ford',
    ano: 2018,
}
Object.freeze(car); // Freeza o objeto car, nao deixa fazer nada
Object.seal(car); // Nao deixa criar novas propriedades mas deixa mudar
Object.preventExtensions(car); // igual o seal mas deixa deletar as propriedades

Object.isFrozen(car); // true
Object.isSealed(car); // true
Object.isExtensible(car); // false //deixa estensão

const frut = ['Banana', 'Uva'];
frut.constructor; // Array

const frase1 = 'Isso é uma String';
frase1.constructor; // String

frut.hasOwnProperty('map'); // false
Array.hasOwnProperty('map'); // false
Array.prototype.hasOwnProperty('map'); // true

Array.prototype.propertyIsEnumerable('map'); // false
window.propertyIsEnumerable('innerHeight'); // true


Array.prototype.isPrototypeOf(frut); // true


// Object.prototype.toString.call(li); // [object NodeList]

console.log('-----Exercicios-----');

// Crie uma função que verifique
// corretamente o tipo de dado
function verifica(type) {
    return Object.prototype.toString.call(type)
}
console.log(verifica(' '));
// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável
const quadrado = {}
Object.defineProperties(quadrado, {
    lados: {
        value: 10,
        configurable: false,
    }
});

// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
    width: 800,
    height: 600,
    background: '#333',

};
Object.freeze(configuracao); // Nao muda nunca
// Object.defineProperties(configuracao, {
//     width: {
//         value: 800,
//         configurable: false,
//     },
//     height: {
//         value: 600,
//         configurable: false,
//     },
//     background: {
//         value: '#333',
//         configurable: false,
//     },
// });
// Liste o nome de todas
// as propriedades do
// protótipo de String e Array
console.log(Object.getOwnPropertyNames(Array.prototype));
console.log(Object.getOwnPropertyNames(String.prototype));