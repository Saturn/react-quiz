import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchQuestions, fetchQuestion } from '../store/actions';

class Question extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p dangerouslySetInnerHTML={{__html: this.props.question}}></p>
        <ul>
        {this.props.answers.map(item => {
          return <li>{item}</li>
        })
      }
        </ul>
      </div>
      );
  }
}


export default connect()(Question);