import styled from "styled-components";

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
  stats += " • ";

  return stats + date;
}

const Previews = () => {
  const datalist = [
    {
      url: "https://www.youtube.com/embed/7eX9Sa2zz0E",
      views: 27377,
      title: "Ontario's Best SnowtubingOntario's Best Snowtubing",
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
      thumbnail:
        "https://www.seatoskygondola.com/site/assets/files/9299/tubing.1350x760p48x88.jpg",
    },
    {
      url: "https://www.youtube.com/embed/7eX9Sa2zz0E",
      views: 27377,
      title: "Ontario's Best Snowtubing",
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
      thumbnail:
        "https://www.seatoskygondola.com/site/assets/files/9299/tubing.1350x760p48x88.jpg",
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
            <Title>
              <p>{data.title}</p>
            </Title>
            <p>{data.user_metadata.name}</p>
            <p>{miniStats(data.views, data.date)}</p>
          </PreviewLink>
        ))}
      </div>
    </div>
  );
};

export default Previews;
