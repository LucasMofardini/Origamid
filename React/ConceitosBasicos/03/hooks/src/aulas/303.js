import React, { useRef, useState }  from 'react';

function Aula303 (){
    const [comentarios, setComentarios] = useState([]);
    const [input, setInput] = useState('');
    const [notificacao, setNotificacao] = useState(null);

    const inputElement = useRef();
    const timeoutRef = useRef();

    function handleClick(){
        setComentarios((prevState)=>{
            return [...prevState, input];
        })
        setInput('');
        setNotificacao('Foi colocado na lista');
        inputElement.current.focus();
        clearInterval(timeoutRef.current)
        timeoutRef.current = setTimeout(()=>{
          setNotificacao(null)
        }, 1000)
    }

    return (
        <>
            <p>{notificacao}</p>
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
