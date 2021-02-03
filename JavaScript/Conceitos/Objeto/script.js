//Conjunto de variaveis e funçoes

//Objeto 'Pessoa'
var pessoa = {
    //Proprieadade 'Nome' com valor 'Lucas'
    nome: 'Lucas',
    idade: 18,
};

var quadrado = {
    lados: 4,
    //Metodo
    area(lado) {
        return `Area : ${lado * lado}`;
    },
    perimetro(lado) {
        return `Perimetro : ${lado * this.lados}`;
    }
};
console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

//Organiza o código

console.log(Math.PI);
console.log(Math.random());

//TUDO É OBJETO
/* dot notation get */
var menu = {
    width: 200,
    height: 40,
    background: 'blue',
    metadeHeight() {
        return this.height / 2;
        //esse this pega o height do objeto menu
    }
}
console.log(menu.background); // blue
/* dot notation set */

menu.background = 'black';
console.log(menu.background); // black

menu.color = 'white';
console.log(menu) // Agora tem color white
console.log(menu.metadeHeight());

//O objeto menu tem herança do Object

//-------------- Exercicio --------------
// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var person = {
        nome: 'Lucas',
        sobrenome: 'Mofardini',
        idade: 19,
    }
    // Crie um método no objeto anterior, que mostre o seu nome completo
person.mostrar = function() {
    return `${this.nome} ${this.sobrenome}`;
}
console.log(person);
console.log(person.mostrar());

// Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
}
carro.preco = 3000;
console.log(carro.preco);
// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
var cachorro = {
    raça: 'Labrador',
    cor: 'Preto',
    idade: 10,
    Late: true,
}
console.log(cachorro)