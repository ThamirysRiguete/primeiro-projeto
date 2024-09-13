import logo from './logo.svg';
import './App.css';

import FirstComponent from './components/Frist.components.jsx';
import TemplateExpressions from './components/TemplateExpression.jsx';
import MyComponent from './components/MyComponent.jsx';
import OutroComponent from './components/OutroComponent.jsx';
import harry from './assets/harry.jpg'
import CompanentORemake from './components/CompanentORemake.jsx';

function App() {
  const n = 15
  const classDiferente = true
  return (
    <div className='App'>
       { /*<FirstComponent />
        <TemplateExpressions />
        <MyComponent />*/}

        <CompanentORemake />

        <h1>Olha só o texto</h1>

        <p style={{color:"lavander", padding:"25px", backgroundColor:"brown", fontSize:"40px"}}>
        Este parágrafo é do App.jsx
        </p>

        <h3 style={n > 10 ? ({color:"hotpink"}) : ({backgroundColor:"brown", color:"brown", backgroundColor:"hotpink"})} > 
          AQUI TEM UM TEXTO COM O PRIMEIRO ESTILO 
        </h3>

        <h3 style={n < 10 ? ({color:"hotpink"}) : ({backgroundColor:"brown", color:"brown", backgroundColor:"hotpink"})} > 
          AQUI TEM UM TEXTO COM O PRIMEIRO ESTILO 
        </h3>

        <h2 className={classDiferente ? "red-title" : "normal-title"}>TEXTO COM CLASSE DIFERENTE 1</h2>
        

        <OutroComponent/>

        <img src='./zodiac.jpg' width={900} height={500}></img>

        <img src={harry} alt="melhor saga de livros" width={900} height={600}/>
    </div>
  );
}

export default App;
