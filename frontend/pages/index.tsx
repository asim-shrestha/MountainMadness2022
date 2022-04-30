import type { NextPage } from "next";
import axios from "axios";
import styled from "styled-components";
import VideoMetadata from "../interface/VideoMetadata";
import VideoComponent from "../components/VideoComponent";
import NavBar from "../components/Nav/NavBar";
import CommentThread from "../components/Comments/CommentThread";
import React, { useState, useEffect } from "react";
import RecommendedTags from "../components/RecommendedTags";
import Previews from "../components/Previews/Previews";
import SideNav from "../components/SideNav";

const CenteredContainer = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100vw;
  max-width: 1200px;
  padding: 4em 1.5em 1.5em 1.5em;
  margin: auto;
`;

const Home: NextPage = () => {
  const [videoData, setVideoData] = useState({
    id: "7eX9Sa2zz0E",
    url: "https://www.youtube.com/embed/7eX9Sa2zz0E",
    views: 27377,
    title: "Test video",
    date: "Mar 6, 2018",
    description:
      "14 chutes, 3 lifts & a 14 story drop; speeds to 80km/h. Ontario's Best Snowtubing.",
    likes: 1231,
    dislikes: 1,
    user_metadata: {
      avatar_url:
        "https://yt3.ggpht.com/ytc/AKedOLSlSZDDH03KiN5f5e9PvDHpoX_vDn5hlFGaxZLXWQ=s176-c-k-c0x00ffffff-no-rj",
      name: "SnowValleyResort",
      subscribers: 724,
    },
  });
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const params = new URLSearchParams(window.location.search);
  const vidId = params.get("id");

  useEffect(() => {
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${vidId}&key=AIzaSyDZo7zVd48-X23NFN_KpmyxNXIavSWJnJc`
      )
      .then((response) => {
        const res = response.data["items"][0];

        const data: VideoMetadata = {
          id: res.id,
          url: "https://www.youtube.com/embed/" + res.id,
          views: res.statistics.viewCount,
          title: res.snippet.title,
          date: res.snippet.publishedAt.slice(0, 10),
          description: res.snippet.description,
          likes: res.statistics.likeCount,
          dislikes: 1,
          user_metadata: {
            avatar_url:
              "https://yt3.ggpht.com/ytc/AKedOLSlSZDDH03KiN5f5e9PvDHpoX_vDn5hlFGaxZLXWQ=s176-c-k-c0x00ffffff-no-rj",
            name: res.snippet.channelTitle,
            subscribers: 724,
          },
        };
        setVideoData(data);
        return axios.get(
          `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${res.snippet.channelId}&key=AIzaSyDZo7zVd48-X23NFN_KpmyxNXIavSWJnJc`
        );
      })
      .then((response) => {
        const res = response.data["items"][0];
        const data: VideoMetadata = videoData;
        data.user_metadata.avatar_url = res.snippet.thumbnails.default.url;
        data.user_metadata.subscribers = res.statistics.subscriberCount;
        console.log(data);
        setVideoData(data);
      });
  }, []);

  return (
    <>
      <NavBar openSideNav={() => setIsSideNavOpen(true)} />
      <SideNav isOpen={isSideNavOpen} close={() => setIsSideNavOpen(false)} />
      <CenteredContainer>
        <div className="row">
          <div className="col-12 col-md-8">
            <VideoComponent video={videoData} />
            <CommentThread video={videoData} />
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
