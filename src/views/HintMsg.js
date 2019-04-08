import React from 'react';

const HintMsg = ({ qnum }) => {
  let style = {
    animationName: 'fade-in',
    animationDuration: '2.5s',
    animationFillMode: 'forwards'
  }

  const hintText = {
    1: "When both files are in the same directory, simply type the name of the file you are looking for, e.g \"./sandy\"",
    2: "To require a file from another directory, you first have to specify which directory the file is in, e.g \"./directory/file\"",
    3: "If the file you are lookingfor is up a directory level, use \"../\" to go up a level, e.g \"../file\"",
    4: "Combine what you have just learnt to first go up a directory level, and then into the directory that contains the file",
    5: "You can chain together multiple \"../\" to go up several directory levels, e.g \"../../file\"",
    6: "This is a tricky one! Bob is in the office, but he's not in the meeting. Sandy is in the home, but he's not in the kitchen"
  }

    return (
    <div id="hint-msg" style={style}>
    <p className='hint-p'>Hint: {hintText[qnum]}</p>
    </div>
    )
}

export default HintMsg;
