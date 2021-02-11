import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import navReducer from './nav-reducer';
import matchesReducer from './matches-reducer';
import homeReducer from './home-reducer';
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
    navigation: navReducer,
    matchesPage: matchesReducer,
    homePage: homeReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunkMiddleware))
);

window.store = store;

export default store;
