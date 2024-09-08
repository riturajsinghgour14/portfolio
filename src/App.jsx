import React from 'react'
import Navbar from './pages/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/projects'
import Footer from './pages/Footer'
import Contact from './pages/Contact'

const App = () => {
  return (
    <>
    <section className='home'>
     <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </section>
     
  </>
  )
}

export default App
