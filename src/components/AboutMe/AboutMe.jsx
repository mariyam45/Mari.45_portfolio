import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "animate.css";
import React from "react";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div
      className="about scroll-animation animate__animated  animate__fadeInLeft animate__delay-2s"
      data-animation="fade_from_right"
    >
      <div className="heading_title flex     w-2/6  md:w-1/6">
        <FontAwesomeIcon icon={faUser} />
        <p className="ms-2">ABOUT</p>
      </div>
      <h1>
        Every great design begin with an even <span>better story</span>
      </h1>
      <p className="w-5/6">
        Since beginning my journey as a freelance designer nearly 8 years ago,
        I've done remote work for agencies, consulted for startups, and
        collaborated with talented people to create digital products for both
        business and consumer use. I'm quietly confident, naturally curious, and
        perpetually working on improving my chopsone design problem at a time.
      </p>
    </div>
  );
};

export default AboutMe;
