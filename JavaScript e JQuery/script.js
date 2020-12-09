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
