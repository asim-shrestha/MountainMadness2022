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
import { useRouter } from "next/router";
import UserMetadata from "../interface/UserMetadata";

const CenteredContainer = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100vw;
  max-width: 1450px;
  padding: 4em 1.5em 1.5em 1.5em;
  margin: auto;
`;

const selectRandomVideoFromJson = () => {
  const videos = require("../interface/videosList.json").videos;
  return videos[Math.floor(Math.random() * videos.length)];
};

const Home: NextPage = () => {
  const [videoData, setVideoData] = useState<VideoMetadata | null>(null);
  const [userData, setUserData] = useState<UserMetadata | null>(null);
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(
    selectRandomVideoFromJson()
  );
  const router = useRouter();

  // Retrieve id from router once its ready
  useEffect(() => {
    if (!router.isReady) return;

    const { id } = router.query;
    if (id == null) {
      return;
    }
    setSelectedVideo({ id: id });
  }, [router.isReady]);

  useEffect(() => {
    let nameBuffer = "";
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${selectedVideo.id}&key=AIzaSyDZo7zVd48-X23NFN_KpmyxNXIavSWJnJc`
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
        };

        nameBuffer = res.snippet.channelTitle;
        setVideoData(data);
        return axios.get(
          `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${res.snippet.channelId}&key=AIzaSyDZo7zVd48-X23NFN_KpmyxNXIavSWJnJc`
        );
      })
      .then((response) => {
        const res = response.data["items"][0];
        const userData: UserMetadata = {
          name: nameBuffer,
          avatar_url: res.snippet.thumbnails.default.url,
          subscribers: res.statistics.subscriberCount,
        };
        setUserData(userData);
      });
  }, []);

  return (
    <>
      <NavBar openSideNav={() => setIsSideNavOpen(true)} />
      <SideNav isOpen={isSideNavOpen} close={() => setIsSideNavOpen(false)} />
      <CenteredContainer>
        <div className="row">
          <div className="col-12 col-md-8">
            {videoData != null && userData != null ? (
              <>
                <VideoComponent video={videoData} user={userData} />
                <CommentThread video={videoData} />
              </>
            ) : (
              ""
            )}
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
