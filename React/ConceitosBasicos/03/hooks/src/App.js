import './App.css';
import Aula301 from './aulas/301';
import Exercicio301 from './exercicios/exercicio301';
import Aula302 from './aulas/302';
import Exercicio302 from './exercicios/exercicio302';
import Aula303 from './aulas/303';
import Aula304 from './aulas/304';
import Aula305 from './aulas/305/305';

function App() {

  return (
        <>
          <div className="container">
            <h2>301 - useState</h2>
            <Aula301 />
          </div>
          <div className="container">
            <h2>Exercicio 301 - useState</h2>
            <Exercicio301/>
          </div>
          <div className='container'>
            <h2>302 - useEffect </h2>
            <Aula302/>
          </div>
          <div className='container'>
            <h2>Exercicio 302 - useEffect </h2>
            <Exercicio302/>
          </div>
          <div className='container'>
            <h2>303 - useRef </h2>
            <Aula303/>
          </div>
          <div className='container'>
            <h2>304 - useMemo e useCallback </h2>
            <Aula304/>
          </div>
          <div className='container'>
            <h2>305 - useContext </h2>
            <Aula305/>
          </div>
          </>
  );
}

export default App;
