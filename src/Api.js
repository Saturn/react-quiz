import axios from 'axios';


class QuizApi {

  constructor() {
    this.baseURL = 'https://opentdb.com/';
    this.apiURL = this.baseURL + 'api.php?type=multiple';
    this.tokenURL = this.baseURL + 'api_token.php';
  }

  initToken = () => {
    return axios.get(this.tokenURL + '?command=request')
      .then((response) => {
        this.setToken(response.data.token);
      });
  }

  getToken = () => {
    return localStorage.getItem('quizToken');
  }

  setToken = (token) => {
    localStorage.setItem('quizToken', token);
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
    return axios.get(this.apiURL + `&amount=${number}${tokenPart}`)
      .then((response) => {
        const shuffle = (a) => {
          for (let i = a.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              [a[i], a[j]] = [a[j], a[i]];
          }
        }

        const data = []
        console.log(response);
        response.data.results.forEach((item, i) => {
          const answers = item.incorrect_answers;
          answers.push(item.correct_answer);
          shuffle(answers);
          data[i] = {
            question: item.question,
            correctAnswer: item.correct_answer,
            answers: answers
          }
        });
        return data
      });
  }
}

export default QuizApi;
