import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import personalReducer from '../ducks/personal';
import educationReducer from '../ducks/education';
import experienceReducer from '../ducks/experience';

const rootReducer = combineReducers({
  personal: personalReducer,
  education: educationReducer,
  experience: experienceReducer
});

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const store = createStore(
  rootReducer,
  {},
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;
