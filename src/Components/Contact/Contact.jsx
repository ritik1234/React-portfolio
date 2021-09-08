import React from 'react';
import classes from "./Contact.module.css";
import { FaLinkedinIn, FaGithub, FaHackerrank } from 'react-icons/fa';
import { motion } from "framer-motion"
const handleURL=(url) =>{
    return() =>
         window.open(url,"_blank")
}
const Contact = () =>{
    return(
        <>
        <div className={classes.Contact} id="contact">
        <div data-aos="zoom-in-up">
        <h1>Connect</h1>
        </div>
         <div className={classes.ContactIcons}>
             <motion.div style = {{marginLeft:'2%'}} whileHover={{scale:1.2}}>
             <FaLinkedinIn color='white' size='45px' style={{padding:'1%'}} onClick={handleURL('https://www.linkedin.com/in/ritik-ahlawat-28b1371ab/')}></FaLinkedinIn>
             </motion.div>
             <motion.div style = {{marginLeft:'2%'}} whileHover={{scale:1.2}}>
             <FaGithub color='white' size='45px' style={{padding:'1%'}} onClick={handleURL('https://github.com/ritik1234')}></FaGithub>
             </motion.div>
             <motion.div style = {{marginLeft:'2%'}} whileHover={{scale:1.2}}>
             <FaHackerrank color='white' size='45px' style={{padding:'1%'}} onClick={handleURL('https://www.hackerrank.com/ritikahlawat08')}></FaHackerrank>
             </motion.div>
         </div>
        </div> 
        </>
    );
}

export default Contact;