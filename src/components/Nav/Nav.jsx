import React from 'react';
import classes from './Nav.module.css';
import { NavLink } from 'react-router-dom';

function Nav(props) {
    const showLIst = props.isNavOpen ? 'show' : '';
    return (
        <nav className={classes.nav}>
            {props.isNavOpen ? (
                <button
                    className={classes.closeNav}
                    aria-label='Close main navigation'
                    type='button'
                    onClick={() => props.closeNav()}
                ></button>
            ) : (
                <button
                    className={classes.showNav}
                    aria-label='Show main navigation'
                    type='button'
                    onClick={() => props.openNav()}
                ></button>
            )}
            <ul className={`${showLIst} ${classes.list}`}>
                <li className={classes.item}>
                    <NavLink exact
                        to='/'
                        className={classes.link}
                        activeClassName={classes.activeLink}
                    >
                        Home
                    </NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink
                        to='/matches'
                        className={classes.link}
                        activeClassName={classes.activeLink}
                    >
                        Matches
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
