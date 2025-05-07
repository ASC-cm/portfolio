import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ClipLoader from "react-spinners/ClipLoader";
import "../Styles/Skills.css";

const Skills = () => {
  const [animate, setAnimate] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ fullname: "", email: "" });

   useEffect(() => {
     setAnimate(true);
   }, []);

   const handleChange = (e) => {
     setFormData({ ...formData, [e.target.id]: e.target.value });
   };

   const handleSubmit = async (e) => {
     e.preventDefault();
     setLoading(true);

     try {
       await axios.post("/api/submit/", formData);
       toast.success("Form submitted successfully!");
       setFormData({ fullname: "", email: "" });
     } catch (error) {
       toast.error("Error submitting form. Please try again.");
     } finally {
       setLoading(false);
     }
   };

  return (
    <>
      <ToastContainer />
      <div className="container">
        <div className={`left-section ${animate ? "slide-in-left" : ""}`}>
          <h1>Software Development Skills</h1>
          <p>
            In my tech hub skills, I promise to be proactive with a Quick and
            Positive Response, which will utilize the Professional and Technical
            Skills Developed through past work experience and skills Acquisition
            Training. I have methodical, interpersonal skills and a strong drive
            to see things through to completion.
          </p>
          <p>
            <strong>Pick any of my skills below:</strong>
          </p>
          <div className="courses">
            <div className="course-card">
              Front/ Back End Web Development (Full Stack with JavaScript and
              Python)
            </div>
            <div className="course-card">
              Artificial Intelligence and Machine Learning (Python Programming)
            </div>
            <div className="course-card">
              Android/ iOS App Development (React-native)
            </div>
            <div className="course-card">
              UI/UX Design (Figma User Interface and User Experience Design)
            </div>
            <div className="course-card">
              DevSecOps Engineering (Cybersecurity and DevOps)
            </div>
            <div className="course-card">
              Data Engineering (Data Analysis for AI and Machine Learning)
            </div>
          </div>
        </div>
        <div className={`right-section ${animate ? "slide-in-right" : ""}`}>
          <h2>Get started now</h2>
          <p>Fill in your details to connect with me.</p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="fullname">Fullname</label>
            <input
              type="text"
              id="fullname"
              placeholder="Ani Simon Chukwuemeka"
              value={formData.fullname}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="anisimon755@gmail.com"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <button type="submit" className="apply-button" disabled={loading}>
              {loading ? <ClipLoader size={20} color="#fff" /> : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Skills;
