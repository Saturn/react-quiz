import React, { Component } from 'react';

class StartButton extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return <button onClick={this.props.click}>Start!</button>
  }
}


export default StartButton;
