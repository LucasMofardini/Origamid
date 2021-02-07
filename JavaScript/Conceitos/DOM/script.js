console.log('DOM');
// DOM PARA INICIANTES

//Document object model
//Manipulação de estrutura, de css, conteudo.

// window = todo dom 
console.log(window.innerHeight); //altura do site
// window = objeto
console.log(window.location.href);

//Estrutura de ARVORE
const titulo = document.querySelector('h1');
//Propriedades do elemento
console.log(titulo.classList); // Lista de classes do elemento
console.log(titulo.id); // ID do elemento
console.log(titulo.innerText); // Texto do elemento


titulo.addEventListener('click', function() {
    alert('Click');
});

console.log(document.body);

console.log('-------------- Exercicio --------------');

// Retorne o url da página atual utilizando o objeto window
console.log(window.location.href);
// Seleciona o primeiro elemento da página que
// possua a classe ativo
const ativo = document.querySelector('.ativo');
// Retorne a linguagem do navegador

// Retorne a largura da janela
console.log('Largura pelo inner ' + window.innerWidth);
console.log('Largura pelo screen ' + window.screen.availWidth);