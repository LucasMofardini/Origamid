// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar

const formCep = document.querySelector('#form-cep');
const btnBuscar = document.querySelector('#btn-buscar');
const inputCep = document.querySelector('#cep');

const handleCep = (json) => {
    formCep.logradouro.value = json.logradouro;
    formCep.localidade.value = json.localidade;
    formCep.uf.value = json.uf;

}
function buscaCep() {
    let cepNumero = inputCep.value;

    if (cepNumero) {
        let cep = fetch(`https://viacep.com.br/ws/${cepNumero}/json/`);

        cep.then((response) => {
            return response.json();
        }).then((body) => {
            handleCep(body);
        }).catch((error) => {
            console.error(error);
        });
    } else {
        console.error('Cep Vazio');
    }
}

btnBuscar.addEventListener('click', buscaCep);
inputCep.addEventListener('change', buscaCep);