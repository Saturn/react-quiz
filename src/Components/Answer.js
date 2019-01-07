import React, { Component } from 'react';

class Answer extends Component {
  render() {
    return (
      <button
        className={this.props.answerStyle}
        dangerouslySetInnerHTML={{__html: this.props.answer}}
        onClick={(e) => this.props.click(this.props.answer, this.props.answerId, e)}>
      </button>
    );
  }
}


export default Answer;
