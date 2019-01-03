import {
  FETCH_QUESTION,
  INCREMENT_SCORE,
  REQUEST_QUESTIONS,
  END_QUIZ,
  START_QUIZ,
  START_VALIDATION,
  END_VALIDATION,
  RECEIVE_QUESTIONS
} from './actions';


const initialState = {
  isStarted: false,
  isFinished: false,
  isFetching: false,
  isValidating: false,
  questions: [],
  currentQuestion: 0,
  score: 0
};

export const quizAppReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_QUIZ:
      return {
        ...initialState,
        isStarted: true
      }
    case END_QUIZ:
      return {
        ...state,
        isFinished: true
      }
    case REQUEST_QUESTIONS:
      return {
        ...state,
        isFetching: true
      }
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        isFetching: false,
        questions: action.payload,
        currentQuestion: 0,
        score: 0
      }
    case FETCH_QUESTION:
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1
      }
    case START_VALIDATION:
      return {
        ...state,
        isValidating: true
      }
    case END_VALIDATION:
      return {
        ...state,
        isValidating: false
      }
    case INCREMENT_SCORE:
      return {
        ...state,
        score: state.score + 1
      }
    default:
      return {
        ...state
      };
  };
};
