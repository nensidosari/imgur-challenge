import axios from "axios";
import { GET_IMAGES_SUCCESS, GET_IMAGES_LOADING } from "./actionTypes";

const getUrl = keys => {
  console.log(keys);

  let url = `https://api.imgur.com/3/gallery`;

  Object.keys(keys).map(
    (key, i) => (url = url.concat("/" + Object.values(keys)[i].toString()))
  );

  return url;
};

const getImagesSuccess = payload => ({
  type: GET_IMAGES_SUCCESS,
  payload
});

const getImagesLoading = payload => ({
  type: GET_IMAGES_LOADING,
  payload
});

const getImages = (keys = {}, params = {}) => {
  const url = getUrl(keys);
  return dispatch => {
    dispatch(getImagesLoading(true));
    axios
      .get(url, {
        headers: {
          Authorization: "Client-ID 8958d36cf0892f3"
        },
        params
      })
      .then(res => dispatch(getImagesSuccess(res.data.data)))
      .catch(err => console.log(err));
  };
};

export { getImages };
