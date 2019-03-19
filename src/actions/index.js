
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
  return fetch(``, {
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
