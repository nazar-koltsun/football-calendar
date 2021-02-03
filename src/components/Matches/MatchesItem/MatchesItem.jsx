import React from 'react';
import classes from './MatchesItem.module.css';

function MatchesItem(props) {
    let detectWinnerForHomeTeam = (match) => {
        if (match.goalsHomeTeam > match.goalsAwayTeam) {
            return classes.winner;
        }
    };

    let detectWinnerForAwayTeam = (match) => {
        if (match.goalsAwayTeam > match.goalsHomeTeam) {
            return classes.winner;
        }
    };

    return (
        <li className={classes.matchesListItem}>
            <div
                className={[classes.teamBlock, classes.teamBlockLeft].join(' ')}
            >
                <strong
                    className={[classes.teamName, classes.homeTeam].join(' ')}
                >
                    {props.homeTeam.team_name}
                </strong>
                <img
                    className={classes.teamLogo}
                    src={props.homeTeam.logo}
                    width='25'
                    height='25'
                    loading='lazy'
                    alt={`${props.homeTeam.team_name} logo`}
                />
            </div>
            <div className={classes.result}>
                <span className={detectWinnerForHomeTeam(props.matchItem)}>
                    {props.goalsHomeTeam}
                </span>
                <span className={classes.resultLine}>-</span>
                <span className={detectWinnerForAwayTeam(props.matchItem)}>
                    {props.goalsAwayTeam}
                </span>
            </div>
            <div className={classes.teamBlock}>
                <img
                    className={classes.teamLogo}
                    src={props.awayTeam.logo}
                    width='25'
                    height='25'
                    loading='lazy'
                    alt={`${props.awayTeam.team_name} logo`}
                />
                <strong
                    className={[classes.teamName, classes.awayTeam].join(' ')}
                >
                    {props.awayTeam.team_name}
                </strong>
            </div>
        </li>
    );
}

export default MatchesItem;
