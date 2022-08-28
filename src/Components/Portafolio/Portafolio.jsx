import React from "react";
import "./Portafolio.css";
import IMG2 from "../../assets/assets/portfolio2.png";
import IMG1 from "../../assets/assets/portfolio1.jpg";
import IMG3 from "../../assets/assets/IMG3.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Calculator",
    github: "https://github.com/Boryake/CalculadoraCurso",

  },
  {
    id: 2,
    image: IMG2,
    title: "WeatherApp",
    github: "https://github.com/Boryake/weather-app",

  },
  {
    id: 3,
    image: IMG3,
    title: "Stock and Sales (C# and SQL)",
    github: "https://github.com/DontBeFede/Trabajo-Practico-Nanzer-Climatizaciones",

  },
];

const Portafolio = () => {
  return (
    <section id="portafolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3 className="text">{title}</h3>
              <div className="portfolio__item-cta"></div>
              <div className="buttom-git">
              <a href={github} className="btn__git" target="_blank">
                GitHub
              </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portafolio;
