import React, { useRef, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import emailjs from "@emailjs/browser";

import "./contact.scss";

import Phone from "../../common/assets/image/phone.png";
import Email from "../../common/assets/image/email.png";
import Loader from "../../common/assets/image/loader.svg";
import { Button } from "../../common/components";

import userInfo from "../../user_info";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const initialValues = { username: "", email: "", subject: "", message: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setFormErrors(validate(formValues));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    console.log("Form Erroes here -->", formErrors);
    setIsLoading(true);

    if (!Object.keys(validate(formValues)).length) {
      emailjs
        .sendForm(
          process.env.REACT_APP_EMAIL_SERVICE_ID,
          process.env.REACT_APP_EMAIL_TEMPLATE_ID,
          formRef.current,
          process.env.REACT_APP_EMAIL_USER_ID
        )
        .then((result) => {
          setDone(true);
          toast.success("Your message has been sent");
          setIsSubmit(true);
          setIsLoading(false);
        })
        .catch((error) => {
          toast.error(error.text);
          setIsLoading(false);
          console.log("Error here");
        });
    } else {
      toast.error("Your message could not be sent");
      setIsLoading(false);
    }
  };

  const validate = (value) => {
    const regex = "^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$";
    const errorMessage = {};

    if (!value.username) {
      errorMessage.username = "Username is required";
    }

    if (value.email.match(regex) == false) {
      console.log("Email Didnt match");
      errorMessage.email = "Please insert a correct email format";
    }

    if (!value.email) {
      errorMessage.email = "Email is required";
    }

    if (!value.message) {
      errorMessage.message = "Message is required";
    }

    console.log(value.email.match(regex));

    return errorMessage;
  };

  return (
    <div className="f" id="contactSection">
      <div className="f-wrapper">
        <div className="f-left">
          <h1 className="f-heading">Contact me through</h1>

          <div className="f-left-wrapper">
            <div className="f-info">
              <img
                src={userInfo.contact.phone.src}
                alt="phone-icon"
                className="f-icon"
              />
              <p className="info">{userInfo.contact.phone.info}</p>
            </div>

            <div className="f-info">
              <img
                src={userInfo.contact.email.src}
                alt="email-icon"
                className="f-icon"
              />
              <p className="info">{userInfo.contact.email.info}</p>
            </div>

            <div className="f-info link">
              <img
                src={userInfo.contact.linkedIn.src}
                alt="linkedIn-icon"
                className="f-icon"
              />
              <a href={userInfo.contact.linkedIn.info}>
                <p className="info">{userInfo.contact.linkedIn.info}</p>
              </a>
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
              autoComplete="off"
            >
              <div className="input-wrapper">
                <label className="label">Full Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  name="username"
                  className="t input"
                  value={formValues.username}
                  onChange={handleChange}
                />
                <span className="validation-error">{formErrors.username}</span>
              </div>

              <div className="input-wrapper">
                <label className="label"> Email </label>
                <input
                  type="text"
                  placeholder="Your Email"
                  name="email"
                  className="t input"
                  value={formValues.email}
                  onChange={handleChange}
                />
                <span className="validation-error">{formErrors.email}</span>
              </div>

              <div className="input-wrapper">
                <label className="label"> Subject </label>
                <input
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  className="t input"
                  value={formValues.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="input-wrapper">
                <label className="label"> Message </label>
                <textarea
                  type="text"
                  name="message"
                  className="t area"
                  placeholder="Enter Your Message"
                  value={formValues.message}
                  onChange={handleChange}
                />
                <span className="validation-error">{formErrors.message}</span>
              </div>

              <Button buttonName="Send" img={Loader} loading={isLoading} />

              <ToastContainer
                position="bottom-center"
                theme="colored"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Contact };
