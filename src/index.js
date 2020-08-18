const LastActionDispatched = function({ getState }){
  return next => action => {
    const returnValue = next(action);
    if(action.type != "LAST_ACTION_DISPATCHED"){
      next({type:"LAST_ACTION_DISPATCHED", payload:action.type})
    }
  return returnValue
  }
};
export default LastActionDispatched;