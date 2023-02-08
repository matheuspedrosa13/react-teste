import './App.css';
import Button from './components/Button' 
import { useState } from 'react';

function App() {
  const [textNome, setTextNome] = useState('Cores')
  const [backColor1, setbackColor1] = useState('Black')
  function a(){
    let nome = prompt("Oi, qual o seu nome?")
    setTextNome("Cores para " + nome)
  }
  function b(){
    function cores(){
      return (Math.random() * 200).toFixed(0)
    }

    const rgb1 = `rgb(${cores()}, ${cores()}, ${cores()})`
    setbackColor1(rgb1)
  }
  function c(){
    function d(){
      return (Math.random() * 200).toFixed(0)
    }
    const degrade = `linear-gradient( 45deg, rgb(${d()}, ${d()}, ${d()}), rgb(${d()}, ${d()}, ${d()}), rgb(${d()}, ${d()}, ${d()}), rgb(${d()}, ${d()}, ${d()}) )`
    setbackColor1(degrade)
  }
  return (
    <div class="tudo" style={{background: backColor1}}>
      <div className="App">
        <h1 className='NOME'>{textNome}</h1>
        <Button funcname= {a} titulo='Mudar titulo'/>
        <Button funcname= {b} titulo='Gerar cor aleatória do fundo'/>
        <Button funcname= {c} titulo='Gerar degrade aleatório'/>
      </div>
    </div>
  );
}

export default App;
