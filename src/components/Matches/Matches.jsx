import React from "react";
import classes from "./Matches.module.css";
import { Link } from "react-router-dom";

function Matches(props) {
    console.log(props);
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
                                    ].join(' ')}
                                >
                                    <strong className={classes.teamName}>
                                        {item.homeTeam.team_name}
                                    </strong>
                                    <img
                                        className={classes.teamLogo}
                                        src={item.homeTeam.logo}
                                        width="30"
                                        height="30"
                                        loading="lazy"
                                        alt={`${item.homeTeam.team_name} logo`}
                                    />
                                </div>
                                <d className={classes.result}>
                                    <span className={classes.goals}>1</span>
                                    <span className={classes.resultLine}>-</span>
                                    <span className={classes.goals}>4</span>
                                </d>
                                <div className={classes.teamBlock}>
                                    <img
                                        className={classes.teamLogo}
                                        src={item.awayTeam.logo}
                                        width="30"
                                        height="30"
                                        loading="lazy"
                                        alt={`${item.awayTeam.team_name} logo`}
                                    />
                                    <strong className={classes.teamName}>
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
