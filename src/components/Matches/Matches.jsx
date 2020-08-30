import React from "react";
import classes from "./Matches.module.css";
import MatchesItem from "./MatchesItem/MatchesItem";

function Matches(props) {
    let tess = (event) => {
        props.setFilteredEventsCount(event.target.value);
    }

    return (
        <article>
            <h2 className="page-title">Matches</h2>
            <section className={classes.matchesItem}>
                <h3 className={classes.title}>PREMIER LEAGUE</h3>
                <div className={classes.filter}>
                    <select defaultValue={props.filteredEventsCount} onChange={tess} >
                        <option value="last/5">Last 5</option>
                        <option value="last/10">Last 10</option>
                        <option value="last/15">Last 15</option>
                    </select>
                </div>
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
