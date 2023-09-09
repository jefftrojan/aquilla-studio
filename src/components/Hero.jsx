import { motion } from "framer-motion";

import { styles } from "../styles";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[120px] md:top-[60px] max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 ${styles.paddingX} flex flex-col justify-center items-center`}
      >
        <div className="text-white text-center">
          {/* Hide "Welcome to" on small and medium screens */}
          {/* <div className="absolute p-12 top-60 left-10 transform text-2xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-3xl mt-8 hidden md:block">
            Welcome to
          </div> */}
          <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-10xl font-bold font-orbitron">
            <span className="text-white sm:px-4 py-1 mr-1 z-10 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">AQUILA</span>
            <span className="bg-white text-black rounded-xl px-2 py-1 relative z-10 text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-10xl">STUDIO</span>
          </div>
          {/* Hide "Website" on small and medium screens */}
          <div className="absolute bottom-70 right-40 p-5 transform text-2xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-3xl font-bold font-orbitron hidden md:block">
            Website
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
