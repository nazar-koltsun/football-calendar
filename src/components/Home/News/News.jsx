import React from 'react';
import classes from './News.module.css';
import NewsItem from './NewsItem/NewsItem';

function News(props) {
    return (
        <article className={classes.News}>
            <h2 className={classes.NewsTitle}>News</h2>
            <NewsItem />
        </article>
    );
}

export default News;
