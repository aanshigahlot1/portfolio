import React from 'react';
import './Menus.css';
import { 
  FcHome, FcAbout, FcBiotech, FcBriefcase, 
  FcVideoProjector, FcVoicePresentation, FcContacts 
} from "react-icons/fc";
import { MdOutlineWork } from "react-icons/md";

const Menus = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <div className="menus-container">
          <div className="navbar-profile-pic">
            <img 
              src="https://i.pinimg.com/originals/0b/4b/ab/0b4babce4028541750a50275180d0a9a.jpg" 
              alt="profile-pic" 
            />
          </div>

          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link"><FcHome /> Home</div>
              <div className="nav-link"><FcAbout /> About</div>
              <div className="nav-link"><MdOutlineWork /> Work Experience</div>
              <div className="nav-link"><FcBiotech /> Tech Stack</div>
              <div className="nav-link"><FcBriefcase /> Education</div>
              <div className="nav-link"><FcVideoProjector /> Projects</div>
              <div className="nav-link"><FcVoicePresentation /> Testimonials</div>
              <div className="nav-link"><FcContacts /> Contacts</div>
            </div>
          </div>
        </div>
      ) : (
        <div className="menus-container collapsed">
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link"><FcHome title="Home" /></div>
              <div className="nav-link"><FcAbout title="About" /></div>
              <div className="nav-link"><MdOutlineWork title="Work Experience" /></div>
              <div className="nav-link"><FcBiotech title="Tech Stack" /></div>
              <div className="nav-link"><FcBriefcase title="Education" /></div>
              <div className="nav-link"><FcVideoProjector title="Projects" /></div>
              <div className="nav-link"><FcVoicePresentation title="Testimonials" /></div>
              <div className="nav-link"><FcContacts title="Contacts" /></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Menus;
