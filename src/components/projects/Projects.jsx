import React, { useState } from "react";
import H2 from "../heading/H2";

const Projects = () => {
  const [image, setImage] = useState("vitejs.svg");

  const projects = [
    { name: "first", image: "vitejs.svg" },
    { name: "second", image: "css.svg" },
    { name: "third", image: "javascript.svg" },
    { name: "fourth", image: "gsap.svg" },
    { name: "fifth", image: "mongodb-logo.svg" },
    
  ];
  return (
    <section id="project">
      <H2 className="text-center">My Recent Projects</H2>
      <div className="grid grid-cols-3 gap-5 my-10">
        <div className="bg-red-600 col-span-2 row-span-2 aspect-video ">
          <img src={image} alt="" className="w-full aspect-video" />
        </div>
        {/* main display ends  */}
        {projects.map((item, index) => (
          <div
            className="group bg-red-600 aspect-video cursor-pointer overflow-hidden "
            onClick={() => setImage(item.image)}
            key={index}
          >
            <img
              src={item.image}
              alt=""
              className="aspect-video duration-500 group-hover:scale-125"
            />
          </div>
          
        ))}
      </div>
    </section>
  );
};

export default Projects;
