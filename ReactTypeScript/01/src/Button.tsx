import React from "react";

// Recebe as propriedades de um button, ou seja -> tudo que um botao tem + (extendendo) esse objeto
type ButtonProps = React.ComponentProps<"button"> & {
  tamanho?: string;
};

// O React infere o tipo do retorno, que é React.JSX.Element ou React.ReactElement
const Button = ({ children, tamanho, ...props }: ButtonProps) => {
  return (
    <button style={{ fontSize: tamanho }} {...props}>
      {children}
    </button>
  );
};

export default Button;
