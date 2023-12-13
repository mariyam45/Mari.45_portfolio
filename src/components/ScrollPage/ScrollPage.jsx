import React from "react";
import AboutMe from "../AboutMe/AboutMe";
import Home from "../Home/Home";
import Resume from "../Resume/Resume";
import Skil from "../Skill/Skil";
import "./ScrollPage.css";

const ScrollPage = () => {
  return (
    <div className="scrollPage md:px-14 md:mx-4 ps-5 md:mt-10 mt-5">
      <Home></Home>
      <AboutMe></AboutMe>
      <Resume></Resume>
      <Skil></Skil>
    </div>
  );
};

export default ScrollPage;
