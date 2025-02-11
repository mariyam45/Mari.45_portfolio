// eslint-disable-next-line no-unused-vars
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "boxicons";
// eslint-disable-next-line no-unused-vars
import React from "react";
import myimg from "../../../public/assets/mari21.png";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile h-screen md:ms-5 px-5 py-10 md:py-4 2xl:pt-16   relative px-auto md:sticky top-0">
      <div
        className="pro_top md:text-center  md:flex align-center 
       justify-between"
      >
        {" "}
        <h2 className=" text-4xl ">
          <a href="#">
            {" "}
            Mari.<span>52</span>{" "}
          </a>
        </h2>
        <span className="md:mt-3">Marian Suchi</span>
      </div>

      <img className="h-3/5 mx-auto " src={myimg} alt="" />
      <div className=" text-center my-5  md:my-2 mx-5 pro_status 2xl:px-10">
        <p className="text-lg font-thin  md:text-start">Front-End Web Dev. /</p>
        <p className="text-lg font-thin md:text-end">Graphics Designer</p>
      </div>
      <div className="social_icons text-center  2xl:mt-10">
        {/* _______________  */}
        <a
          href="https://github.com/mariyam45"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <box-icon name="github" type="logo" color="#999999"></box-icon>
        </a>
        {/* _______________________  */}
        <a
          href="https://www.behance.net/mariansuchi1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <box-icon type="logo" name="behance" color="#999999"></box-icon>
        </a>
        {/* ______________________  */}

        <a
          href="https://www.linkedin.com/in/marian-akter-suchi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <box-icon type="logo" name="linkedin" color="#999999"></box-icon>
        </a>
        {/* ____________________  */}
        <a
          href="https://www.facebook.com/MASUCHI.MS"
          target="_blank"
          rel="noopener noreferrer"
        >
          <box-icon type="logo" name="facebook" color="#999999"></box-icon>
        </a>
        {/* _________________________  */}
      </div>
      <a href="mailto:mari.official4570@gmail.com" className="2xl:ms-3">
        {" "}
        <button className="btn  w-5/6 pp_btn transition duration-500 ease-in-out">
          <FontAwesomeIcon icon={faEnvelope} />
          Hire me !
        </button>
        {/* <a href="tel:+880 1641860671">phn</a> */}
      </a>
    </div>
  );
};

export default Profile;
