import { FunctionComponent } from "react";
import VideoMetadata from "../interface/VideoMetadata";
import Description from "./Description";
import VideoHud from "./VideoHud";

type VideoComponentProps = {
  video: VideoMetadata;
};

const VideoComponent: FunctionComponent<VideoComponentProps> = ({ video }) => {
  return (
    <div>
      <VideoHud video={video} />
      <hr />
      <Description video={video} />
      <hr />
    </div>
  );
};

export default VideoComponent;
