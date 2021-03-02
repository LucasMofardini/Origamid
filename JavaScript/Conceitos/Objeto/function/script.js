//Function

function areaQuadrado(lado) {
    return lado * lado;
}

const perimetroQuadrado = new Function('lado', 'return lado * 4');
//Mesa coisa

function somar(n1, n2) {
    return n1 + n2;
}

//Função
somar.length; // 2 //quantidades de parametros
somar.name; // 'somar'

//Argumentos dentro da função
somar(3, 2); // Igual a cinco, entao tem metodos de number

function darOi(nome, idade) {
    console.log('oi ' + nome + idade);
}
darOi.call({}, 'Lucas', 19);

const carro = {
    marca: 'Ford',
    ano: 2018
}

function descCarro(velocidade) {
    console.log(this.marca + this.ano + velocidade);
}
descCarro.call(carro, 100);


const carros = ['Ford', 'Fiat', 'VW'];
carros.forEach.call(carros, (item) => {
    console.log(item);
});

const frutas = ['Banana', 'Pêra', 'Uva'];
carros.forEach.call(frutas, (item) => {
    console.log(item);
});


function Dom(seletor) {
    this.element = document.querySelector(seletor);
}
Dom.prototype.ativo = function(classe) {
    this.element.classList.add(classe);
}
const ul = new Dom('ul');
const li = {
    element: document.querySelector('li'),
}

// ul.ativo('ativar');
// ul.ativo.call(li, 'ativar'); // ele ativa o li e ignora o ul
//O objeto deve ser parecido com o original, no caso 
//O objeto li tem que ser parecido com o construtor do ul que no caso é o Dom

// Dom.prototype.ativo(li, 'ativar');

const frutas1 = ['Uva', 'Maçã', 'Banana'];

// Array.prototype.pop.call(frutas1); //São iguais
// frutas1.pop(); //São iguais

const li1 = document.querySelectorAll('li');

const filtro = Array.prototype.filter.call(li1, function(item) {

    return item.classList.contains('ativo');
});
console.log(filtro);

const numeros = [3, 4, 6, 1, 34, 44, 32];
Math.max.apply(null, numeros); // 44 //Null pois nao muda o max do math
Math.max.call(null, 3, 4, 5, 6, 7, 20);

const li3 = document.querySelectorAll('li');

const filtrarLi2 = Array.prototype.filter.bind(li3, function(item) {
    return item.classList.contains('ativo');
});

filtrarLi2();

const carro3 = {
    marca: 'Ford',
    ano: 2018,
    acelerar: function(aceleracao, tempo) {
        return `${this.marca} acelerou ${aceleracao} em ${tempo}`;
    }
}
const honda = {
    marca: 'Honda',

}
const acelerarHonda = carro3.acelerar.bind(honda);

console.log(acelerarHonda(400, 20));

function imc(altura, peso) {
    return peso / (altura * altura);
}

const imc180 = imc.bind(null, 1.80);

imc(1.80, 70); // 21.6
imc180(70); // 21.6

console.log('-----Exercicios-----');
// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const p = document.querySelectorAll('section p');
const pA = Array.from(p);

const listaP = pA.reduce((acumulador, item) => {
    const qtdItem = item.innerHTML.length;
    return qtdItem + acumulador;
}, 0);
console.log(listaP);

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.

function criarElemento(tag, classe, conteudo) {
    const elemento = document.createElement(tag);
    classe ? elemento.classList.add(classe) : null;
    conteudo ? elemento.innerHTML = conteudo : null;
    return elemento;
}
console.log(criarElemento('ul', 'ativo', 'Esse é'));

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const h1Titulo = criarElemento.bind(null, 'h1', 'titulo'); // Ja começa com h1 e titulo