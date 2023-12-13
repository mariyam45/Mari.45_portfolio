import { faHandHoldingHand } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";
const Service = () => {
  return (
    <div className="service">
      <div className="heading_title flex  w-2/6  md:w-1/6 md:ps-6 ps-8 ">
        <FontAwesomeIcon icon={faHandHoldingHand} />
        <p className="ms-2">RESUME</p>
      </div>
      <div className="service_cont">
        <div className="ser_card mb-6">
          <div className="flex justify-between align-middle">
            <h4>Website Development</h4>
            <box-icon name="code-alt" color="#28e98c"></box-icon>
          </div>
          <p>I build website go live with Framer, Webflow or WordPress</p>
          <Link to="https://github.com/mariyam45" target="_blank">
            <small>Some Projects</small>
          </Link>
        </div>
        <div className="ser_card">
          <div className="flex justify-between align-middle">
            <h4>Graphics Design</h4>
            <box-icon type="logo" name="adobe" color="#28e98c"></box-icon>

            {/* <box-icon type="logo" name="adobe" color="#28e98c"></box-icon> */}
          </div>
          <p>I build website go live with Framer, Webflow or WordPress</p>
          <Link to="https://github.com/mariyam45" target="_blank">
            <small>Some Projects</small>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
