import './App.css';
import Aula301 from './aulas/301';
import Exercicio301 from './exercicios/exercicio301';
import Aula302 from './aulas/302';
import Exercicio302 from './exercicios/exercicio302';

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
        </>
  );
}

export default App;
