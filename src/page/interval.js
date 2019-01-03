import React, { Component } from 'react';
import { interval } from 'rxjs';
import { filter, take } from 'rxjs/operators'

// console.log(Operator);
export default class App extends Component {
    constructor(props) {
        super();
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        let ob = interval(1000);
        ob.pipe(
            take(3),
            filter(x => x < 5)
        ).subscribe(n => {
            let data = [...this.state.data];
            data.push(n);
            this.setState({ data })
        })
    }

    render() {
        const { data } = this.state;
        return <div>
            {data.map((item, index) => <h3 key={index}>{item}</h3>)}
        </div>
    }
}