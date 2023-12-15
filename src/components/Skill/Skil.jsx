import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import EachSkil from "../EachSkill/EachSkil";
import "./Skil.css";

const Skil = () => {
  const [skils, setSkils] = useState([]);
  useEffect(() => {
    fetch("../../../public/skills.json")
      .then((res) => res.json())
      .then((data) => setSkils(data));
  }, []);

  return (
    <div>
      <div className="skil" id="skil">
        <div
          className="heading_title flex  w-2/6  md:w-1/6 md:ps-7 ps-9 py-3"
          data-aos="fade-up"
          data-aos-duration="600"
          // data-aos-offset="100"
          data-aos-easing="linear"
        >
          <FontAwesomeIcon icon={faPen} />
          <p className="ms-2">Skils</p>
        </div>
        <h1
          data-aos="fade-up"
          data-aos-duration="600"
          // data-aos-offset="100"
          data-aos-easing="linear"
        >
          My <span>Advantages</span>
        </h1>
        <div className="skils_cont mt-10">
          <div className="skil_card grid md:grid-cols-4 grid-cols-2 gap-8">
            {/* <div className="skil_div">
              <img
                src="../../../public/assets/HTML5_Badge.svg.png"
                alt=""
                className=""
              />
              <h4>HTML</h4>
            </div>
            <div className="skil_div">
              <img src="../../../public/assets/css.png" alt="" className="" />
              <h4>CSS3</h4>
            </div>
            <div className="skil_div">
              <img
                src="../../../public/assets/JavaScript-logo.png"
                alt=""
                className=""
              />
              <h4>CSS3</h4>
            </div>
            <div className="skil_div">
              <img
                src="../../../public/assets/React-icon.svg.png"
                alt=""
                className="w-full"
              />
              <h4>CSS3</h4>
            </div> */}
            {skils.map((skil) => (
              <EachSkil key={skil.id} skil={skil}></EachSkil>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skil;
