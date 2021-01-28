import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import navReducer from "./nav-reducer";
import matchesReducer from "./matches-reducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    navigation: navReducer,
    matchesPage: matchesReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(
    reducers, 
    composeEnhancers(applyMiddleware(thunkMiddleware)));

window.store = store;

export default store;