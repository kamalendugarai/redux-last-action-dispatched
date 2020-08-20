import {createStore, applyMiddleware} from 'redux';
import allReducers from "./reducer";
import LastActionDispatched from "thunk-last-action-dispatched";

const store = createStore(allReducers, {}, applyMiddleware(LastActionDispatched));

export default store;

