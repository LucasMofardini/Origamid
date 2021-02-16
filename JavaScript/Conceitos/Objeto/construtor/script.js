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

function Dom(seletor) {
    this.element = () => {
        return document.querySelector(seletor);
    }
    this.ativar = (classe) => {
        this.element().classList.add(classe);
    }
}
const li = new Dom('li'); //Objeto li
const ul = new Dom('ul'); //Objeto ul 
//Ambos com as mesmas propriedades
li.ativar('ativo'); // Primeiro Li da página
ul.ativar('Lucas'); // Primeiro Ul da página