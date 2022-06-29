import React from "react";
// Organize os produtos como mostrado no vídeo
// Mostre apenas produtos que forem mais caros que R$ 1500
const produtos = [
  {
    id: 1,
    nome: 'Smartphone',
    preco: 'R$ 2000',
    cores: ['#29d8d5', '#252a34', '#fc3766'],
  },
  {
    id: 2,
    nome: 'Notebook',
    preco: 'R$ 3000',
    cores: ['#ffd045', '#d4394b', '#f37c59'],
  },
  {
    id: 3,
    nome: 'Tablet',
    preco: 'R$ 1500',
    cores: ['#365069', '#47c1c8', '#f95786'],
  },
];

const Exercicio208 = () => {

  const precoMaior = 1500; 

  const produtosFiltrados = produtos.filter((item)=>{
    const precoFormatado = +item.preco.replace("R$", "");
    return precoFormatado > precoMaior;
  })

  return (
    <section>
      {  
        produtosFiltrados.map((item)=>{
          return(
            <div>
                <h1>{item.nome}</h1>
                <p>{item.preco}</p>
                <ul>
                  {
                    item.cores.map((cor, index)=>{
                      return <li  className={cor + index}
                                  key={cor + index}
                                  style={{backgroundColor:cor, color: 'white', padding: '0 5px'}}>
                                {cor}
                              </li>
                    })
                  }
                </ul>    
            </div>
          )
        })
      }
    </section>
  );
};

export default Exercicio208;