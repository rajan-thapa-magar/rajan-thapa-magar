import React, { useRef, useState } from 'react'
import './footer.css'
import { contact } from '../contact'
import Phone from '../img/phone.png'
import Email from '../img/email.png'
import Button from '../shared/Button'
import emailjs from '@emailjs/browser'

const Footer = () => {
  const formRef = useRef()
  const [done, setDone] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_2nc7ce3', 'template_5xn1lpn', formRef.current, 'GR3IoGo1Hg_IDrQlg')
      .then((result) => {
        console.log(result.text);
        setDone(true)
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    <div className="f">
      <div className="f-left">
        <h1 className="f-heading">Contact me through</h1>

        <div className="f-left-wrapper">
          <div className="f-info">
            <img src={Phone} alt="phone-icon" className="f-icon" />
            <p className="info">{ contact.phone }</p>
          </div>

          <div className="f-info">
            <img src={Email} alt="email-icon" className="f-icon" />
            <p className="info">{ contact.email }</p>
          </div>
        </div>
      </div>
      <div className="f-right">
        <div className="f-right-card">
          <h2 className="f-heading">Wanna Connect with me? </h2>
          <p className="f-msg">Leave me a message in my Gmail to connect with me</p>
          
          <form
            className="contact-form"
            ref={formRef}
            onSubmit={handleSubmit}
            autoComplete="off">
              <input type="text" placeholder="Your Name" name="name" className="t input"/>
              <input type="text" placeholder="Your Email" name="email" className="t input"/>
              <input type="text" placeholder="Subject" name="subject" className="t input" />
              <textarea type="text" placeholder="Enter Your Message" name="message" className="t area" />
              <Button buttonName="Send" />
            
            {done &&
              <div className="sent-notification">Mail Sent</div>}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Footer
