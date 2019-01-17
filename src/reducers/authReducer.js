import {
  SET_CURRENT_USER,
  USER_LOADING,
  GET_CURRENT_USER,
  GET_GITHUB_TOKEN,
  SET_GITHUB_TOKEN
} from '../actions/types';

const isEmpty = require('is-empty');

const initialState = {
  isAuthenticated: false,
  user: {},
  loading: false,
  github_token: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    case USER_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    case GET_CURRENT_USER:
      return {
        ...state,
        profile: action.payload,
        loading: false
      };
    case GET_GITHUB_TOKEN:
      return {
        ...state,
        github_token: action.payload,
        loading: false
      };
    case SET_GITHUB_TOKEN:
      // console.log('action.payload: ', action.payload);
      return {
        ...state,
        github_token: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
