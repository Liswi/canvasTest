import getCanvasById from '../module/getCanvas';

window.onload = () => {
    const [header, body, footer] = ['header', 'body', 'footer']
        .map(id => getCanvasById('header'));
        console.log(header, body, footer);
}