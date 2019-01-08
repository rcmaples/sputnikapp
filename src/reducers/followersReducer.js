import { GET_FOLLOWER_LIST, GET_FOLLOWER_ACT } from '../actions/types';

const initialState = {
  stuff: true
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_FOLLOWER_ACT:
      return {
        ...state
      };
    case GET_FOLLOWER_LIST:
      return {
        ...state
      };
    default:
      return state;
  }
}
