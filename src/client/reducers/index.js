import {combineReducers} from 'redux';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import propertiesReducer from './propertiesReducer';

export default combineReducers({
 users: usersReducer,
 auth: authReducer,
 properties: propertiesReducer
})