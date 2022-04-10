// Função construtora

function Button(text, background) {
    this.text = text;
    this.background = background;
}

Button.prototype.element = function () {

    const buttonElement = document.createElement('button');
    buttonElement.innerText = this.text;
    buttonElement.style.background = this.background;

    return buttonElement;
}

const blueButton = new Button('Comprar', 'blue');

console.log(blueButton);

// Class

class ButtonCreate {
    constructor(param1, param2) {
        this.text = param1;
        this.background = param2;
        this.color = `${param1} ${param2}`;

        // return this.element();
    }
    element() {
        const buttonElement = document.createElement('button');
        buttonElement.innerText = this.text;
        buttonElement.style.background = this.background;

        return buttonElement;
    }
    appendElementTo(target) {
        const targetElement = document.querySelector(target);
        targetElement.appendChild(this.element());

        return this.element();
    }
    static yellowButton(text) {
        return new ButtonCreate(text, 'yellow');
    }

}

const redButton = new ButtonCreate('Ola', 'red');
redButton.appendElementTo('body')
console.log(redButton);

const yellowButton = ButtonCreate.yellowButton('OLA');

console.log(yellowButton);

// this
// o this da acesso a toda a classe

class ButtonCreate2 {
    constructor(options) {
        this.options = options;
        this.text = options.text;
    }
    static createButton(text, background) {
        const buttonElement = document.createElement('button');
        buttonElement.innerText = text;
        buttonElement.style.background = background;

        return buttonElement;
    }
}
const blackButtton = new ButtonCreate2({
    backgroundColor: 'black',
    color: 'white',
    text: 'Comprar',
    border: 'none'

});
// Os dois são certos 
console.log(blackButtton.text);
console.log(blackButtton.options.text);

const blackButttonStatic = ButtonCreate2.createButton('clique', 'black');

console.log(blackButttonStatic)



// Get e Set

const button2 = {
    get tamanho() {
        return this._numero || 100;
    },
    set tamanho(novoValor) {
        this._numero = novoValor;
    }
};


const frutas = {
    lista: [],
    set nova(fruta) {

        this.lista.push(fruta);
    }
}
frutas.nova = 'Banana';
frutas.nova = 'Morango';

class NewButton {
    constructor(text, color) {
        this.text = text;
        this.color = color;
    }
    get element() {
        const type = this._elementType || 'button';
        const buttonElement = document.createElement(type);
        buttonElement.innerText = this.text;
        buttonElement.style.color = this.color;

        return buttonElement;
    }
    set element(type) {
        this._elementType = type;
    }
}

const newButton = new NewButton('Comprar', 'blue');

// Extends
// Sempre que usar construtor extendendo de outra classe, precisa usar o super
class Veiculo {
    constructor(rodas) {
        this.rodas = rodas;
    }
    acelerar() {
        console.log('Veiculo Acelerou');
    }
}
class Carro extends Veiculo {
    constructor(rodas, cinto) {
        super(rodas);
        this.cinto = cinto;
    }
    freiar() {
        console.log('Carro Freiou com ' + this.rodas + " rodas");
    }
    acelerar() {
        // Usa o metodo do pai, que é o veiculo
        super.acelerar();
        console.log('Carro Acelerou');
    }
}

const ford = new Carro(4, true);
const honda = new Veiculo(2);

