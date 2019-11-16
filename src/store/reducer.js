import {GET_IMAGES_SUCCESS} from "./actions/actionTypes";

const initialState = {
  loading:{images:false},
  images:[]
};
const reducer = (state=initialState, action) => {
  switch(action.type){
    case GET_IMAGES_SUCCESS:

      return {...state,images:action.payload};
    default:
      return state;
  }
};

export default reducer;