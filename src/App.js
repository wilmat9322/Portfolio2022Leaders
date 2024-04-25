import React, { useState } from 'react'
import GlobalStyle from './globalStyles'
import {Navbar, Sidebar, Hero, About, Education, Awards, Skills, Windows, Projects, Experiences, Contact, Footer} from './components/manager';
import {BrowserRouter as Router} from 'react-router-dom'
import { sectionHero, sectionAbout, sectionEducation, sectionAwards, sectionSkills, sectionWindows, sectionProjects, sectionExperiences, sectionContact} from './data/homeData';


const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }
  
  return (
    <Router>
      <GlobalStyle /> 
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <Hero {...sectionHero}/>
      <About {...sectionAbout}/>
      <Education {...sectionEducation}/>
      <Awards {...sectionAwards}/>
      <Skills {...sectionSkills}/>
      <Windows {...sectionWindows}/>
      <Projects {...sectionProjects}/>
      <Experiences {...sectionExperiences}/>
      <Contact {...sectionContact}/> 
      <Footer />
   </Router>
  );
}

export default App;