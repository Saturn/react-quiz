import axios from 'axios';


class QuizApi {

  constructor() {
    this.baseURL = 'https://opentdb.com/';
    this.apiURL = this.baseURL + 'api.php?type=multiple';
    this.tokenURL = this.baseURL + 'api_token.php';
  }

  initToken = () => {
    let tokenData = localStorage.getItem('quizToken');
    tokenData = JSON.parse(tokenData);
    return  Promise.resolve()
    if (!tokenData) {
      return axios.get(this.tokenURL + '?command=request')
        .then((response) => {
          this.setToken(response.data.token);
        });
    }
  }

  getToken = () => {
    let tokenData = localStorage.getItem('quizToken');
    tokenData = JSON.parse(tokenData);
    return  tokenData.token;
  }

  setToken = (token) => {
    const quizTokenData = {token: token, dateSet: new Date()};
    localStorage.setItem('quizToken', JSON.stringify(quizTokenData));
  }

  resetToken = () => {
    const token = this.getToken();
    return axios.get(this.tokenURL + '?command=reset&token=' + token)
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

  fetchQuestions = (number = 10) => {
    if (number < 1 || number > 50) {
      throw 'Invalid number of questions to fetch [1 - 50]';
    }
    let tokenPart = null;
    const token = this.getToken();
    tokenPart = token === null? null : '&token=' + token;
    return axios.get(this.apiURL + `&amount=${number}${tokenPart}`);
  }
}

export default QuizApi;
