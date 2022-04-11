import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'


import './contact.css'

import Phone from '../../common/assets/image/phone.png'
import Email from '../../common/assets/image/email.png'
import { Button } from '../../common/components'

import userInfo from "../../user_info";

const Contact = () => {
  const formRef = useRef()
  const [done, setDone] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs.sendForm(
        process.env.SERVICE_ID,
        process.env.EMAIL_TEMPLATE_ID,
        formRef.current,
        process.env.EMAIL_USER_ID
    ).then((result) => {
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
            <p className="info">{ userInfo.contact.phone }</p>
          </div>

          <div className="f-info">
            <img src={Email} alt="email-icon" className="f-icon" />
            <p className="info">{ userInfo.contact.email }</p>
          </div>
        </div>
      </div>
      <div className="f-right">
        <div className="f-right-card">
          <h2 className="f-heading">Wanna Connect with me? </h2>
          <p className="f-msg">Leave me a message to connect with me</p>

          <form
            className="contact-form"
            ref={formRef}
            onSubmit={handleSubmit}
            autoComplete="off">
              <input type="text" placeholder="Your Name" name="name" className="t input"/>
              <input type="text" placeholder="Your Email" name="email" className="t input"/>
              <input type="text" placeholder="Subject" name="subject" className="t input" />
              <textarea
                  type="text"
                  name="message"
                  className="t area"
                  placeholder="Enter Your Message"  />

              <Button buttonName="Send" />

            {done && (
                <div className="sent-notification">
                    Mail Sent
                </div>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}

export { Contact };