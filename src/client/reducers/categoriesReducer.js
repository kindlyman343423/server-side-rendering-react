import {FETCH_CATEGORIES} from '../actions/types';

export default (state = [], action) => {
 switch (action.type) {
  case FETCH_CATEGORIES:
   return action.payload;
   default:
   return state;
 }
}