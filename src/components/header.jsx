
import React from "react";
import { Link } from "react-scroll";
import "../styles.css";

const Header = () => {
  return (
    <header>
      
      <h1>Site Under Construction</h1>
    <h3><span>AquilaStudio</span> is getting ready to go live! <br /> Stay tuned for our exciting launch!</h3>
    <Link to="contactForm" smooth={true} offset={-70} duration={500} className="scroll-button">
        Get in Touch?
      </Link>
      
    </header>

    
  );
};

export default Header;