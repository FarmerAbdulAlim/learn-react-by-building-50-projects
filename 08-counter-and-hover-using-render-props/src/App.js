
import './App.css';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter'
import Counter from './components/Counter';

function App() {
  return (
    <div className='main-content'>
      <Counter>
        {
          (count, countIncrement) => (
            <ClickCounter count = {count} countIncrement = {countIncrement}/>
          )
        }
      </Counter>
      <Counter>
        {
          (count, countIncrement) => (
            <HoverCounter count = {count} countIncrement = {countIncrement}/>
          )
        }
      </Counter>  
    </div>
  );
}

export default App;
