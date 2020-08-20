import React from 'react';
import { StepConnector } from '@material-ui/core';
import Banner from '../components/Banner/Banner';
import NavBar from '../components/NavBar/NavBar';
import Skills from '../components/Skills/Skills';
import Education from '../components/Education/Education';
import Experience from '../components/Experience/Experience';
import Projects from '../components/Projects/Projects';

const Home = () => {
    return ( 
        <div>
            <NavBar/>
            <Banner/>

            <Skills/>

            <Education/>

            <Experience/>

            <Projects/>
            
        </div>
     );
}
 
export default Home;