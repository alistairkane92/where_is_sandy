import React from 'react';

const SuccessMsg = () => {
  let style = {
    animationName: 'fade-out',
    animationDuration: '2.5s',
    animationFillMode: 'forwards'
  }

  return(
    <div id="success-msg" className="center result-container" style={style}>
    <p>You found him !</p>
    </div>
  )
}

export default SuccessMsg;
