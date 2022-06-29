import React from "react";

const Aula207 = () =>{
    const nome = 'Lucas'
    const ativo = false;
    const subtitulo = <h2>Esse é um subtitulo</h2>;
  
    const carro = {
      marca: 'Ford',
      rodas: '4'
    }
    const estiloP = {
      color: "blue",
      fontSize: '16px'
    }
    return(
    <React.Fragment>
        <h1 className={ativo ? 'ativo' : 'inativo'}>{ nome }</h1>
        {subtitulo}
        <p>{true ? <span>é True</span>: <h4>Não é true</h4>}</p>
        <p>{new Date().getFullYear()}</p>
        <p style={estiloP}>{carro.marca}</p>
    </React.Fragment>
    )
}
export default Aula207;