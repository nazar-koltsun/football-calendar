import React from "react";
import classes from "./Nav.module.css";
import { NavLink } from "react-router-dom";

function Nav(props) {
    console.log(props);
    return (
        <nav className={classes.nav}>
            {props.navigation.isNavOpen ? (
                <button
                    className={classes.closeNav}
                    aria-label="Close main navigation"
                    type="button"
                    onClick={() => props.closeNav()}
                ></button>
            ) : (
                <button
                    className={classes.showNav}
                    aria-label="Show main navigation"
                    type="button"
                    onClick={() => props.openNav()}
                ></button>
            )}
            {props.navigation.isNavOpen ? (
                <ul className={classes.list}>
                    <li className={classes.item}>
                        <NavLink to="/" activeClassName={classes.active}>
                            Matches
                        </NavLink>
                    </li>
                </ul>
            ) : null}
        </nav>
    );
}

export default Nav;
