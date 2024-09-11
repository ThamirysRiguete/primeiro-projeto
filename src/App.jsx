import logo from './logo.svg';
import './App.css';

import FirstComponent from './components/Frist.components.jsx';
import TemplateExpressions from './components/TemplateExpression.jsx';
import MyComponent from './components/MyComponent.jsx';

function App() {
  return (
    <div className='App'>
        <FirstComponent />
        <TemplateExpressions />
        <MyComponent />
    </div>
  );
}

export default App;
