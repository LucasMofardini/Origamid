fetch('./dados.json')
    .then((r) => {
        return r.json();
    })
    .then((json) => {
        json.forEach(element => {
            // console.log(element)
        });

    });

// Converter textos que se parecem Json em JSON;

fetch('./dados.json')
    .then((r) => {
        // O dado que se parece Json está vindo em texto
        return r.text();
    })
    .then((text) => {
        //Aqui a gente transforma o dado de texto para Json
        const ehJson = JSON.parse(text);
        // console.log(ehJson);


    });



// Transformando objeto javascript em JSON;

const config = {
    player: "Google",
    tempo: 25.5,
    aula: "Javascript",
}
const stringConfig = JSON.stringify(config);

// console.log(stringConfig);


// Guardando o Objeto JS no localStorage como string
// e depois pegando ele de volta como Objeto JS
localStorage.config = JSON.stringify(config);

console.log(typeof localStorage.config);
console.log(localStorage.config);

console.log(typeof JSON.parse(localStorage.config));
console.log(JSON.parse(localStorage.config));

console.log(localStorage);