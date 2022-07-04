import React from "react";

// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado

const items = [
        {
            nome: 'Tablet',
            urlApi: 'https://ranekapi.origamid.dev/json/api/produto/tablet'
        },
        {
            nome: 'Smartphone',
            urlApi: 'https://ranekapi.origamid.dev/json/api/produto/smartphone'
        },
        {
            nome: 'Notebook',
            urlApi: 'https://ranekapi.origamid.dev/json/api/produto/notebook'
        }
]


function Exercicio301 (){
   
    const [product, setProduct] = React.useState(null);
    const [loading, setLoading] = React.useState(false);


    return(
        <>
            <div>
                {items.map((item)=>{
                    return <Button
                    key={item.nome}
                    nome={item.nome} 
                    urlApi={item.urlApi}
                    setProduct={setProduct}
                    setLoading={setLoading}
                     />
                })}
            </div>
            {loading ? <p>Carregando...</p>  : <Product product={product}/>}
        </>
    )
}

export default Exercicio301;

function Button ({nome, urlApi, setProduct, setLoading}){

    const makeRequest = () => {
        // Antes de fazer a requisição eu coloco o loading
        setLoading(true);

        fetch(urlApi)
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            // Coloquei os setTimeout para demorar um pouco e aparecer a mensagem de loading
            setTimeout(()=>{
                setLoading(false);
                setProduct(data);
            },200)
        })
    }

    return(
        <button style={{margin: '5px'}} onClick={makeRequest}>{ nome }</button>
    )
}

function Product ({ product }){
    return(
    <div className="response-url">
                {product && 
                    <div className="container-product">
                        <div>
                        <h3>{product.nome}</h3>
                        <img className="img-photo"  src={product.fotos[0].src} alt={product.fotos[0].titulo}/>
                        <h4>R${product.preco}</h4>
                        <div className="item-desc"><small>{product.descricao}</small></div>
                        <small>Vendido: {product.vendido ? 'Não' : 'Sim'}</small>
                        <b><small>{product.usuario_id}</small></b>
                        </div>
                    </div>
                }
            </div>
    )
}