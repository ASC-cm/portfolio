import React from "react";
import "../Footer.css"; 

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="section">
          <h3>About Me</h3>
          <p>I am dedicated to providing the best tech solutions and resources for my clients and developers worldwide.</p>
        </div>
        <div className="section">
          <h3>Quick Links</h3>
          <ul className="list">
            <li>
              <a href="/" className="link">Home</a>
            </li>
            <li>
              <a href="https://wa.me/+2347034418309" className="link">Services</a>
            </li>
            <li>
              <a href="/Contact" className="link">Contact Me</a>
            </li>
            <li>
              <a href="/" className="link">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="section">
          <h3>Follow Me</h3>
          <div className="social-icons">
            <a href='https://web.facebook.com/Eminel55555' className="icon"> <img src='images/facebook.png' alt='facebook icon' width={20} height={20} /></a>
            <a href='https://x.com/Aninwa_undies' className="icon"> <img src='images/twitter1.png' alt='twitter' width={20} height={20} /></a>
            <a href='https://www.linkedin.com/in/ASC-cm' className="icon"><img src='images/linked.png' alt='linked' width={20} height={20} /></a>
            <a href='https://github.com/ASC-cm' className="icon"><img src='images/github.png' alt='github icon' width={20} height={20} /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {currentYear} ASC-cm. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
