// eslint-disable-next-line no-unused-vars
import {
  faEnvelope,
  faFile,
  faHandHoldingHand,
  faHome,
  faMarker,
  faTableList,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import "./SideNav.css";
// import "./SideNav.js";

const SideNav = () => {
  return (
    <div className="sideBar md:fixed  right-0">
      {/* <div className="bx bx-menu" id="menu-icon"></div>

      <ul className="navbar">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#package">Package</a>
        </li>
        <li>
          <a href="#destination">Destination</a>
        </li>
        <li>
          <a href="#contact">Contact Us</a>
        </li>
      </ul> */}

      <div className="navbar-start md:hidden absolute top-0 bg-green-100  right-0 ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-10 h-10 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2  "
          >
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link>About</Link>
            </li>
            <li>
              <Link>Resume</Link>
            </li>
            <li>
              <Link>Services</Link>
            </li>
            <li>
              <Link>Skils</Link>
            </li>
            <li>
              <Link>Testimonial</Link>
            </li>
            <li>
              <Link>Contact</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="main_nav text-end sticky top-0 md:block hidden">
        <ul className="menu menu-sm  mt-3 p-2">
          <li>
            <a href="#home" className="tooltip tooltip-left" data-tip="Home">
              <FontAwesomeIcon icon={faHome} />
            </a>
          </li>
          <li>
            <a href="#about" className="tooltip tooltip-left" data-tip="About">
              {" "}
              <FontAwesomeIcon icon={faUser} />
            </a>
          </li>
          <li>
            <a
              href="#resume"
              className="tooltip tooltip-left"
              data-tip="Resume"
            >
              {" "}
              <FontAwesomeIcon icon={faFile} />
            </a>
          </li>
          <li>
            <a
              href="#service"
              className="tooltip tooltip-left"
              data-tip="Services"
            >
              {" "}
              <FontAwesomeIcon icon={faHandHoldingHand} />
            </a>
          </li>
          <li>
            <a href="#skil" className="tooltip tooltip-left" data-tip="Skils">
              {" "}
              <FontAwesomeIcon icon={faMarker} />
            </a>
          </li>
          <li>
            <a
              href="#testimonial"
              className="tooltip tooltip-left"
              data-tip="Testimonial"
            >
              <FontAwesomeIcon icon={faTableList} />
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="tooltip tooltip-left"
              data-tip="Contact"
            >
              {" "}
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </li>
        </ul>
      </div>

      {/* <div className="nav_main text-center">
        <Link to="" className="">
          <FontAwesomeIcon icon={faHome} />
        </Link>
        <Link to="">
          <FontAwesomeIcon icon={faUser} />
        </Link>
        <Link to="">
          <FontAwesomeIcon icon={faFile} />
        </Link>
        <Link to="">
          <FontAwesomeIcon icon={faHandHoldingHand} />
        </Link>
        <Link to="">
          <FontAwesomeIcon icon={faMarker} />
        </Link>
        <Link to="">
          <FontAwesomeIcon icon={faTableList} />
        </Link>
        <Link to="">
          <FontAwesomeIcon icon={faMessage} />
        </Link>
        <Link to="">
          <FontAwesomeIcon icon={faEnvelope} />
        </Link>
      </div> */}
    </div>
  );
};

export default SideNav;
