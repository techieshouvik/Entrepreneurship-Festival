import React from 'react'

const Card = (props) => {
  return (
    <div className="card">
        <h1>{props.title}</h1>
        <p>{props.desp}</p>
        <button className="play">Play</button>
    </div>
  )
}

export default Card