

import { faBars, faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useState } from 'react'
import NavContext from '../context/navcontext/NavContext'

const NavToggle = ({toggle, navbtn}) => {
  const {navToggle, setNavToggle} = useContext(NavContext)
  const handler=(e)=>{
    e.preventDefault();
    setNavToggle(!navToggle)
  }
  return (
    <div
     className='group flex justify-center items-center w-10 h-10 hover:bg-primary-light rounded-lg cursor-pointer lg:hidden '
     onClick={handler}
     >
        {
           !navToggle?
                <FontAwesomeIcon icon={faBars} className='w-5 h-5 text-primary-grayText group-hover:text-black dark:group-hover:text-white'/>
                :
                <FontAwesomeIcon icon={faX} className='w-5 h-5 text-primary-grayText group-hover:text-black dark:group-hover:text-white'/>
                
              }
              
    </div>
  )
}

export default NavToggle