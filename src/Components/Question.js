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
        <p>{this.props.question}</p>
      </div>
      );
  }
}


export default connect()(Question);
