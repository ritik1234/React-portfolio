import React, { useState } from 'react';
import classes from './NavBar.module.css';
import NavLink from './NavLink';
import { CgMenuRound, CgCloseO } from 'react-icons/cg';
const MobileNavigation = () =>{
    const [Open,setOpen] = useState(false);
     const closeMobilemenu = () => setOpen(false);
    const hamburgerIcon=<CgMenuRound className={classes.Hamburger} size='45px' color='white' onClick={() => setOpen(!Open)}/>
    const closeIcon = <CgCloseO className={classes.Hamburger} size='45px' color='white' onClick={() => setOpen(!Open)}/>
    return(
        <>
        <nav className={classes.MobileNavigation}>
        {Open ? closeIcon : hamburgerIcon}
        {Open && <NavLink isMobile = {true} closeMobilemenu={closeMobilemenu}/>}
             </nav>
        </>
    );
}

export default MobileNavigation; 