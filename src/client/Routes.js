import React from 'react';
import {Route} from 'react-router-dom';
import Home from './components/Home'
import UsersList ,{loadData} from './components/UsersList';

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
        path: '/',
        component: Home,
        exact: true
    },
    {
        loadData,
        path: '/users',
        component: UsersList
    },
]
