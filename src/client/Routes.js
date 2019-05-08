import React from 'react';
import {Route} from 'react-router-dom';
import App from './App';
import Home from './pages/HomePage'
import UsersList from './pages/UsersListPage';
import PropertiesList from './pages/PropertiesList';
import LoginPage from './pages/LoginPage';

export default [
    {
        ...App,
        routes:[
            {
                ...Home,
                path: '/',
                exact: true
            },
            {
                ...UsersList,
                path: '/users',
            },
            {
                ...PropertiesList,
                path: '/properties'
            },
            {
                ...LoginPage,
                path: '/login-page'
            }
        ]
    }
]
