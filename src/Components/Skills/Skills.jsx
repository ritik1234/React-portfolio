import React from 'react';
import classes from "./Skills.module.css";
import PageHeader from '../PageHeader/PageHeader';
import CodeThinking from './../../Components/img/code thinking.svg';

const ListTitleStyle = {fontweight: 900, color:'#9B1FE8', marginbottom:'4px'}
const Listulstyle = {padding:'15px'}
const DS_skills=
     <ul style={Listulstyle}>
         <li style={ListTitleStyle}>Data Science</li>
         <li>
         <ul>
             <li>Python</li>
             <li>OpenCV</li>
             <li>Scikitlearn</li>
             <li>Data Manipulation and Analysis</li>
             <li>Data Visualization</li>
             <li>Deep Learning</li>
         </ul>
         </li>
     </ul>
const programming=
     <ul style={Listulstyle}>
         <li style={ListTitleStyle}>Programming Language</li>
         <li>
             <ul>
                 <li>C Programming Language</li>
                 <li>C++ Programming Language</li>
                 <li>Python</li>
                 <li>JavaScript</li>
             </ul>
         </li>
     </ul>
const frontend=
    <ul style={Listulstyle}>
        <li style={ListTitleStyle}>Frontend</li>
        <li>
            <ul>
                <li>HTML5</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React.js</li>
            </ul>
        </li>
    </ul>
const other=
    <ul style={Listulstyle}>
        <li style={ListTitleStyle}>Other Skills</li>
        <li>
            <ul>
                <li>Tkinter(GUI)</li>
                <li>Git</li>
                <li>GitHub</li>
            </ul>
        </li>
    </ul>    
const Totalskills = [DS_skills,programming,frontend,other] 

const Skills = () =>{
    return(
        <>
        <div className={classes.Skills} id="skills">
        <div  data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="2300">
         <PageHeader title={"What About The Skills?"}/>
         <p>
         Anyone who stops learning is old, whether at twenty or eighty. Anyone who keeps learning stays young. The greatest thing in life is to keep your mind young.
         </p>
         <div className={classes.Container}>
         <img src={CodeThinking} alt="code thinking"/>
          { Totalskills.map(skills => {
              return(
                  <div className={classes.List}>
                  <div data-aos="zoom-in-down" data-aos-duration="4000">
                  {skills}
                  </div>
                  </div>
              );
          })}
         </div> 
        </div>
        </div>
        </>
    );
}

export default Skills;