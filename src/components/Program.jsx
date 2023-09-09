import React, { useRef, useState } from "react";
import ContactForm from "./ContactForm";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { gd4tkid } from "../assets";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const Program = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "AquilaStudio",
          from_email: form.email,
          to_email: "a.adegbola@alumni.alueducation.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <>
      <h3 className={styles.sectionHeadText}> Our Program</h3>

      <div className="mt-10 md:mt-20 lg:mt-32 flex flex-col md:flex-row-reverse xl:flex-row-reverse">
        <img
          src={gd4tkid}
          alt="image"
          className="rounded-lg mb-10 md:mb-0"
          style={{ width: "100%", maxWidth: "500px", height: "450px" }}
        />
        <div className="flex flex-col">
          <h2 className="mt-10 md:mt-0 text-3xl md:text-4xl lg:text-5xl font-bold leading-normal">
            Game Development Program
          </h2>
          <div className="mt-10" />

          <p className="mt-4 text-lg font-bold lg:text-xl text-secondary leading-normal">
            G4DT is a learning program to empower tech talents to learn the principles of game development, and create new tech opportunities toward career pathways.
          </p>
        </div>
      </div>

      <div className="mt-10 md:mt-20 lg:mt-32 flex flex-col md:flex-row">
        {/* Left Column */}
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2">
            Game Development For Talent (GD4T)
          </h2>
          <div className="mt-10" />
          <p className="text-lg lg:text-xl font-bold">
            G4DT is a learning program to empower tech talents to learn the principles of game development, and create new tech opportunities toward career pathways.
          </p>
        </div>
        <div className="mt-20"/>


        {/* Right Column */}
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2">
            Why GD4T
          </h2>
          <div className="mt-8" />
          <p className="text-lg lg:text-xl font-bold">
            The program was created to enable game talents to learn from traditionally marginalized communities and non-traditional backgrounds to realize their potential in the gaming industry and grow the thriving Rwanda game community. The program is specifically designed to ignite curiosity and empower underrepresented talents to learn about immersive real-time 3D and games to transform their communities and shape a brighter future.
          </p>
        </div>
        <div className="mt-20"/>

      </div>



      {/* what do we teach */}

      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText}`}>What do we teach.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[18px] max-w-3xl leading-[32px]'
        >

          Begin your career path as a game professional by leveragng Epic game ecosystem tools. <br />
          GD4T program is taught with a focus on Unreal engine. Unreal engine is a professional game engine that requires a knowledge in C++ or Blueprint programming.
          

        </motion.p>

        
      </div>
      <div className="mt-10 md:mt-20 lg:mt-32 flex flex-col md:flex-row-reverse xl:flex-row-reverse">
        <img
          src={gd4tkid}
          alt="image"
          className="rounded-lg mb-10 md:mb-0"
          style={{ width: "100%", maxWidth: "500px", height: "450px" }}
        /> 
  <div className="flex flex-col mt-10 items-center justify-center text-center">
          <h4 className="mt-10 md:mt-0 text-2xl md:text-2xl lg:text-3xl font-bold leading-normal">
              Start your application to join a thriving community.
            </h4>
          <div className="mt-10" />

          
        </div>
      </div>

      <hr className="my-10 md:my-20 lg:my-32" />

      {/* Add the ContactForm component here */}
    </>
  );
};

export default SectionWrapper(Program, "Program");
