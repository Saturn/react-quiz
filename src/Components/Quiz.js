import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchQuestions, fetchQuestion } from '../store/actions';

import Question from './Question';


class Quiz extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchQuestions());
  }

  render() {
    if (this.props.isFetching) {
      return <p>Loading...</p>
    }
    else {
      return (
        <div>
        {
          this.props.questions.map((item, i) => {
            return <Question question={item.question}
                             answers={item.answers} />
          })
        }
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    questions: state.questions,
    isFetching: state.isFetching
  }
};

export default connect(mapStateToProps)(Quiz);
