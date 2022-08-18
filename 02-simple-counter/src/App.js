import React, {useState} from 'react';
import './App.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
      </header>
    </div>
  );
}



const Counter = () => {
  const [count, setCount] = useState(0);
  const countPlus = () => setCount(count+1);
  const countMinus = () => setCount(count-1);
  const resetVal = () => setCount(0);
  return (
    <div>
      <h1>{count}</h1>
      <button className="buttonStyle" onClick={countPlus}>Count+</button>
      <button className="buttonStyle" onClick={resetVal}>Reset</button>
      <button className="buttonStyle" onClick={countMinus}>Count-</button>
    </div>
  )
}


export default App;
