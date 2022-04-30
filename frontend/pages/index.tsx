import type { NextPage } from "next";
import styled from "styled-components";
import VideoMetadata from "../interface/VideoMetadata";
import VideoComponent from "../components/VideoComponent";
import NavBar from "../components/Nav/NavBar";
import CommentThread from "../components/Comments/CommentThread";
import React from "react";
import RecommendedTags from "../components/RecommendedTags";

const CenteredContainer = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100vw;
  max-width: 1200px;
  padding: 4em 1.5em 1.5em 1.5em;
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

const PreviewLink = styled.a`
  color: black;
  width: 100%;
  margin: 0.2em;
  &:hover {
    text-decoration: none;
    color: black;
  }
`;

const PreviewImg = styled.img`
  width: 10em !important;
  margin-right: 1em;
`;

const Previews = () => {
  const datalist = [
    {
      title: "Tube Tops are all the Rage in 2006",
      thumbnail:
        "https://www.seatoskygondola.com/site/assets/files/9299/tubing.1350x760p48x88.jpg",
      link: "#",
    },
    {
      title: "Water Tubing vs. Snow Tubing",
      thumbnail:
        "https://www.seatoskygondola.com/site/assets/files/9299/tubing.1350x760p48x88.jpg",
      link: "#",
    },
  ]; // replace this with request to backend

  return (
    <div>
      <RecommendedTags/>
        <div className="list-group">
        {datalist.map((data, index) => (
          <PreviewLink href={data.link}>
            <PreviewImg
              src={data.thumbnail}
              alt="video thumbnail"
              className="d-inline align-text-top"
            />
            {data.title}
          </PreviewLink>
        ))}
      </div>
    </div>
  );
};

const Home: NextPage = () => {
  return (
      <>
        <NavBar/>
        <CenteredContainer>
          <div className="row">
            <div className="col-12 col-md-8">
              <VideoComponent video={demoVideo} />
              <CommentThread video={demoVideo}/>
            </div>
            <div className="col-12 col-md-4">
              <Previews/>
            </div>
          </div>
        </CenteredContainer>
      </>
  );
};

export default Home;
