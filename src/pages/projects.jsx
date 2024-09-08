import React from 'react'
import project1 from '../assets/cryptomania.png'
import project2 from '../assets/feedBack.png'
import project3 from '../assets/Khatabook.png'
import project4 from '../assets/Weather.png'
import project5 from '../assets/Todo.png'
import project6 from '../assets/QR-Generator.png'
import project7 from '../assets/StopWatch.png'


const Projects = () => {
  return (
    <section id='projects' className="project-section">
      <h3 className='mt-4'>MY <span>PROJECTS</span></h3>

      <div className="projects">
      <div className="box1">
        <img src={project1} alt="" />
        <div className="layer">
          <h4>Cryptomania</h4>
          <p>Build on Redux toolkit, MaterialUI for UI, integrated trending crypto API using axios.</p>
          <a href="https://crypto-app-eight-ruddy.vercel.app/" target='_blank'><i className='bx bx-link-external'></i></a>
        </div>
         </div>

      <div className="box1">
        <img src={project2} alt="" />
        <div className="layer">
          <h4>FeedBack App</h4>
          <p>Build using JavaScript, integrated Weather API using fetch method to fetch anywhere weather data..</p>
          <a href="https://riturajsinghgour14.github.io/feedbackapp/" target='_blank'><i className='bx bx-link-external'></i></a>
        </div>
      </div>

      <div className="box1">
        <img src={project3} alt="" />
        <div className="layer">
          <h4>KhataBook</h4>
          <p>Build on React.js, using Bootstrap for UI design, applying Context method . </p>
          <a href="https://khatabook-context-fawn.vercel.app/" target='_blank'><i className='bx bx-link-external'></i></a>
        </div>
      </div>

      <div className="box1">
        <img src={project4} alt="" />
        <div className="layer">
          <h4>Weather API</h4>
          <p>Build using JavaScript, integrated Weather API using fetch method to fetch anywhere weather data.</p>
          <a href="https://weather-app-psi-sable.vercel.app/" target='_blank'><i className='bx bx-link-external'></i></a>
        </div>
      </div>

      <div className="box1">
        <img src={project5} alt="" />
        <div className="layer">
          <h4>React Todo</h4>
          <p>Build on React, here we can save todos, edit and delete todos. </p>
          <a href="https://todo-context-topaz.vercel.app/" target='_blank'><i className='bx bx-link-external'></i></a>
        </div>
      </div>

      <div className="box1">
        <img src={project6} alt="" />
        <div className="layer">
          <h4>QR Generator</h4>
          <p>Build on JavaScript, intergrated QR api using fetch method to generate QR for entered URL or text.</p>
          <a href="https://riturajsinghgour14.github.io/QR-generator/" target='_blank'><i className='bx bx-link-external'></i></a>
        </div>
      </div>

      <div className="box1">
        <img src={project7} alt="" />
        <div className="layer">
          <h4>Stopwatch</h4>
          <p>Build on JavaScript, here we can start and reset a time of StopWatch.</p>
          <a href="https://riturajsinghgour14.github.io/stopwatch/" target='_blank'><i className='bx bx-link-external'></i></a>
        </div>
      </div>
      </div>

    </section>
  )
}

export default Projects


