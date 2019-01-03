import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchQuestions, fetchQuestion, startQuiz } from '../store/actions';

import Question from './Question';
import StartButton from './StartButton';

class Quiz extends Component {

  constructor(props) {
    super(props);
    this.startButtonClickHandler = this.startButtonClickHandler.bind(this);
    this.nextButtonClickHandler = this.nextButtonClickHandler.bind(this);
    this.answerClickHandler = this.answerClickHandler.bind(this);
  }

  componentDidMount() {
  }

  startButtonClickHandler(e) {
    this.props.dispatch(startQuiz());
    this.props.dispatch(fetchQuestions());
  }

  nextButtonClickHandler(e) {
    this.props.dispatch(fetchQuestion());
  }

  answerClickHandler(e) {
    // this.props.dispatch(checkQuestion(answer, correctAnswer));
  }

  render() {
    if (!this.props.isStarted) {
      return <StartButton click={this.startButtonClickHandler} />
    }

    if (this.props.isFetching) {
      return <p>Loading...</p>
    }
    else {
      const currentQuestion = this.props.questions[this.props.currentQuestion];
      return (
        <div>
          <Question question={currentQuestion.question}
                    answers={currentQuestion.answers} />
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    isStarted: state.isStarted,
    questions: state.questions,
    currentQuestion: state.currentQuestion,
    isFetching: state.isFetching
  }
};

export default connect(mapStateToProps)(Quiz);
