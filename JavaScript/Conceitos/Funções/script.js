//Function é um bloco de codigo
function areaQuadrado(valor) {
    return valor * valor;
}
console.log(areaQuadrado(3));

//Peso e altura são PARAMETROS
function imc(peso, altura) {
    const imc = peso / (altura * 2);

    return imc;
}
imc(70, 1.80); //70 e 1.80 são ARGUMENTOS
console.log(imc(70, 1.80));

//Mesmo se voce tiver um parametro não necessariamente tem que passar argumento

function corFavorita(cor) {
    if (cor === 'azul') {
        return 'eu gosto do ceu';
    } else if (cor === 'verde') {
        return 'eu gosto de mato';
    } else {
        return 'eu não gosto de cores';
    }

}
console.log(corFavorita()); // 'eu não gosto de cores'
console.log(corFavorita('verde')); //'eu gosto de mato'

//Argumentos podem ser funções

addEventListener('click', function() {
    alert('CLicou');
});


function terceiraIdade(idade) {
    if (typeof idade !== 'number') {
        return 'Preenche um número';
    } else if (idade >= 60) {
        return true;
    } else {
        return false;
    }
}
//Escopo
var total = 193;

function faltaVisitar(paisesVisitados) {
    //template string
    return `Falta visitar ${total - paisesVisitados} países`;

}
console.log(faltaVisitar(20));
//O JavaScript move todas as variaveis e funçoes para cima do código

//---------------- Exercicio ----------------

// Crie uma função para verificar se um valor é Truthy
function verifica(valor) {
    if (valor) {
        return 'É true';
    } else {
        return 'Não é true'
    }
}
console.log(verifica(123));

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetro(lado) {
    return `O perimetro de ${lado} é ${lado * 4}`;

}
console.log(perimetro(5));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
    return `${nome} ${sobrenome}`;
}
console.log(nomeCompleto('Lucas', 'Mofardini'));

// Crie uma função que verifica se um número é par
function verificaPar(numero) {
    if (numero % 2 == 0) {
        return `O numero (${numero}) é Par`;
    } else {
        return `O numero (${numero}) é Impar`;
    }
}
console.log(verificaPar(2));
console.log(verificaPar(7));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function dataType(data) {
    if (typeof data === 'number') {
        return `${data} é number`;
    } else if (typeof data === 'string') {
        return `${data} é string`;
    } else if (typeof data === 'boolean') {
        return `${data} é boolean`;
    }
}
console.log(dataType('Lucas'));
console.log(dataType(7));
console.log(dataType(false));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
const nomeCompleto1 = 'Lucas Mofardini';
addEventListener('scroll', function() {
    console.log(nomeCompleto1);
});
// Corrija o erro abaixo
var totalPaises = 193;

function precisoVisitar(paisesVisitados) {

    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}

function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);