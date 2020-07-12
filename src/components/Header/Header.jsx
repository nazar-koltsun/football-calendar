import React from "react";
import classes from "./Header.module.css";
import Logo from "../../assets/img/logo.svg";
import NavContainer from "../Nav/NavContainer";

function Header() {
    return (
        <header className={classes.header}>
            <img src={Logo} width="61" height="61" alt="Logo" />
            <NavContainer />
        </header>
    );
}

export default Header;
