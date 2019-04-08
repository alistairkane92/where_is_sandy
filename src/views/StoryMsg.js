import React from 'react';

const whichMsg = (qnum) => {
  if (qnum === 1){
    return "Bob is having a wonderful day at home with his best pal Sandy. Where has he got to?"
  }

  if (qnum === 2){
    return "Bob was taking Sandy out for a walk but he seems to have ran away..."
  }

  if (qnum === 3){
    return "Sometimes, Sandy likes to wait for Bob outside the office."
  }

  if (qnum === 4){
    return "Bob has to get out of work before he can go home to Sandy."
  }

  if (qnum === 5){
    return "Bob was in an important meeting with his boss when he remembered that he left Sandy at the beach."
  }

  if (qnum === 6){
    return "Almost there.. find Sandy!"
  }
}


const StoryMsg = (props) => {
  return(
    <p className="center" id="msg">{whichMsg(props.qnum)}</p>
  )
}

export default StoryMsg
