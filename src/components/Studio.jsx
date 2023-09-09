import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import MeetTheTeam from "./TeamMembers";



const Studio = () => {
  return (
    <>


    <motion.div variants={textVariant()}>
      <h2 className={styles.sectionHeadText}>Studio.</h2>
    </motion.div>

    <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
    >
      Now in our 2nd year, we've grown to become one of Rwanda's fast-paced game studios experiencing rapid growth. Our aim is simply to produce joyfully compelling stories that are packed full of characters through creating beautiful animation. <br /> <br />Moreover, we aim to do this through building a positive working environment filled with talented, happy developers and designers crafting content they are truly proud of.


    </motion.p>
    <div className="mt-20" />


    <motion.div variants={textVariant()}>
      {/* <p className={styles.sectionSubText}>Introduction</p> */}
      <h2 className={styles.sectionHeadText}>Our Story.</h2>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
  {/* Left Column */}



     
  <div>
    <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
    >

Aquila Studio is an independent video game studio dedicated to creating innovative and engaging experiences. Our mission is to create games that captivate and challenge players to think differently and explore the limits of what video games can do. We strive to push the boundaries of gaming and create experiences that are both meaningful and entertaining.

      

    </motion.p>
  </div>

  {/* Right Column */}
  <div className="flex flex-wrap gap-10">
    <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
    >
      
      Our team is composed of experienced professionals that have worked in the video game industry for over a decade. We are passionate about creating unique experiences for gamers and are committed to delivering quality games that will stand the test of time. If you’re looking for an exciting and creative gaming experience, Aquila Studio is the place for you!

    </motion.p>
  </div>




  
</div>
<div className="mt-20" />

{/* Meet the team */}
<MeetTheTeam />
<div className="mt-20" />





    {/* Who we are */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
  {/* Left Column */}



     
  <div>

    <motion.div variants={textVariant()}>
      {/* <p className={styles.sectionSubText}>Introduction</p> */}
      <h2 className={styles.sectionHeadText}>Who We Are.</h2>
    </motion.div>

    <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
    >
      
Aquila Studio is a Rwanda-based Indie game studio with a mission to create innovative, high-quality entertainment experiences. We specialize in AAA-quality titles, while also exploring innovative gameplay mechanics and story-driven narratives. Our team of experienced game designers, developers, and producers create games that captivate and inspire players around the world.

    </motion.p>
  </div>

  {/* Right Column */}
  <div className="flex flex-wrap gap-10">
    <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
    >
      
Aquila Studio is a Rwanda-based indie game studio on a mission to create an ecosystem of game developers across the country and inspire new game talent to compete globally. We specialize in AA-quality titles while also exploring innovative gameplay mechanics and story-driven narratives. Our team of experienced game designers, developers, and producers create games that captivate and inspire players around Africa.

    </motion.p>
  </div>




  
</div>
  <img
  src="https://cdna.artstation.com/p/assets/images/images/051/076/412/large/diane-nuty-tribes-bestshot-newaya-02.jpg"
  alt="image" 
  className="mx-auto mt-10 rounded-lg" 
  style={{width: "1500px", height: "600px"}}
  
  
  />



    </>
  );
};

export default SectionWrapper(Studio, "Studio");
