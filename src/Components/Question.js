import React, { Component } from 'react';

import Answer from './Answer';

class Question extends Component {
  render() {
    return (
      <div>
        <p><strong>Question {this.props.questionNumber}</strong></p>
        <div className="question-box">
          <p dangerouslySetInnerHTML={{__html: this.props.question}}></p>
        </div>
        <div className="answer-box">
          {
            this.props.answers.map((item, id) => {
              return <Answer answer={item}
                             answerId={id}
                             answerStyle={this.props.answerStyles[id]}
                             click={this.props.click} />
            })
          }
        </div>
      </div>
      );
  }
}

export default Question;
