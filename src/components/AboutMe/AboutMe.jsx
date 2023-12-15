import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "animate.css";
import React from "react";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div
      className="about "
      data-aos="fade-up"
      data-aos-duration="600"
      // data-aos-offset="100"
      data-aos-easing="linear"
      id="about"
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
