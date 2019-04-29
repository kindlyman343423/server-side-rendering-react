export const FETCH_USERS = 'fetch_users';
export const FETCH_CURRENT_USER = 'fetch_current_user';

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