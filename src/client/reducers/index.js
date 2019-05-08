import {combineReducers} from 'redux';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import propertiesReducer from './propertiesReducer';
import categoriesReducer from './categoriesReducer';
import areasReducer from './areasReducer';

export default combineReducers({
 users: usersReducer,
 auth: authReducer,
 properties: propertiesReducer,
 areas: areasReducer,
 categories: categoriesReducer
})