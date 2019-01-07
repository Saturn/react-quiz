import React, { Component } from 'react';

class Score extends Component {
  render() {
    return <p><strong>Score: </strong>{this.props.currentScore}/10</p>
  }
}


export default Score;
