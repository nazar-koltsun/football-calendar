import React from "react";
import classes from "./Matches.module.css";
import MatchesItem from "./MatchesItem/MatchesItem";

function Matches(props) {
    return (
        <article>
            <h2 className="page-title">Matches</h2>
            <section className={classes.matchesItem}>
                <h3 className={classes.title}>PREMIER LEAGUE</h3>
                <ul className={classes.matchesList}>
                    {props.events.map((item) => {
                        return (
                            <MatchesItem 
                                key={item.fixture_id}
                                matchItem={item}
                                homeTeam={item.homeTeam} 
                                awayTeam={item.awayTeam}
                                goalsHomeTeam={item.goalsHomeTeam}
                                goalsAwayTeam={item.goalsAwayTeam}
                            />
                        );
                    })}
                </ul>
            </section>
        </article>
    );
}

export default Matches;
