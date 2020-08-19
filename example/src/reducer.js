import {combineReducers} from "redux";

function lastActionDispatched(state={}, action){
    switch (action.type){
        case "LAST_ACTION_DISPATCHED":{
            console.log(action, "LAST_ACTION_DISPATCHED from reducer")
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
            console.log(action, "LAST_ACTION_DISPATCHED from reducer")
            state = {...state, ...action.payload};
            break;
        }
        case "SomeAction":{
            console.log(action, "Some Action from reducer")
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