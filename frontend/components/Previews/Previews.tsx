import axios from "axios";
import React from "react";
import RecommendedTags from "../RecommendedTags";
import styled from "styled-components";
import { useState, useEffect } from "react";

const PreviewLink = styled.a`
  color: black;
  width: 100%;
  margin: 0.2em;
  &:hover {
    text-decoration: none;
    color: black;
  }
  & > p {
    font-size: 0.6em;
    line-height: 0px;
  }
`;

const PreviewImg = styled.img`
  width: 10em !important;
`;

const Title = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  font-size: 0.8em;
  font-weight: bold;
  margin-bottom: 0.5em;
`;

function miniStats(views, date) {
  let stats = "";
  if (views >= 1000000) {
    views = Math.floor(views / 1000000);
    stats += views + "M";
  } else if (views >= 1000) {
    views = Math.floor(views / 1000);
    stats += views + "K";
  } else {
    stats += views;
  }
  stats += " • " + date.slice(0, 10);

  return stats;
}

const Previews = () => {
  const [allPreviews, setAllPreviews] = useState([]);

  const vidIds = require("../../interface/videosList.json").videos.map(
    function (video) {
      return video.id;
    }
  );
  const vidIdString = vidIds.join("%2C");

  useEffect(() => {
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${vidIdString}&key=AIzaSyDZo7zVd48-X23NFN_KpmyxNXIavSWJnJc`
      )
      .then((response) => {
        const data = response.data["items"];
        setAllPreviews(data);
        console.log(setAllPreviews);
      });
  }, []);

  return (
    <div>
      <RecommendedTags />
      <div class="list-group">
        {allPreviews.map((data, index) => (
          <PreviewLink href="#">
            <PreviewImg
              src={data.snippet.thumbnails.medium.url}
              alt="video thumbnail"
              class="d-inline align-text-top"
            />
            <Title>
              <p>{data.snippet.title}</p>
            </Title>
            <p>{data.snippet.channelTitle}</p>
            <p>
              {miniStats(data.statistics.viewCount, data.snippet.publishedAt)}
            </p>
          </PreviewLink>
        ))}
      </div>
    </div>
  );
};

export default Previews;

/*

{allPreviews.map(function (data, idx) {
  return <p>{data.snippet.title}</p>;
})}

{allPreviews.map((data, index) => (
  <PreviewLink href="#">
    <PreviewImg
      src={data.snippet.thumbnails.default.url}
      alt="video thumbnail"
      class="d-inline align-text-top"
    />
    <Title>
      <p>{data.snippet.title}</p>
    </Title>
    <p>{data.snippet.channelTitle}</p>
    <p>
      {miniStats(data.statistics.viewCount, data.snippet.publishedAt)}
    </p>
  </PreviewLink>
))}*/