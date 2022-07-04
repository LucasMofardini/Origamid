import './App.css';
import Aula301 from './aulas/301';
import Exercicio301 from './exercicios/exercicio301';

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
        </>
  );
}

export default App;
