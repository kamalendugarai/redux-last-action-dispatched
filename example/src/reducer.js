import {combineReducers} from "redux";

function lastActionDispatched(state={}, action){
    switch (action.type){
        case "LAST_ACTION_DISPATCHED":{
            state = {...state, ...action.payload};
            break;
        }
        default:{
            return state
        }
    }
    return state;
}

function commonReducer(state={}, action){
    switch (action.type){
        case "LAST_ACTION_DISPATCHED":{
            state = {...state, ...action.payload};
            break;
        }
        case "SomeAction":{
            state = {...state, count:action.payload.count};
            break;
        }
       default:
        return state
    }
    return state;
}

const allReducers = combineReducers({
    commonReducer,
    lastActionDispatched
})

export default allReducers;