import React from 'react'
import "./Footer.css"
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
const Footer2 = () => {
  return (
    <div>
        <div className='tex'>
          <div>

          
        <h1>ShifaMasood <br /> <span className='p'>Choose Your Favourite Destination</span></h1>
        </div>
        <div className='ico'>
            <FacebookIcon className='ic'/>
            <InstagramIcon className='ic' />
            <TwitterIcon className='ic'/>
        </div>
        </div>
    </div>
  )
}

export default Footer2