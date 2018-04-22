import React, {Component} from 'react';
import Game from "../models/Game.js"

class SubmitBtn extends Component {
  constructor(props){
    super(props)
    this.state = {qnum: 1}
  }

  render(){
    const submit = () => {
      if (Game.evalQ(this.state.qnum, this.props.answer.toLowerCase())){
        alert("Well done! You found Sandy!")
        var newNum = this.state.qnum + 1
        console.log(newNum);
        this.setState({qnum: newNum})
      } else {
        alert("Load Error! Sandy not found")
      }
    }

  return(
    <div>
    <button onClick={submit}>Submit Answer</button>
    </div>
  )
  }
}

export default SubmitBtn;
