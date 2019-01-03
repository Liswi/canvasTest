import React, { Component } from 'react';
import { fromEvent } from 'rxjs';
import { throttleTime, scan, map } from 'rxjs/operators'

// console.log(Operator);
export default class App extends Component {
    constructor(props) {
        super();
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        let ob = fromEvent(document.querySelector('#btn'), 'click');
        ob.pipe(
            throttleTime(1000),
            scan(count => count + 1, 0)
        ).subscribe(n => {
            let data = [...this.state.data];
            data.push(n);
            this.setState({ data })
        })

        // ob.pipe(
        //     map(e => e.clientX),
        //     scan((count, clientX) => count + clientX, 0)
        // ).subscribe(x => {
        //     console.log(x)
        // })
    }

    render() {
        const { data } = this.state;
        return <div>
            <button id='btn'>点击</button>
            {data.map((item, index) => <h3 key={index}>{item}</h3>)}
        </div>
    }
}