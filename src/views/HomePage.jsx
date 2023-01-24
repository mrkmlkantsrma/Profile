import React from "react";
import Header from "../components/header/header.component";
import Hero from "../components/hero/hero.component";
import About from "../components/about/about.component";
import Projects from "../components/projects/projects.component";
import Testimonial from "../components/testimonial/testimonial.component";
import Contact from "../components/contact/contact.component";
import Footer from "../components/footer/footer.component";
import { ReactComponent as Logo } from "../assets/logo.svg";
import background from "../assets/mapmark.svg";

const HomePage = () => {

  
  return (
    <div id="homepage">
      <Header> 
       <Logo id="homelogo" fill="#162A3B" />    
       <Hero />
        <hr />
        <About />
        <div
          style={{
            // backgroundImage: `url(${background})`,
            backgroundRepeat: "repeat-y"
          }}
        >
          <hr className="aboutHr"/>
          <Projects />
          <hr className="aboutHr"/>
          {/* <Testimonial /> */}
          <Contact />
        </div>
      </Header>
        <Footer />
       
    </div>
  );
};

export default HomePage;
