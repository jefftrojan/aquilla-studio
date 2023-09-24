import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"; // Import the React Icons

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-gray-100 py-12">
      <div className="max-w-screen-xl mx-auto px-8 md:px-12 lg:px-16 xl:px-32">

        <div className="flex flex-col md:flex-row">
          
          {/* Left Section - Social Media Icons */}
          <div className="md:w-1/2">
          <div className="mt-20" />

          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>


          <p> G4DT is a learning program to empower tech talents to learn the principles of game </p>
          <div className="mt-10" />
            <h2 className="text-2xl font-bold mb-4">Social Media</h2>

              
            <div className="flex items-center space-x-7">
              {/* Use React Icons for social media */}
              <a href="#" className="text-gray-100 hover:text-indigo-500">
                <FaFacebook />
              </a>
              <a href="#" className="text-gray-100 hover:text-indigo-500">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-100 hover:text-indigo-500">
                <FaInstagram />
              </a>
              {/* Add more social media icons as needed */}
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="md:w-1/2 mt-8 md:mt-0 bg-primary text-white rounded-lg shadow-lg p-8">
            <form>
              <div className="mb-4">
                <label htmlFor="fullName" className="block text-white font-bold mb-2">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  className="w-full bg-gray-300 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  placeholder="Your Full Name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-white font-bold mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-gray-300 text-white p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-white font-bold mb-2">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full h-32 bg-gray-300 text-white p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="text-center mt-8">
          &copy; {currentYear}, AQUILA STUDIO | All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
