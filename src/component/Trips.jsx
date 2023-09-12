import React from 'react'
import Array from "./Array"
import Recenttrips from './Recenttrips'
const card=(val)=>{
    return(
        <div>
         <Recenttrips
          imgsrc={val.imgsrc}
          head={val.head}
          para={val.para}
          key={val.id}
        />
        </div>
    )
    }
const Trips = () => {
  return (
    
        <div>
       {Array.map(card)}
        </div>
    
  )
}

export default Trips