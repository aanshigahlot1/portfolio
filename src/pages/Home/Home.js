import React from 'react';
import './Home.css';
import Typewriter from 'typewriter-effect';

const Home = () => {
  return (
    <>
      <div className="container-fluid home-container">
        <div className="container home-content">
          <h2>Hi, I am a</h2>
          <h1>
            <Typewriter
              options={{
                strings: [
                  'Full Stack Developer',
                  'MERN Stack Developer',
                  'React Developer',
                  'Node.js Developer',
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 100,
              }}
            />
          </h1>

          <div className="home-buttons">
            <button className="btn hire-me-btn">Hire Me</button>
            <a
              className="btn download-resume-btn"
              href="/augresume.pdf"
              download="Aanshi-Gahlot-Resume.pdf"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
