import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {setWinnerReducer} from './reducers/winnerReducers';
import {displayStateReducer} from './reducers/displayStateReducers';
import {InitialState} from './types/types';

//combineReducers object
const reducers = combineReducers({
  usersScores: setWinnerReducer,
  displayState: displayStateReducer,
});

//thunk middleware
const middleware = [thunk];

//persistConfig for only the usersScores
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['usersScores'],
};

//initialState
const initialState: InitialState = {
  usersScores: {
    scores: [],
  },
  displayState: {
    isOn: false,
  },
};

//composeEnhancers
const composeEnhancers = composeWithDevTools({});

const persistedReducer = persistReducer(persistConfig, reducers);
//store
export const store = createStore(
  persistedReducer as any,
  initialState,
  composeEnhancers(applyMiddleware(...middleware)),
);
//persist store
export const persistor = persistStore(store);
// AppState type
export type AppState = ReturnType<typeof reducers>;
