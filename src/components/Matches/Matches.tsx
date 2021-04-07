import React from 'react';
import classes from './Matches.module.css';
import MatchesItem from './MatchesItem/MatchesItem';

type PropsType = {
    events: Array<any>
    filteredEventsCount: string
    setFilteredEventsCount: (eventsCount: number) => void
}

let Matches: React.FC<PropsType> = (props) => {
    let setFilteredEventsCount = (event: any) => {
        props.setFilteredEventsCount(event.target.value);
    };

    return (
        <article>
            <h2 className='page-title'>Matches</h2>
            <section className={classes.matchesItem}>
                <h3 className={classes.title}>PREMIER LEAGUE</h3>
                <div className={classes.filter}>
                    <select
                        className={classes.filterSelect}
                        defaultValue={props.filteredEventsCount}
                        onChange={setFilteredEventsCount}
                    >
                        <option value='last/5'>Last 5</option>
                        <option value='last/10'>Last 10</option>
                        <option value='last/15'>Last 15</option>
                        <option value='next/5'>Next 5</option>
                        <option value='next/10'>Next 10</option>
                        <option value='next/15'>Next 15</option>
                    </select>
                </div>
                <ul className={classes.matchesList}>
                    {props.events.map((item: any) => {
                        return (
                            <MatchesItem
                                key={item.fixture_id}
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
