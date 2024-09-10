import React from 'react'
import image from '../assets/Home.png'
import resume from '../assets/Resume.pdf'


const Home = () => {
  return (
<div className='home-content d-flex align-items-center justify-content-center'>
        <div className="left1">
          <h3>Hello, I am</h3>
          <h1>Rituraj Singh Gour</h1>
          <h3 className='text-animation'>And I'm a <span></span></h3>
          <p>I'm a MERN stack developer who loves turning ideas into real websites. I use MongoDB, Express.js, React, and Node.js to build awesome web apps. I enjoy creating things that look good and work smoothly. Let's build something cool together!</p>

      <span>
      <a href="https://github.com/riturajsinghgour14" target='_blank'><i className='bx bxl-github'></i></a>
      <a href="https://www.linkedin.com/in/rituraj-singh-gour-659b10293/" target='_blank'><i className='bx bxl-linkedin'></i></a>
      <a href="https://join.skype.com/invite/rBIGFUSme3rj" target='_blank'><i className='bx bxl-skype'></i></a>
      <a href="mailto:riturajsinghgour8827@gmail.com" target='_blank'><i className='bx bxl-gmail'></i></a>
      </span>
    
        {/* <a href="#about" className='btn-box'>More About Me</a> */}
        <a href={resume} download="Rituraj_Singh_Gour_Resume.pdf" className="download-btn">Download Resume</a>
      
        </div>

        <div className="right1">
        <img src={image} alt="" />
      </div>
      </div>
    
  )
}

export default Home