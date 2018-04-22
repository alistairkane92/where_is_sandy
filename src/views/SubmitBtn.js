import React from 'react';

const SubmitBtn = () => {
  const submit = () => {
    alert("Submit");
  }

  return (
    <div>
      <button onClick={submit}>Submit</button>
    </div>
  )
}

export default SubmitBtn;
