import React from "react";
import NameImage from "../../assets/aboutname.png";
import { ReactComponent as Html } from "../../assets/html.svg";
import { ReactComponent as Css } from "../../assets/css.svg";
import { ReactComponent as Js } from "../../assets/js.svg";
import { ReactComponent as Php } from "../../assets/php.svg";
import { ReactComponent as Wordpress } from "../../assets/wordpress.svg";
import { ReactComponent as Codeigniter } from "../../assets/codeigniter.svg";
import { ReactComponent as Node } from "../../assets/node.svg";
import { ReactComponent as Reacti } from "../../assets/react.svg";
import { ReactComponent as Fire } from "../../assets/fire.svg";
import { ReactComponent as Boot } from "../../assets/boot.svg";
import { ReactComponent as Git } from "../../assets/git.svg";
import { ReactComponent as Figma } from "../../assets/figma.svg";
import { ReactComponent as Gulp } from "../../assets/gulp.svg";
import { ReactComponent as Post } from "../../assets/post.svg";
import { ReactComponent as Ts } from "../../assets/ts.svg";

const About = () => {
  return (
    <div id="about">
      <div>
        <h2>About</h2>
        <p>
          Hello! My name is  <img src={NameImage} alt="Skytsunami" /> and I am a self taught Web developer.
        </p>
        <p>
          The scope of my work is mostly includes Ecommerce, Content Based websites.
           I'm mostly worked with PHP, Codeigniter, Wordpress , Ajax and then move to React, firebase.
           On Frontend mywork in html css js, CSS/JS annimations, jquery.
          Some of ther works based on web development, REST APIs, MySql.
        </p>
        <p>
          That being said, I like learning all aspects of web development and
          take pride in my fullstack work. Because of this, I am always open to
          new projects in new development environments.
        </p>
      </div>
      <div>
        <h3 style={{ marginTop: "2rem" }}>Current Skills</h3>
        <div className="skillgrid">
          <div>
            <div className="skillemblem">
              <Reacti />
            </div>
            <p>React</p>
          </div>
          <div>
            <div className="skillemblem">
              <Php />
            </div>
            <p>PHP</p>
          </div>
          <div>
            <div className="skillemblem">
              <Codeigniter />
            </div>
            <p>Codeigniter</p>
          </div>
          <div>
            <div className="skillemblem">
              <Js />
            </div>
            <p>JavaScript</p>
          </div>
          <div>
            <div className="skillemblem">
              <Wordpress />
            </div>
            <p>Wordpress</p>
          </div>
          <div>
            <div className="skillemblem">
              <Html />
            </div>
            <p>HTML5</p>
          </div>
          <div>
            <div className="skillemblem">
              <Css />
            </div>
            <p>CSS3</p>
          </div>
          <div>
            <div className="skillemblem">
              <Boot />
            </div>
            <p>Bootstrap</p>
          </div>

          <div>
            <div className="skillemblem">
              <Node />
            </div>
            <p>NodeJS</p>
          </div>
          
          <div>
            <div className="skillemblem">
              <Fire />
            </div>
            <p>Firebase</p>
          </div>
          <div>
            <div className="skillemblem">
              <Git />
            </div>
            <p>Git</p>
          </div>
          
          {/* <div>
            <div className="skillemblem">
              <Figma />
            </div>
            <p>Figma</p>
          </div> */}
         
          {/* <div>
            <div className="skillemblem">
              <Gulp />
            </div>
            <p>Gulp</p>
          </div> */}
          {/* <div>
            <div className="skillemblem">
              <Post />
            </div>
            <p>Postgresql</p>
          </div>    */}
          {/* <div>
            <div className="skillemblem">
              <Ts />
            </div>
            <p>TypeScript</p>
          </div> */}
        </div>
      </div>
      <div>
        <h3>Programming Directive</h3>
        <p>Consume, as in to consume knowledge to serve the end user.</p>
        <p>
          Enhance, as in to share solutions in order to enhance the problem.
        </p>
        <p>
          Replicate, as in to replicate the process to consistently solve
          problems.
        </p>
      </div>
    </div>
  );
};

export default About;
