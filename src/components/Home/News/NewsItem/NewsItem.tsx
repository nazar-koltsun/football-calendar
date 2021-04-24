import React from 'react';
import classes from './NewsItem.module.css';

type PropsType = {
    newsTitle: string
    newsImg: string
}

let NewsItem: React.FC<PropsType> = (props) => {
    return (
        <article className={classes.NewsItem}>
            <div className={classes.NewsItemInfo}>
                <h3 className={classes.NewsItemTitle}>{props.newsTitle}</h3>
                <time className={classes.NewsItemDate} dateTime={new Date().toLocaleDateString()}>
                    Today
                </time>
            </div>
            <img className={classes.NewsItemImg} src={props.newsImg} width='120' height='120' loading='lazy' alt=''/>
        </article>
    );
}

export default NewsItem;
