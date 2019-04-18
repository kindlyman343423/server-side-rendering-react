
import 'babel-polyfill';
import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/Home";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware(thunk));

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
