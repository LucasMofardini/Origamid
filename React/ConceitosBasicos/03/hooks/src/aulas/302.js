import React  from 'react';

function Aula302 (){
 
    const [contar, setContar] = React.useState(0);
    const [dados, setDados] = React.useState(null);

    React.useEffect(() => {
        fetch('https://ranekapi.origamid.dev/json/api/produto/notebook')
        .then((res)=>res.json())
        .then((json)=>{setDados(json)})
        
    }, []);

    React.useEffect(() => {
        document.title = 'Total ' + contar;
        // Essa funçao do retorno só ocorre quando o elemento é tirado/desmontado da tela
        return () =>{

        }
    }, [contar]);
  
    return (
        <>
            <div>
                {dados && 
                    <div>
                        <p>{dados.nome}</p>
                        <p>{dados.preco * contar}</p>
                    </div>              
                }
                <button onClick={() => setContar(contar + 1)}>{contar}</button>
            </div>
        </>
    )
  
}
export default Aula302;
