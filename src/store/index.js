import { combineReducers } from 'redux';
import handleCart from './cartReducer';
import productReducer from './productReducer';

const rootReducers = combineReducers({
    cart: handleCart,
    products: productReducer
});

export default rootReducers;