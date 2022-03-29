// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

const bitcoin = fetch('https://blockchain.info/ticker');
const precoBit = document.querySelector('#preco');

function recebeBitCoin() {

    bitcoin.then((res) => {
        return res.clone().json();
    }).then((body) => {
        const precoBitFinal = body.BRL.last.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
        precoBit.innerText = precoBitFinal;
        console.log(body.BRL.last);
    });

}

function timeout() {
    setTimeout(() => {
        recebeBitCoin();
        timeout();

    }, 30000);
}
timeout();
recebeBitCoin(); 227.530, 33