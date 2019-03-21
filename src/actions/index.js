import {API_BASE_URL} from '../config'
export const SET_ANSWER = 'SET_ANSWER';

export const setAnswer = payload => ({
    type: SET_ANSWER,
    payload
});

export const SUBMIT_ANSWER = 'SUBMIT_ANSWER';

export const submitAnswer = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;

}

export const GET_QUESTION = 'GET_QUESTION';

export const GET_QUESTION_SUCCESS = 'GET_QUESTION_SUCCESS';

export const getQuestionSuccess = question => ({
  type: GET_QUESTION_SUCCESS,
  question
})

export const getQuestion = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/learn`, {
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`
        }
    })
    .then(res => {
      if (!res.ok) {
          return Promise.reject(res.statusText);
      }
      return res.json();
  })
  .then(question => {
    dispatch(getQuestionSuccess(question));
  })
}

export const EVALUATE_ANSWER = 'EVALUATE_ANSWER';

export const evaluateAnswer = bool => ({
  type: EVALUATE_ANSWER,
  bool
})

export const RESET_ANSWER_STATUS = 'RESET_ANSWER_STATUS';

export const resetAnswerStatus = payload => ({
  type: RESET_ANSWER_STATUS,
  payload
});

export const NEXT_QUESTION = 'NEXT_QUESTION';

export const nextQuestion = (germanWord, correct) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/learn`, {
    method: 'POST',
    // mode: 'no-cors',
    body: JSON.stringify({germanWord: germanWord, correct: correct}),
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`
    }
}).then(() => dispatch(getQuestion()));
}
  
