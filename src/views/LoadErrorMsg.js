import React from 'react';
import HintMsg from './HintMsg.js'

const LoadErrorMsg = (props) => {
  return(
    <div id="load-hint">
    <div id="load-error-msg" className="center">
    <p>(LoadError): cannot load such file "{props.submitted}"</p>
    </div>
    <HintMsg qnum={props.qnum}/>
    </div>
  )
}

export default LoadErrorMsg;
