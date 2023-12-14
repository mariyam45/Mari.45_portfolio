import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact ">
      <div className="heading_title flex  w-2/6  md:w-1/6 md:ps-6 ps-8 py-3 ">
        <FontAwesomeIcon icon={faEnvelope} />
        <p className="ms-2">Contact</p>
      </div>
      <h1>
        Let's Work <span>Together!</span>
      </h1>
      <h5>mari.official4570@gmail.com</h5>
      <div className="contact_cont mt-10 grid md:grid-cols-2 grid-cols-1 gap-4">
        <div className="inputs">
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
        <div className="inputs">
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
        <div className="inputs">
          <p>PHONE (optional)</p>
          <input
            type="text"
            placeholder="Your email adress"
            className="input w-full max-w-xs"
            required
          />
        </div>
        <div className="inputs">
          <p>
            SUBJECT <span>*</span>
          </p>
          <input
            type="text"
            placeholder="Your number phone"
            className="input w-full max-w-xs"
            required
          />
        </div>
        <div className="inputs">
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
        <div className="inputs">
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
      <button className="btn  w-2/6 msg_btn transition duration-500 ease-in-out mt-8">
        {/* <FontAwesomeIcon icon={faEnvelope} /> */}
        Send Message
      </button>
    </div>
  );
};

export default Contact;
