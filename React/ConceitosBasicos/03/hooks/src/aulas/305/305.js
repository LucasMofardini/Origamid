import React  from 'react';
import { GlobalStorage } from './GlobalContext';
import Produto from './Produto';

const Aula305 = () =>{
    
    return (
        <GlobalStorage>
            <Produto/>  
        </GlobalStorage>
    )
  
}

export default Aula305;
