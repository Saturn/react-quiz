import React, { Component } from 'react';

class Answer extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return <li>{this.props.answer}</li>
  }
}


export default Answer;
