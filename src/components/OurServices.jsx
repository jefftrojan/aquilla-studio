import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { whatwedo } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import Footer from "./Footer";

const ProjectCard = ({
  index,
  name,
  description,
  image,

}) => {
  const isEvenIndex = index % 2 === 0;

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div
        className={`flex w-full bg-midnight p-6 rounded-2xl  ${
          isEvenIndex ? "flex-col md:flex-row" : "flex-col-reverse md:flex-row-reverse"
        }`}
      >
        <div
          className={`relative w-full md:w-[55%] h-[350px] ${
            isEvenIndex ? "md:mr-5" : "md:ml-5"
          }`}
        >
          <img
            src={image}
            alt='project_image'
            className='w-full h-full rounded-2xl object-center object-cover'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            
          </div>
        </div>

        <div className='flex flex-col justify-center mt-4 md:mt-0 md:ml-5'>
          <h3 className='text-white font-bold text-[28px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[16px]'>{description}</p>

          
        </div>
      </div>
    </motion.div>
  );
};

const OurServices = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText}`}>Our Services</h2>
      </motion.div>

      <div className='w-full flex'>
        
      </div>

      <div className='mt-20 flex flex-col gap-8'>
        {whatwedo.map((whatwedo, index) => (
          <ProjectCard key={`whatwedo-${index}`} index={index} {...whatwedo} />
        ))}
      </div>
      <hr className='mt-20' />
      <Footer/>
    </>
  );
};

export default OurServices;
