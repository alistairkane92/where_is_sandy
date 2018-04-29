import React from 'react';
import StoryMsg from './StoryMsg'
import img1 from '../images/1.png'
import img2 from '../images/2.png'
import img3 from '../images/3.png'
import img4 from '../images/4.png'
import img5 from '../images/5.png'

const whichImg = (num) => {
  if (num === 1){
    return img1
  } if (num === 2){
    return img2
  } if (num === 3){
    return img3
  } if (num === 4){
    return img4
  } else return img5
}

const QuestionImage = (props) => {
  return(
    <div id="img-button">
      <StoryMsg qnum={props.qnum}/>
      <img src={whichImg(props.qnum)} id="img" alt="question"/>
    </div>
  )
}

export default QuestionImage;