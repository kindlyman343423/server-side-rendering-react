import express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
import Home from './client/components/Home';

const app = express();
const PORT = 3000;

app.get("/", (req, res)=>{
    const content = renderToString(<Home />);
    res.send(content);              
})

app.listen(PORT, ()=>{
    console.log(`Server started at ${PORT}`);
})