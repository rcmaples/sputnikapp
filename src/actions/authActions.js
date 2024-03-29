import axios from "axios";
import { jwtDecode } from "jwt-decode";
import setAuthToken from "../utils/setAuthToken";
import {
  GET_ERRORS,
  GET_CURRENT_USER,
  SET_CURRENT_USER,
  USER_LOADING,
  GET_GITHUB_TOKEN,
  SET_GITHUB_TOKEN,
} from "./types";
let API_URL = "";

// if (process.env.NODE_ENV === 'development') {
//   API_URL = require('../config/config').API_URL;
// } else {
//   API_URL = `https://sputnik-server.herokuapp.com`;
// }

// Registration
export const registerUser = (userData, history) => (dispatch) => {
  axios
    .post(`${API_URL}/api/users/register`, userData)
    .then((res) => {
      dispatch(setUserLoading(false));
      history.push("/login");
    })
    .catch((err) => {
      dispatch(setUserLoading(false));
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};

// Login and get user token
export const loginUser = (userData) => (dispatch) => {
  axios
    .post(`${API_URL}/api/users/login`, userData)
    .then((res) => {
      const { token, github_access_token } = res.data;
      localStorage.setItem("jwtToken", token);
      localStorage.setItem("github_token", github_access_token);
      setAuthToken(token);
      const decoded = jwtDecode(token);
      dispatch(setCurrentUser(decoded));
      // console.log('D is calling setGitHubToken');
      // console.log('Ds token is: ', github_access_token);
      // dispatch(setGitHubToken(github_access_token));
      dispatch(setUserLoading(false));
    })
    .catch((err) => {
      dispatch(setUserLoading(false));
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};

// set logged in user
export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};

export const setGitHubToken = (token) => {
  // console.log('authAction 71 - token is: ', token);
  return {
    type: SET_GITHUB_TOKEN,
    payload: token,
  };
};

// Get user
export const getCurrentUser = () => (dispatch) => {
  dispatch(setUserLoading(true));
  axios
    .get(`${API_URL}/api/user/currentuser`)
    .then((res) => {
      dispatch({
        type: GET_CURRENT_USER,
        payload: res.data,
      });
      dispatch(setUserLoading(false));
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
      dispatch(setUserLoading(false));
    });
};

// load user
export const setUserLoading = (loading) => {
  return {
    type: USER_LOADING,
    payload: loading,
  };
};

// log out user
export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("jwtToken");
  localStorage.removeItem("github_token");
  setAuthToken(false);
  dispatch(setCurrentUser({}));
  console.log("E is calling setGitHubToken");
  // console.log('Es token is: ', '');
  dispatch(setGitHubToken(""));
  dispatch(setUserLoading(false));
};

export const getGitHubToken = (code) => (dispatch) => {
  console.log("F is going to run here.");
  dispatch(setUserLoading(true));
  axios
    .get(`${API_URL}/api/github/authorize/${code}`)
    .then((res) => {
      dispatch({
        type: GET_GITHUB_TOKEN,
        payload: res.data.access_token,
      });
      return res;
    })
    .then((res) => {
      console.log("f is calling setGitHubToken");
      // console.log('fs token is: ', res.data.access_token);
      dispatch(saveGitHubToken(res.data.access_token));
      dispatch(setUserLoading(false));
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err,
      });
      dispatch(setUserLoading(false));
    });
};

export const saveGitHubToken = (token) => (dispatch) => {
  const jwtToken = localStorage.getItem("jwtToken");
  const data = {
    github_access_token: token,
  };
  dispatch(setUserLoading(true));
  axios
    .patch(`${API_URL}/api/users/token`, data, {
      headers: {
        Authorization: jwtToken,
      },
    })
    .then((res) => {
      localStorage.setItem("github_token", res.data.github_access_token);
      dispatch(setUserLoading(false));
    })
    .catch((err) => {
      console.error(err);
      dispatch(setUserLoading(false));
    });
};
