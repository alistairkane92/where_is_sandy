import React, {Component} from 'react';
import Game from '../models/Game.js'
import QuestionImage from './QuestionImage.js'

class GameView extends Component{
  constructor(props) {
    super(props);
    this.state = {answer: "", qnum: 1};

    this.updateAnswer = this.updateAnswer.bind(this)
  }

  updateAnswer = (e) => {
    this.setState({answer: e.target.value})
  }

  handleKeyPress = (e) => {
    if (e.which === 13 || e.keyCode === 13){
      this.submit(e)
    }
  }

  submit = (e) => {
    e.preventDefault();
    if (Game.evalQ(this.state.qnum, this.state.answer.toLowerCase())){
      alert("Well done! You found Sandy!")
      var newNum = this.state.qnum + 1
      this.setState({qnum: newNum})
    } else {
      alert("Load Error! Sandy not found. Please try again.")
    }
  }

  render(){
    return (
      <div>
      <QuestionImage qnum={this.state.qnum}/>
      <form onSubmit={this.submit}>
      <input type="submit"id="button" value="Submit Answer" />
      </form>
      <p className="center">require_relative("<input onChange={this.updateAnswer} onKeyPress={this.handleKeyPress}/>")</p>
      <p className="center" id="msg">Type the correct path from -<b>Bob</b>- to -<b>Sandy</b>-, then click Submit Answer</p>
      </div>
    )
  }
}

export default GameView;
