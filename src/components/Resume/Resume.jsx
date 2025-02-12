import { faCircle, faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <div
      className="resume mb-24 md:mb-40 ]"
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
      <h1 className="text-4xl md:text-5xl">
        Education & <span>Experience</span>
      </h1>

      {/* ___________________> */}
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
          <p>
            1<sup>st</sup> August, 2024 - Continue {" "}
          </p>
          <h3 className="text-2xl md:text-4xl my-2">
           Visual Designer
          </h3>
          <h6 className="inst">bdCalling IT Ltd. (Backbencher Studio)</h6>
        </div>
      </div>

      {/* ___________________> */}
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
          <p>
            8<sup>th</sup> March, 2024 - 28<sup>th</sup> June, 2024{" "}
          </p>
          <h3 className="text-2xl md:text-4xl my-2">
            Customer Service Representative
          </h3>
          <h6 className="inst">Digicon Technologies PLC</h6>
        </div>
      </div>
      {/* ___________________> */}
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
          <h3 className="text-2xl md:text-4xl my-2">
            Intern As Web Design & Developer
          </h3>
          <h6 className="inst">Engineer’s Computing & Computers Ltd. (ECC)</h6>
        </div>
      </div>
      {/* ____________________________ */}
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
          <h3 className="text-2xl md:text-4xl my-2">
            {" "}
            Programming Hero <span className="text-sm">(6 month course)</span>
          </h3>
          <h6>
            I have done ‘Complete Web Development’ course from Programming Hero
          </h6>
        </div>
      </div>
      {/* ____________________________ */}
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
          <h4 className="text-white mt-2">
            Diploma Engineering on Computer Technology
          </h4>
          <h3 className="text-2xl md:text-4xl my-2">
            Dhaka Polytechnic Institute
          </h3>
          <h6 className="mb-3 sm_txt text-xs  md:text-sm ">
          I have completed my diploma from Dhaka Polytechnic Institute with success.
          </h6>
        </div>
      </div>
      {/* ____________________________ */}
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
          <h4 className="text-white mt-2">Secondary School Certificate</h4>
          <h3 className="text-2xl md:text-4xl my-2">
            UCEP SSC Vocational , Mirpur ( UCEP Bangladesh)
          </h3>
          <h6 className="sm_txt text-xs md:text-sm">
            I have passed SSC from this institute on General Mechanical
            department.
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Resume;
