import React from 'react';
import HintMsg from './HintMsg.js'

const LoadErrorMsg = (props) => {
  let style = {
    animationName: 'fade-out',
    animationDuration: '2.5s',
    animationFillMode: 'forwards'
  }

  return(
    <div id="hint-error">
    <div id="load-error-msg" className="center result-container" style={style}>
    <p>(LoadError): cannot load such file "{props.submitted}"</p>
    </div>
    <HintMsg qnum={props.qnum}/>
    </div>
  )
}

export default LoadErrorMsg;
