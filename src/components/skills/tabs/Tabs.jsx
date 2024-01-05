import React, { useState } from "react";
import Button from "../../button/Button";

const Tabs = () => {
  const [tabState, setTabState] = useState(0);
  const skills = [
    {
      title: "Frontend",
      content: [
        { id: 1, name: "React.js", experties: 75 },
        { id: 2, name: "JavaScript", experties: 76 },
        { id: 3, name: "Tailwind CSS", experties: 85 },
        { id: 4, name: "HTML5", experties: 95 },
        { id: 5, name: "CSS3", experties: 86 },
        { id: 6, name: "Bootstrap5", experties: 70 },
      ],
    },
    {
      title: "Backend",
      content: [
        { id: 7, name: "Nood.js", experties: 48 },
        { id: 8, name: "Express.js", experties: 50 },
        { id: 9, name: "Mongo DB", experties: 55 },
      ],
    },
    {
      title: "Tools",
      content: [
        { id: 10, name: "Git & GitHub", experties: 85 },
        { id: 11, name: "Visual Studio Code", experties: 80 },
        { id: 12, name: "Vite", experties: 70 },
      ],
    },
    {
      title: "Soft Skills",
      content: [
        { id: 13, name: "Problem Solving", experties: 80 },
        { id: 14, name: "Collaboration", experties: 85 },
        { id: 15, name: "Attention to Detail", experties: 90 },
      ],
    },
  ];
  const handleClick = (index) => {
    setTabState(index);
    // console.log(index);
  };
  return (
    <section className="mt-10 mb-12 h-[70%] flex flex-col gap-6 lg:gap-0 lg:flex-row text-primary dark:text-white">
      <div className="lg:w-3/6 py-8  flex flex-col gap-8 justify-center items-center text-center lg:text-left lg:items-start md:py-0 md:pr-10">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-5 w-full lg:justify-center py-4 rounded-lg text-primary `}
        >
          {skills.map((item, index) => (
            <Button
              className={
                index === tabState
                  ? "text-2xl text-white bg-primary font-semibold border-none cursor-auto py-5 border-2 border-primary"
                  : "text-2xl bg-transparent font-semibold py-5 border-2 border-primary hover:text-black hover:bg-primary-light "
              }
              key={index}
              onClick={() => handleClick(index)}
            >
              {item.title}
            </Button>
          ))}
        </div>
      </div>
      {/* content starts  */}
      <div className="lg:w-3/6 flex justify-center relative border-[4px] border-primary rounded-lg ">
        <div className="flex w-full flex-col gap-6 py-2  justify-start">
          {skills.map((title, index) => {
            if (index === tabState) {
              return (
                <div key={index}>
                  <div className="text-2xl border-b-[4px] border-primary pb-3 pt-2 px-10 mb-1">
                    {title.title}
                  </div>

                  {title.content.map((item) => {
                    return (
                      <div key={item.id} className="relative px-10 pt-5">
                        <h2 className="text-lg font-semibold">
                          {item.name}
                          <span
                            className="absolute "
                            style={{ left: `${item.experties - 9}%` }}
                          >
                            {item.experties}%
                          </span>
                        </h2>
                        <div className="block w-full h-2 mt-[6px] bg-primary/40 rounded-full relative">
                          <div
                            className={`block bg-primary  h-2 rounded-full`}
                            style={{ width: item.experties + "%" }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            } else {
              return;
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default Tabs;
