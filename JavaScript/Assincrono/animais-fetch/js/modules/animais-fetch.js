import initAnimaNumero from './anima-numeros.js';

export default function initFetchAnimais() {
    async function fetchAnimais(url) {
        const animaisReponse = await fetch(url);
        const animaisJson = await animaisReponse.json();
        const numerosGrid = document.querySelector('.numeros-grid');
        animaisJson.forEach(element => {
            const divAnimal = createAnimal(element);

            numerosGrid.appendChild(divAnimal);
        });

        initAnimaNumero();
    }
    function createAnimal(animal) {
        const div = document.createElement('div');
        div.classList.add('numero-animal');
        div.innerHTML = `<h3> ${animal.especie} </h3> <span data-numero> ${animal.total} </span>`;

        return div;
    }
    fetchAnimais('./animais-api.json');
}

