import React from 'react';
import './App.css';
import ClickCounter from './components/ClickCounter';
import Section from './components/Section'
import Counter from './components/Counter';
import ThemeContext from './contexts/themeContext';

class App extends React.Component {
  state = {
    theme: 'dark',
    switchTheme: () => {
      this.setState((prevState) => {
        if(prevState.theme === 'dark') {
          return {theme: 'light'}
        }
        return {theme: 'dark'}
      })
    } 
  };

  render() {
    return (
      <div className='app'>
        <Counter>
          {
            (count, countIncrement) => (
              <ClickCounter count = {count} countIncrement = {countIncrement}/>
            )
          }
        </Counter>
        <ThemeContext.Provider value={this.state}>
            <Section /> 
        </ThemeContext.Provider>
      </div>
    );
  }
}

export default App;
