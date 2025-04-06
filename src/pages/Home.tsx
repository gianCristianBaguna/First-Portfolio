import React from "react";
import { Link } from "react-router-dom";
import "./pages-css/home.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* Section 1: Hero Section */}
      <section className="hero-section">
        <div className="hero-text">
          <h1 className="title1">First Dynamic Web Project</h1>
          <h1 className="title2">Get to Know Me Portfolio</h1>
          <Link to="/about">
            <button className="introButton1">About Me</button>
          </Link>
          <a
            href="https://www.facebook.com/usernamenigian"
            target="_blank"
            rel="noopener noreferrer"
            className="facebookButton"
          >
            <button className="introButton2">
              Facebook
              <img
                src="assets/attachment-png.png"
                alt="Facebook Icon"
                className="facebook-icon"
              />
            </button>
          </a>
          <img src="assets\hero-design.png" alt="desgin1" className="heroDesign1"/>
        </div>
      </section>
      
      <section className="contact-section">
        <h2 className="contact-title">Contact Me</h2>
        <p className="contact-description">
          Feel free to reach out to me through my social profiles or directly by email.
        </p>
        <div className="contact-buttons">
          <Link to="/contact">
            <button className="contactButton">Contact</button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
