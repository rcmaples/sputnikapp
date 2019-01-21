import github from '../api/github';

export const getStarsList = (token, endpoint) => async dispatch => {
  const response = await github.get(endpoint, {
    headers: { Authorization: `Bearer ${token}` }
  });
  dispatch({
    type: 'GET_STARS_LIST',
    payload: response.data
  });
};
