import React from 'react'
import CV from "./cv.pdf"

const Cta = () => {
  return (
    <div className='cta'>
        <a href={CV} download="Pasqua_Facundo_Cv" className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default Cta
