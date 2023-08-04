import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

import "./styles.css"; 

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      
      <Footer />
    </div>
  );
};

export default App;