import {FETCH_USERS, LOGIN_USER} from '../actions';

export default (state = [], action) => {
 switch (action.type) {
  case FETCH_USERS:
   return action.payload.data;
  case LOGIN_USER:
    return action.payload;
   default:
   return state;
 }
}