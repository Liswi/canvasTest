import React, { Component } from 'react';
import { Link } from 'react-router';

const data = [
    { path: '/interval', name: 'interval' },
    { path: '/fromEvent', name: 'fromEvent' },
    { path: '/create', name: 'create' },
    { path: '/subject', name: 'Subject' },
    { path: '/infiniteScroll', name: 'InfiniteScroll' }
]

export default class App extends Component {
    constructor(props) {
        super();
        this.state = {

        }
        this.style = {
            divStyle: {
                width: 100,
                height: 55,
                textAlign: 'center',
                display: 'inline-block',
                padding: '45px 0 0'
            },
            childrenStyle: {
                margin: '50px',
                padding: '30px',
                border: "3px solid #f1f1f1"
            }
        }
    }
    componentDidMount() {
    }

    render() {
        const { children } = this.props;
        // console.log(children);
        return <div id='app2'>
            {data.map((item, index) => (
                <div key={`index${index}`} style={this.style.divStyle}>
                    <Link to={item.path} >{item.name}</Link>
                </div>
            ))}
            <div style={this.style.childrenStyle}>
                {children}
            </div>

        </div>
    }
}