import React from "react";

// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem
const luana = {
    cliente: 'Luana',
    idade: 27,
    compras: [
      { nome: 'Notebook', preco: 'R$ 2500' },
      { nome: 'Geladeira', preco: 'R$ 3000' },
      { nome: 'Smartphone', preco: 'R$ 1500' },
    ],
    ativa: true,
  };
  
  const mario = {
    cliente: 'Mario',
    idade: 31,
    compras: [
      { nome: 'Notebook', preco: 'R$ 2500' },
      { nome: 'Geladeira', preco: 'R$ 3000' },
      { nome: 'Smartphone', preco: 'R$ 1500' },
      { nome: 'Guitarra', preco: 'R$ 3500' },
    ],
    ativa: false,
  };
  let valorSomado = 0;
  const valorMaior = 10000;
  const Exercicio207 = () => {
    const dados = luana;
  
    return(
        <div>
            <p>Nome: {dados.cliente}</p>
            <p>Idade: {dados.idade}</p>
            <p>Situação: {!dados.ativa ? 
                <span style={{color: 'red'}}> Inativa </span> : 
                <span style={{color: 'green'}}> Ativa </span> }
            </p>
            <p>Total gasto: R$ 
                { valorSomado = dados.compras
                   .reduce((soma, item)=>{
                        const resultado = soma + (+item.preco.replace('R$', ''));
                        return resultado;
                    },0)}
            </p>
            {valorSomado > valorMaior && <p>Voce está gastanto muito</p>}
        </div>
    );
  };

export default Exercicio207