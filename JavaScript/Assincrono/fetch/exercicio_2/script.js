// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

const precoBit = document.querySelector('#preco');

function recebeBitCoin() {

    fetch('https://blockchain.info/ticker').then((res) => {
        return res.json();
    }).then((body) => {
        const precoBitFinal = body.BRL.buy.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
        precoBit.innerText = precoBitFinal;
        console.log(body.BRL.last);
    });

}


setInterval(recebeBitCoin, 30000)
recebeBitCoin();
