// Mude a cor da tela para azul e depois para vermelho a cada 2s.

// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).

setInterval(mudaCor, 2000);
function mudaCor() {
    let body = document.querySelector('body');

    if (body.style.backgroundColor !== 'blue') {
        body.style.backgroundColor = 'blue';
    } else {
        body.style.backgroundColor = 'red';
    }
}
let i = 0;
let timer;

const input = document.querySelector('input[data-input]');

const dataCronometro = document.querySelectorAll('[data-cronometro]');
dataCronometro.forEach((item) => {
    item.addEventListener('click', handleClick);

    if (item.dataset.cronometro === 'pausa') {
        item.addEventListener('dblclick', resetaTempo);
    }
});



function handleClick(event) {
    event.preventDefault;

    if (event.target.dataset.cronometro === 'inicia') {
        iniciaTempo();
    }
    if (event.target.dataset.cronometro === 'pausa') {
        pausaTempo();
    }
    if (event.target.dataset.cronometro === 'reseta') {
        resetaTempo()
    }

}
function iniciaTempo() {
    timer = setInterval(() => {
        input.value = i++;
    }, 1000)
}
function pausaTempo() {
    clearInterval(timer);
}
function resetaTempo() {
    clearInterval(timer);
    i = 0;
    input.value = 0;
}