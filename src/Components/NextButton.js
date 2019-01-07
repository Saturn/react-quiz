import React, { Component } from 'react';

class NextButton extends Component {
  render() {
    return <button className="next-button" onClick={this.props.click}>Next</button>
  }
}


export default NextButton;
