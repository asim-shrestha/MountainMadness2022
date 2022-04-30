import IconButton from "./IconButton";
import { FunctionComponent } from "react";
import styled from "styled-components";
import VideoMetadata from "../interface/VideoMetadata";

const VideoFrame = styled.div`
  position: relative;
  width: 100%
  overflow: hidden;
  &::after {
    padding-top: 56.25%;
    display: block;
    content: '';
  }
  &>iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

type VideoHudProps = {
  video: VideoMetadata;
};

const VideoHud: FunctionComponent<VideoHudProps> = ({ video }) => {
  return (
    <>
      <VideoFrame>
        <iframe
          src={video.url}
          title="Youtube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </VideoFrame>
      <div>
        <h5 className={"m-2"}>Ontario's Best Snowtubing!</h5>
        <div id="action-buttons" className={"d-flex align-items-end"}>
          <small className={"text-secondary fs-5 m-2 ellipsis"}>
            27,377 views · Mar 6, 2018{" "}
          </small>
          <IconButton iconUrl={"/thumb-up.png"} text={video.likes.toString()} />
          <IconButton
            iconUrl={"/thumb-down.png"}
            text={video.dislikes.toString()}
          />
          <IconButton iconUrl={"/share.png"} text={"Share"} />
          <IconButton iconUrl={"/download.png"} text={"Download"} />
          <IconButton iconUrl={"/save.png"} text={"Save"} />
          <IconButton iconUrl={""} text={"···"} />
        </div>
      </div>
    </>
  );
};

export default VideoHud;
