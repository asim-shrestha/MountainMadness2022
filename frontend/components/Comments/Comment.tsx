import react, {FunctionComponent, useState } from "react";
import styled from "styled-components";
import IconButton from "../IconButton";


const ShowMoreButton = styled.p`
  :hover {
    cursor: pointer;
  }
`

type commentProps = {
    videoListInfo: any
}
const Comment: FunctionComponent<commentProps> = ({videoListInfo}) => {
    const [isShowMore, setIsShowMore] = useState<Boolean>(true);
    if(videoListInfo == null || videoListInfo["videoListInfo"] == null) {return <></>;}
    const isDark = 'dark'
    var isShortened = "block";
    const author = videoListInfo["videoListInfo"]["authorDisplayName"];
    const thumbnail = videoListInfo["videoListInfo"]["authorProfileImageUrl"];
    const text = videoListInfo["videoListInfo"]["textDisplay"];
    const likeCount = videoListInfo["videoListInfo"]["likeCount"];
    const publishedAt = videoListInfo["videoListInfo"]["publishedAt"];

    if((text.length) < 100){
      isShortened = "none";

    }
    // console.log(isShortened )
    
    return (
      <div id="description" className={"d-flex flex-column "}>
      <div id="user-section" className={"d-flex justify-content-between"}>
        <div id="user-info" className={"d-flex"}>
          <img
            className={"rounded-circle"}
            alt="avatar"
            src={thumbnail}
            height={"50px"}
          />
          <div className={"d-flex flex-column m-2"}>
            <div className="d-flex">
              <h6 className={"font-weight-bold"} style={{fontSize: "0.8rem"}}>{author} </h6>
              <small style={{paddingLeft:"10px", fontSize:"0.7rem"}}>
               {publishedAt.substring(0,10)}{" "}
              </small>
            </div>
            <div className="mr-2 mt-2" >
              <h6
                style={{fontSize: "0.9rem"}}
              >
                {isShowMore
                  ? text.substring(0, 100) + (text.length > 100 ? "..." : "")
                  : text}
              </h6>
              <ShowMoreButton id="buttonShow"
                className={
                  (!isShowMore ? "mt-3" : "mt-2") + " text-secondary font-weight-bold"
                }
                style={{ fontSize: "0.75rem", color: "darkgray", display:isShortened, marginBottom: "0.4rem", paddingBottom: "0"}}
                onClick={() => setIsShowMore(!isShowMore)}
              >
                Read {isShowMore ? "more" : "less"}
              </ShowMoreButton>
              <div id="action-buttons" className={"d-flex"}>
                <IconButton iconUrl={"/thumb-up.png"} normal text={likeCount.toString()} />
                <small className={"text-secondary fs-5 m-2 ellipsis"}>
                  Reply{" "}
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
  
  export default Comment