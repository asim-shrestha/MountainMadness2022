import React, { FunctionComponent, useState } from "react";
import VideoMetadata from "../interface/VideoMetadata";
import styled from "styled-components";
import HoverCursorDiv from "./HoverCursorDiv";
import UserMetadata from "../interface/UserMetadata";

type DescriptionProps = {
  video: VideoMetadata;
  user: UserMetadata;
};


const Description: FunctionComponent<DescriptionProps> = ({ video, user }) => {
  const [isShowMore, setIsShowMore] = useState<Boolean>(true);
  const userMetadata = user;

  return (
    <div id="description" className={"d-flex flex-column "}>
      <div id="user-section" className={"d-flex justify-content-between"}>
        <div id="user-info" className={"d-flex"}>
          <img
            className={"rounded-circle"}
            alt="avatar"
            src={userMetadata.avatar_url}
            height={"50px"}
          />
          <div className={"d-flex flex-column m-2"}>
            <h6 className={"font-weight-bold"}>{userMetadata.name}</h6>
            <h6 className={"text-secondary"} style={{ fontSize: "0.80rem" }}>
              {userMetadata.subscribers} subscribers
            </h6>
          </div>
        </div>
        <div>
          <button
            type="button"
            className="btn text-uppercase"
            style={{ color: "white", backgroundColor: "#CC0000" }}
            onClick={() => window.open("https://www.youtube.com/channel/" + video.channelId)}
          >
            Subscribe
          </button>
        </div>
      </div>

      <div className="mr-4 mt-3" style={{ marginLeft: "57px" }}>
        <h6
          style={{fontSize: "0.9rem"}}
        >
          {isShowMore
            ? video.description.substring(0, 100) + (video.description.length > 100 ? "..." : "")
            : video.description}
        </h6>
        <HoverCursorDiv
          className={
            (!isShowMore ? "mt-4" : "mt-3") + " text-secondary text-uppercase"
          }
          style={{ fontSize: "0.75rem", color: "darkgray", width: "fit-content" }}
          onClick={() => setIsShowMore(!isShowMore)}
        >
          Show {isShowMore ? "more" : "less"}
        </HoverCursorDiv>
      </div>
    </div>
  );
};

export default Description;
