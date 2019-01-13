/*
Update user to grab the following urls:

"avatar_url": "https://avatars3.githubusercontent.com/u/5333258?v=4",
"url": "https://api.github.com/users/:login",
"html_url": "https://github.com/:login",
"following_url": "https://api.github.com/users/:login/following",
"starred_url": "https://api.github.com/users/:login/starred",
"subscriptions_url": "https://api.github.com/users/:login/subscriptions",
"repos_url": "https://api.github.com/users/:login/repos",
"events_url": "https://api.github.com/users/:login/events/public",

const token = _.get(req.body, ['github_access_token']);
const _ = {
  get: require('lodash.get'),
  isboolean: require('lodash.isboolean')
};
*/

import github from '../api/github';
import axios from 'axios';

let API_URL = '';

process.env.NODE_ENV === 'development'
  ? (API_URL = 'http://localhost:5000')
  : (API_URL = 'https://sputnik-server.herokuapp.com');

export const getURLs = token => async dispatch => {
  const response = await github.get('/user', {
    headers: { Authorization: `Bearer ${token}` }
  });
  dispatch({
    type: 'SET_URLS',
    payload: response.data
  });
};

export const setGitHubURLs = token => async (dispatch, getState) => {
  const jwtToken = localStorage.getItem('jwtToken');
  await dispatch(getURLs(token));
  const data = getState().github_urls;
  // Set Loading to True here
  axios
    .patch(`${API_URL}/api/users/urls`, data, {
      headers: {
        Authorization: jwtToken
      }
    })
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.error(err);
      //more error handling
      //set loading to false
    });
};
