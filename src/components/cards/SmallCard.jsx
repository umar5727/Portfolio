import React from 'react'
import H4 from '../heading/H4'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SmallCard = ({text, className,image, icon, iconStyle}) => {
  return (
    <div className={`bg-white w-60 h-24 flex gap-2 items-center justify-center rounded-lg ${className} shadow-custom3`}>
        <FontAwesomeIcon icon={icon} className={`w-10 h-10 ${iconStyle}`} />
        <H4>{text}</H4>
    </div>
  )
}

export default SmallCard