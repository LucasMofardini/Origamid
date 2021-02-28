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