import React from "react";
import "./Header.css";
import Cta from "./Cta";
import Me from "../../assets/assets/react-3.png";
import HeaderSocial from "./HeaderSocial";
import Bubleone from "./buble_one";
import Bubletwo from "./buble_two";

// const tween = KUTE.fromTo(
//   "blob1",
//   {path:"#blob1"},
//   {path:"#blob2"},
//   {repeat: 999, duration: 3000, yoyo: true},
//   tween.start()
// )
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h4>Hello I'm</h4>
        <h1>Facundo N. Pasqua</h1>
        <h5 className="text-ligth">Fullstack Developer</h5>
        <Cta />
        <HeaderSocial />
        {/* <Bubleone> */}
        {/* <Bubletwo></Bubletwo>
        </Bubleone> */}
        
        

 

        
        <div className="me">
            <img src={Me} alt="me" className="me__image"/>
        </div>
        {/* <div className="spacer layer2 flip"></div>
         <section className="pink">
         <script src="https://cdn.jsdelivr.net/npm/kute.js@2.1.2/dist/kute.min.js"></script>
        <svg
            id="visual"
            viewBox="0 0 900 600"
            width="900"
            height="600" 
            xmlns="http://www.w3.org/2000/svg"
            xmlns_xlink="http://www.w3.org/1999/xlink"
            version="1.1"
          >
            <g transform="translate(451.47357783851885 301.8700207103361)">
              <path id="blob1"
                d="M171.4 -155C219.7 -123 254.9 -61.5 253.3 -1.5C251.8 58.5 213.6 116.9 165.2 144.1C116.9 171.2 58.5 167.1 -4.9 172.1C-68.4 177 -136.7 191 -186.7 163.9C-236.7 136.7 -268.4 68.4 -251.9 16.5C-235.4 -35.4 -170.7 -70.7 -120.7 -102.7C-70.7 -134.7 -35.4 -163.4 13.1 -176.4C61.5 -189.5 123 -187 171.4 -155"
                fill="#13b19e"
              ></path>
            </g>
            <g transform="translate(467.3689091744372 337.0353262427063)" style="visibility: hidden">
              <path id="blob2"
                d="M152 -159.5C186.2 -117.9 195.6 -58.9 183.8 -11.8C172 35.4 139 70.7 104.9 101.5C70.7 132.4 35.4 158.7 -0.1 158.8C-35.6 158.9 -71.2 132.8 -111.7 102C-152.2 71.2 -197.6 35.6 -215.2 -17.6C-232.7 -70.7 -222.4 -141.4 -181.9 -183.1C-141.4 -224.8 -70.7 -237.4 -5.9 -231.5C58.9 -225.6 117.9 -201.2 152 -159.5"
                fill="#13b19e"
              ></path>
            </g>
          </svg>
          <KUTE></KUTE> */}
         
          {/* </section>
        <div className="spacer layer2"></div> */}
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
