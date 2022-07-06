import React from 'react'
import image from "../large.jpg";
import placeholder from "../starlogo.png";
import ProgressiveImg from "../progressiveImage/ProgressiveImg";

const Company = () => {
  return (
    <div>
      <ProgressiveImg custom_class="venue__thumbnail" src={image} placeholder={placeholder} />
    </div>
  )
}

export default Company