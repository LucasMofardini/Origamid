import React , {useState} from 'react';

function Aula301 (){
    // const [dados, setDados] = useState({nome : 'Lucas', idade: 19});
    const [modal, setModal] = useState(false);

 

    return(
        <>
            {/* <p>{dados.nome}, {dados.idade}</p>
            <p>{dados.faculdade}</p> */}
            <Modal modal={modal} setModal={setModal}/>
            <Button setModal={setModal}/>
        </>
    )
}
export default Aula301;

function Button ({setModal}){
    function handleClick(){
        // Pega o valor anterior nesse ativo, e retorna o oposto do ativo
        setModal((ativo) => {
         return !ativo
        })
    }
    return(
        <button onClick={handleClick}>Abrir</button>
)
}

function Modal ({modal, setModal}){
    if(modal){
        return(
            <div >
                Esse é um modal
                <button onClick={()=>setModal(false)} style={{marginLeft: '10px'}} >Fechar</button>
            </div>
        );    
    }
    return null;
}