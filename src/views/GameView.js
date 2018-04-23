import React, {Component} from 'react';
import Game from '../models/Game.js'
import QuestionImage from './QuestionImage.js'
import StoryMsg from './StoryMsg.js'

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
      <br/>
      <p className="center" id="require_input">require_relative("<input onChange={this.updateAnswer} onKeyPress={this.handleKeyPress} id="user-input"/>")</p>
      <form onSubmit={this.submit} className="center">
      <input type="submit"id="button" value="Submit Answer" />
      </form>
      <p className="center" id="msg">Type the correct path from -<b>Bob</b>- to -<b>Sandy</b>-, then click Submit Answer or press Enter</p>
      </div>
    )
  }
}

export default GameView;
