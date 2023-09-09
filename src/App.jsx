import { BrowserRouter } from "react-router-dom";
import ContactForm from "./components/ContactForm";
import { Studio, Program, Feedbacks, Hero, Navbar, Games, StarsCanvas, OurServices } from "./components";
import PreLoader from "./components/preloader"
import Footer from "./components/Footer";



const App = () => {
  return (
    
    <BrowserRouter>
      <PreLoader />
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <Studio />
        <OurServices />
        <Games />
        <div className='relative z-0'>
          <Program />
          <StarsCanvas />
        </div>

        <Feedbacks />
        <Footer />
       
      </div>
    </BrowserRouter>
  );
}

export default App;
