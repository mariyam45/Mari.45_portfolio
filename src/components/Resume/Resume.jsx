import { faCircle, faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <div className="resume">
      <div className="heading_title flex  w-2/6  md:w-1/6">
        <FontAwesomeIcon icon={faFile} />
        <p className="ms-2">RESUME</p>
      </div>
      <h1>
        Education & <span>Experience</span>
      </h1>
      <div className="edu1 ">
        <div className="icons">
          <FontAwesomeIcon icon={faCircle} />
        </div>
        <div className="edu_dtls text-start">
          <p>2020 - Present</p>
          <h3>Framer Desinger & Developer</h3>
          <small>Brunodee Agency</small>
        </div>
      </div>
      <div className="edu1 ">
        <div className="icons">
          <FontAwesomeIcon icon={faCircle} />
        </div>
        <div className="edu_dtls text-start">
          <p>2020 - Present</p>
          <h3>Framer Desinger & Developer</h3>
          <small>Brunodee Agency</small>
        </div>
      </div>
    </div>
  );
};

export default Resume;
