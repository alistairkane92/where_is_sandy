import React, {Component} from 'react';
import Game from '../models/Game.js'
import QuestionImage from './QuestionImage.js'
import SuccessMsg from './SuccessMsg.js'
import LoadErrorMsg from './LoadErrorMsg.js'

class GameView extends Component{
  constructor(props) {
    super(props);
    this.state = {
      answer: "",
      qnum: 1,
      end: false,
      txtBox: ""
    };
  }

  componentDidMount = () => {
    this.answerInput.focus();
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
    document.getElementById("user-input").value = "";

    if (Game.evalQ(this.state.qnum, this.state.answer.toLowerCase())){
      let newNum = this.state.qnum + 1
      this.setState({qnum: newNum})

      if (this.state.qnum === 6){
        let endGame = true
        this.setState({ end: endGame })
      }

    } else {
      let newState = true
      this.setState({wrong: newState})

      let submitState = this.state.answer
      this.setState({submitted: submitState})
    }
  }

  render(){
    // TODO: refactor

    // TODO: add instructions modal
    
    return (
      <React.Fragment>
      <QuestionImage qnum={this.state.qnum}/>
      
      {this.state.end ? null :
        <div id="input-form-container">
        {this.state.qnum >= 2 ? this.state.wrong ? null: <SuccessMsg/> : null}
        {this.state.wrong ? <LoadErrorMsg qnum={this.state.qnum}/> : null}
        <div id="require-submit">
        <p className="center" id="require-input">require_relative("<input id="user-input" onChange={this.updateAnswer} onKeyPress={this.handleKeyPress} ref={(input) => { this.answerInput = input; }} />")
        </p>
        <form onSubmit={this.submit} className="center" >
        <input type="submit"id="button" value="Submit Answer"/>
        </form>
        </div>
        <p className="center" id="msg">Type the relative path from Bob to Sandy</p>
        </div>}
        </React.Fragment>
      )
    }
  }

  export default GameView;
