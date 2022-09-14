import React from "react";
import {GlobalContext} from "./GlobalContext";

const Produto = () => {
    const global = React.useContext(GlobalContext);

    return(
        <>
            <button onClick={()=>{global.setContar((prevState)=> prevState + 1)}}> {global.contar}</button>
        </>
    )
}

export default Produto;