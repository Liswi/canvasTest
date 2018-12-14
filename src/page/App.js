import React, { Component } from 'react';
import getCanvas from '../module/getCanvas';
import renderSquare from '../module/renderSquare';


export default class App extends Component {
    constructor(props) {
        super();
        this.state = {

        }
    }
    componentDidMount() {
        const can1 = getCanvas('app-can1');
        renderSquare(can1);
    }

    render() {

        return <div id='app2'>
            <canvas id='app-can1' width="150" height="150">{'您的浏览器不支持！'}</canvas>
            <canvas id='app-can2' width="150" height="150">{'您的浏览器不支持！'}</canvas>
            <canvas id='app-can3' width="150" height="150">{'您的浏览器不支持！'}</canvas>
        </div>
    }
}