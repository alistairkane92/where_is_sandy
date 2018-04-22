import React, {Component} from 'react';

class SubmitBtn extends Component {
  constructor(props){
    super(props);
  }

  render(){
    const submit = () => {
      console.log(this.props.answer);
      if (this.props.answer == "Sandy"){
        alert("Well done! You found Sandy!")
      } else {
        alert("Load Error! Sandy not found")
      }
    }

    return(
    <div>
      <button onClick={submit}>Submit Answer</button>
    </div>
    )
  }
}

export default SubmitBtn;
