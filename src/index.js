import React from 'react';
import { render } from 'react-dom';
import App from './page/App';
const root = document.querySelector('#root');
render(<App />, root);
// window.onload = () => {
//     const [header, body, footer] = ['header', 'body', 'footer']
//         .map(id => getCanvasById('header'));
//         console.log(header, body, footer, 222);
// }