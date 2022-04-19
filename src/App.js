import './App.css';
import freeCodeCampLogo from './images/freecodecamp-logo.png'
import Button from './components/Button';
import Screen from './components/Screen';
import ClearButton from './components/ClearButton';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('0');

  const addInput = value => {
    if (input == 0) {
      setInput(value);
    } else {
      setInput(input + value);
    }
  };

  const calculateResult = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("Please, enter values to perform calculations.")
    }
  };

  return (
    <div className='App'>
      {/* <div className='freecodecamp-logo-container'> 
        <img
          src={freeCodeCampLogo}
          className='freecodecamp-logo'
          alt='Freecodecamp logo' />
      </div>*/}
      <div className='calculator-container'>
        <Screen input={input} />
        <div className='buttons'>
          
            <ClearButton handleClear={() => setInput('0')}>
              AC
            </ClearButton>  
            <Button handleClick={addInput} buttonKey={'divide'}>/</Button>  
          
            <Button handleClick={addInput} buttonKey={'seven'}>7</Button>
            <Button handleClick={addInput} buttonKey={'eight'}>8</Button>
            <Button handleClick={addInput} buttonKey={'nine'}>9</Button>
            <Button handleClick={addInput} buttonKey={'multiply'}>*</Button>
          
            <Button handleClick={addInput} buttonKey={'four'}>4</Button>
            <Button handleClick={addInput} buttonKey={'five'}>5</Button>
            <Button handleClick={addInput} buttonKey={'six'}>6</Button>
            <Button handleClick={addInput} buttonKey={'subtract'}>-</Button>  
          
            <Button handleClick={addInput} buttonKey={'one'}>1</Button>
            <Button handleClick={addInput} buttonKey={'two'}>2</Button>
            <Button handleClick={addInput} buttonKey={'three'}>3</Button>
            <Button handleClick={addInput} buttonKey={'add'}>+</Button>
          
            <Button handleClick={addInput} buttonKey={'zero'}>0</Button>
            <Button handleClick={addInput} buttonKey={'decimal-point'}>.</Button>
            <Button handleClick={calculateResult} buttonKey={'equal-to'}>=</Button>
          
        </div>
      </div>
    </div>
  );
}

export default App;
