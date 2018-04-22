import React, {Component} from 'react';
import GameView from './GameView.js';

class Main extends Component {
  render() {
    return(
      <div>
      <h3>Where's Sandy?</h3>
      <h5>A short game to help you find your files</h5>
      <br/>
      <GameView/>
      </div>
    )
  }
}

export default Main;
