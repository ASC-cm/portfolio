import { Link } from "react-router-dom";
import React from 'react';

const Header = () => {
  return (
  <>
    <header>
      <div className="navbar">
        <h1 className="logo">ANI, SIMON CHUKWUEMEKA</h1>
        <nav>
            <ul className="nav-links">
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
      </div>
    </header>
  </>
  )}


  export default Header;