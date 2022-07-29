import React from 'react'
import "./Services.css"
import {BiCheck} from "react-icons/bi"

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container_services__container">
        <article className='service'>
          <div className='service_head'>
            <h3>UX UI Desing</h3>
          </div>

        <ul className='service__list'>
        <li>
            <BiCheck className='service__list-icon'/>
            <p>Content strategy.</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Information architecture.</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Brand and design system development.</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>User flow charts, diagrams.</p>
          </li>
        </ul>
        </article>
        {/* END OF UX UI */}
        <article className='service'>
          <div className='service_head'>
            <h3>Web Development</h3>
          </div>
        <ul className='service__list'>
        <li>
            <BiCheck className='service__list-icon'/>
            <p>Content Management System.</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Ecommerce Application.</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Custom Web Applications.</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>QA & Testing.</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Web Support and Maintenance.</p>
          </li>
        </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}
        <article className='service'>
          <div className='service_head'>
            <h3>System Analyst</h3>
          </div>

        <ul className='service__list'>
        <li>
            <BiCheck className='service__list-icon'/>
            <p>Business Analysis Outsourcing.</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Requirement Management Services.</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Communication & Networking.</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Solution Design and Validation.</p>
          </li>
        </ul>
        </article>
      </div> 
    </section>
  )
}

export default Services
