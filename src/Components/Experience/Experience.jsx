import React from "react";
import "./Experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="expirience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="icon__class" />
              <div>
                <h4>HTML</h4>
                <small className="text-ligth">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="icon__class" />
              <div>
                <h4>CSS</h4>
                <small className="text-ligth">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="icon__class" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-ligth">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="icon__class" />
              <div>
                <h4>React</h4>
                <small className="text-ligth">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        {/* End of FrontEnd */}
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="icon__class" />
              <div>
                <h4>C#</h4>
                <small className="text-ligth">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="icon__class" />
              <div>
                <h4>SQL Server</h4>
                <small className="text-ligth">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="icon__class" />
              <div>
                <h4>Node.JS</h4>
                <small className="text-ligth">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
