import React, { useState } from "react";
import Modal from "simple-react-modal";
import Video from "../video/video.component";
import { ReactComponent as Codepen } from "../../assets/codepen.svg";
import { ReactComponent as Codesandbox } from "../../assets/codesandbox.svg";
import { ReactComponent as Figma } from "../../assets/figma.svg";
import { ReactComponent as Github } from "../../assets/github.svg";
import { ReactComponent as Stackblitz } from "../../assets/stackblitz.svg";
import { ReactComponent as Youtube } from "../../assets/youtube.svg";
import { ReactComponent as Php } from "../../assets/phpwhite.svg";
import { ReactComponent as Codeigniter } from "../../assets/codeigniter.svg";
import { ReactComponent as Wordpress } from "../../assets/wordpress.svg";
import { ReactComponent as Reacti } from "../../assets/reactwhite.svg";

const Backend = () => {
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);
  const [modal4, setModal4] = useState(false);

  return (
    <>
      <div className="gridlayout4">
        <div>
          <div>
            <Php />
          </div>
          <h3>Project</h3>
          <p>
          I’m passionate about technology because its about building better tools. Tools by definition help you do work. And the work that we’re doing is ultimately about people.
          </p>
          <div id="projectDiv">
          <a
            href="https://github.com/mrkmlkantsrma"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4>&lt; Code /&gt;</h4>
          </a>
          <a
              href="https://github.com/mrkmlkantsrma"
              target="_blank"
              rel="noopener noreferrer"
            >
             <h4>&lt; Live Site /&gt;</h4>
            </a>
        </div>
        </div>
        <div>
          <div>
            <Codeigniter />
          </div>
          <h3>Project</h3>
          <p>
          I’m passionate about technology because its about building better tools. Tools by definition help you do work. And the work that we’re doing is ultimately about people.
          </p>
          <div id="projectDiv">
          <a
            href="https://github.com/mrkmlkantsrma"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4>&lt; Code /&gt;</h4>
          </a>
          <a
              href="https://github.com/mrkmlkantsrma"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>&lt; Live Site /&gt;</h4>
            </a>
        </div>
        </div>
        <div>
          <div>
            <Reacti />
          </div>
          <h3>Portfolio</h3>
          <p>
          I’m passionate about technology because its about building better tools. Tools by definition help you do work. And the work that we’re doing is ultimately about people.
          </p>
          <div id="projectDiv">
          <a
            href="https://github.com/mrkmlkantsrma"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4>&lt; Code /&gt;</h4>
          </a>
          <a
              href="https://mrkmlkantsrma.github.io/Profile/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>&lt; Live Site /&gt;</h4>
            </a>
        </div>
        </div>
        <div>
          <div>
            <Wordpress />
          </div>
          <h3>Project</h3>
          <p>
          I’m passionate about technology because its about building better tools. Tools by definition help you do work. And the work that we’re doing is ultimately about people.
          </p>
          <div id="projectDiv">
          <a
            href="https://github.com/mrkmlkantsrma"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4>&lt; Code /&gt;</h4>
          </a>
          <a
              href="https://github.com/mrkmlkantsrma"
              target="_blank"
              rel="noopener noreferrer"
            >
             <h4>&lt; Live Site /&gt;</h4>
            </a>
        </div>
        </div>
        <div>
          <div>
            <Php />
          </div>
          <h3>Project</h3>
          <p>
          I’m passionate about technology because its about building better tools. Tools by definition help you do work. And the work that we’re doing is ultimately about people.
          </p>
          <div id="projectDiv">
          <a
            href="https://github.com/mrkmlkantsrma"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4>&lt; Code /&gt;</h4>
          </a>
          <a
              href="https://github.com/mrkmlkantsrma"
              target="_blank"
              rel="noopener noreferrer"
            >
             <h4>&lt; Live Site /&gt;</h4>
            </a>
        </div>
        </div>
        <div>
          <div>
            <Php />
          </div>
          <h3>Project</h3>
          <p>
          I’m passionate about technology because its about building better tools. Tools by definition help you do work. And the work that we’re doing is ultimately about people.
          </p>
          <div id="projectDiv">
          <a
            href="https://github.com/mrkmlkantsrma"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4>&lt; Code /&gt;</h4>
          </a>
          <a
              href="https://github.com/mrkmlkantsrma"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>&lt; Live Site /&gt;</h4>
            </a>
            </div>
        </div>
      </div>
    </>
  );
};

export default Backend;
