import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ClipLoader from "react-spinners/ClipLoader";
import "../Styles/Skills.css";

// Configure axios once (better to put this in a separate config file)
const api = axios.create({
  baseURL:
    process.env.REACT_APP_API_URL || "https://backendb-tcy5.onrender.com/",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000, // 10 seconds timeout
});

const Skills = () => {
  const [animate, setAnimate] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ fullname: "", email: "" });

  useEffect(() => {
    setAnimate(true);
  }, []);

  const handleChange = useCallback((e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      // Frontend validation
      if (!formData.fullname.trim() || !formData.email.trim()) {
        toast.error("Please fill in all fields");
        return;
      }

      // Email validation
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        toast.error("Please enter a valid email address");
        return;
      }

      setLoading(true);

      try {
        const response = await api.post("submit/", {
          fullname: formData.fullname.trim(),
          email: formData.email.trim(),
        });

        if (response.status === 201) {
          toast.success("Message sent successfully!");
          setFormData({ fullname: "", email: "" });
        }
      } catch (error) {
        console.error("Submission error:", error);

        if (error.response) {
          // Backend validation errors
          const errors = error.response.data;
          if (typeof errors === "object") {
            const errorMessages = Object.values(errors).flat();
            toast.error(errorMessages.join(" ") || "Submission failed");
          } else {
            toast.error(errors || "Submission failed");
          }
        } else if (error.request) {
          // No response received
          toast.error("Network error. Please check your connection.");
        } else {
          // Other errors
          toast.error("An unexpected error occurred. Please try again.");
        }
      } finally {
        setLoading(false);
      }
    },
    [formData]
  );

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
        theme="colored"
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
            {[
              "Front/Back End Web Development",
              "Artificial Intelligence and Machine Learning",
              "Mobile App Development",
              "UI/UX Design",
              "DevSecOps Engineering",
              "Data Engineering",
            ].map((skill, index) => (
              <div key={index} className="course-card">
                {skill}
              </div>
            ))}
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
              maxLength={100}
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
            />

            <button
              type="submit"
              className="apply-button"
              disabled={loading || !formData.fullname || !formData.email}
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
