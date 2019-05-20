import {FETCH_PROPERTIES, FETCH_PROPERTIES_HOT} from '../actions/types';

export default (state = [], action) => {
 switch (action.type) {
  case FETCH_PROPERTIES:
   return action.payload.data;
  case FETCH_PROPERTIES_HOT:
    return action.payload.data
   default:
   return state;
 }
}