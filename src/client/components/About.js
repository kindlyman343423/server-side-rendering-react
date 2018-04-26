import React from 'react';
import {Helmet} from 'react-helmet';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>About Page helm</title>
                <meta name="about page" content="Helmet application" />
            </Helmet>
            <h1>Whaat up about !</h1>
            <button onClick={()=>console.log('You clicked the button')}>Button</button>
        </div>
    )
}

export default Home
