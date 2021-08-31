import { createStore, applyMiddleware, compose } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import { combineReducers } from "redux";
import userInfoReducer from "./userInfoReducer";

const reducer = combineReducers({
  form: reduxFormReducer,
  userInfoReducer
});

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [sagaMiddleware];

export const store = createStore(reducer, composeEnhancers(applyMiddleware(...middlewares)));

sagaMiddleware.run(rootSaga);

export default store;
