import { GET_TRENDING_LIST } from '../actions/types';
import mapKeys from 'lodash.mapkeys';
const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_TRENDING_LIST:
      return { ...state, ...mapKeys(action.payload, 'id') };
    default:
      return state;
  }
}
