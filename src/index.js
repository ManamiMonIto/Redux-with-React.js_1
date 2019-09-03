import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import allReducers from "./reducer";
import { Provider } from "react-redux";

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();

/*
import {createStore} from 'redux';


//STORE => GLOBALIZED STATE

//ACTION INCREMENT
const increment = () =>{
  return {
    type: 'INCREMENT'
  }
};
const decrement = () =>{
  return {
    type: 'DECREMENT'
  }
};

//REDUCER 

const counter = (state=0, action) => {
  switch(action.type){
    case 'INCREMENT':
    return state +1;
    case 'DECREMENT':
    return state -1;
  }
};

let store = createStore(counter);

//DISPLY our STORE
store.subscribe(()=> console.log(store.getState()));

//DISPATCH
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(decrement());

/* Dispatch execute that action 
Dispatch bring action to Reducer 
and Reducer check what to do 
and store gets updated*/
