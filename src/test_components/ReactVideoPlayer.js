import React from "react";
import { styles } from "./inlineStyles";
// import ReactPlayer from "react-player";

function ReactVideoPlayer() {
  const vidUrl = "./test_assets/how-the-internet-works.mp4";
  return (
    <div style={styles}>
      <h2>How The Internet Works</h2>
      {/*  <ReactPlayer
        url={vidUrl}
        playing={false}
        volume={0.5}
      /> */}
    </div>
  );
}

export default ReactVideoPlayer;
