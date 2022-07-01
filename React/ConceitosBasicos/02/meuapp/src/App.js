import React from 'react';
import Aula207 from './207';
import Exercicio207 from './Exercicio207'
import Aula208 from './208'
import Exercicio208 from './Exercicio208';
import Aula209 from './209';
import Aula211 from './211';
import Exercicio212 from './Exercicio212';



const App = () => {

  return (
    <>
      {/* <div className="container"><Aula207></Aula207></div>
      <div className="container"><Exercicio207></Exercicio207></div>

      <div className="container"><Aula208></Aula208></div>
      <div className="container"><Exercicio208></Exercicio208></div>

      <div className="container"><Aula209></Aula209></div>

      <div className="container">
        <Aula211 texto="Meu primeiro titulo" cor="blue" required >
          Conteudo de dentro 1
        </Aula211>
        <Aula211 texto="Meu segundo titulo" cor="red" >
          Conteudo de dentro 2
        </Aula211>
      </div> */}
     <Exercicio212></Exercicio212>
    </>
  );
}

export default App;

// Exemplo de desestruturação

// const teste = {
//   Produtos: 4,
//   Quantidade: 2,
//   Rolamentos: 'Rolamentos de carros esportivos'
// }

// const { Rolamentos, Quantidade } = teste;
// console.log(Rolamentos, Quantidade);
// console.log(teste.Rolamentos, teste.Quantidade);