import axios from "axios";
import action_key from "../constants/action-key";

export const fetchAllMovies = () => {
  return async (dispatch) => {
    
    const response = await axios.get(process.env.REACT_APP_JSON_PLACE_HOLDER_URL)

    dispatch({
      type: action_key.FETCH_ALL_MOVIES,
      payload: response.data
    })
  };
};

export const fetchProducst = () => {
  return async (dispatch) => {
    
    const response = await axios.get(process.env.REACT_APP_JSON_PLACE_HOLDER_URL)

    dispatch({
      type: action_key.FETCH_PRODUCTS,
      payload: response.data
    })
  };
}
