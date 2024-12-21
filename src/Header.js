import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./Header.css"; // Make sure you have the CSS styles for the navbar

const Header = () => {
  // State to track the visibility of the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header>
        <div className="navbar">
          <h1 className="logo">ANI, SIMON CHUKWUEMEKA</h1>
          <nav>
            <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Skills">Skills</Link>
              </li>
              <li>
                <Link to="/Education">Education</Link>
              </li>
              <li>
                <Link to="https://wa.me/+2347034418309">Hire a Developer</Link>
              </li>
              <li>
                <Link to="/Contact">Contact</Link>
              </li>
            </ul>
          </nav>
          <div className="hamburger" onClick={toggleMenu}>
            &#9776; {/* Hamburger icon */}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
