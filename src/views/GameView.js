import React, {Component} from 'react';
import TextInput from './TextInput.js'

class GameView extends Component {
  render() {
    return(
      <div>
      <h4>Bob is looking for his dog, help him find sandy!</h4>
      <TextInput/>
      </div>
    )
  }
}

export default GameView;
