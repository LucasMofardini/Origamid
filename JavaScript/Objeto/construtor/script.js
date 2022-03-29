// Constructor functions
function Carro(marca, preco) {
    this.marca = marca;
    this.preco = preco;
}

const honda = new Carro('honda', 3000); /* honda é um objeto do construtor carro */
const fiat = new Carro('fiat', 2000);

//O que esse new faz :
/*
const honda = new Carro();  

 // 1 Cria um novo objeto
honda = {};
// 2 Define o protótipo
honda.prototype = Carro.prototype;
// 3 Aponta a variável this para o objeto
this = honda;
// 4 Executa a função, substituindo this pelo objeto
honda.marca = 'Marca';
honda.preco = 0;
// 5 Retorna o novo objeto
return honda = {
    marca: 'Marca',
    preco: 0,
} 
*/

function Carro2(marca, preco) {
    const taxa = 1.2; // Ela nao é exposta no código
    const precoF = preco * taxa; // Ela nao é exposta no código
    this.marca = marca;
    this.preco = precoF;
}
const mazda = new Carro2('mazda', 5000); // precofinal sai 6000

//Real
/* const Dom = {
    seletor: 'li',
    element() {
        const elementoSelecionado = document.querySelector(this.seletor);
        return elementoSelecionado;
    },
    ativar() {
        this.element().classList.add('ativo');
    }
}
Dom.ativar(); // Ativa a Li
//E se quiser ativar a Ul ? 
Dom.seletor = 'ul';
Dom.ativar(); // Ativa a UL */

//Transformando em função construtora

function Dom1(seletor) {
    this.element = () => {
        return document.querySelector(seletor);
    }
    this.ativar = (classe) => {
        this.element().classList.add(classe);
    }
}
const li = new Dom1('li'); //Objeto li
const ul = new Dom1('ul'); //Objeto ul 
//Ambos com as mesmas propriedades
li.ativar('ativo'); // Primeiro Li da página
ul.ativar('Lucas'); // Primeiro Ul da página

//------------ Exercicios ------------
// Transforme o objeto abaixo em uma Constructor Function
/* const pessoa = {
    nome: 'Nome pessoa',
    idade: 0,
    andar() {
        console.log(this.nome + ' andou');
    }
} */
function Pessoa(nome, idade) {
    this.nome = nome; // redundancia
    this.idade = idade; // redundancia
    this.andar = () => {
        console.log(nome + ' andou');
    }
}

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos

const p1 = new Pessoa('João', 20);
const p2 = new Pessoa('Maria', 25);
const p3 = new Pessoa('Bruno', 15);


// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos
function Dom(seletor) {
    // const elementos = document.querySelectorAll(seletor);
    // this.elements = elementos;
    //ou
    this.elementos = document.querySelectorAll(seletor)

    this.addClass = (classe) => {
        return this.elementos.forEach((item) => {
            item.classList.add(classe);
        });
    }
    this.removeClass = (classe) => {
        return this.elementos.forEach((item) => {
            item.classList.remove(classe);
        });
    }
}
const dom1 = new Dom('div');