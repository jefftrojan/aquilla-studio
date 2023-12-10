import React, { useRef, useState } from "react";
import ContactForm from "./ContactForm";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { gd4tkid, girlheadset } from "../assets";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";




const Program = () => {

  

  return (
    <>
      <div className="container mx-auto p-4">
        <div className="mt-20" />
      <h3 className={styles.sectionHeadText}> Our Program</h3>

<div className="mt-10 md:mt-20 lg:mt-32 flex flex-col md:flex-row-reverse xl:flex-row-reverse">
  <img
    src={girlheadset}
    alt="image"
    className="rounded-lg mb-10 md:mb-0"
    style={{ width: "100%", maxWidth: "500px", height: "450px" }}
  />
  <div className="flex flex-col">
    <h2 className="mt-10 md:mt-0 text-3xl md:text-4xl lg:text-5xl font-bold leading-normal">
      Game Development Program
    </h2>
    <div className="mt-lg:mt-32 md:mt-20" />

    <p className="mt-4 text-lg font-bold lg:text-xl text-secondary leading-normal">
      G4DT is a learning program to empower tech talents to learn the principles of game development, and create new tech opportunities toward career pathways.
    </p>
  </div>
</div>

<div className="mt-10 md:mt-20 lg:mt-32 flex flex-col md:flex-row">
  {/* Left Column */}
  <div className="w-full md:w-1/2 p-4">
    <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2">
      Game Development For Talent (GD4T)
    </h2>
    <div className="mt-10" />
    <p className="text-lg lg:text-xl font-bold">
      G4DT is a learning program to empower tech talents to learn the principles of game development, and create new tech opportunities toward career pathways.
    </p>
  </div>


  {/* Right Column */}
  <div className="w-full md:w-1/2 p-4">
    <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2">
      Why GD4T
    </h2>
    <div className="mt-8" />
    <p className="text-lg lg:text-xl font-bold">
      The program was created to enable game talents to learn from traditionally marginalized communities and non-traditional backgrounds to realize their potential in the gaming industry and grow the thriving Rwanda game community. The program is specifically designed to ignite curiosity and empower underrepresented talents to learn about immersive real-time 3D and games to transform their communities and shape a brighter future.
    </p>
  </div>
  <div className="mt-20"/>

</div>

{/* What we do */}




{/* what do we teach */}

<motion.div variants={textVariant()}>
  <h2 className={`${styles.sectionHeadText}`}>What do we teach.</h2>
</motion.div>

<div className='w-full flex'>
  <motion.p
    variants={fadeIn("", "", 0.1, 1)}
    className='mt-3 text-secondary text-[18px] max-w-3xl leading-[32px]'
  >

    Begin your career path as a game professional by leveragng Epic game ecosystem tools. <br />
    GD4T program is taught with a focus on Unreal engine. Unreal engine is a professional game engine that requires a knowledge in C++ or Blueprint programming.
    

  </motion.p>

  
</div>
<div className="mt-10 md:mt-20 lg:mt-32 flex flex-col md:flex-row-reverse xl:flex-row-reverse justify-center">
  <img
    src={gd4tkid}
    alt="image"
    className="rounded-lg mb-10 md:mb-0"
    style={{ width: "100%", maxWidth: "500px", height: "450px" }}
  /> 
<div className="flex flex-col mt-10 items-center justify-center text-center">
    <h4 className="mt-10 md:mt-0 text-2xl md:text-2xl lg:text-3xl font-bold leading-normal">
        Start your application to join a thriving community...  
      </h4>
    <div className="mt-10" />

    
  </div>
</div>
<div className="bg-slate-950 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-[1440px] p-[90px] lg:p-[120px] flex flex-col items-center gap-[112px]">
        <div className="w-[386px] text-neutral-100 text-5xl font-black font-orbitron text-center">What we do</div>

        <div className="flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-1/2 px-8 pt-8 pb-16 bg-cyan-300 rounded-md flex flex-col items-center gap-8">
            <div className="w-24 h-24 bg-slate-950 rounded-full"></div>
            <div className="text-stone-900 text-2xl font-extrabold font-orbitron text-center">Game Design</div>
          </div>

          <div className="w-full lg:w-1/2 px-8 pt-8 pb-16 bg-blue-400 rounded-md flex flex-col items-center gap-8">
            <div className="w-24 h-24 bg-slate-950 rounded-full"></div>
            <div className="text-stone-900 text-2xl font-extrabold font-orbitron text-center">3D Modelling</div>
          </div>

          <div className="w-full lg:w-1/2 px-8 pt-8 pb-16 bg-purple-400 rounded-md flex flex-col items-center gap-8">
            <div className="w-24 h-24 bg-slate-950 rounded-full"></div>
            <div className="text-stone-900 text-2xl font-extrabold font-orbitron text-center">Level Design</div>
          </div>

          <div className="w-full lg:w-1/2 px-8 pt-8 pb-16 bg-purple-400 rounded-md flex flex-col items-center gap-8">
            <div className="w-24 h-24 bg-slate-950 rounded-full"></div>
            <div className="text-stone-900 text-2xl font-extrabold font-orbitron text-center">Level Design</div>
          </div>
        </div>
      </div>
    </div>


<hr className="my-10 md:my-20 lg:my-32" />


      </div>
    </>
  );
};


export default Program;
