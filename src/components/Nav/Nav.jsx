import React from 'react';
import classes from './Nav.module.css';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className={classes.nav}>
      <button className={classes.toggleBtn} aria-label="Show or hide main navigation"></button>
      <ul className={classes.list}>
        <li className={classes.item}>
          <NavLink to="/" activeClassName={classes.active}>Matches</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
