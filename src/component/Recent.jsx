import React from 'react'
import "./Recent.css"
import { NavLink } from 'react-router-dom'
const Recent = (props) => {
  return (
    <div>
        <div className='trips'> 
           <NavLink className="h1" to="/Services">Recent Trips</NavLink>
            <p>You can discover unique destination using Google Maps</p>
        </div>
        
    </div>
  )
}

export default Recent