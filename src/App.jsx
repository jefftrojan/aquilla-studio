import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { motion } from "framer-motion";

import ContactForm from "./components/ContactForm";
import { Studio, Program, Hero, Games, StarsCanvas, OurServices } from "./components";
import PreLoader from "./components/preloader";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";


const staggerContainer = () => {
  return {
    hidden: { opacity: 0.5, scale: 0.5 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
};

const App = () => {
  // Define animation properties
  const animationProps = {
    variants: staggerContainer(),
    initial: 'hidden',
    whileInView: 'show',
    viewport: { once: true, amount: 0.1 },
  };

  return ( 
    <>
    <Router>
      <PreLoader />
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          
          <motion.div 
          
          className="container mx-auto p-4">
          <div className="mt-10" />
          <StarsCanvas />



            <Routes>
              <Route path="/" element={<motion.div> <Hero /> </motion.div>} />
              <Route path="/studio" element={<motion.div> <Studio /> </motion.div>} />
              <Route path="/program" element={<motion.div> <Program /> </motion.div>} />
              <Route path="/games" element={<motion.div> <Games /> </motion.div>} />
            </Routes>
          </motion.div>
        </div>

        
        <motion.div {...animationProps}>
          <Footer />
        </motion.div>
      </div>
    </Router>
    </>
  );
};

export default App;
