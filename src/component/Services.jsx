import React from 'react'
import "./Services.css"
import Blog from "./Blog"
import Footer1 from './Footer1';
import Footer2 from './Footer2';
const Services = () => {
  return (
    <div >
      <div className='services'>
         <h1>Services</h1>
      </div>
      <Blog/>
      <Footer2/>
    <Footer1/>
    </div>
  )
}

export default Services