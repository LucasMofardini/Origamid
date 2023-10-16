import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import Checkbox from "./Checkbox";
import UseStateExample from "./UseStateExample";
import ExercicioUseState from "./UseStateExercicio";

function App() {
  // O ts infere que o tipo. Ex: useState.
  const [total, setTotal] = useState(0);

  const incrementar = () => setTotal((prev) => prev + 1);

  return (
    <>
      <h1>{total}</h1>
      <Button onClick={incrementar} className="btn" tamanho="1.25rem">
        Incrementar
      </Button>

      <section>
        <Input id="test" label="Teste Label" />
        <Input id="test" label="Teste Label" type="date" />
      </section>

      <section>
        <Button2> Posição da Pagina </Button2>
      </section>

      <section>
       <Checkbox label="Termos e Condições" />
      </section>
      
      <section>
        <UseStateExample />
      </section>

      <section>
        <ExercicioUseState />
      </section>
    </>
  );
}

export default App;

const Button2 = ({ children, ...props }: React.PropsWithChildren) => {
  // Há diferenças entre tipos do HTML nativo, TS e React.
  // Exemplo esse é React.MouseEvent por conta de ser um componente React.
  
  // Podemos passar dentro da propriedade da funçao o tipo.
  const handleClick2 = (event: React.MouseEvent) => {
    console.log(event.pageY);
  }

  // Ou Também conseguimos tipar o que a função é, sendo um MouseEventHandler. ( Uma função de Evento do Mouse )
  // Se essa função é do tipo MouseEventHandler, a propriedade é inferida como MouseEvent
  const handleClick: React.MouseEventHandler = (event) => {
    console.log(event.pageX);
  };


  return <button onClick={handleClick} {...props}> {children} </button>;
};
