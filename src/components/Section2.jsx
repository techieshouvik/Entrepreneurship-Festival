import React from 'react'
import data from '../Data/data_events'
import Card from './Card'

const Section2 = () => {
  return (
    <>
        <div className="section2">
            <h1>What’s in it?</h1>
            <div className="cards">
                {
                    data.map(ele=> {
                        return <Card title={ele.title} desc={ele.desc}/>
                    })
                }
            </div>
        </div>
    </>

  )
}

export default Section2