import React from 'react';
import { motion } from 'framer-motion';
const NavLink = (props) =>{
    const animatefrom = {opacity:0,y:-40}
    const animateTo = {opacity:1,y:0}
    return(
        <>
           <ul>
                 <motion.li initial={animatefrom} animate={animateTo} transition={{delay:0.05}} onClick={() => props.isMobile && props.closeMobilemenu()}>
                     <a href="#">Home</a>
                 </motion.li>
                 <motion.li initial={animatefrom} animate={animateTo} transition={{delay:0.06}} onClick={() => props.isMobile && props.closeMobilemenu()}>
                 <a href="#about">About</a>
                 </motion.li>
                 <motion.li initial={animatefrom} animate={animateTo} transition={{delay:0.07}} onClick={() => props.isMobile && props.closeMobilemenu()}>
                     <a href="#skills">Skills</a>
                 </motion.li>
                 <motion.li initial={animatefrom} animate={animateTo} transition={{delay:0.08}} onClick={() => props.isMobile && props.closeMobilemenu()}>
                     <a href="#projects">Projects</a>
                 </motion.li>
                 <motion.li initial={animatefrom} animate={animateTo} transition={{delay:0.09}} onClick={() => props.isMobile && props.closeMobilemenu()}>
                     <a href="#contact">Contact</a>
                 </motion.li>
             </ul>
        </>
    );
}

export default NavLink;