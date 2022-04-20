import React from 'react'
import '../stylesheets/Card.css'

const Card = (props) => {
    console.log(props)
  return (
    <div className="card" style={{backgroundImage:`url(${props.img})`,backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
        <h1>{props.title}</h1>
        <p>{props.desc}</p>
        <button className="play">Play</button>
    </div>
  )
}

export default Card