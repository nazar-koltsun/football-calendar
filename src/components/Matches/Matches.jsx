import React from "react";
import classes from "./Matches.module.css";

function Matches() {
    return (
        <article>
            <h2 className="page-title">Matches</h2>
            <section className={classes.matchesItem}>
                <h3 className={classes.title}>PREMIER LEAGUE</h3>
                <ul className={classes.matchesList}>
                    <li className={classes.matchesListItem}>
                        <div className={classes.teamBlock}>
                            <strong className={classes.teamName}>Arsenal</strong>
                            <img className={classes.teamLogo} src="" alt=""/>
                        </div>
                        -
                        <div className={classes.teamBlock}>
                            <img className={classes.teamLogo} src="" alt=""/>
                            <strong className={classes.teamName}>Chelsea</strong>
                        </div>
                    </li>
                </ul>
            </section>
        </article>
    )
}

export default Matches;