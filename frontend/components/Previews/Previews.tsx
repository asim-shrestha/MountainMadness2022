import axios from "axios";
import React from "react";
import RecommendedTags from "../RecommendedTags";
import styled from "styled-components";
import { useState, useEffect } from "react";

const PreviewLink = styled.a`
  color: black;
  width: 100%;
  margin: 0.2em;
  margin-left: 0;
  &:hover {
    text-decoration: none;
    color: black;
  }
  overflow: auto;
`;

const PreviewImg = styled.img`
  width: 10em !important;
`;

const ImgContainer = styled.div`
  float: left;
  & > img {
    display: block;
  }
`;

const TextContainer = styled.div`
  margin-left: 10.25em;
  margin-right: 1em;
  & > p {
    font-size: 0.7em;
    line-height: 0px;
  }
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

  const vidList = require("../../interface/videosList.json");
  let vidIds = [];
  for (const [key, value] of Object.entries(vidList)) {
    for (let video of value) {
      vidIds.push(video.id);
    }
  }

  const vidIdString = vidIds.slice(0, 20).join("%2C");

  // console.log(vidIdString);
  useEffect(() => {
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${vidIdString}&key=AIzaSyDZo7zVd48-X23NFN_KpmyxNXIavSWJnJc`
      )
      .then((response) => {
        const data = response.data["items"];
        setAllPreviews(data);
      });
  }, []);

  const handleTagClick = () => {
    if (allPreviews == []) {
      return;
    }

    let shuffled = allPreviews
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

    setAllPreviews(shuffled);
  };
  return (
    <div>
      <RecommendedTags handleTagClick={handleTagClick} />
      <div className="list-group">
        {allPreviews.map((data, index) => (
          <PreviewLink key={index} href={"?id=" + data.id}>
            <ImgContainer>
              <PreviewImg
                src={data.snippet.thumbnails.medium.url}
                alt="video thumbnail"
                className="d-inline align-text-top"
              />
            </ImgContainer>
            <TextContainer>
              <Title>
                <p>{data.snippet.title}</p>
              </Title>
              <p>{data.snippet.channelTitle}</p>
              <p>
                {miniStats(data.statistics.viewCount, data.snippet.publishedAt)}
              </p>
            </TextContainer>
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
