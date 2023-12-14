import React from "react";
import "./EachSkill.css";

const EachSkil = ({ skil }) => {
  const { name } = skil;
  // console.log(image);
  return (
    <div>
      <div className="skil_div">
        {/* <img src="../../../public/assets/bootstrap-logo-shadow.png" alt="" /> */}
        <h4>{name}</h4>
      </div>
    </div>
  );
};

export default EachSkil;
