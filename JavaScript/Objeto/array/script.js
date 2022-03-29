// Armazena colecao de elementos
//String numero funçã array

// const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
// const carros = new Array('Corola', 'Mustang', 'Honda');

// carros[1] // Mustang
// carros[2] = 'Ferrari';
// carros[10] = 'Parati';
// carros.length; // 11 //Tamanho da array

const li = document.querySelectorAll('li');
console.log(li);
arrayaLi = Array.from(li);
console.log(arrayaLi);
console.log(Array.isArray(li));

Array.of(10); // [10]
Array.of(1, 2, 3, 4); // [1,2,3,4]
new Array(5); // [,,,,]
Array(5); // [,,,,]
Array(1, 2, 3, 4); // [1,2,3,4]

const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva Verde']];
frutas.length; // 3 itens

frutas[0].length; // 6
frutas[1].length; // 5
frutas[2].length; // 2

//Metodos que modificam a array

const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
instrumentos.sort(); // Ordem alfabetica

const carros = ['Ford', 'Fiat', 'VW'];
carros.unshift('Honda', 'Kia'); // 5  // Adiciona no inicio da array
carros; // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW'];

carros.push('Ferrari'); // 6  // Adiciona ao final da array
carros; // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW', 'Ferrari'];


const carros2 = ['Ford', 'Fiat', 'VW', 'Honda'];
const primeiroCarro = carros.shift(); // 'Ford' // Remove o primeiro elemento e retorna ele
carros2; // ['Fiat', 'VW', 'Honda'];

const ultimoCarro = carros.pop(); // 'Honda' // Remove o ultimo elemento e retorna ele
carros2; // ['Fiat', 'VW'];

carros2.reverse(); //Inverte a ordem da array

const carros3 = ['Ford', 'Fiat', 'VW', 'Honda'];
carros3.splice(1, 0, 'Kia', 'Mustang'); // [] // Primeiro valor é o index,
//O segundo é quantos itens vai remover, se passar 0 só adiciona itens
carros3; // ['Ford', 'Kia', 'Mustang', 'Fiat', 'VW', 'Honda']

carros3.splice(3, 2, 'Ferrari'); // ['Fiat', 'VW']
carros3; // ['Ford', 'Kia', 'Mustang', 'Ferrari', 'Honda']


console.log(['Item1', 'Item2', 'Item3', 'Item4', 'Item5'].copyWithin(2, 0, 3));
//a partir do alvo, ele irá copiar a array começando do inicio até o final e vai preencher a mesma com essa cópia.

console.log(['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana', 1)); // preenche a partir Do index 1

console.log(['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana', 1, 3));
//preenche a array de banana do index 1 ao 3, mas ele para no item anterior

//Metodos de Acesso

const transporte1 = ['Barco', 'Aviao'];
const transporte2 = ['Carro', 'Moto'];
const transportConcat = transporte1.concat(transporte2);
console.log(transportConcat); // Barco aviao carro moto

const linguagens = ['html', 'css', 'js', 'php', 'python', 'js'];
linguagens.includes('css'); //true
linguagens.includes('ruby'); // false
linguagens.indexOf('python'); // 4
linguagens.indexOf('js'); // 2
linguagens.lastIndexOf('js'); // 5

const linguagens2 = ['html', 'css', 'js', 'php', 'python'];
linguagens2.join(); // 'html,css,js,php,python'
linguagens2.join(' '); // 'html css js php python'
linguagens2.join('-_-'); // 'html-_-css-_-js-_-php-_-python'

let htmlString = '<h2>Título Principal</h2>'
htmlString = htmlString.split('h2');
// ['<', '>Título Principal</', '>']
htmlString = htmlString.join('h1');
// <h1>Título Principal</h1>

const linguagens3 = ['html', 'css', 'js', 'php', 'python']; // Retorna itens
linguagens3.slice(3); // ['php', 'python'] // A partir do terceiro
linguagens3.slice(1, 4); // ['css', 'js', 'php'] até o quarto, nao inclui o index 4

const cloneLinguagens = linguagens.slice();

console.log('----- Exercicios -----');

const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
const removeF = comidas.shift();

// Remova o último valor de comidas e coloque em uma variável
const removeL = comidas.pop();

// Adicione 'Arroz' ao final da array
comidas.push('Arroz');
// Adicione 'Peixe' e 'Batata' ao início da array
comidas.unshift('Peixe', 'Batata');
console.log(comidas);

