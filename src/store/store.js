import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducers from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
    rootReducers, 
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;