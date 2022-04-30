import type { NextPage } from "next";
import styled from "styled-components";
import VideoMetadata from "../interface/VideoMetadata";
import VideoComponent from "../components/VideoComponent";
import NavBar from "../components/Nav/NavBar";
import CommentThread from "../components/Comments/CommentThread";
import Previews from "../components/Previews/Previews";

const CenteredContainer = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100vw;
  max-width: 1200px;
  padding: 3em 1.5em 1.5em 1.5em;
  margin: auto;
`;

const demoVideo: VideoMetadata = {
  url: "https://www.youtube.com/embed/7eX9Sa2zz0E",
  views: 27377,
  title: "Test video",
  date: "Mar 6, 2018",
  description:
    "14 chutes, 3 lifts & a 14 story drop; speeds to 80km/h. Ontario's Best Snowtubing.\n14 chutes, 3 lifts & a 14 story drop; speeds to 80km/h. Ontario's Best Snowtubing.\n14 chutes, 3 lifts & a 14 story drop; speeds to 80km/h. Ontario's Best Snowtubing.\n",
  likes: 1231,
  dislikes: 1,
  user_metadata: {
    avatar_url:
      "https://yt3.ggpht.com/ytc/AKedOLSlSZDDH03KiN5f5e9PvDHpoX_vDn5hlFGaxZLXWQ=s176-c-k-c0x00ffffff-no-rj",
    name: "SnowValleyResort",
    subscribers: 724,
  },
};

const Home: NextPage = () => {
  return (
    <>
      <NavBar />
      <CenteredContainer>
        <div className="row">
          <div className="col-12 col-md-8">
            <VideoComponent video={demoVideo} />
            <CommentThread video={demoVideo} />
          </div>
          <div className="col-12 col-md-4">
            <Previews />
          </div>
        </div>
      </CenteredContainer>
    </>
  );
};

export default Home;
