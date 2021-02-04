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
    latir(genero) {
        if (genero === 'homem') {
            return 'Latir';
        } else {
            return 'Nada';
        }

    },
}
console.log(cachorro);
console.log(cachorro.latir('homem'));

//Tudo que der pra acessar com . é objeto
var nome = 'Lucas';
console.log(nome.length); // 5
console.log(nome.charAt(1)); // U
console.log(nome.replace('cas', 'ana')); //Luana

var nomeMinusculo = nome.toLowerCase();
console.log(nomeMinusculo);

var numero = 11.8;
numero.toFixed(); // 12
console.log(numero.toFixed());

var btn = document.querySelector('.btn');
btn.addEventListener('click', function() {
    alert('Clicou');
});

//------------ Exercicio ------------

// nomeie 3 propriedades ou métodos de strings
var carro = {
    cor: 'Azul',
    portas: 4,
    modelo: 2018,
    linha: 3,
}
console.log(typeof carro.portas.toString()); //string
console.log(carro.cor.length);
console.log(carro.cor.charAt('2')); // u de azUl

// nomeie 5 propriedades ou métodos de elementos do DOM

// addEventListener;
// document;
//appendChild;
//innerHtml;
//id;
//className;
// console.log();
// alert();
// Math.random();

// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V

var videoGames = ['Switch', 'PS5', 'Xbox'];
videoGames[0]; //Switch
videoGames.pop(); //Remove o ultimo item da array e retorna ele;
videoGames.push('3DS'); //Adiciona ao final
videoGames.length; //Ver o tamanho da array

//LOOP
//For
for (var i = 0; i <= 10; i++) {
    //INICIO  CONDIÇÂO  INCREMENTO
    console.log(i);
}
//While
var n = 10;
while (n >= 0) {
    console.log(n);
    n--;
}
console.clear();

var nomes = ['Lucas', 'Gabriel', 'Isabel', 'Vitoria', 'Caique', 'André'];
//Variavel 'i' começa com 0
//Enquanto 'i' for menor que o tamanho da array nomes 
//Adiciona mais 1 no 'i'
for (var i = 0; i < nomes.length; i++) {
    //Mostra no console o array nomes que tem o index da variavel 'i'
    //Que no caso começa com 0
    console.log(nomes[i]);
    //Para quando achar 'Isabel'
    if (nomes[i] === 'Isabel') {
        //Quebra o Loop
        break;
    }
}
console.log('___________ ForEach ___________')
    //ForEach 
nomes.forEach(function(nome) {
    console.log(nome);
});
console.log('___________ Exercicio ___________')

// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
var gCopa = [1959, 1962, 1970, 1994, 2002];
console.log(gCopa);

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
gCopa.forEach(function(ano) {
    var g = `O Brasil ganhou a copa de ${ano}`;
    console.log(g);
});
// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

for (var i = 0; i < frutas.length; i++) {
    var fruta = frutas[i];
    console.log(fruta);
    if (fruta == 'Pera') {
        break;
    }
}
console.log('-------')
    // Coloque a última fruta da array acima em uma variável,
var last = frutas[frutas.length - 1];
console.log(last)
    // sem remover a mesma da array.