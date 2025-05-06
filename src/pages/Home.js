import React from 'react';
import useTypingEffect from '../components/useTypingEffect'; 
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
        <p>Here are some of my recent projects hosted online:</p>
        <div className="projects-grid">
          <div className="project-card">
            <img
              src="images/sch1.png"
              alt="resturant Website"
              className="default-img"
            />
            <img
              src="images/sch2.png"
              alt="resturant Website Hover"
              className="hover-img"
            />
            <h3>School Website</h3>
            <p>
              A modern school website that is dynamic, user-friendly digital
              platform designed to enhance communication, engagement, and
              functionality for students, parents, staff, and the broader
              community. Built with a clean and responsive design, it ensures
              seamless accessibility across devices—desktops, tablets, and
              smartphones.
            </p>
            <a href="https://heaven-tan.vercel.app/">View Project Online</a>
          </div>
          <div className="project-card">
            <img
              src="images/port1.png"
              alt="portal Website"
              className="default-img"
            />
            <img
              src="images/port2.png"
              alt="portal Website Hover"
              className="hover-img"
            />
            <h3>School Portal Website</h3>
            <p>
              The school portal that is comprehensive, secure, and modern
              web-based platform designed to streamline academic and
              administrative activities for students, staff, and school
              administrators. It provides centralized access to essential
              features that support academic performance tracking such as Result
              Checker.
            </p>
            <a href="https://portal-three-topaz.vercel.app/">
              View Project Online
            </a>
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
              A hotel website that is elegant, responsive, and fully functional
              digital platform designed to attract guests, streamline bookings,
              and showcase the unique offerings of a hospitality establishment.
              It combines visual appeal with practical tools to provide a
              seamless user experience for travelers and an efficient management
              system for hotel staff.
            </p>
            <a href="https://hotel-website-nine-zeta.vercel.app/">
              View Project Online
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
              A modern tech website that is sleek, high-performance digital
              platform tailored for technology companies, startups, product
              developers, or service providers. It serves as both a showcase of
              innovation and a central hub for client engagement, product
              information, and business growth.
            </p>
            <a href="https://my-app-ruddy-mu-65.vercel.app/">
              View Project Online
            </a>
          </div>
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
              A modern e-commerce website that is fully responsive, user-centric
              digital platform designed to facilitate seamless online shopping
              experiences for customers while providing powerful management
              tools for store owners. Built with performance, security, and
              scalability in mind, it supports everything from product discovery
              to checkout and order tracking.
            </p>
            <a href="https://github.com/ASC-cm/E-commerce-site.git">
              View Project codes
            </a>
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
            <p>
              A blog website that is clean, content-focused digital platform
              designed for writers, influencers, educators, or businesses to
              publish articles, share insights, and engage with a global
              audience. It combines aesthetics with functionality to deliver an
              enjoyable reading experience and strong content management
              capabilities.
            </p>
            <a href="https://github.com/ASC-cm/Blog.git">View Project codes</a>
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