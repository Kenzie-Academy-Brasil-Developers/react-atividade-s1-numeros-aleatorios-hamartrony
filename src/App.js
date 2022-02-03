import logo from './logo.svg';
import './App.css';
import {useState} from 'react'



function App() {
  const [num, setNum] = useState(Math.floor(Math.random()*100)+1)
  function randomNum(){
    setNum(Math.floor(Math.random()*100)+1)
  }

  return (
    <div className="App">
      <header className="App-header">
      <span>{num}</span>
      <button onClick={randomNum} className='bt'>Gerar Novo </button>
      </header>
    </div>
  );
}

export default App;
