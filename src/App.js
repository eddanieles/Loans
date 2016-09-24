import React, { Component } from 'react';
import './App.css';
import Loans from './components/Loans'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Loans />
      </div>
    );
  }
}

export default App;
