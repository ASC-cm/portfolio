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

  const API_URL =
    process.env.REACT_APP_API_URL ||
    "https://backendb-tcy5.onrender.com/api/submit/";

  useEffect(() => {
    setAnimate(true);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Frontend validation
    if (!formData.fullname || !formData.email) {
      toast.error("Please fill in all fields");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        API_URL,
        {
          fullname: formData.fullname, // Matches serializer field name
          email: formData.email, // Matches serializer field name
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201) {
        toast.success("Message sent successfully!");
        setFormData({ fullname: "", email: "" });
      }
    } catch (error) {
      console.error("Submission error:", error.response?.data);
      if (error.response?.data) {
        // Display backend validation errors if available
        const errors = Object.values(error.response.data).flat();
        toast.error(errors.join(" ") || "Submission failed");
      } else {
        toast.error("Network error. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
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
            <div className="course-card">Front/Back End Web Development</div>
            <div className="course-card">
              Artificial Intelligence and Machine Learning
            </div>
            <div className="course-card">Mobile App Development</div>
            <div className="course-card">UI/UX Design</div>
            <div className="course-card">DevSecOps Engineering</div>
            <div className="course-card">Data Engineering</div>
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
              placeholder="Your full name"
              value={formData.fullname}
              onChange={handleChange}
              required
              minLength={2}
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <button
              type="submit"
              className="apply-button"
              disabled={loading}
              aria-busy={loading}
            >
              {loading ? (
                <ClipLoader size={20} color="#fff" />
              ) : (
                "Submit Message"
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Skills;
