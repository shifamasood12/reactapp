import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Footer1 from './Footer1';
import Footer2 from './Footer2';
import "./contect.css"
import Footer from './Footer';
const Contect = () => {
  return (
    <div className='con'>
    <div className='imgs'>
            <h1>Contect</h1>
    </div>
    <div className='contents'>
    <h1>Send A Message To Us</h1>
    <form action="">
    <TextField className='input' id="outlined-basic" label="Name" variant="outlined" /> <br /> <br />
      <TextField className='input' id="outlined-basic" label="Email" variant="outlined" /> <br /> <br />
      <TextField className='input' id="outlined-basic" label="Subject" variant="outlined" /> <br /> <br />
      <textarea className='input' placeholder='Message' cols="30" rows="10"></textarea> <br /> <br />
      <Button className='but' variant="outlined">Submit</Button>
    </form>
      
    </div>
    <Footer2/>
    <Footer1/>
    </div>
  )
} 

export default Contect