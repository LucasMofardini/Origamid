// fetch('https://pokeapi.co/api/v2/pokemon/')
//     .then(r => r.json())
//     .then(pokemon => {
//         console.log(pokemon);
//     });

// Primeira é o URL
// Segunda é o Metodo

const url = 'https://jsonplaceholder.typicode.com/posts/2';
const options = {
    method: 'PUT',
    body: '{"title": "Javascript"}',
    headers: {
        "Content-Type": "application/json; charset=utf-8"
    }
};
fetch(url, options)
    .then((res) => {
        return res.json()
    }).then((body) => {
        console.log(body);
    })

// GET
// Puxa informação, utilizado para pegar posts, usuários e etc.

// POST
// Utilizado para criar posts, usuários e etc.

// PUT
// Geralmente utilizado para atualizar informações.

// DELETE
// Deleta uma informação.

// HEAD
// Puxa apenas os headers.


// Uma medida se segurança 
// CORS 
const url2 = 'https://cors-anywhere.herokuapp.com/https://www.google.com/';
const div = document.createElement('div');

fetch(url2)
    .then(r => r.text())
    .then(r => {
        div.innerHTML = r;
        console.log(div);
    });
