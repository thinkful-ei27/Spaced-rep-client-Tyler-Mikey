import {SET_ANSWER, GET_QUESTION_SUCCESS, EVALUATE_ANSWER, RESET_ANSWER_STATUS} from '../actions/index.js'




const initialState = {
  answer: '',
  correct: null,
  currentWord: 'null'
}
//  send german word and true false for right wrong

export const mainReducer = (state=initialState, action) => {
  if(action.type === SET_ANSWER) {
    return Object.assign({}, state, {
    answer: action.payload
  })
}

  else if(action.type === GET_QUESTION_SUCCESS){
  return Object.assign({}, state, {
    currentWord: action.question
  })
}

else if(action.type === EVALUATE_ANSWER){
  return Object.assign({}, state, {
    correct: action.bool
  })
}

else if(action.type === RESET_ANSWER_STATUS){
  return Object.assign({}, state, {
    correct: null
  })
}
  return state
}