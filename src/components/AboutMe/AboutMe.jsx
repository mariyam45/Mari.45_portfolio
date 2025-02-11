import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "animate.css";
// eslint-disable-next-line no-unused-vars
import React from "react";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div
      className="about mb-24 md:mb-30  md:mt-14 mt-0"
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
      <h1 className="text-4xl md:text-5xl ">
        Something <span>About</span> me
      </h1>
      <p className="w-5/6 md:leading-[1.9rem] leading-[1.6rem]">
      As a graphic designer, I believe in the power of visuals to communicate, inspire, and connect. My journey has been one of constant learning and growth, fueled by my love for design and storytelling. I take pride in creating visuals that are not only beautiful but also impactful and meaningful. Let’s turn your ideas into something remarkable.
      </p>
    </div>
  );
};

export default AboutMe;
