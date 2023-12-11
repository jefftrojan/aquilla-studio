import React from "react";
import {  FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // Import the React Icons
import { useForm, ValidationError } from '@formspree/react';


const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [state, handleSubmit] = useForm("mqkvrwlv");
  if (state.succeeded) {
      return <p>Message Sent Successfully!</p>;
  }

  return (
    <footer className="bg-primary text-gray-100 py-12">
        <form onSubmit={handleSubmit}>

        <div className="w-full px-4 sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1440px] mx-auto py-8 sm:py-12 bg-slate-950 flex-col justify-start items-start gap-2.5 inline-flex">
                <div className="sm:flex-row flex-col justify-start items-start gap-[30px] inline-flex w-full">
                    <div className="sm:w-[50%] w-full flex-col justify-start items-start gap-[30px] inline-flex">
                        <div className="w-full text-neutral-100 text-4xl sm:text-5xl font-black font-['Orbitron']">Contact us</div>
                        <div className="w-full text-zinc-400 text-lg sm:text-2xl font-medium font-['Exo']">Thanks for your interest in Aquila Studio! Please provide us with your contact information and a brief description of your inquiry so that our team can help. We look forward to hearing from you!</div>
                    </div>
                    <div className="sm:w-[50%] w-full flex-col justify-start items-start gap-5 inline-flex">
                        <div className="sm:flex justify-between items-start gap-5 w-full">
                            <div className="sm:w-[48%] w-full flex-col justify-start items-start gap-[22px] inline-flex">
                                <div className="w-full text-zinc-400 text-lg sm:text-2xl font-medium font-['Exo']">Name</div>
                                <input type="text" id="name" name="name" className="w-full h-[40px] sm:h-[50px] relative bg-white text-black"/>
                                <ValidationError field="name" prefix="Name" errors={state.errors} />

                            </div>
                            <div className="sm:w-[48%] w-full flex-col justify-start items-start gap-[22px] inline-flex">
                                <div className="w-full text-zinc-400 text-lg sm:text-2xl font-medium font-['Exo']">Email</div>
                                <input className="w-full h-[40px] sm:h-[50px] relative bg-white text-black" type="email" id="email" name="email" required/>
                                <ValidationError field="email" prefix="Email" errors={state.errors} />

                            </div>
                        </div>
                        <div className="w-full flex-col justify-start items-start gap-5 flex">
                            <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                                <div className="w-full text-zinc-400 text-lg sm:text-2xl font-medium font-['Exo']">Message</div>
                                <textarea type="textarea" id="textarea" className="w-full h-32 sm:h-64 relative bg-white text-black" />
                            </div>
                            <div className="sm:flex justify-between items-end gap-[18px] w-full">
                                <div className="w-full text-zinc-400 text-sm sm:text-lg font-medium font-['Exo']">This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply. </div>
                                <div className="h-[40px] sm:h-[50px] pl-[16px] pr-[16px] py-[8px] bg-blue-500 rounded-[8px] justify-center items-center flex">
                                    <button type="submit" disabled={state.submitting} className="text-white text-lg font-semibold font-['Exo']">SEND</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </form>



<div className="w-full px-4 sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1440px] mx-auto pt-8 pb-4 sm:pt-12 bg-slate-950 relative">
    <div className="sm:flex justify-start items-start gap-[30px] w-full">
        <div className="sm:w-[50%] w-full h-[122px] sm:mb-0 mb-4 flex-col justify-start items-start gap-[30px] inline-flex">
            <div className="w-full text-neutral-100 text-4xl sm:text-5xl font-black font-['Orbitron']">Aquila Studio</div>
            <div className="w-full text-zinc-400 text-lg sm:text-2xl font-medium font-['Exo']"> &copy; {currentYear}, All rights reserved.</div>
        </div>
        <div className="sm:w-[50%] w-full sm:text-right text-left">
            <div className="text-zinc-400 text-lg sm:text-[32px] font-medium font-['Exo'] mb-4">Follow us</div>
            <div className="flex justify-start sm:justify-end items-center gap-[30px]">
    <a href="https://www.linkedin.com/in/aquila-studio-46490026b/" target="_blank" rel="noopener noreferrer" className="w-[50px] h-[50px] flex justify-center items-center">
        <FaLinkedin className="text-[25px] text-blue-500"/>
    </a>
    <a href="https://twitter.com/aquilastudiorw" target="_blank" rel="noopener noreferrer" className="w-[50px] h-[50px] flex justify-center items-center">
        <FaTwitter className="text-[25px] text-blue-500"/>
    </a>
    <a href="https://www.instagram.com/aquilastudiorw" target="_blank" rel="noopener noreferrer" className="w-[50px] h-[50px] flex justify-center items-center">
        <FaInstagram className="text-[25px] text-blue-500"/>
    </a>
</div>

        </div>
    </div>
</div>

    </footer>
  );
};

export default Footer;
