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