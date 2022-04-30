import axios from "axios";
import styled from "styled-components";
import { useState, useEffect } from "react";

const PreviewLink = styled.a`
  color: black;
  width: 350%;
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
  margin-right: 1em;
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

  let vidIds = ["Ks-_Mh1QhMc", "7eX9Sa2zz0E", "c0KYU2j0TM4", "eIho2S0ZahI"];
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
    <div class="col-12 col-md-4">
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
