import { faCircle, faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <div
      className="resume"
      data-aos="fade-right"
      data-aos-duration="600"
      // data-aos-offset="100"
      data-aos-easing="linear"
      id="resume"
    >
      <div className="heading_title flex  w-2/6  md:w-1/6">
        <FontAwesomeIcon icon={faFile} />
        <p className="ms-2">RESUME</p>
      </div>
      <h1>
        Education & <span>Experience</span>
      </h1>
      <div
        className="edu1 "
        data-aos="fade-right"
        data-aos-duration="600"
        // data-aos-offset="100"
        data-aos-easing="linear"
      >
        <div className="icons">
          <FontAwesomeIcon icon={faCircle} />
        </div>
        <div className="edu_dtls text-start">
          <p>2023</p>
          <h3>Intern As Web Design & Developer</h3>
          <small>Engineer’s Computing & Computers Ltd. (ECC)</small>
        </div>
      </div>
      <div
        className="edu1 "
        data-aos="fade-right"
        data-aos-duration="600"
        // data-aos-offset="100"
        data-aos-easing="linear"
      >
        <div className="icons">
          <FontAwesomeIcon icon={faCircle} />
        </div>
        <div className="edu_dtls text-start">
          <p>2022</p>
          <h3>
            {" "}
            Programming Hero <span className="text-sm">(6 month coures)</span>
          </h3>
          <small>
            I have done ‘Complete Web Development’ course from Programming Hero
          </small>
        </div>
      </div>
      <div
        className="edu1 "
        data-aos="fade-right"
        data-aos-duration="600"
        // data-aos-offset="100"
        data-aos-easing="linear"
      >
        <div className="icons">
          <FontAwesomeIcon icon={faCircle} />
        </div>
        <div className="edu_dtls text-start ">
          <p>2019-2023</p>
          <h4 className="text-white">
            Diploma Engineering on Computer Technology
          </h4>
          <h3>Dhaka Polytechnic Institute</h3>
          <small>
            I successfully graduated with a diploma in Computer Science
            Engineering from Dhaka Polytechnic Institute, the premier
            educational establishment in Bangladesh.
          </small>
        </div>
      </div>
      <div
        className="edu1 "
        data-aos="fade-right"
        data-aos-duration="600"
        // data-aos-offset="100"
        data-aos-easing="linear"
      >
        <div className="icons">
          <FontAwesomeIcon icon={faCircle} />
        </div>
        <div className="edu_dtls text-start">
          <p>2016-2019</p>
          <h4 className="text-white">Secondary School Certificate</h4>
          <h3>UCEP SSC Vocational , Mirpur ( UCEP Bangladesh)</h3>
          <small>
            I have given SSC from this institute on General Mechanical
            department.
          </small>
        </div>
      </div>
    </div>
  );
};

export default Resume;
