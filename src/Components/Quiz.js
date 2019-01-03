import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchQuestions,
  fetchQuestion,
  startQuiz,
  incrementScore,
  endQuiz
} from '../store/actions';

import Question from './Question';
import Score from './Score';
import StartButton from './StartButton';

class Quiz extends Component {

  constructor(props) {
    super(props);
    this.getCurrentQuestion = this.getCurrentQuestion.bind(this);
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

  answerClickHandler(answer, e) {
    const correctAnswer = this.getCurrentQuestion().correctAnswer;
    const isCorrect = answer === correctAnswer;
    if (isCorrect) {
      this.props.dispatch(incrementScore());
    }
    if (this.props.currentQuestion < 9) {
      this.props.dispatch(fetchQuestion());
    }
    else {
      this.props.dispatch(endQuiz());
    }
  }

  getCurrentQuestion() {
    return this.props.questions[this.props.currentQuestion];
  }

  render() {
    if (!this.props.isStarted) {
      return <StartButton click={this.startButtonClickHandler} />
    }

    if (this.props.isFetching) {
      return <p>Loading...</p>
    }
    else {
      const currentQuestion = this.getCurrentQuestion();
      return (
        <div>
          <Question question={currentQuestion.question}
                    answers={currentQuestion.answers}
                    click={this.answerClickHandler} />
          <Score currentScore={this.props.score} />
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
    isFetching: state.isFetching,
    score: state.score
  }
};

export default connect(mapStateToProps)(Quiz);
