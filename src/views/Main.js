import React, {Component} from 'react';
import GameView from './GameView.js';
import '../App.css';

class Main extends Component {
  render() {
    return(
      <div id="main">
      <div id="header">
      <h1 className="center">Where's Sandy?</h1>
      <h5 className="center">A short game to help you find your files.</h5>
      </div>
      <GameView/>
      </div>
    )
  }
}

export default Main;
