import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchQuestions, fetchQuestion } from '../store/actions';

import Question from './Question';


class Questions extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchQuestions());
  }

  render() {
      if (!this.props.isLoading) {
        return (
          <div>
        {this.props.questions.map((item, i) => {
            return <Question question={item.question} answers={item.answers} />
        })}
        </div>
        );
      }
      else {
        return (
          <p>Loading...</p>
          );
      }
  }
}

const mapStateToProps = state => {
  return {
    questions: state.questions,
    isLoading: state.isLoading
  }
};

export default connect(mapStateToProps)(Questions);
