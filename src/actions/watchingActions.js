import github from '../api/github';

export const getWatchingList = (token, endpoint) => async dispatch => {
  const response = await github.get(endpoint, {
    headers: { Authorization: `Bearer ${token}` }
  });
  dispatch({
    type: 'GET_WATCHING_LIST',
    payload: response.data
  });
};
