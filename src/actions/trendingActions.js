import moment from 'moment';
import github from '../api/github';

const dateQuery = moment()
  .subtract(7, 'days')
  .format('YYYY-MM-DD');

const query = `?sort=stars&order=desc&q=created:>${dateQuery}+language:javascript+is:public`;

export const getTrendingList = token => async dispatch => {
  const response = await github.get(`/search/repositories${query}`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  dispatch({
    type: 'GET_TRENDING_LIST',
    payload: response.data.items
  });
};
