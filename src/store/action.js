import axios from "axios";
import action_key from "../constants/action-key";
export const fetchProduct = () => async (dispatch) => {
  try {
    dispatch({
      type: action_key.SET_LOADING,
      payload: true,
    });
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
      error: true,
    });
  }
};

export const fetchDetailProduct = (id) => async (dispatch) => {
  try {
    dispatch({
      type: action_key.SET_LOADING,
      payload: true,
    });

    const apiURL = import.meta.env.VITE_API_URL;
    const response = await axios.get(`${apiURL}/products/${id}`);

    dispatch({
      type: action_key.FETCH_DETAIL_PRODUCT,
      payload: response.data,
      loading: false,
    });
  } catch (error) {
    dispatch({
      type: action_key.SET_ERROR,
      payload: true,
    });
  } 
};

export const addToCart = (product) => (dispatch, getState) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      dispatch({
        type: action_key.ADD_TO_CART,
        payload: { ...product, maxQuantity: 20 }
      });
      
      // Save to localStorage after adding
      const { items } = getState().product;
      localStorage.setItem('cartItems', JSON.stringify(items));
      
      resolve();
    }, 1000); // 1 second delay
  });
};

export const removeFromCart = (productId) => ({
  type: action_key.REMOVE_FROM_CART,
  payload: productId,
});

export const updateCartItem = (productId, quantity) => ({
  type: action_key.UPDATE_CART_ITEM,
  payload: { productId, quantity },
});

export const updateCartQuantity = (productId, quantity) => ({
  type: action_key.UPDATE_CART_QUANTITY,
  payload: { productId, quantity }
});

export const clearCart = () => (dispatch) => {
  localStorage.removeItem('cartItems');
  dispatch({ type: action_key.CLEAR_CART });
};

export const setStock = (productId, stock) => ({
  type: action_key.SET_STOCK,
  payload: { productId, stock }
});

export const persistCart = (items) => ({
  type: action_key.PERSIST_CART,
  payload: items
});