import React, {Component} from 'react';
import Game from '../models/Game.js'
import QuestionImage from './QuestionImage.js'
import SuccessMsg from './SuccessMsg.js'
import LoadErrorMsg from './LoadErrorMsg.js'

class GameView extends Component{
  constructor(props) {
    super(props);
    this.state = {answer: "", qnum: 1, end: false, wrong: false};
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
      let newNum = this.state.qnum + 1
      this.setState({qnum: newNum})

      let notWrongAnymore = false;
      this.setState({wrong: notWrongAnymore})

      if (this.state.qnum === 4){
        let endGame = true
        this.setState({end: endGame})
      }
    } else {
      let newState = true
      this.setState({wrong: newState})
    }
  }

  render(){
    return (
      <div>
      <QuestionImage qnum={this.state.qnum}/>
      {this.state.end ? null :
      <div>
      {this.state.qnum >= 2 ? this.state.wrong ? null: <SuccessMsg/> : null}
      {this.state.wrong ? <LoadErrorMsg/> : null}
      <p className="center" id="require_input">require_relative("<input onChange={this.updateAnswer} onKeyPress={this.handleKeyPress} id="user-input"/>")</p>
      <form onSubmit={this.submit} className="center">
      <input type="submit"id="button" value="Submit Answer" />
      </form>
      <p className="center" id="msg">Type the correct path from -<b>Bob</b>- to -<b>Sandy</b>-, then click Submit Answer or press Enter</p>
      </div>}

      </div>
    )
  }
}

export default GameView;
