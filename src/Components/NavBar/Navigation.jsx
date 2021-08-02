import React from 'react';
import classes from './NavBar.module.css';
import NavLink from "./NavLink";
const Navigation = () =>{
    return(
        <>
        <nav className={classes.Navigation}>
             <NavLink/>
             </nav>
        </>
    );
}

export default Navigation;