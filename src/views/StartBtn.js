import React, {Component} from 'react';

const StartBtn = () => {
  const start = () => {
    alert("Sup");
  }

  return (
    <div>
      <button onClick={start}>Get started</button>
    </div>
  )
}

export default StartBtn;
