import github from '../api/github';

export const getReposList = (token, endpoint) => async dispatch => {
  const response = await github.get(endpoint, {
    headers: { Authorization: `Bearer ${token}` }
  });
  dispatch({
    type: 'GET_REPOS_LIST',
    payload: response.data
  });
};
