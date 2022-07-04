import React from "react";
/* Exercicio 2012 */
// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado
// Dica: const { pathname } = window.location; (puxa o caminho do URL)


const Exercicio212 = () => {
  const { pathname } = window.location;
  let Pagina = Home;

  if(pathname == '/produtos'){
    Pagina = Produtos;
  }
  
  return (
      <>
        <Header/>
        <Pagina/>
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
const Home = () => {
  return(
    <>
      <Titulo>Home</Titulo>
      <p>Essa é a home</p>

    </>
  )
}
const Produtos = () =>{
  const produtos = [
    { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
    { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
    ];
  return(
    <>
      <Titulo>Produtos</Titulo>
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

const Titulo = ({children}) =>{
  return (
    <h2 style={{color: '#4c8b64'}}>{children}</h2>
  )
}
