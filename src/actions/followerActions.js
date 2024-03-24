import github from "../api/github";
import axios from "axios";
let API_URL = "";
// if (process.env.NODE_ENV === 'development') {
//   API_URL = require('../config/config').API_URL;
// } else {
//   API_URL = `https://sputnik-server.herokuapp.com`;
// }

export const getFollowList = (token, endpoint) => async (dispatch) => {
  const response = await github.get(endpoint, {
    headers: { Authorization: `Bearer ${token}` },
  });
  dispatch({
    type: "GET_FOLLOWER_LIST",
    payload: response.data,
  });
  dispatch(setFollowersList());
};

export const setFollowersList = () => (dispatch, getState) => {
  const jwtToken = localStorage.getItem("jwtToken");
  const data = getState().followers;

  const json = JSON.stringify(data);
  axios
    .patch(`${API_URL}/api/users/following`, json, {
      headers: {
        Authorization: jwtToken,
        "Content-Type": "Application/JSON",
      },
    })
    .catch((err) => {
      console.error(err);
    });
};
