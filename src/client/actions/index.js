export const FETCH_USERS = 'fetch_users';
export const FETCH_PROPERTIES = 'fetch_properties';
export const FETCH_CURRENT_USER = 'fetch_current_user';
export const LOGIN_USER = 'login_user';

import axios from 'axios';

import cookie from 'universal-cookie';
import CookieConfig from '../../helpers/cookieConfig';

let guest_token = CookieConfig();
const Cookies = new cookie();

export const fetchUsers = () => async (dispatch, getState, api) =>{
 const users = await api.get('/users');

 dispatch({
  type: FETCH_USERS,
  payload: users
 });
}

export const fetchCurrentUser = () => async (dispatch, getState, api) => {
 const user = await api.get('/current_user');

 dispatch({
  type: FETCH_CURRENT_USER,
  payload: user
 });
}

export const fetchProperties = () => async (dispatch, getState, api) => {
 try{
    const properties = await axios.get('https://www.basobaas.com/api/properties', {
        headers: {
         Authorization: `Bearer ${Cookies.get('token') || guest_token}`
        }
       });
      
       dispatch({
        type: FETCH_PROPERTIES,
        payload: properties.data
       });
 }catch(err){
     console.log("Error", Cookies.get('token'))
 }
}

export const loginUser = (data) => async (dispatch, getState, api) => {
 const user = await axios.post('https://www.basobaas.com/api/users/login',data, {
  headers: {
      Authorization: `Bearer ${Cookies.get('token')}`
  }
 });

 Cookies.set('token', `${user.data.data.access_token}`);

 dispatch({
  type: LOGIN_USER,
  payload: user.data.data.access_token
 });
}