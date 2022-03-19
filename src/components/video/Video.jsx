import React from 'react'
import { useParams } from 'react-router';
import YouTube from "react-youtube";

const Video = () => {
    const { key } = useParams();
    console.log(key);

    const opts = {
        height: "390",
        width: "640",
        playerVars: {
          autoplay: 0,
        },
    };
    
  return (
    <div>
      <div>
        <YouTube videoId={key} opts={opts} />
      </div>
    </div>
  )
}

export default Video
