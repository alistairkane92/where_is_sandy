import React from 'react';

const HintMsg = (props) => {
  let style = {
    animationName: 'fade-in',
    animationDuration: '2.5s',
    animationFillMode: 'forwards'
  }

  if (props.qnum === 1) {
    return (
    <div id="hint-msg" style={style}>
    <p className='hint-p'>Hint: When both files are in the same directory, simply type the name of the file you are looking for, e.g "./sandy"</p>
    </div>
    )
  }

  if (props.qnum === 2) {
    return(
    <div id="hint-msg" style={style}>
    <p className='hint-p'>Hint: To require a file from another directory, you first have to specify which directory the file is in, e.g "./directory/file"</p>
    </div>
    )
  }

  if (props.qnum === 3) {
    return(
    <div id="hint-msg" style={style}>
    <p className='hint-p'>Hint: If the file you are looking for is up a directory level, use "../" to go up a level, e.g "../file"</p>
    </div>
    )
  }

  if (props.qnum === 4) {
    return(
    <div id="hint-msg" style={style}>
    <p className='hint-p'>Hint: Combine what you have just learnt to first go up a directory level, and then into the directory that contains the file</p>
    </div>
    )
  }

  if (props.qnum === 5) {
    return(
    <div id="hint-msg" style={style}>
    <p className='hint-p'>Hint: You can chain together multiple "../" to go up several directory levels, e.g "../../file"</p>
    </div>
    )
  }

  if (props.qnum === 6) {
    return(
    <div id="hint-msg" style={style}>
    <p className='hint-p'>Hint: This is a tricky one! Bob is in the office, but he's not in the meeting. Sandy is in the home, but he's not in the kitchen</p>
    </div>
    )
  }

  return null;
}

export default HintMsg;
