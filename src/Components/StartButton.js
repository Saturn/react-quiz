import React, { Component } from 'react';

class StartButton extends Component {
  render() {
    return <button className="start-button" onClick={this.props.click}>Start!</button>
  }
}

export default StartButton;
