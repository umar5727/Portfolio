// Skills section
import React from "react";

import { Link } from "react-router-dom";
import Button from "../button/Button";
import Tabs from "./tabs/Tabs";
import H2 from "../heading/H2";
const Skills = () => {
  const skills = [
    {
      first: { name: "HTML5", percentage: "90%" },
    },
    { name: "React Js", className: "top-0 left-1/2" },
    { name: "JavaScript", className: "left-0" },
    { name: "HTML5", className: "right-0" },
    { name: "CSS3", className: "" },
    { name: "Bootstrap5", className: "" },
    { name: "Tailwind CSS", className: "" },
  ];
  return (
    <section id="skill" className="pt-20 lg:h-[100vh]">
      {/* Left Column */}
      <H2 className="text-4xl md:text-6xl font-bold  text-primary text-center">
        <span className="text-black text-3xl md:text-5xl  dark:text-white">
          Check My{" "}
        </span>
        Skills
      </H2>
      <p className="text-lg  md:text-xl  text-primary dark:text-lightgray text-center mt-4">
        I specialize in crafting interactive and user-friendly web applications
        using the power of React.js. I bring ideas to life and create seamless
        user experiences.
      </p>

      <Tabs />
    </section>
  );
};

export default Skills;
