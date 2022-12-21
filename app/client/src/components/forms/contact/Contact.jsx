import React, { useRef } from "react";
import "./Contact.css"
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formRef.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
   
        },
        (error) => {
          console.log(error.text);

        }
      );
  };

  return (
    <>
      <div className="c">
        <div className="c-background"></div>
        <div className="c-wrapper">
          <div className="c-left">
            <h1 className="c-title">Let's Chat!</h1>
            <div className="c-info">
              <div className="c-info-item">
                <PhoneIcon className="c-icon" /> (337)-123-4567
              </div>
              <div className="c-info-item">
                <MailIcon className="c-icon" />
                me@gmail.com
              </div>
              <div className="c-info-item">
                <MyLocationIcon className="c-icon" /> 123 Amaryllis., Laf, La.
                70503
              </div>
            </div>
          </div>
          <div className="c-right">
            <p className="c-desc">
              <b>Message Me!</b> Available for freelancing and hire!
            </p>
            <form ref={formRef} onSubmit={sendEmail} className="c-form">
              <input type="text" placeholder="Name" name="user_name" />
              <input type="text" placeholder="Subject" name="user_subject" />
              <input type="text" placeholder="Email" name="user_Email" />
              <textarea rows="5" placeholder="Message" name="message" />
            </form>
            <div className="emailBtnContainer">
              <button className="sendEmailBtn">SEND</button>
            </div>
            {/* {done && <ToastContainer />} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
