import React from "react";
import SocialFollow from "./Socialfollow.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import emailjs, { init } from "emailjs-com";
init("user_9jLdO8H26hYMcdiuTRjOZ");

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_vfgy2ev",
        "template_02g4929",
        e.target,
        "user_9jLdO8H26hYMcdiuTRjOZ"
      )
      .then((res) => {
        if (res.status === 200) {
          alert("Thank you for your time. I will reply as soon as possible!");
        }
      })
      // Handle errors here however you like
      .catch((err) =>
        console.error(
          "Failed to send feedback. Error: ",
          err,
          process.env.REACT_APP_EMAILJS_USERID
        )
      );
  }

  return (
    <div id="contact">
      <div className="gridlayout1 start">
        <div>
          <h2>Contact</h2>
          <p>
            Drop a message through Whatsapp, let’s connect.
          </p>
          <div className="whatsapp-container">

          <a id="whatsapp" href="https://wa.me/917807240936" target="_blank" rel="noopener noreferrer" 
        className="whatsappphone">
        Ping me message on Whatsapp 👋
        <span id="whatsapp-hover"> <FontAwesomeIcon icon={faWhatsapp} size="2x" /></span>
      </a>

              {/* <a class="btn button phone" href="https://wa.me/917807240936" target="_blank" rel="noopener noreferrer" >
              <FontAwesomeIcon icon={faWhatsapp} size="2x" />Whatsapp via Mobile</a> */}
            
            </div>

          {/* <form className="contact-form" onSubmit={sendEmail}>
            <div className="grid2">
              <label htmlFor="name">Name:</label>
              <br />
              <input
                id="name"
                type="text"
                name="user_name"
                placeholder="Please enter your full name"
                autoComplete="off"
              />
              <br />
              <label htmlFor="email">Email:</label>
              <br />
              <input
                id="email"
                type="email"
                name="user_email"
                placeholder="Please enter your email address"
                autoComplete="off"
              />
            </div>
            <label htmlFor="message">Message:</label>
            <br />
            <textarea
              id="message"
              name="user_message"
              placeholder="Please enter your message"
              autoComplete="off"
            />
            <button type="submit" value="Send">
              &lt; Send /&gt;
            </button>
          </form> */}
        </div>
        <div>
          <h2>CONNECT</h2>
          <p>Please feel free to also reach out on other platforms.</p>
          <SocialFollow />
        </div>
      </div>
    </div>
  );
};

export default Contact;
