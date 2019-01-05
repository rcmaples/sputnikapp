import axios from 'axios';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';
import {
  GET_ERRORS,
  GET_CURRENT_USER,
  SET_CURRENT_USER,
  USER_LOADING,
  GET_GITHUB_TOKEN,
  SET_GITHUB_TOKEN
} from './types';
let API_URL = '';

process.env.NODE_ENV === 'development'
  ? (API_URL = 'http://localhost:5000')
  : (API_URL = 'https://sputnik-server.herokuapp.com');

// console.log('authActions will be posting to: ', API_URL);

// Registration
export const registerUser = (userData, history) => dispatch => {
  axios
    .post(`${API_URL}/api/users/register`, userData)
    .then(res => history.push('/login'))
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

// Login and get user token
export const loginUser = userData => dispatch => {
  axios
    .post(`${API_URL}/api/users/login`, userData)
    .then(res => {
      const { token, github_access_token } = res.data;
      localStorage.setItem('jwtToken', token);
      localStorage.setItem('github_token', github_access_token);
      setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch(setCurrentUser(decoded));
      dispatch(setGitHubToken(github_access_token));
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

// set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

export const setGitHubToken = token => {
  return {
    type: SET_GITHUB_TOKEN,
    payload: token
  };
};

// Get user
export const getCurrentUser = () => dispatch => {
  dispatch(setUserLoading());
  axios
    .get(`${API_URL}/api/user/currentuser`)
    .then(res =>
      dispatch({
        type: GET_CURRENT_USER,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// load user
export const setUserLoading = () => {
  return {
    type: USER_LOADING
  };
};

// log out user
export const logoutUser = () => dispatch => {
  localStorage.removeItem('jwtToken');
  localStorage.removeItem('github_token');
  setAuthToken(false);
  dispatch(setCurrentUser({}));
  dispatch(setGitHubToken(''));
};

export const getGithubToken = code => dispatch => {
  dispatch(setUserLoading);
  axios
    .get(`${API_URL}/api/github/authorize/${code}`)
    .then(res => {
      dispatch({
        type: GET_GITHUB_TOKEN,
        payload: res.data.access_token
      });
      return res;
    })
    .then(res => {
      dispatch(setGithubToken(res.data.access_token));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err
      })
    );
};

export const setGithubToken = token => dispatch => {
  const jwtToken = localStorage.getItem('jwtToken');
  const data = {
    github_access_token: token
  };
  dispatch(setUserLoading);
  axios
    .patch(`${API_URL}/api/users/token`, data, {
      headers: {
        Authorization: jwtToken
      }
    })
    .then(res =>
      localStorage.setItem('github_token', res.data.github_access_token)
    )
    .catch(err => console.error(err));
};
