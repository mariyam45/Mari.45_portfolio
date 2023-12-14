import React from "react";
import AboutMe from "../AboutMe/AboutMe";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";
import Resume from "../Resume/Resume";
import Service from "../Service/Service";
import Skil from "../Skill/Skil";
import "./ScrollPage.css";

const ScrollPage = () => {
  return (
    <div className="scrollPage md:px-14 md:mx-4 px-5  md:mt-10 mt-5 2xl:mx-36">
      <Home></Home>
      <AboutMe></AboutMe>
      <Resume></Resume>
      <Service></Service>
      <Skil></Skil>
      {/* <Testimonial></Testimonial> */}
      <Contact></Contact>
    </div>
  );
};

export default ScrollPage;
