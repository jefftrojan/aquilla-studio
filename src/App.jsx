import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
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

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <>
      <Router>
        <PreLoader />
        <div className='relative z-0 bg-primary'>
          <Navbar />
          <StarsCanvas />

          <ScrollToTop />

          <Routes>
            <Route path="/" element={<motion.div> <Hero /> </motion.div>} />
            <Route path="/studio" element={<motion.div> <Studio /> </motion.div>} />
            <Route path="/program" element={<motion.div> <Program /> </motion.div>} />
            <Route path="/games" element={<motion.div> <Games /> </motion.div>} />
          </Routes>
        </div>

       
      </Router>
    </>
  );
};

export default App;
