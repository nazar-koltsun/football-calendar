import React from 'react';
import classes from './NewsItem.module.css';

function NewsItem(props) {
    return (
        <article className={classes.NewsItem}>
            <div className={classes.NewsItemInfo}>
                <h3 className={classes.NewsItemTitle}>
                    Neymar: “Who doesn’t like to party? If you stay 100 percent focused on playing only football, you will explode”
                </h3>
                <time dateTime="">Yesterday</time>
            </div>
            <img src='https://image-service.onefootball.com/crop/face?h=128&image=https%3A%2F%2Ficdn.football-espana.net%2Fwp-content%2Fuploads%2F2020%2F12%2FNeymar-1.jpg&q=85&w=128&fit=crop' loading='lazy' alt=""/>
        </article>
    );
}

export default NewsItem;
