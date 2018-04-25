import React, {Component} from 'react';
import Game from '../models/Game.js'
import QuestionImage from './QuestionImage.js'
import SuccessMsg from './SuccessMsg.js'

class GameView extends Component{
  constructor(props) {
    super(props);
    this.state = {answer: "", qnum: 1, end: false};

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
      let newNum = this.state.qnum + 1
      this.setState({qnum: newNum})
      console.log("Submit Qnum", this.state.qnum);
      if (this.state.qnum === 4){
        console.log("endgame Proc");
        let endGame = true
        this.setState({end: endGame})
      }
    } else {
      alert("Load Error! Sandy not found. Please try again.")
    }
  }

  render(){
    console.log(this.state.qnum);
    return (
      <div>

      {this.state.qnum >= 2 ? <SuccessMsg/> : null}
      <QuestionImage qnum={this.state.qnum}/>
      <br/>

      {this.state.end ? null :
      <div>
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
