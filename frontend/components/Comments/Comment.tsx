import { useState } from "react";
import styled from "styled-components";
import IconButton from "../IconButton";


const ShowMoreButton = styled.p`
  :hover {
    cursor: pointer;
  }
`

const comment = (videoListInfo) => {
    const [isShowMore, setIsShowMore] = useState<Boolean>(true  );
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
    
    return (
      // <div id="description" className={"d-flex flex-column "}>
      //   <div id="user-section" className={"d-flex justify-content-between"}>
      //     <div id="user-info" className={"d-flex"}>
      //       <img className={"rounded-circle"} alt="avatar" src={thumbnail} height={"50px"}/>
      //       <div className={"d-flex flex-column m-2"}>
      //         <h6 className={"font-weight-bold"}>{author}</h6>
      //         {/* <h6 className={"text-secondary"} style={{fontSize: "0.80rem"}}>{userMetadata.subscribers} subscribers</h6> */}
      //       </div>
      //     </div>
      //     {/* <div>
      //       <button type="button" className="btn text-uppercase" style={{ color: "white", backgroundColor: "#CC0000"}}>Subscribe</button>
      //     </div> */}
      //   </div>

      //   <div className="ml-5 mr-4 mt-4" style={{}}>
      //     <h6>
      //       { isShowMore ?  text.substring(0, 100) + "..." : text}
      //     </h6>
      //     <ShowMoreButton
      //       className={(!isShowMore ? "mt-4" : "mt-3") +  " text-secondary text-uppercase"}
      //       style={{fontSize: "0.75rem", color:"darkgray", }}
      //       onClick={() => setIsShowMore(!isShowMore)}
      //     >
      //       Show {isShowMore ? "more" : "less"}
      //     </ShowMoreButton>
      //   </div>
      // </div>
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
              <h6 className={"font-weight-bold"}>{author} </h6>
              <small style={{paddingLeft:"10px", fontSize:"11px"}}>
               {publishedAt.substring(0,10)}{" "}
              </small>
              {/* <h6 className={"text-secondary"} style={{ fontSize: "0.80rem" }}>
                {userMetadata.subscribers} subscribers
              </h6> */}
            </div>
            <div className="mr-2 mt-2" >
              <h6>
                {isShowMore
                  ? text.substring(0, 100) + "..."
                  : text}
              </h6>
              <ShowMoreButton id="buttonShow"
                className={
                  (!isShowMore ? "mt-4" : "mt-3") + " text-secondary text-uppercase"
                }
                style={{ fontSize: "0.75rem", color: "darkgray", display:isShortened }}
                onClick={() => setIsShowMore(!isShowMore)}
              >
                Show {isShowMore ? "more" : "less"}
              </ShowMoreButton>
              <div id="action-buttons" className={"d-flex mt-2"}>
                <IconButton iconUrl={"/thumb-up.png"} text={likeCount.toString()} />
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
  
  export default comment