import React  from 'react';

function operacaoLenta(){
    let c;
    for(let i = 0; i < 1000000; i++){
        c = i + i / 10;
    }
    return c;
}

function Aula304 (){
    const [contar, setContar] = React.useState(0);
    
    const valor = React.useMemo(()=>{
        const localItem = localStorage.getItem('produto');
        console.log('aconteceu o memo');
        return localItem;
    },[])

    const opLenta = React.useMemo(()=>{
        return operacaoLenta();
    },[])

    const handleClick = React.useCallback(() => {
        setContar(contar + 1)
    },[contar]);

    return (
        <>
            <button onClick={handleClick}>{contar}</button>
        </>
    )
  
}
export default Aula304;
