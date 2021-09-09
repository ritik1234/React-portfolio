import React from 'react';
import classes from "./Projects.module.css";
import './project.css';
import { motion } from "framer-motion";
const handleURL=(url) =>{
    return() =>
         window.open(url,"_blank")
}

const Project = () =>{
    return(
        <>
        <h1 className={classes.head}><div data-aos="zoom-in" data-aos-duration="3500">Projects</div></h1>
        <div className={classes.Project} id="projects">
        <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
        <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="3000">
         <div className="card">
  <div className="card-body">
    <h2 className="card-title">Website</h2>
    <p className="card-text">Website using HTML,CSS,JS and Bootstrap which provide the C++ programming Tutorials in a easy language.</p>
    <div className="card-footer">
    <motion.a onClick={handleURL('https://github.com/sagar24263/Project-1st-Year.git')} className="btn btn-primary" whileHover={{scale:1.15}}>Repo Link</motion.a>
     </div>
  </div>
  </div>
  </div>
  </div>
  <div className="col">
  <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="3000">
  <div className="card">
  <div className="card-body">
    <h2 className="card-title">Flower Class Predictor</h2>
    <p className="card-text">This project used ANN model to predict flower class by using Iris Flower Dataset and deployed on heroku by using Flask.</p>
    <div className="card-footer">
    <motion.a onClick = {handleURL('https://flower-model.herokuapp.com/')} className="btn btn-primary" whileHover={{scale:1.15}}>Project Link</motion.a>
    </div> 
  </div>
  </div>
  </div>
  </div>
  <div className="col">
  <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="3000">
  <div className="card">
  <div className="card-body">
    <h2 className="card-title">Notepad GUI</h2>
    <p className="card-text">This is a Notepad GUI created by using Python Tkinter.</p>
    <div className="card-footer">
    <motion.a onClick={handleURL('https://github.com/ritik1234/notepad.git')} className="btn btn-primary" whileHover={{scale:1.15}}>Repo Link</motion.a>
     </div>
  </div>
</div>
</div>
</div>
<div className="col">
  <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="3000">
  <div className="card">
  <div className="card-body">
    <h2 className="card-title">Facial expression Recognition.</h2>
    <p className="card-text"> 
    In this I used OpenCV to detect our face and a deep learning model that is built on FER2013 dataset which predict some result then it is mapped with the corresponding emoji. I also uses Python Tkinter GUI to display the camera window and emoji at the same place.</p>
    <div className="card-footer">
    <motion.a onClick={handleURL('https://github.com/ritik1234/Facial_expression_recognition.git')} className="btn btn-primary" whileHover={{scale:1.15}}>Repo Link</motion.a>
     </div>
  </div>
</div>
</div>
</div>
<div className="col">
  <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="3000">
  <div className="card">
  <div className="card-body">
    <h2 className="card-title">Portfolio website</h2>
    <p className="card-text">In this i used HTML, CSS, Javascript, React.js and to make it animated i used AOS animation.</p>
    <div className="card-footer">
    <motion.a onClick={handleURL('https://github.com/ritik1234/React-portfolio.git')} className="btn btn-primary" whileHover={{scale:1.15}}>Repo Link</motion.a>
     </div>
  </div>
</div>
</div>
</div>
</div>
        </div>
        </>
    );
}

export default Project;