import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "animate.css";
// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div
      className="home md:mb-30 mb-10 mt-12 md:mt-4"
      id="home"
      data-aos="fade-down"
      // data-aos-easing="linear"
      data-aos-duration="700"
    >
      <div className="heading_title flex w-2/6   md:w-1/6">
        <FontAwesomeIcon icon={faHome} />
        <p className="ms-2">INTRODUCE</p>
      </div>
      <h1 className="text-4xl md:text-[3.8rem] md:leading-[4.8rem] leading-[2.9rem]">
      Hi from <span>Marian</span>,
        <br /> Your Creative Graphic Designer
      </h1>
      <p className="w-4/6">
      Creative solutions, impactful designs, and a touch of artistry in every project.
      </p>

      <div
        className="download_cv  my-10  tooltip tooltip-bottom"
        data-tip="GET MY CV"
      >
        <a
          href="https://drive.google.com/file/d/1PHVvh_wGi3yKX9SCCG1juTZ-VS934Wax/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn btn-circle btn-outline">
            <box-icon
              name="download"
              type="solid"
              animation="flashing"
              color="#28e98c "
            ></box-icon>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Home;
