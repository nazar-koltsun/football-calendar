import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import navReducer from './nav-reducer';
import matchesReducer from './matches-reducer';
import homeReducer from './home-reducer';
import thunkMiddleware from 'redux-thunk';

let rootReducer = combineReducers({
    navigation: navReducer,
    matchesPage: matchesReducer,
    homePage: homeReducer,
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;
