import React from "react";

const Aula211 = ({cor, texto, children, ...props}) => {
 
  return (
    <>
      <h1 {...props} style={{color: cor}}>{texto}, {children}</h1>
    </>
  );
};
export default Aula211;
