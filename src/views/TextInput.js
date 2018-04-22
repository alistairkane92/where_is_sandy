import React, {Component} from 'react';
import SubmitBtn from './SubmitBtn.js';

class TextInput extends Component{
  constructor(props) {
    super(props);
    this.state = {answer: ""};

    this.updateAnswer = this.updateAnswer.bind(this)
  }

  updateAnswer = (e) => {
    this.setState({answer: e.target.value})
  }

  render(){
    return (
      <div>
      <SubmitBtn answer={this.state.answer}/>
      <p className="center">require_relative("<input onChange={this.updateAnswer}/>")</p>
      <p className="center" id="msg">Type the correct path from -<b>Bob</b>- to -<b>Sandy</b>-, then click Submit Answer</p>
      </div>
    )
  }
}

export default TextInput;
