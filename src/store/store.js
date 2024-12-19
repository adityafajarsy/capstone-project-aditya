import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { thunk } from "redux-thunk";
import productReducer from "./reducer";

const rootReducer = combineReducers({
  product: productReducer
});

export default createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
  )
);