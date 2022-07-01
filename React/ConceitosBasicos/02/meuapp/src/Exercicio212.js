import React from "react";
/* Exercicio 2012 */
// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado
// Dica: const { pathname } = window.location; (puxa o caminho do URL)


const Exercicio212 = () => {
  const { pathname } = window.location;
  let pagina = '/';

  if(pathname == '/produtos'){
    pagina = '/produtos';
  }
  return (
      <>
        <Header/>
        {pagina === '/produtos' && <Produtos corTitulo="#4c8b64"/>}
      </>
  );
};

export default Exercicio212;
const Header = () => {
  return(
    <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/produtos">Produtos</a></li>
    </ul>
  )
}
const Produtos = ({corTitulo}) =>{
  const produtos = [
    { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
    { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
    ];
  return(
    <>
      <h2 style={{color: corTitulo}}>Produtos</h2>
      {produtos.map((produto)=>{
          return(
             <ProdutoItem
              key={produto.nome}
              nome={produto.nome}
              propriedades={produto.propriedades}  
              />
          );
        })}
    </>
  )
}

const ProdutoItem = ({nome, propriedades}) =>{
return(
  <>
    <div className={`container ${nome}`}>
      <p>{nome}</p>
      <ul>
         { 
         propriedades.map((propriedade)=>{
          return(
            <li key={propriedade}>{propriedade}</li>
          )
         }) 
         }
      </ul>
    </div>
  </>
)
}
