import React from 'react';
import {Route} from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'

export default () => {
    return (
        <div>
            <Route exact path="/" component={Home}/>            
            <Route exact path="/about" component={About}/>            
        </div>
    )
}
