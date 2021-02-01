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