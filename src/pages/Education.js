import React, { useState } from 'react';
import { motion } from 'framer-motion';
import "../Styles/Education.css";

const Education = () => {
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
      
      const [visibleItems, setVisibleItems] = useState(4); // Initially show 4 items
      const timelineItems = [
        {
          title: "Wedigraf Hub Tech",
          date: "June 2024 - Dec 2024",
          description: "Full-stack Web Development. Focused on building responsive web applications/website.",
        },
        {
          title: "National Youth Service Corps (NYSC)",
          date: "Octo 2021 - Octo 2022",
          description: "Serving our Father land, where I gained knowledge of what Programming is all about.",
        },
        {
          title: "Skillup Training Academy (STA)",
          date: "Sept 2017 - Dec 2017",
          description: "Training people to achieve greatness, Career and Entrepreneurship Development.",
        },
        {
          title: "Career Link And Skill Acquisition Company",
          date: "Sept 2015 - March 2016",
          description: "Certificate of Excellence with a focus on Information Technology and Internet opportunities.",
        },
        {
          title: "University of Uyo, Akwa Ibom State",
          date: "Nov 2015 - Octo 2020",
          description: "Bachelor's in Science with a focus on the relation of living creatures to their environment.",
        },
        {
          title: "Confident Academy Secondary School, Abia State",
          date: "Sept 2009 - August 2013",
          description: "Where my journey as Computer literacy started from the knowledge i gained in Computer Science as a Subject.",
        },
      ];
    
      const handleViewMore = () => {
        setVisibleItems(timelineItems.length); // Show all items
      };
    
      const handleShowLess = () => {
        setVisibleItems(4); // Revert to showing only the first 4 items
      };

      const achievements = [
        "Certificate for Full-stack Web Developer working with javascript and python (Wedigraf Tech Hub)",
        "Certificate for Career and Entrepreneurship Development (Skillup Training Academy)",
        "Certificate for Information Technology and Internet Opportunities (Career Link and Skill Acquisition Company)",
        "Degree Certificate in Botany and Ecological Studies (University of Uyo)",
      ];
       const handleDownload = () => {
         const link = document.createElement("a");
         link.href = "/cv.pdf"; // File inside the public folder
         link.download = "ANI_SIMON_CHUKWUEMEKA_CV.pdf"; // Set the filename
         document.body.appendChild(link);
         link.click();
         document.body.removeChild(link);
       };
    
    return (
      <>
        <section className="timeline">
          <h2 className="timeline-title">Education & Achievements</h2>
          <div className="timeline-container">
            {timelineItems.slice(0, visibleItems).map((item, index) => (
              <div
                key={index}
                className={`timeline-item timeline-${
                  index % 2 === 0 ? "left" : "right"
                }`}
                data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
              >
                <h3>{item.title}</h3>
                <p>{item.date}</p>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
          <div className="timeline-buttons">
            {visibleItems < timelineItems.length ? (
              <button className="view-more" onClick={handleViewMore}>
                View More
              </button>
            ) : (
              <button className="view-less" onClick={handleShowLess}>
                Show Less
              </button>
            )}
          </div>
        </section>
        <hr />
        <section className="cert">
          <div className="achieve">
            <h2>Certifications and Achievements</h2>
            <ul>
              {achievements.map((achievement, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  {achievement}
                </motion.li>
              ))}
            </ul>
          </div>
          <button className="view-moreover" onClick={handleDownload}>
            Download CV
          </button>
        </section>
      </>
    );
}

export default Education;