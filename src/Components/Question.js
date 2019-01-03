import React, { Component } from 'react';
import { fetchQuestions, fetchQuestion } from '../store/actions';
import Answer from './Answer';

class Question extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p dangerouslySetInnerHTML={{__html: this.props.question}}></p>
        <ul>
        {
          this.props.answers.map(item => {
            return <Answer answer={item} />
          })
        }
        </ul>
      </div>
      );
  }
}

export default Question;
