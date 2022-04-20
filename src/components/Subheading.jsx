import React from 'react'
import '../stylesheets/Subheading.css'

const Subheading = (props) => {
  return (
    <h1 className='subheading' style={{color:props.colour}}>{props.title}</h1>
  )
}

export default Subheading