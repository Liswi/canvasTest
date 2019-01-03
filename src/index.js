import React from 'react';
import { render } from 'react-dom';
import { browserHistory, Router } from 'react-router'
import routers from './router';
const root = document.querySelector('#root');
render(<Router history={browserHistory} routes={routers} />, root);
// window.onload = () => {
//     const [header, body, footer] = ['header', 'body', 'footer']
//         .map(id => getCanvasById('header'));
//         console.log(header, body, footer, 222);
// }