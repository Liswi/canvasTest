import React, { Component } from 'react';
import { Subject, from } from 'rxjs';
import { throttleTime, scan, map } from 'rxjs/operators'

export default class App extends Component {
    constructor(props) {
        super();
        this.state = {
            data: []
        }
    }
    componentDidMount() {

        let subject = new Subject();
        subject.subscribe({
            next: x => console.log('SU订阅者1 ' + x),
            complete: () => console.log('SU订阅者1完事'),
        }),
            subject.pipe(
                map(x => 10 * x)
            ).subscribe({
                next: x => console.log('SU订阅者2 ' + x),
                complete: () => console.log('SU订阅者2完事'),
            })

        console.log('just before subscribe');
        // 作为被观察者
        // subject.next(1);
        // subject.next(2);
        // subject.next(3);
        // setTimeout(() => {
        //     subject.next(4);
        //     subject.complete();
        // }, 1000);


        // 方式2 作为观察者接收上一位被观察者发布
        let ob = from([0, 1, 2, 3]);

        ob.subscribe(subject)

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