import { motion } from "framer-motion";

import { styles } from "../styles";
import OurServices from "./OurServices";
import Whoweare from "./Whoweare";

const Hero = () => {
  return (
    <>



    <section className=" bg-hero-pattern bg-cover bg-no-repeat bg-center relative w-full h-screen">
      <div
        className={`absolute inset-0 top-[120px] md:top-[60px] max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 ${styles.Padding} flex flex-col justify-center items-center`}
      >
        <div className="text-white text-center">
          <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-orbitron">
            <span className="text-white sm:px-4 py-1 mr-1 z-10 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">AQUILA</span>
            <span className="bg-white text-black rounded-xl px-2 py-1 relative z-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">STUDIO</span>
          </div>
         
        </div>
      </div>
      

    </section>
    <div className="container mx-auto p-4">

    <div className="mt-20" />

    <Whoweare />

    <div className="mt-20" />
    
    <OurServices />

    </div>
    


    </>
    
  );
};

export default Hero;
