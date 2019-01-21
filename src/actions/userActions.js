import github from '../api/github';
import axios from 'axios';
import { getFollowList } from './followerActions';
import { getReposList } from './reposActions';

let API_URL = '';
if (process.env.NODE_ENV === 'development') {
  API_URL = require('../config/config').API_URL;
} else {
  API_URL = process.env.API_URL;
}

export const getURLs = token => async dispatch => {
  const response = await github.get('/user', {
    headers: { Authorization: `Bearer ${token}` }
  });
  dispatch({
    type: 'SET_URLS',
    payload: response.data
  });
};

// Moved to followerActions
// const getFollowList = (token, endpoint) => async dispatch => {
//   const response = await github.get(endpoint, {
//     headers: { Authorization: `Bearer ${token}` }
//   });
//   dispatch({
//     type: 'GET_FOLLOWER_LIST',
//     payload: response.data
//   });
//   dispatch(setFollowersList());
// };

export const setGitHubURLs = token => async (dispatch, getState) => {
  const jwtToken = localStorage.getItem('jwtToken');
  await dispatch(getURLs(token));
  const data = getState().github_urls;
  const following_endpoint = getState().github_urls.following_url;
  const repos_endpoint = getState().github_urls.repos_url;
  axios
    .patch(`${API_URL}/api/users/urls`, data, {
      headers: {
        Authorization: jwtToken
      }
    })
    .catch(err => {
      console.error(err);
      //more error handling
      //set loading to false
    });
  await dispatch(getFollowList(token, following_endpoint));
  await dispatch(getReposList(token, repos_endpoint));
};

// Moved to followerActions
// export const setFollowersList = () => (dispatch, getState) => {
//   const jwtToken = localStorage.getItem('jwtToken');
//   const data = getState().followers;

//   const json = JSON.stringify(data);
//   // console.log('setFollowersList Data: ', data);
//   axios
//     .patch(`${API_URL}/api/users/following`, json, {
//       headers: {
//         Authorization: jwtToken,
//         'Content-Type': 'Application/JSON'
//       }
//     })
//     .catch(err => {
//       console.error(err);
//     });
// };

export const createTargetUserRecord = () => (dispatch, getState) => {
  const jwtToken = localStorage.getItem('jwtToken');
  const data = getState().followers;

  const json = JSON.stringify(data);
  // console.log('setFollowersList Data: ', data);
  axios
    .patch(`${API_URL}/api/users/following`, json, {
      headers: {
        Authorization: jwtToken,
        'Content-Type': 'Application/JSON'
      }
    })
    .catch(err => {
      console.error(err);
    });
};
