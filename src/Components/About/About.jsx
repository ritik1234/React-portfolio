import React from 'react';
import classes from "./About.module.css";
import PageHeader from '../PageHeader/PageHeader';
import Me from './../../Components/img/ritik.jpg';
const About = () =>{
    return(
        <>
        <div className={classes.AboutMe} id="about">
        <div data-aos="fade-up" data-aos-duration="3000">
         <PageHeader title={"About Me"}></PageHeader>
         <div className={classes.Container}>
             <div className={classes.Text}>
                 <h2>Hello: Iam Ritik</h2>
                 <p>
                     I am an IT student at UIET, Panjab University, Chandigarh.
                 </p>
                 <p>
                 I always try focussing learning new things.
                 </p>
             </div>
             <div className={classes.Photo}>
             <div data-aos="fade-right">
                 <img className={classes.Me} src={Me} alt="My Image"></img>
                 </div>
             </div>
         </div>
        </div>
        </div>
        </>
    );
}

export default About;