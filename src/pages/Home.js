import React from 'react';
import useTypingEffect from '../useTypingEffect'; 
import { useNavigate } from "react-router-dom";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaGitAlt } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiDjango, SiPostgresql } from "react-icons/si";



const phrases = [
  "Hi, I'm Ani, Simon Chukwuemeka.",
  "I am a Full-stack web developer.",
];

const services = [
  { name: "HTML", proficiency: "100%", icon: <FaHtml5 /> },
  { name: "CSS", proficiency: "100%", icon: <FaCss3Alt /> },
  { name: "JavaScript", proficiency: "80%", icon: <FaJs /> },
  { name: "React.js", proficiency: "100%", icon: <FaReact /> },
  { name: "Next.js", proficiency: "60%", icon: <SiNextdotjs /> },
  { name: "Tailwind CSS", proficiency: "60%", icon: <SiTailwindcss /> },
  { name: "Python", proficiency: "50%", icon: <FaPython /> },
  { name: "Django", proficiency: "100%", icon: <SiDjango /> },
  { name: "PostgreSQL", proficiency: "70%", icon: <SiPostgresql /> },
  { name: "Version Control", proficiency: "100%", icon: <FaGitAlt /> },
];

const Home = () => {
  const displayText = useTypingEffect(phrases);
  const navigate = useNavigate(); 

  const goToLogin = () => {
    navigate("/Education");
  };

  document.addEventListener("DOMContentLoaded", function () {
    const timelineItems = document.querySelectorAll(".timeline-item");
  
    const observerOptions = {
      root: null, // Use the viewport as the root
      rootMargin: "0px",
      threshold: 0.5 // Trigger when at least 50% of the item is visible
    };
  
    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const item = entry.target;
          item.classList.remove("in-view"); // Remove the class first
          void item.offsetWidth; // Trigger reflow to reset animation
          item.classList.add("in-view"); // Add the class back to re-trigger the animation
        }
      });
    };
  
    const observer = new IntersectionObserver(observerCallback, observerOptions);
  
    timelineItems.forEach(item => {
      observer.observe(item);
    });
  });
  

  return (
    <>
      <section className="hero">
        <div className="text-content">
          <div id="dynamicText">{displayText}</div>
          <h3>
            Proactive with a
            <span className="highlight"> Quick and Positive Response</span>, try
            us Today
          </h3>
          <div className="link-to">
            <a href="https://www.linkedin.com/in/ASC-cm">
              <img
                src="images/linked.png"
                alt="linked"
                width={20}
                height={20}
              ></img>
            </a>
            <a href="https://github.com/ASC-cm">
              <img
                src="images/github.png"
                alt="github"
                width={20}
                height={20}
              ></img>
            </a>
            <a href="https://x.com/Aninwa_undies">
              {" "}
              <img
                src="images/twitter1.png"
                alt="twitter"
                width={20}
                height={20}
              ></img>
            </a>
            <a href="https://web.facebook.com/Eminel55555">
              {" "}
              <img
                src="images/facebook.png"
                alt="facebook"
                width={20}
                height={20}
              ></img>
            </a>
            <a href="mailto:anisimon755@gmail.com">
              <img
                src="images/message.png"
                alt="email"
                width={20}
                height={20}
              ></img>
            </a>
          </div>
          <div className="buttons">
            <a href="https://wa.me/+2347034418309" className="btn primary">
              Hire Me
            </a>
            <button onClick={goToLogin} className="btn secondary2">
              Resume
            </button>
          </div>
        </div>
        <div className="images">
          <img src="images/me.jpg" alt="Developer 1" className="circular" />
        </div>
      </section>
      {/* Skills Section */}
      <div className="dashboard-container">
        <div className="header">
          <h1>My Skills</h1>
          <button
            className="sign-in-button"
            onClick={() => navigate("/Skills")}
          >
            View More →
          </button>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              {/* Show Proficiency */}
              <span className="proficiency-label">
                {service.proficiency ? service.proficiency : "No Data"}
              </span>
              <div className="service-icon">{service.icon}</div>
              <p className="service-name">{service.name}</p>
            </div>
          ))}
        </div>
      </div>

      <section className="projects" id="works">
        <h2>My Works</h2>
        <p>Here are some of my projects hosted on github:</p>
        <div className="projects-grid">
          <div className="project-card">
            <img
              src="images/work1.png"
              alt="clothing Website"
              className="default-img"
            ></img>
            <img
              src="images/work8.png"
              alt="clothing Website Hover"
              className="hover-img"
            ></img>
            <h3>Clothing E-commerce Website</h3>
            <p>
              A website where customers can place order on wears, be it
              Juwelries, Cloths or Foot-wears and pay with either card or
              tranfer.
            </p>
            <a href="https://github.com/ASC-cm/E-commerce-site.git">
              View Project codes
            </a>
          </div>
          <div className="project-card">
            <img
              src="images/work4.png"
              alt="Tech Website"
              className="default-img"
            />
            <img
              src="images/work5.png"
              alt="Tech Website Hover"
              className="hover-img"
            />
            <h3>Technology Website</h3>
            <p>
              A website for talented developers and companies that need there
              skills, and for people willing or that want to undergo any tech
              skills.
            </p>
            <a href="https://github.com/ASC-cm/my-app.git">
              View Project codes
            </a>
          </div>
          <div className="project-card">
            <img
              src="images/work3.png"
              alt="resturant Website"
              className="default-img"
            />
            <img
              src="images/work9.png"
              alt="resturant Website Hover"
              className="hover-img"
            />
            <h3>Resturant Website</h3>
            <p>
              A Resturant website where individuals can place order on foods and
              drinks and get them deliver to them, equally book for a space.
            </p>
            <a href="https://github.com/ASC-cm">View Project codes</a>
          </div>
          <div className="project-card">
            <img
              src="images/work2.png"
              alt="Tech Website"
              className="default-img"
            />
            <img
              src="images/work6.png"
              alt="Tech Website Hover"
              className="hover-img"
            />
            <h3>E-learning Tech Website</h3>
            <p>
              An Technology website, where you can undergo both online/offline
              tech courses.
            </p>
            <a href="https://github.com/ASC-cm">View Project codes</a>
          </div>
          <div className="project-card">
            <img
              src="images/Hotel.png"
              alt="Tech Website"
              className="default-img"
            />
            <img
              src="images/Hotel 2.png"
              alt="Tech Website Hover"
              className="hover-img"
            />
            <h3>Hotel website</h3>
            <p>
              A complete hotel website with the backend integration via Django_rest_framework.
            </p>
            <a href="https://github.com/ASC-cm">View Project codes</a>
          </div>
          <div className="project-card">
            <img
              src="images/blog1.png"
              alt="Photography Website"
              className="default-img"
            />
            <img
              src="images/blog2.png"
              alt="Photography Website Hover"
              className="hover-img"
            />
            <h3>A Blog Website</h3>
            <p>A News Blog site For adding,editing and deleting blog news, fully interacting with the backkend.</p>
            <a href="https://github.com/ASC-cm">View Project codes</a>
          </div>
        </div>
      </section>
      <section className="timeline">
        <h2 className="timeline-title">Education & Achievements</h2>
        <div className="timeline-container">
          <div className="timeline-item timeline-right" data-aos="fade-right">
            <h3>Wedigraf Hub Tech</h3>
            <p>June 2024 - Dec 2024</p>
            <p>
              Full-stack Web Development. Focused on building responsive web
              applications/website.
            </p>
          </div>
          <div className="timeline-item timeline-left" data-aos="fade-left">
            <h3>National Youth Service Corps (NYSC)</h3>
            <p>Octo 2021 - Octo 2022</p>
            <p>
              Serving our Father land, where i gain knowledge of what
              Programming is all about.
            </p>
          </div>
          <div className="timeline-item timeline-right" data-aos="fade-right">
            <h3>Skillup Training Academy (STA)</h3>
            <p>Sept 2017 - Dec 2017</p>
            <p>
              Training people to achieve greatness, Career and Entrepreneurship
              Development.
            </p>
          </div>
          <div className="timeline-item timeline-left" data-aos="fade-left">
            <h3>Career Link And Skill Acquisition Company</h3>
            <p>Sept 2015 - March 2016</p>
            <p>
              Certificate of Excellence with a focus on Information Technology
              and Internet opportunities.
            </p>
          </div>
        </div>
        <button onClick={goToLogin} className="btn secondary">
          View more
        </button>
      </section>
    </>
  );
}


export default Home;