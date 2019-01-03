import React, { Component } from 'react';
import { fromEvent } from 'rxjs';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { map, filter, pairwise, startWith, exhaustMap } from 'rxjs/operators'


// map : 与数组的 map 类似，映射传入的数据流。
// filter : 与数组的 filter 类似，过滤传入的数据流。
// pairwise : 返回由当前发出值和前一个发出值组成的数组。
// startWith : 返回的 observable 会在发出源 observable 的值之前先发出提供的值。
// exhaustMap : 只有当内部 observable 完成后，才会发出新的值。

export default class App extends Component {
    constructor(props) {
        super();
        this.processData = this.processData.bind(this);
        this.getQuotesAPI = this.getQuotesAPI.bind(this);
        this.renderNews = this.renderNews.bind(this);
        this.state = {
            news: [{
                id: '001',
                title: '第一条新闻'
            }]
        }
        this.currentPage = 1;
    }

    componentDidMount() {
        const fetch = window.fetch;
        console.log(fromPromise);
        // 设置流
        const scrollElem = document.getElementById('infinite-scroller');
        const scrollEvent$ = fromEvent(scrollElem, 'scroll');
        // 流的逻辑
        scrollEvent$.pipe(
            map(e => ({
                sH: e.target.scrollHeight,
                sT: e.target.scrollTop,
                cH: e.target.clientHeight
            })),
            pairwise(),
            filter(positions => {
                return this.isUserScrollingDown(positions) && this.isScrollExpectedPercent(positions[1], 70)
            }),
            startWith([]),
            exhaustMap(() => fromPromise(fetch(this.getQuotesAPI())))
        ).subscribe(
            this.processData
        )
    }

    getQuotesAPI() {
        return `https://node-hnapi.herokuapp.com/news?page=${this.currentPage}`
    }

    processData(res) {
        res.json()
            .then(news => {
                this.currentPage++;
                news.forEach(this.renderNews);
            });
    }

    // 渲染每条信息
    renderNews(news) {
        let _news = this.state.news.concat(news);
        this.setState({ news: _news });
    }

    // 检查滚动位置是否达到了要求的容器百分比高度
    isScrollExpectedPercent(position, percent) {
        return ((position.sT + position.cH) / position.sH) > (percent / 100);
    }

    isUserScrollingDown(positions) {
        return positions[0].sT < positions[1].sT;
    }

    render() {
        const { news } = this.state;
        return <ul id="infinite-scroller">
            {news.map((item, index) => {
                return <li key={index}>{`${item.id} - ${item.title}`}</li>
            })}
        </ul>
    }
}