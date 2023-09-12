import React from 'react'
import Button from '@mui/material/Button';
import "./home.css"
import Popular from './Popular';
import Recent from './Recent';
import Trips from './Trips';
import Footer1 from './Footer1';
import Footer2 from './Footer2';

const Home = () => {
  return (
    <div>
    <div className='img' >
      <div className='content'>
      <h1>21-Arid-474 <span>4(B)</span></h1>
        <p>Choose Your Favourite Destination</p>
        <Button variant="contained">Travel plan</Button> 
      </div>
       
    </div>
    <div>
    <Popular/>
    <Recent/>
    <Trips/> 

    <Footer2/>
    <Footer1/>
    </div>
   
    </div>
    
  )
}

export default Home