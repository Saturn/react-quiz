import React, { Component } from 'react';

class Answer extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button
        dangerouslySetInnerHTML={{__html: this.props.answer}}
        onClick={(e) => this.props.click(this.props.answer, e)}>
      </button>
    );
  }
}


export default Answer;
