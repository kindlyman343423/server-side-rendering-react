import React from 'react';
import {Button, Label} from '../components/Button'
import Helmet from '../components/Helmet'

const Home = () => {
    return (
        <div>
            <Helmet 
                description = "Want to buy, sell, rent or invest on a real estate property? Explore our list of real estate properties (houses, apartments, lands), Basobaas agents always at your service."
                title = "Trusted real estate bazar in Nepal | Basobaas"
                image = "https://basobaas.com/images/bg.jpg"
                url = "https://basobaas.com"
                chatScriptUrl = "https://widget.manychat.com/934957239853993.js"
                />
            <h1>Whaat up homies !</h1>
            <Button classBtn="primary-btn">Primary Button</Button>
            <Label classLabel="success-label">Label</Label>
        </div>
    )
}

export default {component: Home}
