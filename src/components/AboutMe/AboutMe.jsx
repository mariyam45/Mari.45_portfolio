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
        Hello, I am Marian, a front-end web developer and graphic designer. I
        have been learning and practicing web development for a long time with
        hard work and dedication. Along with web development, I work as a
        graphic designer. I am very focused on my work. I always try to finish
        each task properly. I chose front-end web development as my profession.
        I am always interested and interested in learning about this subject. I
        am constantly learning about this, and trying to stay updated with
        technology.
      </p>
    </div>
  );
};

export default AboutMe;
