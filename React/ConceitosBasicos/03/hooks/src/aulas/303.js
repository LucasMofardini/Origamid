import React, { useRef, useState }  from 'react';

function Aula303 (){
    const [comentarios, setComentarios] = useState([]);
    const [input, setInput]= useState('');
    const inputElement = useRef();

    function handleClick(){
        setComentarios((prevState)=>{
            return [...prevState, input];
        })
        setInput('');
        inputElement.current.focus();
    }

    return (
        <>
            <ul>
                {comentarios.map((item)=><li key={item}>{item}</li>)}
            </ul>
            <input ref={inputElement} value={input} onChange={(e)=> setInput(e.target.value)}/>
            <br/>
            <button onClick={handleClick}>Enviar</button>
        </>
    )
  
}
export default Aula303;
