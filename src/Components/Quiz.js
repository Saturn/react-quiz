import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchQuestions, startQuiz } from '../store/actions';

import Question from './Question';
import StartButton from './StartButton';

class Quiz extends Component {

  constructor(props) {
    super(props);
    this.startButtonClickHandler = this.startButtonClickHandler.bind(this);
  }

  componentDidMount() {
  }

  startButtonClickHandler(e) {
    const { dispatch } = this.props;
    dispatch(startQuiz());
    dispatch(fetchQuestions());
  }

  render() {
    if (!this.props.isStarted) {
      return <StartButton click={this.startButtonClickHandler} />
    }

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
    isStarted: state.isStarted,
    questions: state.questions,
    isFetching: state.isFetching
  }
};

export default connect(mapStateToProps)(Quiz);
