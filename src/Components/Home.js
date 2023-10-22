import React from 'react'
import dfhome from "../Assets/dfhome.png"
import welcome from "../Assets/welcome.png"

export default function Home() {
  return (
    <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
        <div><img src={dfhome} alt="dfhome" /></div>
       <div> <img src={welcome} alt="welcome" /></div>
    </div>
  )
  
}
