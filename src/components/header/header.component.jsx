import React, { useState, useRef } from "react";
import { Scrollspy } from "@makotot/ghostui";
import { ReactComponent as Logo } from "../../assets/logobyname.svg";
import close from "../../assets/close.png";
import menubar from "../../assets/menu-bar.png";
import videoIntro from "../../assets/profile_Intro.mp4";



const Header = (props) => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  window.addEventListener("scroll", changeBackground);
  const sectionRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  return (
    <div className="App">
      <Scrollspy sectionRefs={sectionRefs}>
        {({ currentElementIndexInViewport }) => (
          <div>
            <div id="header" className={navbar ? "sticky" : ""}>
              <div className="desktopHeader">
                  {/* <video src={videoIntro} width="250" height="100" loop={true} controls={false} autoPlay={true}/> */}
                <div>
                  <a href="/" className="logo">
                    <Logo className="headerLogo" />
                  </a>
                </div>
                <ul className="desktopMenu">
                  <li
                    className={
                      currentElementIndexInViewport === sectionRefs[0]
                        ? "active"
                        : ""
                    }
                  >
                    <a href="#hero">Home</a>
                  </li>
                  <li
                    className={
                      currentElementIndexInViewport === sectionRefs[1]
                        ? "active"
                        : ""
                    }
                  >
                    <a href="#about">About</a>
                  </li>
                  <li
                    className={
                      currentElementIndexInViewport === sectionRefs[2]
                        ? "active"
                        : ""
                    }
                  >
                    <a href="#projects">Projects</a>
                  </li>
                  <li
                    className={
                      currentElementIndexInViewport === sectionRefs[3]
                        ? "active"
                        : ""
                    }
                  >
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
              <div className="mobileHeader">
                <div className="innerHeader">
                  <a href="/" className="logo">
                    <Logo className="headerLogo" />
                  </a>
                  <button className="menubar" onClick={toggleMenu}><img src={menubar} alt="close" /></button>
                  </div>
                  {openMenu ? (
                    <div>
                <div>
                <ul className="mobileMenu">
                  <li
                    className={
                      currentElementIndexInViewport === sectionRefs[0]
                        ? "active"
                        : ""
                    }
                  >
                    <a href="#hero">Home</a>
                  </li>
                  <li
                    className={
                      currentElementIndexInViewport === sectionRefs[1]
                        ? "active"
                        : ""
                    }
                  >
                    <a href="#about">About</a>
                  </li>
                  <li
                    className={
                      currentElementIndexInViewport === sectionRefs[2]
                        ? "active"
                        : ""
                    }
                  >
                    <a href="#projects">Projects</a>
                  </li>
                  <li
                    className={
                      currentElementIndexInViewport === "contact"
                        ? "active"
                        : ""
                    }
                  >
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
                  </div>
                </div>
                  ) : null}
              </div>
            </div>
            <div ref={sectionRefs[2]}>{props.children}</div>
          </div>
        )}
      </Scrollspy>
    </div>
  );
};

export default Header;
