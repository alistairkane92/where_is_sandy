import React, { Component } from "react";
import Game from "../models/Game.js";
import QuestionImage from "./QuestionImage.js";
import SuccessMsg from "./SuccessMsg.js";
import LoadErrorMsg from "./LoadErrorMsg.js";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

class GameView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: "",
      qnum: 1,
      end: false,
      txtBox: "",
      submitted: "",
      show: false
    };

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentDidMount = () => {
    this.answerInput.focus();
  };

  updateAnswer = e => {
    this.setState({ answer: e.target.value });
  };

  handleKeyPress = e => {
    if (e.which === 13 || e.keyCode === 13) {
      this.submit(e);
    }
  };

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  submit = e => {
    e.preventDefault();
    document.getElementById("user-input").value = "";

    if (Game.evalQ(this.state.qnum, this.state.answer.toLowerCase())) {
      let newNum = this.state.qnum + 1;
      this.setState({ qnum: newNum });

      if (this.state.qnum === 6) {
        let endGame = true;
        this.setState({ end: endGame });
      }
    } else {
      let newState = true;
      this.setState({ wrong: newState });

      let submitState = this.state.answer;
      this.setState({ submitted: submitState });
    }
  };

  render() {
    // TODO: refactor

    // TODO: add instructions button/modal
    return (
      <React.Fragment>
        <QuestionImage qnum={this.state.qnum} />

        {this.state.end ? null : (
          <div id="input-form-container">
            {this.state.qnum >= 2 ? (
              this.state.wrong ? null : (
                <SuccessMsg />
              )
            ) : null}
            {this.state.wrong ? (
              <LoadErrorMsg
                qnum={this.state.qnum}
                submitted={this.state.submitted}
              />
            ) : null}
            <div id="require-submit">
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
              <div id="buttons-container">
                <Button
                  variant="primary"
                  onClick={this.handleShow}
                  className="button"
                >
                  Guide
                </Button>
                <Modal
                  show={this.state.show}
                  onHide={this.handleClose}
                  size="lg"
                  aria-labelledby="contained-modal-title-vcenter"
                  centered
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Importing by Relative Path</Modal.Title>
                  </Modal.Header>
                  <Modal.Body id="modal-body">
                    When we want to import files we need to specify the path to
                    that file, relative to the file doing the importing.
                    <br />
                    <br />"<b className="modal-spacing"> filename</b> " refers
                    to a file in the same directory.
                    <br />"<b className="modal-spacing"> ./filename</b> " also
                    refers to a file in the same directory.
                    <br />"<b className="modal-spacing"> ../filename</b> "
                    refers to a file one level up.
                    <br />"
                    <b className="modal-spacing"> ./directory/filename</b> "
                    refers to a file inside a directory on this level.
                    <br />"
                    <b className="modal-spacing"> ../directory/filename</b> "
                    refers to a file inside a directory one level up.
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="primary" onClick={this.handleClose}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
                <Button
                  variant="primary"
                  onClick={this.submit}
                  className="center button"
                >
                  Submit
                </Button>
              </div>
            </div>
            <p className="center" id="msg">
              Type the relative path from Bob to Sandy
            </p>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default GameView;
