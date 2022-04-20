import React from 'react'
import { data } from '../Data/data_events'
import Card from './Card'
import '../stylesheets/Section2.css'
import Subheading from './Subheading'

const Section2 = () => {
  return (
    <>
        <div className="section2">
            <Subheading title="What’s in it?" colour="black"/>
            <div className="cards">
                {
                    data.map(ele=> {
                        return <Card title={ele.title} desc={ele.desc} img={ele.img}/>
                    })
                }
            </div>
        </div>
    </>

  )
}

export default Section2