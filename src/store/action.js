import axios from 'axios';
import action_key from '../constants/action-key';
export const fetchProduct = () => async (dispatch) => {
    try {
      dispatch({
        type: action_key.SET_LOADING,
        payload: true,
      })
        const apiURL = import.meta.env.VITE_API_URL;
        const response = await axios.get(`${apiURL}/products`);
        dispatch({
            type: action_key.FETCH_PRODUCTS,
            payload: response.data,
            loading: false,
        });
        
    } catch (error) {
        dispatch({
          type: action_key.SET_ERROR,
          payload: error,
          error: true
        }) 
    }
};