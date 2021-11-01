import React from 'react'
import { Link } from "react-router-dom";


function vista2() {
    return (
        <div className= "espejo" style={{backgroundImage: "url('/assets/imagen/fondo3.jpg')"}}>

<Link to="miradas">
         <img alt="imagen" className="despertando" widht={500} height={300} src="/assets/imagen/despertando.png"/>
      </Link>



           <video className="espejito" autoPlay controls width={600} height={500}>
        <source src="/assets/video/Escena 2.mp4" type="video/mp4" />
      </video>

     

      <video autoPlay muted loop width={600} height={500}>
        <source src="/assets/video/nieve.mp4" type="video/mp4" />
      </video>


        </div>
    )
}

export default vista2
