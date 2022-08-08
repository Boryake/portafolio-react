
import React from 'react'
import "./Footer.css"
import "./FooterSocial"
import FooterSocial from './FooterSocial'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Pasqua Facundo</a>
      <ul className='permalinks'></ul>
      <li><a href="#"></a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experiencie</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#portafolio">Portfolio</a></li>
      <li><a href="#contact">Contact</a></li>
      <FooterSocial/>
      <div className='footer__copyrigth'>
        <small>&copy; Portfoilio, All rights reserved.</small>
      </div>
      <div className='close'>&lt;Facundo Pasqua/&#62;</div> 
      
    </footer>
  )
}

export default Footer
