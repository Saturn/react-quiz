import React, { Component } from 'react';
import { connect } from 'react-redux'
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

      </div>
    );
  }
}

export default connect()(Questions);
