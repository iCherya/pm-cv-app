import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import photosListReducer from '../ducks/photosList';
import photoSingleReducer from '../ducks/photoSingle';
import albumInfoReducer from '../ducks/albumInfo';

const rootReducer = combineReducers({
  photosList: photosListReducer,
  photoSingle: photoSingleReducer,
  albumInfo: albumInfoReducer
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
