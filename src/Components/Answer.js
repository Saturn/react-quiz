import React, { Component } from 'react';

class Answer extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button onClick={(e) => this.props.click(this.props.answer, e)}>
        {this.props.answer}
      </button>
    );
  }
}


export default Answer;
