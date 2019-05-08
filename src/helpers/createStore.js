import {createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../client/reducers';

import axios from 'axios';

import CookieConfig from '../helpers/cookieConfig';

let guest_token = CookieConfig();

export default (req) =>{
 const axiosInstance = axios.create({
  // baseURL: 'https://www.basobaas.com/api',
  // baseURL: 'https://jsonplaceholder.typicode.com',
  headers: { Authorization: `Bearer ${(req.headers.cookie.split(';')[2]) ? req.headers.cookie.split(';')[2].split('=')[1] : guest_token}`}
  
 })
 const store = createStore(reducers, {}, applyMiddleware(thunk.withExtraArgument(axiosInstance)));

 return store;
}