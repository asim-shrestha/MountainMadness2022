import type { NextPage } from "next";
import styled from "styled-components";

const CenteredContainer = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100vw;
  max-width: 1200px;
  padding: 1.5em;
  margin: auto;
`;

const VideoFrame = styled.iframe`
  width: 100%;
  min-height: 65vh;
`;

const Video = () => {
  const data = {
    title: "Water Tubing vs. Snow Tubing",
    url: "https://www.youtube.com/embed/mTz0GXj8NN0",
  }; // replace this with request to backend

  return (
    <div class="col-12 col-md-8">
      <VideoFrame
        src={data.url}
        title={data.title}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></VideoFrame>
      <h5>{data.title}</h5>
    </div>
  );
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
  height: 5em !important;
  margin-right: 1em;
`;

const Previews = () => {
  const datalist = [
    {
      title: "Tube Tops are all the Rage in 2006",
      thumbnail:
        "https://i.ytimg.com/an_webp/mTz0GXj8NN0/mqdefault_6s.webp?du=3000&sqp=CPeQs5MG&rs=AOn4CLCsw8pIAsbZp2TITnzvJJRi0ejCag",
      link: "#",
    },
    {
      title: "Water Tubing vs. Snow Tubing",
      thumbnail:
        "https://i.ytimg.com/an_webp/mTz0GXj8NN0/mqdefault_6s.webp?du=3000&sqp=CPeQs5MG&rs=AOn4CLCsw8pIAsbZp2TITnzvJJRi0ejCag",
      link: "#",
    },
  ]; // replace this with request to backend

  return (
    <div class="col-12 col-md-4">
      <div class="list-group">
        {datalist.map((data, index) => (
          <PreviewLink href={data.link}>
            <PreviewImg
              src={data.thumbnail}
              alt="video thumbnail"
              class="d-inline align-text-top"
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
    <CenteredContainer>
      <div class="row">
        <Video></Video>
        <hr />
        <Previews></Previews>
      </div>
    </CenteredContainer>
  );
};

export default Home;
