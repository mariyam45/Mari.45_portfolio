import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "animate.css";
// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div
      className="home md:mb-14 mb-6 "
      id="home"
      data-aos="fade-down"
      // data-aos-easing="linear"
      data-aos-duration="700"
    >
      <div className="heading_title flex w-2/6  md:w-1/6">
        <FontAwesomeIcon icon={faHome} />
        <p className="ms-2">INTRODUCE</p>
      </div>
      <h1>
        Say Hi from <span>Marian</span>,Font-end Web Developer and Graphics
        Designer
      </h1>
      <p className="w-4/6">
        I design and code beautifully simple things and i love what i do. Just
        simple like that!
      </p>

      <div
        className="download_cv  my-10  tooltip tooltip-bottom"
        data-tip="GET MY CV"
      >
        <a
          href="https://drive.google.com/file/d/1rph4Hf88bhIRN3t5FEIAb90tTtAQ4PI6/view?usp=sharing"
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
