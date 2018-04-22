import React, {Component} from 'react';
import SubmitBtn from './SubmitBtn.js';
import TextInput from './TextInput.js'

class GameView extends Component {
  render() {
    return(
      <div>
      <TextInput/>
      <SubmitBtn/>
      </div>
    )
  }
}

export default GameView;
