// Async = funcão assincrona
// Await = sempre que tiver uma promessa

async function puxarDados() {
    try {
        const dadosResponse = await fetch('./dados.json');
        const dadosJSON = await dadosResponse.json();
        // console.log(dadosJSON);
    } catch (e) {
        console.log(e);
    }
}

puxarDados();

// INICIA FETCH AO MESMO TEMPO

async function puxarDados2() {

    const promiseDados = fetch('./dados.json');
    const promiseCliente = fetch('./clientes.json');

    const jsonDados = await (await promiseDados).json();
    const jsonCliente = await (await promiseCliente).json();

    console.log(jsonDados);
    console.log(jsonCliente);

}

puxarDados2();


