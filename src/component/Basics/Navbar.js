import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';


const NavBar = () => {
  return (
    <nav className='main-nav'>
      {/* Logo Section */}
      <div className='logo'>
        <img src="./images/logo.png" width="90" height="80" alt="Logo" />
        <h1>Restorent.com</h1>
      </div>
      
      {/* Menu Section */}
      <div className='menu-link'>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/service">Service</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/Resturant">Resturant</Link></li>
          <li><Link to="/GeneratePassword">GeneratePassword</Link></li>
          <li><Link to="/Country">Country</Link></li>
        </ul>
      </div>

      {/* Social Media Links */}
      <div className='social-media'>
        <ul className='social-media-desktop'>
          <li className="nav-item">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
          <li className="nav-item">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
          <li className="nav-item">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;