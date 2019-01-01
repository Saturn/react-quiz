import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchQuestions, fetchQuestion } from '../store/actions';

class Questions extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchQuestions());
  }

  render() {
    return (
      <div>
    {this.props.questions.map((item, i) => {
        return <p key={i}>{item.question}</p>
    })}
    </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    questions: state.receiveQuestions.questions
  }
}

export default connect(mapStateToProps)(Questions);
