import React from "react";
import "./EachSkill.css";

const EachSkil = ({ skil }) => {
  const { name } = skil;
  // console.log(image);
  return (
    <div>
      <div
        className="skil_div"
        data-aos="fade-down"
        data-aos-duration="600"
        // data-aos-offset="100"
        data-aos-easing="linear"
      >
        {/* <img src="../../../public/assets/bootstrap-logo-shadow.png" alt="" /> */}
        <h4>{name}</h4>
      </div>
    </div>
  );
};

export default EachSkil;
