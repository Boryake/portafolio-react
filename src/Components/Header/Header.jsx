import React from "react";
import "./Header.css";
import Me from "../../assets/assets/react-3.png";
import HeaderSocial from "./HeaderSocial";
import Cv from "./cv.pdf"


const Cta = () => {
  return (
    <div className='cta'>
        <a href={Cv} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}


const Header = () => {
  return (
    <header>

      <div className="container header__container">
        <h4>Hello I'm</h4>

        <h1>Facundo N. Pasqua</h1>
        <h5 className="text-ligth">Fullstack Developer</h5>
        <Cta />
        <HeaderSocial />
            <div className="me">
            <img src={Me} alt="me" className="me__image"/>
        </div>
     
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
