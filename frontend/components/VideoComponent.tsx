import { FunctionComponent } from "react";
import UserMetadata from "../interface/UserMetadata";
import VideoMetadata from "../interface/VideoMetadata";
import Description from "./Description";
import VideoHud from "./VideoHud";

type VideoComponentProps = {
  video: VideoMetadata;
  user: UserMetadata;
};

const VideoComponent: FunctionComponent<VideoComponentProps> = ({ video, user }) => {
  return (
    <div>
      <VideoHud video={video} />
      <hr />
      <Description video={video} user={user} />
      <hr />
    </div>
  );
};

export default VideoComponent;
