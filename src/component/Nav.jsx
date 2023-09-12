import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import './Nav.css'
const Nav = () => {
  return (
    <div>
         <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary ">
  <div className="container-fluid main">
  <h1>ShifaMasood</h1>
    <button className="navbar-toggler mobile" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
       
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 app nav">
        <li className="nav-item nav-items">
          <HomeIcon  className='icon'/>
          <NavLink className="nav-link active  " aria-current="page" to="/">Home</NavLink>
          
        </li>
        <li className="nav-item  nav-items">
          <InfoIcon  className='icon'/>
          <NavLink className="nav-link " to='/About'>About</NavLink>
        </li>
        <li className="nav-item nav-items">
          <BusinessCenterIcon  className='icon'/>
          <NavLink className="nav-link  " to='/Services'>Services</NavLink>
        </li>
        <li className="nav-item nav-items">
          <ContactPageIcon className='icon'/>
          <NavLink className="nav-link " to='/Contect'>contect</NavLink>
        </li> 
      </ul>
      
      <Button className='btn' variant="outlined">Sign up</Button>
     
     
     
    </div>

   
  </div>
</nav>
     </div>
    </div>
  )
}

export default Nav