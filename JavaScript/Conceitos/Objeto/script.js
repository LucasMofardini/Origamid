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