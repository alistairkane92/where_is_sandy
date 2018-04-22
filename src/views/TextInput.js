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
      <p>require_relative("<input onChange={this.updateAnswer}/>")</p>
      <SubmitBtn answer={this.state.answer}/>
      </div>
    )
  }
}

export default TextInput;
