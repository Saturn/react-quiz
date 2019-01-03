import QuizApi from '../Api.js';

export const FETCH_QUESTIONS = 'FETCH_QUESTIONS';
export const REQUEST_QUESTIONS = 'REQUEST_QUESTIONS';
export const FETCH_QUESTION = 'FETCH_QUESTION';
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const INCREMENT_SCORE = 'INCREMENT_SCORE';
export const END_QUIZ = 'END_QUIZ';
export const START_QUIZ = 'START_QUIZ';


export const fetchQuestion = () => {
  return {
    type: FETCH_QUESTION,
  }
}

export const incrementScore = () => {
  return {
    type: INCREMENT_SCORE,
  }
}

export const receiveQuestions = questions => {
  return {
    type: RECEIVE_QUESTIONS,
    payload: questions
  }
}

export const requestQuestions = () => {
  return {
    type: REQUEST_QUESTIONS
  }
}

export const endQuiz = () => {
  return {
    type: END_QUIZ,
  }
}

export const startQuiz = () => {
  return {
    type: START_QUIZ
  }
}

export const fetchQuestions = () => {
  return dispatch => {
    dispatch(requestQuestions());
    const quizApi = new QuizApi();
    return quizApi.initToken()
      .then(
        () => quizApi.fetchQuestions()
      )
      .then(
        response => dispatch(receiveQuestions(response))
      )
  }
}
