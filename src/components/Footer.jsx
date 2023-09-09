import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { SectionWrapper } from "../hoc";

const Footer = () => (
  <div className="mt-7 text-white bg-primary">
    <div className="flex justify-between items-center">
      <div>
        <p className="font-bold">Aquila Studio</p>
        <p>&copy; {new Date().getFullYear()} All Rights Reserved</p>
      </div>
      <div className="flex items-center">
        <p className="mr-6">Contact Us</p>
        <div className="flex flex-col items-center">
          <a href="#" className="text-white-500">
            <FiFacebook />
          </a>
          <a href="#" className="text-white-500 mt-2">
            <FiTwitter />
          </a>
          <a href="#" className="text-white-500 mt-2">
            <FiInstagram />
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default SectionWrapper(Footer, "");
