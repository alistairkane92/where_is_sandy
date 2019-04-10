import React, { Component } from "react";
import Game from "../models/Game.js";
import QuestionImage from "./QuestionImage.js";
import SuccessMsg from "./SuccessMsg.js";
import LoadErrorMsg from "./LoadErrorMsg.js";
import InstructionsModal from "./InstructionsModal.js";
import Button from "react-bootstrap/Button";

class GameView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: "",
      qnum: 1,
      end: false,
      txtBox: "",
      submitted: "",
      success: null
    };
  }

  componentDidMount = () => {
    this.answerInput.focus();
    const storedQNum = JSON.parse(localStorage.getItem("qnum"));
    if (storedQNum) {
      this.setState({ qnum: storedQNum });
    }
  };

  updateAnswer = e => {
    this.setState({ answer: e.target.value });
  };

  handleRestartBtn = e => {
    localStorage.setItem("qnum", 1);
    this.setState({ qnum: 1, end: false });
  };

  handleKeyPress = e => {
    if (e.which === 13 || e.keyCode === 13) {
      this.submit(e);
    }
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = () => {
    this.setState({ show: true });
  };

  submit = e => {
    e.preventDefault();
    document.getElementById("user-input").value = "";

    if (Game.evalQ(this.state.qnum, this.state.answer.toLowerCase())) {
      let newNum = this.state.qnum + 1;
      this.setState({ qnum: newNum, success: true });
      localStorage.setItem("qnum", JSON.stringify(newNum));

      if (this.state.qnum === 6) {
        this.setState({ end: true });
      }
    } else {
      this.setState({ success: false });

      this.setState(prevState => {
        return { submitted: prevState.answer };
      });
    }
  };

  render() {
    console.log("calling render", "qnum:", this.state.qnum);
    // TODO: refactor
    // TODO: level selector

    let importText = (
      <p className="center" id="require-input">
        require_relative("
        <input
          id="user-input"
          onChange={this.updateAnswer}
          onKeyPress={this.handleKeyPress}
          ref={input => {
            this.answerInput = input;
          }}
        />
        ")
      </p>
    );

    let submitBtn = (
      <Button variant="primary" onClick={this.submit} className="center button">
        Submit
      </Button>
    );

    let instructionalMsg = (
      <p className="center" id="msg">
        Type the relative path from Bob to Sandy
      </p>
    );

    let restartBtn;

    // if on the end screen, hide the bottom input text
    if (this.state.qnum === 7 || this.state.end) {
      importText = null;
      submitBtn = null;
      instructionalMsg = null;
      restartBtn = (
        <Button
          variant="primary"
          onClick={this.handleRestartBtn}
          className="button"
        >
          Restart
        </Button>
      );
    }

    let resultText;

    console.log("checking result text", this.state.success);
    if (this.state.success) {
      resultText = <SuccessMsg />;
    } else if (this.state.success === false) {
      console.log("ya wrong");
      resultText = (
        <LoadErrorMsg qnum={this.state.qnum} submitted={this.state.submitted} />
      );
    }

    return (
      <React.Fragment>
        <QuestionImage qnum={this.state.qnum} />
        {resultText}
        <div id="require-submit">
          {importText}
          {instructionalMsg}
          <div id="buttons-container">
            <InstructionsModal
              show={this.state.show}
              handleClose={this.handleClose}
            />
            <Button
              variant="primary"
              onClick={this.handleShow}
              className="button"
            >
              Guide
            </Button>
            {submitBtn}
            {restartBtn}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default GameView;
