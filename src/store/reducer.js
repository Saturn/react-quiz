import {
  FETCH_QUESTION,
  CHECK_QUESTION,
  REQUEST_QUESTIONS,
  END_QUIZ,
  START_QUIZ,
  RECEIVE_QUESTIONS
} from './actions';


const initialState = {
  isStarted: false,
  isFetching: false,
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
        ...initialState
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
    case CHECK_QUESTION:
      if (action.answer === action.correctAnswer) {
        return {
          ...state,
          score: state.score + 1
        }
      }
      else {
        return {
          ...state
        }
      }
    default:
      return {
        ...state
      };
  };
};
