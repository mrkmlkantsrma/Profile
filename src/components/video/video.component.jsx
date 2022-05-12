import React from "react";


const Video = (props) => {
  return (

      <iframe
        src={props.source}
        frameborder="0"
        title="ProjectShowcase"
        allowfullscreen
      ></iframe>

  );
};

export default Video;
