import IconButton from "./IconButton";
import { FunctionComponent } from "react";
import styled from "styled-components";
import VideoMetadata from "../interface/VideoMetadata";

const VideoFrame = styled.div`
  position: relative;
  width: 100%;
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
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </VideoFrame>
      <div className={"mt-3"}>
        <h5 className={"m-2"}>{video.title}</h5>
        <div id="action-buttons" className={"w-100 d-flex align-items-end justify-content-between"}>
          <small className={"text-secondary fs-5 m-2 ellipsis"}>
            {video.views} views · {video.date}{" "}
          </small>
          <div className="d-flex">
            <IconButton iconUrl={"/thumb-up.png"} text={video.likes?.toString()} />
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
      </div>
    </>
  );
};

export default VideoHud;
