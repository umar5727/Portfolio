import React from 'react'

const H2 = ({children, className=''}) => {
  return (
    <h2 className={`text-3xl font-bold drop-shadow-[1px_1px_rgba(255,255,255,9.5)]  ${className}`}>{children}</h2>
  )
}

export default H2