import React from 'react';

const HintMsg = (props) => {
  if (props.qnum === 1) {
    return (
    <div id="hint-msg">
    <p>Hint: When both files are in the same directory, simply type the name of the file you are looking for, e.g "file"</p>
    </div>
    )
  }

  if (props.qnum === 2) {
    return(
    <div id="hint-msg">
    <p>Hint: To require a file from another directory, you first have to specify which directory the file is in, e.g "./directory/file"</p>
    </div>
    )
  }

  if (props.qnum === 3) {
    return(
    <div id="hint-msg">
    <p>Hint: If the file you are looking for is in a higher directory, use "../" to go up a level, e.g "../file"</p>
    </div>
    )
  }

  if (props.qnum === 4) {
    return(
    <div id="hint-msg">
    <p>Hint: Combine what you have just learnt to go up a directory, and into the directory that contains the file</p>
    </div>
    )
  }

  if (props.qnum === 5) {
    return(
    <div id="hint-msg">
    <p>Hint: You can chain together multiple "../" to go up several directories, e.g "../../file"</p>
    </div>
    )
  }

  if (props.qnum === 6) {
    return(
    <div id="hint-msg">
    <p>Hint: Bob is in the office, but he's not in the meeting. Sandy is in the home, but he's not in the kitchen</p>
    </div>
    )
  }

  return null;
}

export default HintMsg;
