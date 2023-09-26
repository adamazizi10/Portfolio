import React from 'react';
const Navbar = () => {
  return (
    <nav className="navStuff bg-light navbar navbar-expand-lg shadow-sm p-4">
      <div className="container-fluid d-sm-flex flex-column flex-lg-row justify-content-center justify-content-lg-between">
        <div className="navbar-brand mb-4 mb-md-0 mb-lg-0"></div>
        <div>
          <a href="#home" className="link nav-phone">
            Home
          </a>
          <a href="#AboutMe" className="link nav-phone">
            About Me
          </a>
          <a href="#skills" className="link nav-phone">
            Skills
          </a>
          <a href="#experience" className="link nav-phone">
            Experience
          </a>
          <a href="#projects" className="link nav-phone ">
            Projects
          </a>
          <a href="#contact" className="link">
            Contact
          </a>
        </div>
        <div>

        

        {/* 
          <a href={resume} download >
            <button className="btn btn-success ms-lg-4 px-4 resume-btn" type="button">
               My Resume{' '}
              <FaArrowCircleDown/>
            </button>
          </a>

       */}
        </div>
      </div>
      <style>
        {`
          .resume-btn{
            font-weight: 700;
          }
          .btn-success {
            color: #fff;
            background-color: #3edd8e;
            border-color: #3edd8e;
          }
          .btn-success:hover {
            color: #3edd8e;
            background-color: white;
            border-color: #3edd8e;
          }
        `}
      </style>
    </nav>
  );
};


export default Navbar;
