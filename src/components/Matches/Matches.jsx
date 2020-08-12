import React from "react";
import classes from "./Matches.module.css";

function Matches(props) {
    console.log(props);

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
        <article>
            <h2 className="page-title">Matches</h2>
            <section className={classes.matchesItem}>
                <h3 className={classes.title}>PREMIER LEAGUE</h3>
                <ul className={classes.matchesList}>
                    {props.events.map((item) => {
                        return (
                            <li
                                className={classes.matchesListItem}
                                key={item.fixture_id}
                            >
                                <div
                                    className={[
                                        classes.teamBlock,
                                        classes.teamBlockLeft,
                                    ].join(" ")}
                                >
                                    <strong
                                        className={[
                                            classes.teamName,
                                            classes.homeTeam,
                                        ].join(" ")}
                                    >
                                        {item.homeTeam.team_name}
                                    </strong>
                                    <img
                                        className={classes.teamLogo}
                                        src={item.homeTeam.logo}
                                        width="25"
                                        height="25"
                                        loading="lazy"
                                        alt={`${item.homeTeam.team_name} logo`}
                                    />
                                </div>
                                <div className={classes.result}>
                                    <span
                                        className={detectWinnerForHomeTeam(item)}
                                    >
                                        {item.goalsHomeTeam}
                                    </span>
                                    <span className={classes.resultLine}>
                                        -
                                    </span>
                                    <span className={detectWinnerForAwayTeam(item)}>
                                        {item.goalsAwayTeam}
                                    </span>
                                </div>
                                <div className={classes.teamBlock}>
                                    <img
                                        className={classes.teamLogo}
                                        src={item.awayTeam.logo}
                                        width="25"
                                        height="25"
                                        loading="lazy"
                                        alt={`${item.awayTeam.team_name} logo`}
                                    />
                                    <strong
                                        className={[
                                            classes.teamName,
                                            classes.awayTeam,
                                        ].join(" ")}
                                    >
                                        {item.awayTeam.team_name}
                                    </strong>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </section>
        </article>
    );
}

export default Matches;
