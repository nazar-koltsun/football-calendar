import { createStore, combineReducers, applyMiddleware } from "redux";
import navReducer from "./nav-reducer";
import matchesReducer from "./matches-reducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    navigation: navReducer,
    matchesPage: matchesReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;