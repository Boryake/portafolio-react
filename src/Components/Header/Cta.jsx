import React from 'react'
import CV from "./cv.pdf"

const Cta = () => {
  return (
    <div className='cta'>
        <a href="https://drive.google.com/file/d/1jqqTrMGFBSv4tf19awNja2wjXsQvd0Sq/view?usp=sharing" download="Pasqua_Facundo_Cv.pdf"  target="_blank" className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default Cta
