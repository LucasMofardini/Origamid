import React from "react";

const Aula208 = () => {
  const produtosWithKey = [
    <li key="1">Computador</li>,
    <li key="2">Tablet</li>,
    <li key="3">Celular</li>,
  ];
  const livros = [
    { nome: 'A Game of Thrones', ano: 1996 },
    { nome: 'A Clash of Kings', ano: 1998 },
    { nome: 'A Storm of Swords', ano: 2000 },
  ];
  const filmes = ["O diario de um banana", "Perdido em marte"];
  return (
    <>
      {produtosWithKey}
      <ul>
        {filmes.map((item, index) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
      <ul>
        {livros
          .filter(({ano})=> ano >= 1998)
          .map(({nome, ano}, index) => {
          return (<li key={nome}>{nome}, {ano} , {index}</li>);
        })}
      </ul>
    </>
  );
};
export default Aula208;
