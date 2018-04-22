import React, {Component} from 'react';
import StartBtn from './StartBtn.js';

class HomePage extends Component {
  render() {
    return(
      <div>
      <h3>Welcome to Require Relative, a short game to help you learn about file structure</h3>
      <StartBtn/>
      </div>
    )
  }
}

export default HomePage;
