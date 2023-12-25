import React, { useEffect, useState } from 'react'
import Logo from './Logo'
import Navigation from './Navigation'

import Container from '../Container'
import ToggleTheme from './ToggleTheme'

const Header = () => {
const [navbtn, setNavbtn]=useState(false)
  const navToggle = (toggle)=>{
    setNavbtn(!navbtn);
  }
  useEffect(()=>{
    window.addEventListener('resize',()=>(setNavbtn(false)))
  },[])

  return (
    <header id='myClass' className='w-full relative '>
      <Container>
        <div className='flex justify-between items-center bg-white h-16 dark:bg-primary-dark transition-colors duration-200'>
      <div className='flex gap-8 items-end'>
      
      <Logo />
        <ToggleTheme />
      </div>
      <Navigation navbtn={navbtn}/>
      {/* <NavToggle  toggle={navToggle} navbtn={navbtn}/> */}
      </div>
      </Container>
    </header>
  )
}

export default Header