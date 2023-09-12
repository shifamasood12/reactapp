import React from 'react'
import "./blog.css"
import Trips from './Trips'
import Trips1 from './Trips1'
const Blog = () => {
  return (
    <div>
        
        <div className='blog'>
        <h1>Trips</h1>
        <p>You can discover unique destination using Google Maps</p>
        </div>
        <div>
            <Trips/>
            <Trips1/>
        </div>
    </div>
  )
}

export default Blog