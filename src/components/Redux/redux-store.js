import { createStore, combineReducers } from "redux";
import navReducer from "./nav-reducer";

let reducers = combineReducers({
    navigation: navReducer
});

let store = createStore(reducers);

window.store = store;

export default store;