import React, { Component } from 'react';
import { Observable } from 'rxjs';
import { throttleTime, scan, map } from 'rxjs/operators'

export default class App extends Component {
    constructor(props) {
        super();
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        let observable = Observable.create(function (observer) {
            observer.next(1);
            observer.next(2);
            observer.next(3);
            // observer.complete();
            setTimeout(() => {
                observer.next(4);
                observer.complete();
            }, 1000);
        });

        console.log('just before subscribe');
        observable.pipe(
            map(x => x)
        ).subscribe({
            next: x => console.log('订阅者1 ' + x),
            error: err => console.error('something wrong occurred: ' + err),
            complete: () => console.log('订阅者1完事'),
        });

        observable.pipe(
            map(x => 10*x)
        ).subscribe({
            next: x => console.log('订阅者2 ' + x),
            error: err => console.error('something wrong occurred: ' + err),
            complete: () => console.log('订阅者2完事'),
        });
        console.log('just after subscribe');
    }

    render() {
        const { data } = this.state;
        return <div>
            <button id='btn'>点击</button>
            {data.map((item, index) => <h3 key={index}>{item}</h3>)}
        </div>
    }
}