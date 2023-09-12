import React from 'react'
import "./popular.css"
const Popular = () => {
  return (
    <div>
    <div className='text'>
        <h1>Popular Destinations</h1>
        <p>Tours give you the opportunity to see a lot,within a time frame.</p>
    </div>
    <div className='main'>
    <div className='yourself'>
      <p>Hi, My Name is <span className='name'>Shifa masood</span>. I am a <span className='name'>Web Developer</span>. I study in <span className='name'>Arid University Rawalpindi</span></p>
    </div>
    <div className='pic'>
    <img src="../Images/16.jpg" alt="img" />
    </div>
    </div>
    </div>
  )
}

export default Popular