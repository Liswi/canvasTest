import React from 'react';
import App from '../page/App';
import { Route, IndexRoute, Redirect } from 'react-router';
import Interval from '../page/interval';
import FromEvent from '../page/fromEvent';
import Create from '../page/create/index';
import Subject from '../page/subject';
import InfiniteScroll from '../page/infiniteScroll';

export default <Route path="/" component={App}>
    <IndexRoute component={Interval} />
    <Route path='/' component={Interval} />
    <Route path='/interval' component={Interval} />
    <Route path='/fromEvent' component={FromEvent} />
    <Route path='/create' component={Create} />
    <Route path='/subject' component={Subject} />
    <Route path='/infiniteScroll' component={InfiniteScroll} />
</Route>