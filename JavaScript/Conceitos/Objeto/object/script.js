//Construtor de objeto

const pessoa = new Object({
    nome: 'Lucas',
});

//Object create

const carro = {
    // marca: 'Marca',
    init(valor) {
        this.marca = valor;
        return this;
    },
    portas: 4,
    novo: 'Sim',
    acelerar() {
        return this.marca + " Acelerou";
    },
};
// carro.acelerar; // marca Acelerou
//Todo o objeto vai fazer parte do prototipo do honda
const honda = Object.create(carro).init("Honda");
honda.marca; // Honda acelerou

const ferrari = Object.create(carro).init("Ferrari");
ferrari.marca; // Ferrari acelerou

const funcaoAutomovel = {
    acelerar() {
        return 'acelerou';
    },
    buzinar() {
        return 'buzinou';
    },
}

const moto = {

}

const carro = {
    rodas: 4,
    mala: true,
};
//Adiciona funçao automovel ao objeto moto
//Entra dentro dela direto
//Se a propriedade existir ele coloca em cima
Object.assign(moto, funcaoAutomovel);
Object.assign(carro, funcaoAutomovel);

Object.defineProperties(moto, {
    rodas: {
        // value: 2, //Valor
        //Nao pode ter valor quando tem get e set
        configurable: false, //Nao é modificavel
        writable: false, //[Por padrao é false] mudar o valor 
        enumerable: false, //[Por padrao é false] torna numeravel
        get() {
            return 2;
            //Toda vez que pedir rodas da moto, retorna 2
        },
    },
    capacete: true,
});