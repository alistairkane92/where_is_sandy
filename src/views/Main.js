import React, {Component} from 'react';
import GameView from './GameView.js';
import '../App.css';

class Main extends Component {
  // TODO make dropdown to change for JS/Ruby/React
  render() {
    return(
      <div id="main">
      <div id="header">
      <h1 className="center">Where's Sandy?</h1>
      <h5 className="center">A short game to help you find your files</h5>
      </div>
      <GameView/>
      </div>
    )
  }
}

export default Main;
