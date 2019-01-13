import { SET_URLS } from '../actions/types';

const initialState = {
  avatar_url: '',
  url: '',
  html_url: '',
  following_url: '',
  starred_url: '',
  subscriptions_url: '',
  repos_url: '',
  events_url: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_URLS: {
      return {
        ...state,
        avatar_url: action.payload.avatar_url.replace(/{.+/g, '').trim(),
        url: action.payload.url.replace(/{.+/g, '').trim(),
        html_url: action.payload.html_url.replace(/{.+/g, '').trim(),
        following_url: action.payload.following_url.replace(/{.+/g, '').trim(),
        starred_url: action.payload.starred_url.replace(/{.+/g, '').trim(),
        subscriptions_url: action.payload.subscriptions_url
          .replace(/{.+/g, '')
          .trim(),
        repos_url: action.payload.repos_url.replace(/{.+/g, '').trim(),
        events_url: action.payload.events_url.replace(/{.+/g, '').trim()
      };
    }
    default:
      return state;
  }
}
