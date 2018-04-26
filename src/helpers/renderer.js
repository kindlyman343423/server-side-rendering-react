import React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import Routes from '../client/Routes'
import {Helmet} from 'react-helmet';
 
export default (req)=>{
    const content = renderToString(
        <StaticRouter location={req.path} context={{}}>
            <Routes />
        </StaticRouter>
    );

    const helmet = Helmet.renderStatic();

    return `
    <html>
        <head>
            ${helmet.title.toString()}
            ${helmet.meta.toString()}               
        </head>
        <body>
            <div id="root">${content}</div>
            <script src="bundle.js"></script>
        </body>
    </html>
    `
}