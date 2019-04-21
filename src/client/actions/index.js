export const FETCH_USERS = 'fetch_users';

export const fetchUsers = () => async (dispatch, getState, api) =>{
 console.log(api)
 const users = await api.get('/users');

 dispatch({
  type: FETCH_USERS,
  payload: users
 });
}