import React from "react";
import classes from "./Nav.module.css";
import {NavLink} from "react-router-dom";

export function Nav() {
    return (
        <div className={classes.nav}>
            <div className={classes.item}>
                <NavLink to="/profile" activeClassName={classes.act}>Profile</NavLink>
            </div>
            <div  className={classes.item}>
                <NavLink to="/users" activeClassName={classes.act}>Users</NavLink>
            </div>
            <div  className={classes.item}>
                <NavLink to="/dialogs" activeClassName={classes.act}>Dialogs</NavLink>
            </div>


        </div>
    )
}