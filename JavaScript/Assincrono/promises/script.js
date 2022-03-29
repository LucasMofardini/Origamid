const promessa = new Promise((resolve, reject) => {
    let condicao = true;
    if (condicao) {
        setTimeout(() => {
            resolve({ nome: 'Lucas', idade: 19 });

        }, 1000);
    } else {
        reject(Error('Um erro ocorreu na promisse'));
    }
});
// Then para quando a promise for aceita/resolvida
// Catch para quando a promise for negada/rejeitada
// Finally executa independente de qual for a resposta da promise

// const retorno = promessa
//     .then((resolucao) => {
//         resolucao.profissao = 'programador';
//         return resolucao;
//     })
//     .then((resolucao) => {
//         console.log(resolucao)
//     })
//     .catch((rejeitada) => {
//         console.warn(rejeitada);
//     })
//     .finally(() => {
//         console.log('Acabou')
//     });

// console.log(retorno);


const login = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Usuario logado');
    }, 1000)
})

const dados = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Dados carregados')
    }, 1500)
})
// Esse Promise.all vai ver se tudo ja acabou 
// Promse.race devolve qual dado chegou primeiro 
const carregouTudo = Promise.all([login, dados]);

//Quando acabar os 1,5 segundos ele vai mostrar os  2 resolves no log
carregouTudo.then((resolve) => {
    console.log(resolve);
})