import React, { Component } from 'react';
import HomePage from './views/HomePage.js'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
  }
  
  render() {
    return (
      <HomePage/>
    );
  }
}

export default App;
