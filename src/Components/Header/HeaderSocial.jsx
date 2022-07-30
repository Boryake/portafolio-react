import React from 'react'
import {BsLinkedin, BsGithub} from "react-icons/bs"

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/facundo-nicol%C3%A1s-pasqua-8b372720b/'  target="_blank" className='Link_social'><BsLinkedin/></a>
        <a href='https://github.com/Boryake' target="_blank"  className='Link_social'><BsGithub/></a>
    </div>
  )
}

export default HeaderSocial
