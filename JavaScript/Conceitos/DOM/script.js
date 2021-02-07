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
titulo.addEventListener('click', function() {
    alert('Click');
});

console.log(document.body);