//Tudo em javascript é OBJETO
const menu = {
  seletor: '.principal',
};
console.log(menu.seletor.toUpperCase());

//Função normal
function upperName(name) {
  return name.toUpperCase();
}
console.log(upperName('Lucas'));
//Criando função com const (expressão) Arrow function
const lowername = (name) => {
  return name.toLowerCase();
};
console.log(lowername('LUCAS'));

//Desestruturação de um objeto
function handleMouse(event) {
  const { clientX, clientY } = event;
  console.log(clientX, clientY);
}
document.addEventListener('click', handleMouse);
//Desestrutura na Orderm do array
const frutas = ['banana', 'uva'];
const [fruta1, fruta2] = frutas;
console.log(fruta1);
//banana
console.log(fruta2);
//uva
const useQuadrado = [
  4,
  function (lado) {
    return 4 * lado;
  },
];
const [lados, perimetro] = useQuadrado;
console.log(lados);
console.log(perimetro(10));

//Rest
// os 3 pontinhos antes do parametro pega todo os valores passados e transformam em array
function showList(empresa, ...clientes) {
  clientes.forEach((cliente) => {
    console.log(cliente, empresa);
  });
}
showList('Google', 'lucas', 'Gabriel', 'Mofardini');

//Spread
//Espahar os itens da Array
const numeros = [10, 2, 40];
const maiorNumero = Math.max(...numeros);
console.log(maiorNumero);

const maior = Math.max(10, 5, 20);
console.log(maior);

const numero2 = [122, 32, ...numeros, 25, 123, 30];
console.log(numero2);

const carro = {
  cor: 'azul',
  portas: 4,
};
//Quando voce quer adicionar mas sem colocar no objeto inicial
const carroAno = { ...carro, ano: 2002 };
console.log(carroAno);
console.log(carro);

//Module
//Só funciona com HTTP
import { areaQuadrado } from './quadrado.js';
import { perimetroQuadrado } from './quadrado.js';
// import {areaQuadrado, perimetroQuadrado} from './quadrado.js';
console.log('Sua area é ' + areaQuadrado(5));
console.log('Seu perimetro é ' + perimetroQuadrado(5));
// ou
import quadrado from './quadrado.js';
console.log('Área com import pelo objeto ' + quadrado.areaQuadrado(10));
console.log(
  'Perimetro importado pelo objeto ' + quadrado.perimetroQuadrado(10),
);
console.log('Soma numero com import pelo objeto ' + quadrado.somaNumero(10));

//Fetch

fetch('https://ranekapi.origamid.dev/json/api/produto')
  .then((response) => response.json())
  .then((json) => {
    console.log('Com fetch e then');
    console.log(json);
  });

function fecthProdutos(url) {
  const response = fech(url);
  return response;
}

async function fetchProdutos(url) {
  const response = await fetch(url);
  const json = await response.json();
  console.log('Com async e await');
  console.log(json);
  return json;
}
const produtos = fetchProdutos(
  'https://ranekapi.origamid.dev/json/api/produto',
);
