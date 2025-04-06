import React from "react";
import "./pages-css/about.css";

const About = () => {
  return (
    <>
      <div className="body">
        <h1 className="intro">
          Hi I'm <span className="highlight">Gian!</span> <br />
          An <span className="highlight">aspiring</span> web developer!
        </h1>

        <div className="about-container">
          <div className="profile-circle">
            <img src="assets/profile-photo.png" alt="Profile" />
          </div>
        </div>

        <div className="section2-about"></div>

        <section className="skills-section">
          <h2 className="skills-title">Programming Skills</h2>
          <div className="skills">
            <div className="skill-item">
              <img src="/assets/js.png" alt="JavaScript" />
              <h3>JavaScript</h3>
            </div>
            <div className="skill-item">
              <img src="/assets/ts.png" alt="TypeScript" />
              <h3>TypeScript</h3>
            </div>
            <div className="skill-item">
              <img src="assets/logo512.png" alt="React" />
              <h3>React</h3>
            </div>
            <div className="skill-item">
              <img src="assets/csharp.png" alt="C#" />
              <h3>C#</h3>
            </div>
            <div className="skill-item">
              <img src="/assets/python.png" alt="Python" />
              <h3>Python</h3>
            </div>
            <div className="skill-item">
              <img src="/assets/rn.png" alt="React Native" />
              <h3>React Native</h3>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
