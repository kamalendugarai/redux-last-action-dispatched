# redux-last-action-dispatched

> There might be tricky situation where you need to know the last action dispatched from the different component than the component which has oiriginally dispatched the action. This is a middledware for redux. This saves the name of the last action dispatched into the store and make it available to consume through reducers. 

>**I have used thunk in the example in the name of brevity, that is actually not needed for this.**

[![NPM](https://img.shields.io/npm/v/redux-last-action-dispatched.svg)](https://www.npmjs.com/package/redux-last-action-dispatched) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

> Image says more than thousand words.

![Browser console](https://i.postimg.cc/Zqvy2R9L/Screenshot-from-2020-08-20-01-13-36.png)



## Install

```bash
npm install --save redux-last-action-dispatched
```
>

## Usage

### Step1
>Store.js
```bash
import {createStore, applyMiddleware} from 'redux';
import allReducers from "./reducer";
import thunk from 'redux-thunk';

import LastActionDispatched from "redux-last-action-dispatched";

const store = createStore(allReducers, {}, applyMiddleware(LastActionDispatched, thunk));

export default store;

```

### Step2
>Reducer.js
```bash
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

```

### Step3
>App.js
```bash
import React from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';


const mapStateToProps = state => ({ state });

class App extends React.Component{
  componentDidMount(){
    /* Action dispatched */
    this.props.dispatch({type:"SomeAction", payload:{count:1}}) 
  }
  
  render(){
    console.log(this.props); /* Check console */
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
}


export default connect(mapStateToProps, null)(App);

```

## License

MIT © [kamalendugarai](https://github.com/kamalendugarai)
