import React, { useCallback, useEffect, useState } from 'react';

const Aula306 = () => {
    const [produto, setProduto] = useLocalStorage('produto', '');
    const { request, data, loading, erro } =  useFetch();

    const handleClick = (e) => setProduto(e.target.innerText);

    useEffect(() => {
        const fetchData = async () => {
            const {response, json} = await request('https://ranekapi.origamid.dev/json/api/produto/');
            console.log(response, json);
        } 

        fetchData();
    }, [request]);

    if(erro) return <p>{erro}</p>;
    if(loading) return <p>Carregando...</p>;
    if (data)
    return(
        <>
            <div>
                <p>Produto Favorito - {produto}</p>
                <button onClick={handleClick}>Notebook</button>
                <button onClick={handleClick}>Smartphone</button>
            </div>

            <div>
                <h3>UseFetch</h3>
                {data && data.map(( item, key ) => <p key={key}>{item.nome}</p>)}
            </div>
        </>
    )
    else return null;

}

const useLocalStorage = (key, initialValue) => {
    const [state, setState] = useState(() => {
        const local = window.localStorage.getItem(key);
        return local ? local : initialValue    
    });

    useEffect(() => {
        window.localStorage.setItem(key, state)
    }, [state, key]);

    return [state, setState];
};

const useFetch = () => {
    const [data, setData] = useState(null);
    const [erro, setErro] = useState(null);
    const [loading, setLoading] = useState(true);

    const request = useCallback(async (url, options) => {
        let response;
        let json;

        try{
            setErro(null);

            response = await fetch(url, options);
            json = await response.json();

        }catch(e){
            json = null;
            setErro('Erro');
        }finally{
            setLoading(false);
            setData(json);
            return { response, json };
        }
    }, []);

    return { data, erro, loading, request }
}

export default Aula306;