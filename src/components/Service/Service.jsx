import { faHandHoldingHand } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";
const Service = () => {
  return (
    <div
      className="service mx-auto ms-0 overflow-hidden mb-24 md:mb-36 "
      id="service"
    >
      <div
        className="heading_title flex  w-2/6  md:w-1/6 md:ps-6 ps-8 py-3 "
        data-aos="fade-right"
        data-aos-duration="600"
        // data-aos-offset="100"
        data-aos-easing="linear"
      >
        <FontAwesomeIcon icon={faHandHoldingHand} />
        <p className="ms-2">Services</p>
      </div>
      <h1
        className="text-4xl md:text-5xl"
        data-aos="fade-right"
        data-aos-duration="600"
        // data-aos-offset="100"
        data-aos-easing="linear"
      >
        My <span>Services</span>
      </h1>
      <div className="service_cont mt-10">

        <div
          className="ser_card mb-6 border hover:border-[#28e98c]"
          data-aos="fade-right"
          data-aos-duration="600"
          // data-aos-offset="100"
          data-aos-easing="linear"
        >
          <div className="flex justify-between align-middle">
            <h4>Graphics Design</h4>
            <box-icon type="logo" name="adobe" color="#28e98c"></box-icon>

            {/* <box-icon type="logo" name="adobe" color="#28e98c"></box-icon> */}
          </div>
          <p>Here are some recent official client projects, where each design satisfied the client. Additionally, there are also some inspirational designs</p>
          <Link to="/projects" target="_blank">
            <small >Some Projects →</small>
          </Link>
        </div>

        {/* ____________________  */}

        <div
          className="ser_card  "
          data-aos="fade-left"
          data-aos-duration="600"
          // data-aos-offset="100"
          data-aos-easing="linear"
        >
          <div className="flex justify-between align-middle">
            <h4 className="text-gray-400">Website Development</h4>
            <box-icon name="code-alt" color="#9d9ea7"></box-icon>
          </div>
          <p>
            I build website (front-end) using HTML, css, javascript, react, and
            theme development by PHP, wordpress.
          </p>
          <Link to="https://github.com/mariyam45" target="_blank">
            <small className="text-gray-400">Some Projects →</small>
          </Link>
        </div>
        {/* ---------------------- */}

      </div>
    </div>
  );
};

export default Service;
