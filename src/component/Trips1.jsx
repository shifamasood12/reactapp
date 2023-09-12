import React from 'react'
import Array1 from "./Array1"
import Recenttrips1 from './Recenttrips1'
const card=(val)=>{
    return(
        <div>
         <Recenttrips1
          imgsrc={val.imgsrc}
          head={val.head}
          para={val.para}
          key={val.id}
        />
        </div>
    )
    }
const Trips1 = () => {
  return (
    
        <div>
       {Array1.map(card)}
        </div>
    
  )
}

export default Trips1