import React from 'react';
import {Route} from 'react-router-dom';
import App from './App';
import Home from './pages/HomePage'
import UsersList from './pages/UsersListPage';

// export default () => {
//     return (
//         <div>
//             <Route exact path="/" component={Home}/>            
//             <Route exact path="/users" component={UsersList}/>                     
//         </div>
//     )
// }

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
            }
        ]
    }
]
