import mapKeys from 'lodash.mapkeys';
import { GET_FOLLOWER_LIST, GET_FOLLOWER_ACT } from '../actions/types';

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_FOLLOWER_ACT:
      return state;
    case GET_FOLLOWER_LIST:
      return { ...state, ...mapKeys(action.payload, 'id') };
    default:
      return state;
  }
}
