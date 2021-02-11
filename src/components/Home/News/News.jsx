import React from 'react';
import classes from './News.module.css';
import NewsItem from './NewsItem/NewsItem';

function News(props) {
    return (
        <article className={classes.News}>
            <h2 className={classes.NewsTitle}>News</h2>
            {props.news.map(newsItem => {
                return (
                    <NewsItem 
                        key={newsItem.id}
                        newsTitle={newsItem.tit}
                        newsImg={newsItem.thb}
                    />
                )
            })}
        </article>
    );
}

export default News;
