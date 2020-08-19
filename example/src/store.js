import {createStore, applyMiddleware} from 'redux';
import allReducers from "./reducer";
import thunk from 'redux-thunk';

import LastActionDispatched from "thunk-last-action-dispatched";

const store = createStore(allReducers, {}, applyMiddleware(LastActionDispatched, thunk));

export default store;

