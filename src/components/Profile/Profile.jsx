// eslint-disable-next-line no-unused-vars
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "boxicons";
import React from "react";
import myimg from "../../assets/mari21.png";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile h-screen md:ms-5 px-5 py-10 md:py-4  relative px-auto md:sticky top-0">
      <div className="pro_top md:text-center  mb-2 ">
        <h2 className=" text-4xl">
          Mari.<span>45</span>{" "}
        </h2>
      </div>

      <img className="h-3/5 mx-auto " src={myimg} alt="" />
      <div className=" text-center my-5  md:my-2 mx-5 pro_status">
        <p className="text-lg font-thin  md:text-start">Font-End Web Dev. /</p>
        <p className="text-lg font-thin md:text-end">Graphics Designer</p>
      </div>
      <div className="social_icons text-center">
        <a
          href="https://web.whatsapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <box-icon type="logo" name="whatsapp" color="#999999"></box-icon>
        </a>
        {/* <a href="mailto:">
          <box-icon name="gmail" type="logo" flip="horizontal"></box-icon>
        </a> */}
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <box-icon type="logo" name="facebook" color="#999999"></box-icon>
        </a>
        <a
          href="https://www.instagram.com/marian_suchi45/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <box-icon type="logo" name="instagram" color="#999999"></box-icon>
        </a>

        <a
          href="https://github.com/mariyam45"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <box-icon name="github" type="logo" color="#999999"></box-icon>
        </a>
      </div>
      <a href="mailto:mari.official4570@gmail.com">
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
