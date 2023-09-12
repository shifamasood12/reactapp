import React from 'react'
import Array2 from"./Array2"
import Footer from "./Footer"
const card=(val)=>{
    return(
    <div>
   <Footer
    head={val.head}
    p={val.p}
    p1={val.p1}
    p2={val.p2}
    p3={val.p3}
   />
    </div>
    )
}
const Footer1 = () => {
  return (
    <div>
   {Array2.map(card)}
    </div>
  )
}

export default Footer1