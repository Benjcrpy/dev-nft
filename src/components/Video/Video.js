import React from "react";
import ReactPlayer from "react-player";

//INTERNALIMPORT
import Style from "./Video.css";
import images from "../../assets/anthony.png";

const Video = () => {
  return (
    <div className={Style.Video}>
      <div className={Style.Video_box}>
        <h1>
          <span>🎬</span> The Videos
        </h1>
        <p>
          Check out our hottest videos. View more and share more new perspectives on just about any topic. Everyone’s
          welcome.
        </p>

        <div className={Style.Video_box_frame}>
          <div className={Style.Video_box_frame_left}>
            <ReactPlayer
              src={images}
              alt="Video image"
              width={500}
              height={500}
              className={Style.Video_box_frame_left_img}
            />
          </div>

          <div className={Style.Video_box_frame_right}></div>
        </div>
      </div>
    </div>
  );
};

export default Video;