const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
estudantes.sort();
console.log(estudantes);
// Inverta a ordem dos estudantes
estudantes.reverse();
console.log(estudantes);
// Verifique se Joana faz parte dos estudantes
console.log('Joana faz parte : ' + estudantes.includes('Joana'));
// Verifique se Juliana faz parte dos estudantes
console.log('Juliana faz parte : ' + estudantes.includes('Juliana'));

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`
    // Substitua section por ul e div com li,
    // utilizando split e join
html = html.split('section');
html = html.join('ul')
html = html.split('div');
html = html.join('li')
console.log(html);

const carros4 = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável
const carros5 = carros4.slice();
carros4.pop();
console.log(carros4, carros5);

//ITERAÇÃO ARRAY

//foreach
const carros6 = ['Ford', 'Fiat', 'VW', 'Honda'];
carros6.forEach((item) => {
    console.log(item.toLocaleUpperCase());
});
const li1 = document.querySelectorAll('li');

li1.forEach(i => i.classList.add('ativa'));

li1.forEach(function(item) {
    item.classList.add('ativa');
});

//Map
carros6.map((item, index, array) => {
    return item.toLocaleUpperCase();
});
//O retorno do map  é uma array

const a = [1, 2, 34, 513, 132, 4, 45];
const b = a.map((item) => {
    return item * 2;
});
const aulas = [{
        nome: 'HTML 1',
        min: 15
    },
    {
        nome: 'HTML 2',
        min: 10
    },
    {
        nome: 'CSS 1',
        min: 20
    },
    {
        nome: 'JS 1',
        min: 25
    },
]
const tAulas = aulas.map((item) => {
    return item.min;
});

//Reduce
const aulas2 = [10, 25, 30];
const aulaR = aulas2.reduce((acumulador, item) => {
    console.log(acumulador, item);
    return acumulador + item;
}, 0); //Acumulador inicial , obrigatorio
console.log(aulaR); // Resultado do reduce da aulaR = 65

//Maior valor

const nu = [2, 14, 132, 441, 231, 3, 12, 312, 45];

const maiorNu = nu.reduce((anterior, atual) => {
    return anterior > atual ? anterior : atual;

}, 0);
console.log(maiorNu); //441

const listaAulas = aulas.reduce((acumulador, atual, index) => {
    acumulador[index] = atual.nome;
    return acumulador;
}, {});
//vai reduzir essa listaAulas a um objeto com todos os nomes

const frutas2 = ['Banana', 'Pêra', 'Uva'];

const frutasRight = frutas2.reduceRight((acc, fruta) => acc + ' ' + fruta);
const frutasLeft = frutas2.reduce((acc, fruta) => acc + ' ' + fruta);

frutasRight; // Uva Pêra Banana
frutasLeft; // Banana Pêra Uva

//Some
const temUva = frutas2.some((fruta) => {
    return fruta === 'Uva';
}); // true
//O retorno é True or False

const frutas3 = ['Banana', 'Pêra', 'Uva', ''];

// False pois pelo menos uma fruta
// está vazia '', o que é um valor falsy
const arraysCheias = frutas3.every((fruta) => {
    return fruta; // false
    //Todas as frutas são true? não, uma tem valor undefined
});

const num = [6, 43, 22, 88, 101, 29];
const maiorQue3 = num.every(item => item > 3); // true

//Find

const frutas4 = ['Banana', 'Pêra', 'Uva', 'Maçã'];
const buscaUva = frutas4.findIndex((fruta) => {
    return fruta === 'Uva';
}); // 2 // retorna o index do item

const numeros = [6, 43, 22, 88, 101, 29];
const buscaMaior45 = numeros.find(x => x > 45); // 88 //Apenas o primeiro

//Filter
const frutas7 = ['Banana', undefined, null, '', 'Uva', 0, 'Maçã'];
const arrayLimpa = frutas7.filter((fruta) => {
    return fruta;
}); // ['Banana', 'Uva', 'Maçã'] //Filtra apenas os verdadeiros nesse caso

const numeros1 = [6, 43, 22, 88, 101, 29];
const buscaMaior45n = numeros1.filter(numero => numero > 45); // [88, 101]

const aulas3 = [{
        nome: 'HTML 1',
        min: 15
    },
    {
        nome: 'HTML 2',
        min: 10
    },
    {
        nome: 'CSS 1',
        min: 20
    },
    {
        nome: 'JS 1',
        min: 25
    },
]

const aulasMaiores = aulas3.filter((aula) => {
    return aula.min >= 15;
});
// [{nome: 'CSS 1', min: 20}, {nome: 'JS 1', min: 25}]

console.log('----- Exercicio -----');

// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
const curso = document.querySelectorAll('.curso');
const arrayCurso = Array.from(curso);
const obct = arrayCurso.map((item) => {
    const obTitulo = item.querySelector('h1').innerText;
    const obDesc = item.querySelector('p').innerText;
    const obAulas = +item.querySelector('.aulas').innerText;
    const obHoras = +item.querySelector('.horas').innerText;
    const concat = {
        titulo: obTitulo,
        descriçao: obDesc,
        aulas: obAulas,
        horas: obHoras,
    }

    return concat
});
console.log(obct);
// const rCurso = curso.reduce((acumulador, item, index) => {

// }, {});


// Retorne uma lista com os
// números maiores que 100
const numeros4 = [3, 44, 333, 23, 122, 322, 33];
const Fnumeros = numeros4.filter((n) => {
    return n > 100;
});
console.log(Fnumeros);

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos1 = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']
const sInstritrumento = instrumentos1.some((item) => {
    return item === "Baixo";
});
console.log(sInstritrumento);
// Retorne o valor total das compras
const compras = [{
        item: 'Banana',
        preco: 'R$ 4,99'
    },
    {
        item: 'Ovo',
        preco: 'R$ 2,99'
    },
    {
        item: 'Carne',
        preco: 'R$ 25,49'
    },
    {
        item: 'Refrigerante',
        preco: 'R$ 5,35'
    },
    {
        item: 'Quejo',
        preco: 'R$ 10,60'
    }
]
const rCompras = compras.reduce((acumulador, item, index) => {
    pFinal = +item.preco.toUpperCase().replace('R$', ' ').replace(',', '.').trim();
    return acumulador + pFinal;

}, 0);
console.log(rCompras);

// const listaAulas = aulas.reduce((acumulador, atual, index) => {
//     acumulador[index] = atual.nome;
//     return acumulador;
// }, {});