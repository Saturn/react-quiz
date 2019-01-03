import React, { Component } from 'react';

class Score extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return <p>{this.props.currentScore}/10</p>
  }
}


export default Score;
