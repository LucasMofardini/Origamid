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