import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Nav from"./component/Nav"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import Home from './Component/Home'
import About from './Component/About'
import Services from './Component/Services'
import Contect from './Component/Contect'


function App() {
 

  return (
    <>
     <BrowserRouter>
     <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Services' element={<Services/>}/>
          <Route path='/Contect' element={<Contect/>}/>
        </Routes>
      
      </BrowserRouter>

    </>
  )
}

export default App
