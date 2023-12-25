// Skills section 
import React from 'react'

import { Link } from 'react-router-dom';
import Button from '../button/Button';
const Skills = () => {
const skills=[
  {name:'React Js', className:'top-0 left-1/2'},
  {name:'JavaScript', className:'left-0'},
  {name:'HTML5' , className:'right-0'},
  {name:'CSS3' , className:''},
  {name:'Bootstrap5', className:''},
  {name:'Tailwind CSS', className:''},
]
  return (
    
    


    <section id='skill' className="flex flex-col gap-6 lg:gap-0 lg:flex-row py-10">
      {/* Left Column */}
      <div className="lg:w-3/6 py-8  flex flex-col gap-8 justify-center items-center text-center lg:text-left lg:items-start md:py-0">
        <h1 className="text-4xl md:text-6xl font-bold  text-primary ">
          <span className="text-black dark:text-white">Check My </span> <br />
          Skills
        </h1>
        <p className="text-lg font-medium md:text-xl  text-primary-text-normal dark:text-primary-text-normal-dark">
        I specialize in crafting interactive and user-friendly web applications using the power of React.js. With a strong foundation in modern JavaScript and a keen eye for design, I bring ideas to life and create seamless user experiences.
        </p>
        {/* discription ends  */}
      
        <Button >
          <Link to='#contact'>
          Hire me
          </Link>
        </Button>
      </div>

      {/* Right Column  */}
      <div className="lg:w-3/6 flex justify-center relative ">
       
        <ul className='relative w-full'>
          {
          skills.map((item,index)=>(
            <li key={index} className={`text-xl ${item.className} absolute`}>
              {item.name}
            </li>
          ))
          }
        </ul>
      </div>
    </section>

    
  )
}

export default Skills