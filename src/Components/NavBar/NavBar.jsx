import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TbGridDots } from 'react-icons/tb';
import {FaWhatsapp} from 'react-icons/fa';
import './navbar.css';


function NavBar() {


  // Toggling the navbar
  const [active, setActive] = useState('navBar');
  const [isActive, setIsActive] = useState(false);

  // Showing the navbar
  const showNav = () => {
    if (!isActive) {
      setActive('navBar activeNavbar');
      setIsActive(true);
    } else {
      setActive('navBar');
      setIsActive(false);
    }
  };



  

  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <h1>
ICLEB            </h1>
          </a>
        </div>
      
 

        <div className={active}> 
        
          <ul className="navLists flex">
           
          
           
              <li className="navItem">
                <a href="#about" className="navLink">
                  About
                </a>
              </li>
           
            
             <li className="navItem">
              <a href="#services" className="navLink">
                Services
              </a>
            </li>
            
            <li className="navItem">
              <a href="#software" className="navLink">
                Software Management
              </a>
            </li>
         
              <li className="navItem">
                <a href="#work" className="navLink">
Working with Us                </a>
              </li>
              <li className="navItem">
                <a href="https://wa.me/96176528129" className="navLink">
Contact Us <FaWhatsapp/>              </a>
              </li>
          </ul>
        </div>
        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
      </header>
      
    </section>
  );
}

export default NavBar;
