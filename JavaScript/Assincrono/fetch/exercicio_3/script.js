// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima

const textoPiada = document.querySelector('#piada');
const button = document.querySelector('button');


function passaPiada() {
    fetch('https://api.chucknorris.io/jokes/random').then((response) => {
        return response.json();
    }).then((body) => {
        textoPiada.innerText = body.value;
        console.log(body.value);
    });
}
button.addEventListener('click', passaPiada);
passaPiada();