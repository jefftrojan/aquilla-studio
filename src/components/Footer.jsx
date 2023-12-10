import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"; // Import the React Icons

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-gray-100 py-12">
<div className="w-[1440px] h-[712px] px-[120px] py-[107px] bg-slate-950 flex-col justify-start items-start gap-2.5 inline-flex">
    <div className="justify-start items-start gap-[78px] inline-flex">
        <div className="flex-col justify-start items-start gap-[30px] inline-flex">
            <div className="w-[386px] text-neutral-100 text-5xl font-black font-['Orbitron']">Contact us</div>
            <div className="w-[532px] text-zinc-400 text-2xl font-medium font-['Exo']">GD4T is a learning program to empower tech talents to learn the principles of game development, and create new tech opportunities toward career pathways</div>
        </div>
        <div className="flex-col justify-start items-start gap-[30px] inline-flex">
            <div className="justify-start items-start gap-5 inline-flex">
                <div className="flex-col justify-start items-start gap-[22px] inline-flex">
                    <div className="w-[79px] text-zinc-400 text-2xl font-medium font-['Exo']">First Name</div>
                    <input className="w-[285px] h-[50px] relative bg-white text-black"/>
                </div>
                <div className="flex-col justify-start items-start gap-[22px] inline-flex">
                    <div className="w-[79px] text-zinc-400 text-2xl font-medium font-['Exo']">Last Name</div>
                    <input className="w-[285px] h-[50px] relative bg-white text-black" />
                </div>
            </div>
            <div className="flex-col justify-start items-start gap-5 flex">
                <div className="flex-col justify-start items-start gap-1.5 flex">
                    <div className="w-[105px] text-zinc-400 text-2xl font-medium font-['Exo']">Message</div>
                    <textarea className="w-[590px] h-64 relative bg-white text-black" />
                </div>
                <div className="justify-start items-end gap-[18px] inline-flex">
                    <div className="w-[419px] text-zinc-400 text-lg font-medium font-['Exo']">GD4T is a learning program to empower tech talents to learn the principles of game </div>
                    <div className="h-[50px] pl-[53px] pr-[54px] py-[13px] bg-blue-500 rounded-[10px] justify-center items-center flex">
                        <button className="text-white text-lg font-semibold font-['Exo']">SEND</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

        <div className="text-center mt-8">
          &copy; {currentYear}, AQUILA STUDIO | All Rights Reserved.
        </div>
    </footer>
  );
};

export default Footer;
