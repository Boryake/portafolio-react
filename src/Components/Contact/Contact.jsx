import React, { useRef } from 'react';
import "./Contact.css"
import {MdOutlineEmail} from "react-icons/md"
import {BsWhatsapp} from "react-icons/bs"
import emailjs from 'emailjs-com';





const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gfivkj2', 'template_68gcuqk', form.current, '49IzshzTat14cO_Ga')
    e.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (

    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
      <div className='contact__options'>
        <article className='contact__option'>
          <MdOutlineEmail/>
          <h4>Email</h4>
          <h5>facundopasqua@gmail.com</h5>
          <a href="mailto:facundopasqua@gmail.com" target="_blank">Send a message</a>
        </article>
        <article className='contact__option'>
          <BsWhatsapp/>
          <h4>WhatsApp</h4>
          <a href="https://wa.me/543517721676" target="_blank">Send a message</a>
        </article>
        </div>    
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Full Name' required/>
          <input type="email" name="email" placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn-primary__contact'>Send Message</button>
          </form>    
      </div>
    </section>
  )
}

export default Contact