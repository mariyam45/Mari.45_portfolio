import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import "./Skil.css";

const Skil = () => {
  const [skils, setSkils] = useState([]);
  useEffect(() => {
    fetch("../../../public/skills.json")
      .then((res) => res.json())
      .then((data) => setSkils(data));
  }, []);

  return (
    <div className="overflow-x-hidden mb-24 md:mb-40">
      <div className="skil" id="skil">
        <div
          className="heading_title flex  w-2/6  md:w-1/6 md:ps-7 ps-9 py-3"
          data-aos="fade-up"
          data-aos-duration="600"
          // data-aos-offset="100"
          data-aos-easing="linear"
        >
          <FontAwesomeIcon icon={faPen} />
          <p className="ms-2">Skills</p>
        </div>
        <h1
          className="text-4xl md:text-5xl"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-offset="100"
          data-aos-easing="linear"
        >
          My <span>Skills</span>
        </h1>
        <div className="skils_cont mt-10">
          <div className="skil_card grid md:grid-cols-4 grid-cols-2 gap-8">


          <div
              className="skil_div"
              data-aos="fade-up"
              data-aos-duration="600"
              // data-aos-offset="100"
              data-aos-easing="linear"
            >
              <h4>Photoshop</h4>
            </div>
            <div
              className="skil_div"
              data-aos="fade-down"
              data-aos-duration="600"
              // data-aos-offset="100"
              data-aos-easing="linear"
            >
              <h4>Illustrator</h4>
            </div>
            <div
              className="skil_div "
              data-aos="fade-down"
              data-aos-duration="600"
              // data-aos-offset="100"
              data-aos-easing="linear"
            >
              <h4>HTML</h4>
            </div>
            <div
              className="skil_div"
              data-aos="fade-up"
              data-aos-duration="600"
              // data-aos-offset="100"
              data-aos-easing="linear"
            >
              <h4>CSS3</h4>
            </div>
            <div
              className="skil_div"
              data-aos="fade-down"
              data-aos-duration="600"
              // data-aos-offset="100"
              data-aos-easing="linear"
            >
              <h4>JavaScript</h4>
            </div>
            <div
              className="skil_div"
              data-aos="fade-up"
              data-aos-duration="600"
              // data-aos-offset="100"
              data-aos-easing="linear"
            >
              <h4>React</h4>
            </div>
            <div
              className="skil_div"
              data-aos="fade-right"
              data-aos-duration="600"
              // data-aos-offset="100"
              data-aos-easing="linear"
            >
              <h4>PHP</h4>
            </div>
            <div
              className="skil_div "
              data-aos="fade-left"
              data-aos-duration="600"
              // data-aos-offset="100"
              data-aos-easing="linear"
            >
              <h4>WordPress(T.D)</h4>
            </div>
            <div
              className="skil_div"
              data-aos="fade-right"
              data-aos-duration="600"
              // data-aos-offset="100"
              data-aos-easing="linear"
            >
              <h4>Tailwind</h4>
            </div>
            <div
              className="skil_div"
              data-aos="fade-left"
              data-aos-duration="600"
              // data-aos-offset="100"
              data-aos-easing="linear"
            >
              <h4>DaysiUI</h4>
            </div>
            <div
              className="skil_div"
              data-aos="fade-up"
              data-aos-duration="600"
              // data-aos-offset="100"
              data-aos-easing="linear"
            >
              <h4>Bootstrap</h4>
            </div>
            <div
              className="skil_div"
              data-aos="fade-down"
              data-aos-duration="600"
              // data-aos-offset="100"
              data-aos-easing="linear"
            >
              <h4>Figma</h4>
            </div>
           

            {/* {skils.map((skil) => (
              <EachSkil key={skil.id} skil={skil}></EachSkil>
            ))} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skil;
