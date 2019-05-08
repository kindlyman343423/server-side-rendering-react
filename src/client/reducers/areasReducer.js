import {FETCH_AREAS} from '../actions';

export default (state = [], action) => {
 switch (action.type) {
  case FETCH_AREAS:
   return action.payload;
   default:
   return state;
 }
}