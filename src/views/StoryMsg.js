import React from 'react';

const whichMsg = {
  1: "Bob is having a wonderful day at home with his best pal Sandy. Where has he got to?",
  2: "Bob is taking Sandy out for a walk... but Sandy seems to have ran away!",
  3: "Sometimes, Sandy likes to wait for Bob outside the office.",
  4: "Bob has to get out of work before he can go home to Sandy.",
  5: "Bob was in an important meeting when he remembered that he left Sandy at the beach. Woops!",
  6: "Almost there... find Sandy!",
  7: "You found him!"
}

const StoryMsg = ({ qnum }) => {
  return(
    <p id="story-msg">{whichMsg[qnum]}</p>
  )
}

export default StoryMsg
