import React from "react";
import classes from "./Header.module.css";
import Logo from "../../assets/img/logo.svg";
import Nav from "../Nav/Nav"

function Header() {
    return (
        <header className={classes.header}>
            <img src={Logo} width="61" height="61" alt="Logo"/>
            <Nav />
        </header>
    )
}

export default Header;
