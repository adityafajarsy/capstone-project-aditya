import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { thunk } from "redux-thunk";
import movieReducer from "./reducer";

const rootReducer = combineReducers({
  movie: movieReducer
});

export default createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
  )
);
