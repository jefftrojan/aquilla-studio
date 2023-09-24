import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { play, igihe, eranko } from "../assets";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  image,
  open_link,
}) => {
  const isEvenIndex = index % 2 === 0;

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div
        className={`flex w-full bg-tertiary p-6 rounded-2xl ${
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
            className='w-full h-full rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(open_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={play}
                alt='Play trailer'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
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

const Games = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText}`}>Our Games.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[18px] max-w-3xl leading-[32px]'
        >
          
          Now in our 2nd year, we've grown to become one of Rwanda's fast-paced game studios experiencing rapid growth. Our aim is simply to produce joyfully compelling stories that are packed full of characters through creating beautiful animation. Moreover, we aim to do this through building a positive working environment filled with talented, happy developers and designers crafting content they are truly proud of.

        </motion.p>
      </div>

      <div className='mt-20  gap-10'>
      <p className={styles.sectionSubText}>Our Games</p>
        <h3 className={styles.sectionHeadText}>ERANKO: A NATURE ADVENTURE</h3>
        <p className='mt-10 text-secondary text-[18px] max-w-3xl leading-[32px]'>
          Eranko is a 3D adventure game that takes place in a fictional world of 
          animals. The game is about a young lion who is on a journey to find his
          missing father.
        </p>
        <p className='text-secondary text-[18px] max-w-3xl leading-[32px]'>
          Platforms: PC, Android, iOS & Nintendo Switch
        </p>
        <p className='mt-3 text-secondary text-[18px] max-w-3xl leading-[15px]'>
          Release Date: TBD
        </p>
        <p className='mt-3 text-secondary text-[18px] max-w-3xl leading-[15px]'>
          Publisher: -
        </p>
        <p className='mt-3 text-secondary text-[18px] max-w-3xl leading-[15px]'>
          Game status: In development
        </p>
        <p className='mt-3 text-secondary text-[18px] max-w-3xl leading-[15px]'>
          Game Trailer: <a href="https://www.youtube.com/watch?v=wFENndMUVIk" target="_blank" className="text-secondary">Click <i>Here</i></a>
        </p>
        <img
        src={eranko}
  alt="image" 
  className="mx-auto mt-10 rounded-lg" 
  style={{width: "1500px", height: "600px"}}  />

      </div>

      {/* Unannounced game below */}


 <div className='mt-40 md:mt-45 flex flex-col gap-10 md:flex-row' id="igihe">
  <img
    src={igihe}
    alt="image"
    className="rounded-lg"
    style={{ width: "100%", maxWidth: "500px", height: "auto" }}
  />
  <div className="flex flex-col">
    <h4 className={styles.heroSubText}>Unannounced game</h4>
    <h3 className={styles.sectionHeadText}>IGIHE</h3>
    <p className='mt-10 text-secondary text-[18px] max-w-3xl leading-[32px]'>
      Empowering autistic children to develop essential skills by leveraging gamification approach.
    </p>
    <p className='text-secondary text-[18px] max-w-3xl leading-[32px]'>
      Platforms: iOS & Android
    </p>
    <p className='mt-3 text-secondary text-[18px] max-w-3xl leading-[15px]'>
      Release Date: TBD
    </p>
    <p className='mt-3 text-secondary text-[18px] max-w-3xl leading-[15px]'>
      Publisher: -
    </p>
    <p className='mt-3 text-secondary text-[18px] max-w-3xl leading-[15px]'>
      Game status: TBD
    </p>
  </div>
</div>

<hr className='my-20' />


      
    </>
  );
};

export default Games;
