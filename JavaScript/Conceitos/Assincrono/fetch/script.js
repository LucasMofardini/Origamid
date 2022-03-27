// Faz uma requisição HTTP, se voce nao rodar em um server nao vai funcionar 
const doc = fetch('./doc.txt');

doc.then((response) => {
    return response.text();
}).then((body) => {
    // Esse body é uma promessa da resposta convertida para texto.
    // Por isso se usa o then
    // const conteudo = document.querySelector('.conteudo');
    // conteudo.innerText = body;
    // console.log(body);
});

// ------------ // 

const cep = fetch('https://viacep.com.br/ws/05885620/json/');

cep.then((response) => {
    return response.json();
}).then((body) => {
    const conteudo = document.querySelector('.conteudo');
    // console.log(body);
    conteudo.innerText = body.logradouro;
});

// Quando vai utilizar o text() ?
// Quando voce quer o texto de algo, html, o corpo de um arquivo css e/ou javascript

// Vou 'injetar' o arquivo css via fetch : 

const css = fetch('./style.css');

css.then((response) => {
    return response.text();
}).then((respostaTexto) => {
    const conteudo = document.querySelector('.conteudo');

    // To criando um elemento chamado style e colocando dentro o css em texto
    const style = document.createElement('style');
    style.innerHTML = respostaTexto;
    // Injeta dentro do conteudo o estilo
    conteudo.appendChild(style);
})

// Vou 'injetar' o html via fetch

const html = fetch('./sobre.html');

const div = document.createElement('div');

html.then((response) => {
    return response.text();
}).then((respostaTexto) => {
    div.innerHTML = respostaTexto;
    const tituloHtml = div.querySelector('h1');
    // console.log(tituloHtml)
    const h1Documento = document.querySelector('h1');
    h1Documento.innerHTML = tituloHtml.innerText;
})

// Outro formato é o blob
// Ele representa um arquivo, imagem ...



const image = fetch('./cachorro.jpg');


image.then((response) => {
    return response.blob();
}).then((body) => {
    // Ele vai criar um Url a partir da imagem
    const blobUrl = URL.createObjectURL(body)
    const imagemDom = document.querySelector('img');
    imagemDom.src = blobUrl;
});

// O metodo clone, clona uma resposta


const cepClone = fetch('https://viacep.com.br/ws/05885620/json/');
// A resposta vem em Text e em Json
cepClone.then((response) => {
    const response2 = response.clone();
    response.text().then((rText) => {
        // console.log(rText);
    })
    response2.json().then(rJson => {
        // console.log(rJson);

    });

});


// Propriedade Headers da resposta 
// Cabeça da requisição
const cepHeader = fetch('https://viacep.com.br/ws/05885620/json/');

cepHeader.then((response) => {
    // console.log(response);
    response.headers.forEach((item) => {
        // console.log(item);

    });
});

// status : retorna o status da requisião
// url : retorna a url da requisiçao
// type : é o tipo da requisiçao, se é pro proprio servidor etc
const cepStatus = fetch('https://viacep.com.br/ws/05885620/json/');

cepStatus.then((response) => {
    console.log(response.status);
    if (response.status === 200) {
        console.log(response.url);
        console.log(response.type);

    }

});