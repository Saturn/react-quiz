import QuizApi from '../Api.js';

import { combineReducers } from 'redux';

import {
  FETCH_QUESTION,
  CHECK_QUESTION,
  END_QUIZ,
  START_QUIZ,
  RECEIVE_QUESTIONS
} from './actions';


const initialState = {
  started: false,
  isFetching: false,
  questions: [],
  currentQuestion: 0,
  score: 0
};


const startQuiz = (state = initialState, action) => {
  return {
    ...state,
    started: true
  }
}


const endQuiz = (state, action) => {
  return initialState;
}


const receiveQuestions = (state, action) => {
  console.log(action);
  return {
    ...state,
    isFetching: false,
    questions: action.data,
    currentQuestion: 0,
    score: 0
  }
}


const fetchQuestion = (state = {}, action) => {
  return {
    ...state,
    currentQuestion: state.currentQuestion + 1
  }
}


const checkQuestion = (state = {}, action) => {
  if (action.answer === action.correct_answer) {
    return {
      ...state,
      score: state.score + 1
    }
  }
  return { ...state };
}

const quizAppReducer = combineReducers({
  startQuiz,
  endQuiz,
  receiveQuestions,
  fetchQuestion,
  checkQuestion
});

export default quizAppReducer;
