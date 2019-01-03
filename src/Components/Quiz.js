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
    const startButton = <StartButton click={this.startButtonClickHandler} />;
    if (!this.props.isStarted) {
      return startButton;
    }

    if (this.props.isFinished) {
      return (
        <div>
          <p>You scored {this.props.score}/10 !</p>
          {startButton}
        </div>
      );
    }

    if (this.props.isFetching) {
      return <p>Loading...</p>
    }
    else {
      const theCurrentQuestion = this.getCurrentQuestion();
      return (
        <div>
          <Question question={theCurrentQuestion.question}
                    questionNumber={this.props.currentQuestion + 1}
                    answers={theCurrentQuestion.answers}
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
    isFinished: state.isFinished,
    questions: state.questions,
    currentQuestion: state.currentQuestion,
    isFetching: state.isFetching,
    score: state.score
  }
};

export default connect(mapStateToProps)(Quiz);
