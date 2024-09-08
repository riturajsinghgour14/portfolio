import React, { useState } from 'react'

const Navbar = () => {

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
<header className='header'>
  <a href="#" className='logo'>Portfolio.</a>

  <nav className='navbar'>
    <a href="#" className='active'>Home</a>
    <a href="#about">About</a>
    <a href="#skills">Skills</a>
    <a href="#projects" >Projects</a>
    <a href="#contact">Contact</a>
  </nav>

  <div className="dropdown">

  <button onClick={toggleDropdown} className="btn btn-info" id='nav-list' type="button" data-bs-toggle="dropdown" aria-expanded="false">
    <i className='bx bx-menu' ></i>
    </button>

   { dropdownOpen && (
     <ul className="dropdown-menu">
       <li><button className="dropdown-item" type="button"><a href="#home" className='active'>Home</a></button></li>
       <li><button className="dropdown-item" type="button"><a href="#about">About</a></button></li>
       <li><button className="dropdown-item" type="button"><a href="#skills">Skills</a></button></li>
       <li><button className="dropdown-item" type="button"><a href="#projects" >Projects</a></button></li>
       <li><button className="dropdown-item" type="button"><a href="#contact">Contact Me</a></button></li>
     </ul>
   )}

</div>
</header>
  )
}

export default Navbar