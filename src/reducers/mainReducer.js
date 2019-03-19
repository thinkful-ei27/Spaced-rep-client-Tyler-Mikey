import {SET_ANSWER, GET_QUESTION_SUCCESS} from '../actions/index.js'




const initialState = {
  answer: '',
  feedback: '',
  currentWord: 'null'
}


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
  return state
}