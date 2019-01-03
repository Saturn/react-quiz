import React, { Component } from 'react';

class NextButton extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return <button onClick={this.props.click}>Next</button>
  }
}


export default NextButton;
