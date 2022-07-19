import React from "react";

// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo


function Exercicio302 (){
    const [dados, setDados] = React.useState();
    React.useEffect(()=>{
        if(window.localStorage.produto){
            fetch(`https://ranekapi.origamid.dev/json/api/produto/${window.localStorage.produto}`)
            .then((res)=> {
                return res.json()
            })
            .then((data)=>{
                setDados(data);
            });
        }
    },[])
    React.useEffect(()=>{
        if(dados){
            window.localStorage.produto = dados.nome;
        }
    },[dados])
    return(
        <>
            <div>
                <Button nome="notebook" setDados={setDados}></Button>
                <Button nome="smartphone" setDados={setDados}></Button>
            </div>
            {dados && 
                <div>
                    <p>{dados.nome}</p>
                    <p>R$ {dados.preco}</p>
                </div>}
        </>

    )
}

export default Exercicio302;

const Button = ({ nome, setDados }) => {

    const fazRequisicao = () =>{

        fetch(`https://ranekapi.origamid.dev/json/api/produto/${nome}`)
        .then((res)=> {
            return res.json()
        })
        .then((data)=>{
            setDados(data);
        });
    }

    return(
        <button onClick={fazRequisicao} style={{margin: '5px'}}>{nome}</button>
    )
}