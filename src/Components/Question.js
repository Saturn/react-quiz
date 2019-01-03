import React, { Component } from 'react';

import Answer from './Answer';

class Question extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>{this.props.questionNumber}</p>
        <p dangerouslySetInnerHTML={{__html: this.props.question}}></p>
        {
          this.props.answers.map(item => {
            return <Answer answer={item} click={this.props.click} />
          })
        }
      </div>
      );
  }
}

export default Question;
