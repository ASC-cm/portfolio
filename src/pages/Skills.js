import React, { useState, useEffect } from "react";
import "../Styles/Skills.css";


const Skills = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation after the component mounts
    setAnimate(true);
  }, []);

  return (
    <div className="container">
      <div className={`left-section ${animate ? "slide-in-left" : ""}`}>
        <h1>Software Development Skills</h1>
        <p>
          In my tech hub skills, I promise to be proactive with a Quick and Positive Response, which will utilize the Professional and Technical Skills Developed through past work experience
          and skills Acquisition Training. I have methodical, interpersonal skills and a strong drive to see things through to completion.
        </p>
        <p><strong>Pick any of my skills below:</strong></p>
        <div className="courses">
          <div className="course-card">Front/ Back End Web Development (Full Stack with JavaScript and Python)</div>
          <div className="course-card">Artificial Intelligence and Machine Learning (Python Programming)</div>
          <div className="course-card">Android/ iOS App Development (Flutter/Android Studio)</div>
          <div className="course-card">UI/UX Design (Figma User Interface and User Experience Design)</div>
          <div className="course-card">DevSecOps Engineering (Cybersecurity and DevOps)</div>
          <div className="course-card">Data Engineering (Data Analysis for AI and Machine Learning)</div>
        </div>
      </div>
      <div className={`right-section ${animate ? "slide-in-right" : ""}`}>
        <h2>Get started now</h2>
        <p>Fill in your details to connect with me.</p>
        <form>
          <label htmlFor="fullname">Fullname</label>
          <input type="text" id="fullname" placeholder="Ani Simon Chukwuemeka" />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="anisimon755@gmail.com" />

          <button type="submit" className="apply-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Skills;
