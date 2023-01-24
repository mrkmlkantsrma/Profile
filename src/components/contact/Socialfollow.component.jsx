import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faGithub,
    faTwitter,
    faLinkedin,
    faWhatsapp
  } from "@fortawesome/free-brands-svg-icons";

const SocialFollow = () => {
  return (
    <div className="social-container">
      <a id="youtube" href="#" className="social">
        <FontAwesomeIcon icon={faYoutube} size="2x" />
        <img id="arrow-hover" src="https://github.com/atloomer/atloomer.github.io/blob/master/img/iconmonstr-paper-plane-1-120.png?raw=true"/>
      </a>
      <a id="Github" href="https://github.com/mrkmlkantsrma" className=" social">
        <FontAwesomeIcon icon={faGithub} size="2x" />
        <img id="arrow-hover" src="https://github.com/atloomer/atloomer.github.io/blob/master/img/iconmonstr-paper-plane-1-120.png?raw=true"/>
      </a>
      <a id="twitter" href="https://twitter.com/MrKmlKantSrma" className=" social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
        <img id="arrow-hover" src="https://github.com/atloomer/atloomer.github.io/blob/master/img/iconmonstr-paper-plane-1-120.png?raw=true"/>
      </a>
      <a id="Linkedin" href="https://www.linkedin.com/in/kamal-kant-sharma-6a4907162/" className=" social">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
        <img id="arrow-hover" src="https://github.com/atloomer/atloomer.github.io/blob/master/img/iconmonstr-paper-plane-1-120.png?raw=true"/>
      </a>
    </div>
  );
};

export default SocialFollow;
