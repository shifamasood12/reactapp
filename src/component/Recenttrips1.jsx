import React from 'react'
import "./Recent.css"
const Recenttrips1 = (props) => {
  return (
    <div>
        <div className='box'>
            <img className='image' src={props.imgsrc} alt="" />
            <h1>{props.head}</h1>
            <p>{props.para}</p>
        </div>
    </div>
  )
}

export default Recenttrips1