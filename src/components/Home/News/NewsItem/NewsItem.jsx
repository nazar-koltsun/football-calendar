import React from 'react';
import classes from './NewsItem.module.css';

function NewsItem(props) {
    return (
        <article className={classes.NewsItem}>
            <div className={classes.NewsItemInfo}>
                <h3 className={classes.NewsItemTitle}>{props.newsTitle}</h3>
                <time className={classes.NewsItemDate} dateTime="">Yesterday</time>
            </div>
            <img className={classes.NewsItemImg} src={props.newsImg} loading='lazy' alt=""/>
        </article>
    );
}

export default NewsItem;
