import { createStore, combineReducers } from "redux";
import navReducer from "./nav-reducer";
import matchesReducer from "./matches-reducer";

let reducers = combineReducers({
    navigation: navReducer,
    matchesPage: matchesReducer
});

let store = createStore(reducers);

window.store = store;

export default store;