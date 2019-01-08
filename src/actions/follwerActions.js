import github from '../api/github';

export const getFollowList = token => async dispatch => {
  const response = await github.get('/user/following', {
    headers: { Authorization: `Bearer ${token}` }
  });
  dispatch({
    type: 'GET_FOLLOWER_LIST',
    payload: response.data
  });
};
