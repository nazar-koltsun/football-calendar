import React from 'react';
import classes from './News.module.css';
import NewsItem from './NewsItem/NewsItem';
import Loader from '../../common/Loader/Loader';
import Paginator from '../../common/Paginator/Paginator';

type NewsType = {
    id: number
    tit: string
    thb: string
}
type PropsType = {
    isFetching: boolean
    news: Array<NewsType>
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}

let News: React.FC<PropsType> = (props) => {
    let maxNewsIndex = props.currentPage * props.pageSize;
    let minNewsIndex = maxNewsIndex - props.pageSize;

    return (
        <article className={classes.News}>
            <h2 className={classes.NewsTitle}>News</h2>
            { props.isFetching ? 
                <Loader /> : 
                props.news.map((newsItem, index) => {
                    if (index >= minNewsIndex && index < maxNewsIndex) {
                        return (
                            <NewsItem 
                                key={newsItem.id}
                                newsTitle={newsItem.tit}
                                newsImg={newsItem.thb}
                            />
                        )
                    }
                })
            }
            <Paginator 
                pageSize={props.pageSize} 
                currentPage={props.currentPage} 
                totalItemsCount={props.news.length} 
                onPageChanged = {props.onPageChanged}
            />
        </article>
    );
}

export default News;
