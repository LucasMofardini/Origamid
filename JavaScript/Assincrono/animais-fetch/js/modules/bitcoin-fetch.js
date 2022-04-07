export default function initFetchBitCoin() {
    // https://blockchain.info/ticker

    fetch('https://blockchain.info/ticker').then((response) => {
        return response.json();
    }).then((body) => {
        const btcPreco = document.querySelector('.btn-preco');
        btcPreco.innerText = (1000 / body.BRL.sell).toFixed(4);
    }).catch((e) => {
        console.error(e);
    });
}

