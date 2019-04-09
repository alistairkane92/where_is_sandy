import React, { Component } from "react";

export default class InstructionsModal extends Component {
  render() {
    return (
      <div id="modal">
        <div class="modal-content">
          <span class="close"> &times; </span> <p> Some text in the Modal.. </p>
        </div>
      </div>
    );
  }
}
