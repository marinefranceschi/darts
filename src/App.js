import React, { Component } from 'react';
import logo from './target.png';
import './App.css';

const buttons = [15, 16, 17, 18, 19, 20, 'ø'];

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Darts Counter</h2>
        </div>
        <p className="App-intro">
          {buttons.map(button =>
            <div>
              <button>
                {button}
              </button>
            </div>
          )}
        </p>
      </div>
    );
  }
}

export default App;
