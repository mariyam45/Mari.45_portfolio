import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div
      id="contact"
      className="contact "
      data-aos="fade-up"
      data-aos-duration="600"
      // data-aos-offset="100"
      data-aos-easing="linear"
    >
      <div
        className="heading_title flex  w-2/6  md:w-1/6 md:ps-6 ps-8 py-3 "
        data-aos="fade-up-right"
        data-aos-duration="600"
        // data-aos-offset="100"
        data-aos-easing="linear"
      >
        <FontAwesomeIcon icon={faEnvelope} />
        <p className="ms-2">Contact</p>
      </div>
      <h1 className="text-4xl md:text-5xl">
        Let's Work <span>Together!</span>
      </h1>
      <h5
        data-aos="fade-up-right"
        data-aos-duration="600"
        // data-aos-offset="100"
        data-aos-easing="linear"
      >
        mari.official4570@gmail.com
      </h5>
      <div className="contact_cont mt-10 grid md:grid-cols-2 grid-cols-1 gap-4">
        <div
          className="inputs"
          data-aos="fade-up"
          data-aos-duration="600"
          // data-aos-offset="100"
          data-aos-easing="linear"
        >
          <p>
            FULL NAME <span>*</span>
          </p>
          <input
            type="text"
            placeholder="Type here"
            className="input w-full max-w-xs"
            required
          />
        </div>
        <div
          className="inputs"
          data-aos="fade-up"
          data-aos-duration="600"
          // data-aos-offset="100"
          data-aos-easing="linear"
        >
          <p>
            EMAIL<span>*</span>
          </p>
          <input
            type="text"
            placeholder="Your Full Name"
            className="input w-full max-w-xs"
            required
          />
        </div>
        <div
          className="inputs"
          data-aos="fade-up"
          data-aos-duration="600"
          // data-aos-offset="100"
          data-aos-easing="linear"
        >
          <p>PHONE (optional)</p>
          <input
            type="text"
            placeholder="Your email adress"
            className="input w-full max-w-xs"
            required
          />
        </div>
        <div
          className="inputs"
          data-aos="fade-up"
          data-aos-duration="600"
          // data-aos-offset="100"
          data-aos-easing="linear"
        >
          <p>
            SUBJECT <span>*</span>
          </p>
          <select className="select  w-full max-w-xs">
            <option disabled selected>
              Pick the best JS framework
            </option>
            <option>Web Development</option>
            <option>Graphics Design</option>
          </select>
        </div>
        <div
          className="inputs"
          data-aos="fade-up"
          data-aos-duration="600"
          // data-aos-offset="100"
          data-aos-easing="linear"
        >
          <p>YOUR BUDGET (optional)</p>
          <input
            type="text"
            placeholder="A range budget for your project"
            className="input w-full max-w-xs"
            required
          />
        </div>
      </div>
      <div className="msg">
        <div
          className="inputs"
          data-aos="fade-up"
          data-aos-duration="600"
          // data-aos-offset="100"
          data-aos-easing="linear"
        >
          <p>Message</p>
          <textarea
            type="text"
            placeholder="Write your message here ..."
            className="input w-full max-w-xs"
            required
          />
        </div>
      </div>
      {/* <div className="files ">
        <input type="file" name="" id="" />
      </div> */}
      <div
      // className="last_btn"
      // data-aos="fade-up"
      // data-aos-duration="600"
      // data-aos-offset="100"
      // data-aos-easing="linear"
      >
        <button className="btn  w-2/6 msg_btn transition duration-500 ease-in-out mt-8 mb-6">
          {/* <FontAwesomeIcon icon={faEnvelope} /> */}
          Send Message
        </button>
      </div>
    </div>
  );
};

export default Contact;
