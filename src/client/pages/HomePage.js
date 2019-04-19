import React from 'react';
import {Helmet} from 'react-helmet';

const Home = () => {
    return (
        <div>
            {/* <Helmet>
                <title>Home Page helm</title>
                <meta name="home page" content="Helmet application" />
            </Helmet> */}
            <h1>Whaat up homies !</h1>
            <button onClick={()=>console.log('You clicked the button')}>Button</button>
        </div>
    )
}

export default {component: Home}
