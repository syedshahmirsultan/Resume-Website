import React from 'react'
import NavBar from './Components/NavBar';
import Home from './sections/Home';
import AboutMe from './sections/AboutMe'
import Skills from './sections/Skills';
import Interests from './sections/Interests';
import Education from './sections/Education';
import Goals from './sections/Goals';
import Footer from './sections/Footer';

function page() {
  return (
    <main className="h-screen">
    <div><Home/>
    <AboutMe/>
    <Skills/>
    <Interests/><Education/>
    <Goals/><Footer/>
    </div></main>
  )
}

export default page;