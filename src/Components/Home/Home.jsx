import React from 'react';
import classes from './Home.module.css';
import Code from './../../Components/img/code.svg';
import Coder from './../../Components/img/coder.svg';
const Home = () =>{
    return(
        <>
        <div className={classes.Home} id="home">
         <div className={classes.Container}>
         <div data-aos="fade-right" data-aos-duration="1500">
             <h1 className={classes.Hello}>
                 Welcome To My Portfolio
             </h1>
             </div>
             <div data-aos="fade-left" data-aos-duration="1500">
             <h1>You can find my work, thoughts, and ideas here.</h1> 
             </div>
         </div>
         <img className={classes.Code} src={Code} alt="code"></img>
         <img className={classes.Coder} src={Coder} alt="coder"></img>
         </div>
        </>
    );
}

export default Home;