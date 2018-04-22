import React, {Component} from 'react';

class TextInput extends Component{
  constructor(props) {
    super(props);
    this.state = {answer: ""};
    // this.updateAnswer = this.updateAnswer.bind(this);
  }

  render(){
    var updateAnswer = (e) => {
      this.setState({answer: e.target.value})
    }

    return (
      <div>
      <input onChange={updateAnswer} placeholder="Type the path to Sandy"/>
      </div>
    )
  }
}

export default TextInput
