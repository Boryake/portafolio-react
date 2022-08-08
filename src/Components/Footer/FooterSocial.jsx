import React from 'react'
import {BsLinkedin, BsGithub} from "react-icons/bs"

const FooterSocial = () => {
  return (
    <div className='footer__socials'>
        <a href='https://www.linkedin.com/in/facundo-nicol%C3%A1s-pasqua-8b372720b/'  target="_blank" className='Link_social'><BsLinkedin/></a>
        <a href='https://github.com/Boryake' target="_blank"  className='Link_social'><BsGithub/></a>
    </div>
  )
}

export default FooterSocial
