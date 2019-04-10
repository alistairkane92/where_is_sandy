import React from "react";
import HintMsg from "./HintMsg.js";

const LoadErrorMsg = props => {
  const display = (
    <div id="load-error-msg" className="center result-container">
      <p>(LoadError): cannot load such file "{props.submitted}"</p>
    </div>
  );

  return (
    <div id="hint-error">
      {display}
      <HintMsg qnum={props.qnum} />
    </div>
  );
};

export default LoadErrorMsg;
