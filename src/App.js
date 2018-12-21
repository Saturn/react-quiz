import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import QuizApi from './Components/api.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <QuizApi />
      </div>
    );
  }
}

export default App;
