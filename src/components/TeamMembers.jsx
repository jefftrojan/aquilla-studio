import React from "react";
import { aquila, jubril, oluwadamilola, adetola, cynthia } from "../assets/index";

const TeamMember = ({ name, role, image }) => (
  <div className="flex flex-col items-center">
    <img
      src={image}
      alt={`${name}'s headshot`}
      className="w-full h-full mb-2 rounded-[38px]"
    />
    <h3 className="text-lg font-semibold">{name}</h3>
    <p className="text-sm text-white-600">{role}</p>
  </div>
);

const MeetTheTeam = () => {
  const teamMembers = [
 
    {
      name: "Damilola Jacob",
      role: "Partnership Lead",
      image: oluwadamilola, 
    },
    // {
    //   name: "Jubril Abdulazeez",
    //   role: "Graphic Designer",
    //   image: jubril, 
    // },
    {
      name: "Aquila Adegbola",
      role: "CEO",
      image: aquila, 
    },
    {
      name: "Cynthia Isaro",
      role: "Program Lead",
      image: cynthia, 
    },
    // {
    //   name: "Oshingbesan Ademola",
    //   role: "UI/UX Designer",
    //   image: jubril,
    // },
    // {
    //   name: "Adetola Thompson",
    //   role: "CEO",
    //   image: adetola, 
    // },
  ];

  return (
    <>
      <div className="mt-20" />
      <h2 className="text-3xl font-semibold ">Meet The Team</h2>
      <div className="mt-10" />
      <div className="grid grid-cols-3 gap-5">
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </>
  );
};

export default MeetTheTeam;
