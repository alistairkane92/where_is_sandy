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
    <p>Hint: If the file you are looking for is in a higher directory, use "../" to go up a level, e.g "../directory/file"</p>
    </div>
    )
  }

  return null;
}

export default HintMsg;
