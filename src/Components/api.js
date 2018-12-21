import React, { Component } from 'react';
import axios from 'axios';


class QuizApi extends Component {

  constructor(props) {
    super(props);
    this.baseURL = 'https://opentdb.com/';
    this.apiURL = this.baseURL + 'api.php';
    this.tokenURL = this.baseURL + 'api_token.php';
    this.timeout = 1000;
  }

  getToken = () => {
    let tokenData = localStorage.getItem('quizToken');
    tokenData = JSON.parse(tokenData);
    if (tokenData) {
      return tokenData.token
    }
    else {
      axios.get(this.tokenURL + '?command=request')
        .then((response) => {
          this.setToken(response.data.token);
        });
    }
  }

  setToken = (token) => {
    const quizTokenData = {token: token, dateSet: new Date()};
    localStorage.setItem('quizToken', JSON.stringify(quizTokenData));
  }

  resetToken = () => {
    const token = this.getToken();
    axios.get(this.tokenURL + '?command=reset&token=' + token)
      .then((response) => {
        this.setToken(response.data.token);
      });
  }

  parseResponse = (response) => {
    const response_code = response.data.response_code;
    if (response_code === 4) {
      this.resetToken();
    }
  }

  fetchQuestions = (number = 50) => {
    if (number < 1 || number > 50) {
      throw 'Invalid number of questions to fetch [1 - 50]';
    }
    let tokenPart = null;
    const token = this.getToken();
    tokenPart = token === null? null : '&token=' + token;
    axios.get(this.apiURL + `?amount=${number}${tokenPart}`)
      .then((response) => {console.log(response)});
  }

  render() {
    return (
      <div className="App">
      {this.fetchQuestions()}
      </div>
    );
  }
}

export default QuizApi;
