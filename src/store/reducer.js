import { GET_IMAGES_SUCCESS, GET_IMAGES_LOADING } from "./actions/actionTypes";

const initialState = {
  loading: false,
  images: []
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_IMAGES_SUCCESS:
      return { ...state, images: action.payload, loading: false };
    case GET_IMAGES_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

export default reducer;
