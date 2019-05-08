import {combineReducers} from 'redux';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import propertiesReducer from './propertiesReducer';
import categoriesReducer from './categoriesReducer';

export default combineReducers({
 users: usersReducer,
 auth: authReducer,
 properties: propertiesReducer,
 categories: categoriesReducer
})