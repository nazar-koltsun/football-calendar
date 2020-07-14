import React from "react";
import classes from "./Nav.module.css";
import { NavLink } from "react-router-dom";

function Nav(props) {
    console.log(props);
    const showLIst = props.navigation.isNavOpen ? "show" : "";
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
            <ul className={`${showLIst} ${classes.list}`}>
                <li className={classes.item}>
                    <NavLink to="/" activeClassName={classes.active}>
                        Matches
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
