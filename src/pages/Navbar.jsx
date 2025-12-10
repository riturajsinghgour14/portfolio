import React, { useState } from 'react';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    console.log('Toggle clicked!');
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="header">
      <a href="#" className="logo">Portfolio.</a>

      <nav className="navbar">
        <a href="#" className="active">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

      <div className="dropdown">
        <button
          onClick={toggleDropdown}
          className="btn btn-info"
          id="nav-list"
          type="button"
        >
          <i className="bx bx-menu"></i>
        </button>

        {dropdownOpen && (
          <ul className="dropdown-menu">
            <li><a href="#home" className="dropdown-item active">Home</a></li>
            <li><a href="#about" className="dropdown-item">About</a></li>
            <li><a href="#skills" className="dropdown-item">Skills</a></li>
            <li><a href="#projects" className="dropdown-item">Projects</a></li>
            <li><a href="#contact" className="dropdown-item">Contact Me</a></li>
          </ul>
        )}
      </div>
    </header>
  );
};

export default Navbar;
