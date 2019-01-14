import github from '../api/github';

export const getFollowList = (token, endpoint) => async dispatch => {
  const response = await github.get(endpoint, {
    headers: { Authorization: `Bearer ${token}` }
  });
  dispatch({
    type: 'GET_FOLLOWER_LIST',
    payload: response.data
  });
};
