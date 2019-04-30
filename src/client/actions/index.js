export const FETCH_USERS = 'fetch_users';
export const FETCH_PROPERTIES = 'fetch_properties';
export const FETCH_CURRENT_USER = 'fetch_current_user';

import axios from 'axios';

export const fetchUsers = () => async (dispatch, getState, api) =>{
 console.log(api)
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
 const properties = await axios.get('https://www.basobaas.com/api/properties', {
  headers: {
   Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjIxNzc0NTI3OTksImlhdCI6MTUxNjAyMjk5OSwiaXNzIjoiQmFzb2JhYXMgTmVwYWwiLCJuYmYiOjE1MTYwMjI5OTksImp0aSI6Ikd1ZXN0VG9rZW4iLCJzdWIiOjB9.QikmNgBYmqch5HREGFEpUs4Xk3x-zFfDg5mhYJO7jM8'
  }
 });

 dispatch({
  type: FETCH_PROPERTIES,
  payload: properties.data
 });
}