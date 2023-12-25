import React from 'react'

const H4 = ({children='h4', className=' '}) => {
  return (
    <h4 
    className={`font-bold text-base transition-colors duration-300  cursor-pointer hover:text-primary  ${className}`}
    >
        {children}
    </h4>
  )
}

export default H4