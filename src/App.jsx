import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import About from './Components/About/About'
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const App = () =>{
    return(
        <>
        <div className="App"> 
        <NavBar/>
        <Home/>
        <About/>
        <Skills/>
        <Projects></Projects>
        <Contact></Contact>
        </div>
        </>
    );
}

export default App;