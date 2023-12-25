import React from 'react'
import { Hero, Services, Skills } from '../components'
import Projects from '../components/projects/Projects'


const Home = () => {
  return (
    <main>
        <Hero />
        <Services />
        <Skills />
        <Projects />
    </main>
  )
}

export default Home