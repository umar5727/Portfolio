import React from 'react'
import H2 from '../heading/H2'

const Projects = () => {
  return (
    <section id='project'>
        <H2 className='text-center'>My Recent Projects</H2>
        <div className='grid grid-cols-3 gap-5 my-10'>
          
          <div className='bg-red-600 col-span-2 row-span-2 aspect-video '>a1</div>
          <div className='bg-red-600 aspect-video'>b 2</div>
          <div className='bg-red-600 aspect-video'>c 3</div>
          <div className='bg-red-600 aspect-video'>d 4</div>
          <div className='bg-red-600 aspect-video'>f 5</div>
          <div className='bg-red-600 aspect-video'>g 6</div>
        </div>
    </section>
  )
}

export default Projects