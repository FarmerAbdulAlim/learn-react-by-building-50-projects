
import './App.css';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter'
import Counter from './components/Counter';

function App() {
  return (
    <div className='main-content'>
      <Counter render = {(count, countIncrement) => <ClickCounter count = {count} countIncrement = {countIncrement} />}/>
      <Counter render = {(count, countIncrement) => <HoverCounter count = {count} countIncrement = {countIncrement} />}/>
    </div>
  );
}

export default App;
