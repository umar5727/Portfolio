import React from 'react'
import H2 from '../heading/H2'
import Button from '../button/Button'
import { Link } from 'react-scroll'

const Services = () => {
  return (
    
        <section id='services' className="flex flex-col gap-6 lg:gap-0 lg:flex-row py-10">
      {/* Left Column */}
      <div className="lg:w-3/5 py-8  flex flex-col gap-8 justify-center items-center text-center lg:text-left lg:items-start md:py-0">
        <h1 className="text-4xl md:text-6xl font-bold  text-primary ">
          <span className="text-black dark:text-white">  My Awesome </span><br />
          <span className='text-primary'>Services</span> 
        </h1>
        <p className="text-lg font-medium md:text-xl  text-primary-text-normal dark:text-primary-text-normal-dark">
        Feel free to explore my portfolio to see more of my work. If you have a project in mind or just want to connect, I'd love to hear from you. Let's build something amazing together!
        </p>
        {/* discription ends  */}
      
        <Button >
          <Link to='contact'>
          Contact 
          </Link>
        </Button>
      </div>

      {/* Right Column  */}
      <div className="lg:w-2/5 flex justify-center relative ">
       
        <div className="relative  ">
         
          
          <img
            src="self1.png"
            alt=""
            className="mainImg w-full  z-40 relative "
          />
        </div>
      </div>
    </section>

        
  )
}

export default Services