import github from "../api/github";
import axios from "axios";
import { getFollowList } from "./followerActions";
import { getReposList } from "./reposActions";
import { getStarsList } from "./starredActions";
import { getWatchingList } from "./watchingActions";
import { getTrendingList } from "./trendingActions";

let API_URL = "";
// if (process.env.NODE_ENV === 'development') {
//   API_URL = require('../config/config').API_URL;
// } else {
//   API_URL = `https://sputnik-server.herokuapp.com`;
// }

export const getURLs = (token) => async (dispatch) => {
  const response = await github.get("/user", {
    headers: { Authorization: `Bearer ${token}` },
  });
  dispatch({
    type: "SET_URLS",
    payload: response.data,
  });
};

export const setGitHubURLs = (token) => async (dispatch, getState) => {
  const jwtToken = localStorage.getItem("jwtToken");
  await dispatch(getURLs(token));
  const data = getState().github_urls;
  const following_endpoint = getState().github_urls.following_url;
  const repos_endpoint = getState().github_urls.repos_url;
  const starred_endpoint = getState().github_urls.starred_url;
  const watching_endpoint = getState().github_urls.subscriptions_url;
  axios
    .patch(`${API_URL}/api/users/urls`, data, {
      headers: {
        Authorization: jwtToken,
      },
    })
    .catch((err) => {
      console.error(err);
      //more error handling
      //set loading to false
    });
  await dispatch(getFollowList(token, following_endpoint));
  await dispatch(getReposList(token, repos_endpoint));
  await dispatch(getStarsList(token, starred_endpoint));
  await dispatch(getWatchingList(token, watching_endpoint));
  await dispatch(getTrendingList(token));
};

export const createTargetUserRecord = () => (dispatch, getState) => {
  // const jwtToken = localStorage.getItem('jwtToken');
  const data = getState().followers;

  for (let follower of data) {
    const json = JSON.stringify(follower);
    console.log(json);
    // axios
    // .post(`${API_URL}/api/target-user`, json, {
    //   headers: {
    //     Authorization: jwtToken,
    //     'Content-Type': 'Application/JSON'
    //   }
    // })
    // .catch(err => {
    //   console.error(err);
    // });
  }
};
