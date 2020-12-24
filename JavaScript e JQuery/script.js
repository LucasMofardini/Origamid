var nome = "lucas";
var idade = 18;
var x = 10;
var y = 12;
y = 17;
nome = "Gabriel";
var resultado  = x + y *(y * x);
console.log(resultado);
console.log(typeof resultado);

var sobrenome = "Mofardini"
var nomeCompleto = nome +" "+ sobrenome;
var concat = nome + x + " LUCAS " + nomeCompleto + " 12 " + y;
console.log(concat);
console.log(nomeCompleto);

var faculdade = true;
if (faculdade){
    console.log("faculdade é verdadeiro");
}
var x = 30;
x += 10;
console.log(x);

x++;
console.log(x);



var videoGames = ['PS5','XBOX','PS4'];
console.log(videoGames[0]);

var tamanhoVideoGames = videoGames.length;
console.log(tamanhoVideoGames);
console.log(videoGames[tamanhoVideoGames - 1])
var adicionar = videoGames.push('2DS');
console.log(videoGames);

var buscarItem = videoGames.indexOf('2DS');

console.log(buscarItem);

var removeItem = 
videoGames.splice(1,1);

//primeiro numero = ordem dos itens na array
//segundo numero = quantidade depois do  item 

var o = 20;
if (o > 32){
    console.log('Maior que 12');
}else{
    console.log('Não pode');
}
var faculdade = true;
if(faculdade){
   console.log('adiciona 100');
   }else if(faculdade){
   console.log('adiciona 200');
   }

if(10 > 5){
    console.log('10 é maior');
}
if((15 > 5) && (20 < 10)){
    console.log('10 e maior'    );
    
}else{
    console.log('errado');
}


function areaQuadrado(lado){
    var area = lado * lado;
    return area;
}
console.log(areaQuadrado(4));

function imc(peso, altura){
    var imcTotal = peso / (altura * altura);
    return imcTotal;
}
console.log("Pessoa 1" + imc(67,1.80));


function corPreferida (cor){
    if(cor == "azul"){
        console.log("Voce gosta de azul");
    }else if(cor == "amarelo"){
        console.log("Voce gosta de amarelo");
    } if(cor == "roxo"){
        console.log("Voce gosta de roxo");
    }else{
        console.log("Voce nao gosta de nada")
    }
}
corPreferida('roxo');

var custoDoCarro = function(portas){
    var precoInicial = 10000;
    if(portas){
        return portas * precoInicial;
    }else{
        return 2 * precoInicial;
    }
}
console.log(custoDoCarro(4));
console.log(custoDoCarro());

var clientes = ['Andre', 'Rafael', 'Lucas','José', 'Joao', 'Marcos'];
var totalArray = clientes.length;
for(var i = 0; i < totalArray; i++){
    console.log(clientes[i]);
    if(clientes[i] == 'Lucas'){    
        console.log('Chegou no Lucas');
    }
}

var o =  0;
while(o<10){
    console.log(o);
      o++;
      }


var numero = 0, maximo = 20;

for(;numero < maximo;){
    
    console.log(numero);
    numero+= 5;
}

var lucas = {
    nome : "Lucas",
    profissao: "Desenvolvedor",
    idade: 18    
}
console.log(lucas.nome);

var quadrado = {
    totalLados: 4,
    area: function(lado){
        return lado * lado;
    },
    perimetro: function(){
        return lado * this.totalLados;
    }
}
console.log(quadrado.area(10));

var pi = Math.PI;

console.log(pi);

var pessoa = {
    nome : 'Lucas',
    idade: '18',
    agradecer: function(){
        return "obrigado " + this.nome;
    }
}
console.log(typeof pessoa);

var carro = {
    modelo: 'Audi',
    portas: 4,
    
}
carro.portas = 20;
carro.cor = "Branco"
carro.mala = function(){
    return "abrir mala";
}
var portas = carro.portas;
console.log(portas);
console.log(carro.mala());