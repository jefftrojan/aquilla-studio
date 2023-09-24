import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";



const Whoweare = () => {
  return (
    <>



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

export default Whoweare;




