import { useState } from "react";
import styled from "styled-components";


const ShowMoreButton = styled.p`
  :hover {
    cursor: pointer;
  }
`

const comment = (videoListInfo) => {
    const [isShowMore, setIsShowMore] = useState<Boolean>(true  );
    const isDark = 'dark'
    var isShortened = "visible";
    const author = videoListInfo["videoListInfo"]["authorDisplayName"];
    const thumbnail = videoListInfo["videoListInfo"]["authorProfileImageUrl"];
    const text = videoListInfo["videoListInfo"]["textDisplay"];
    const likeCount = videoListInfo["videoListInfo"]["likeCount"];

    if((text.length) < 100){
      isShortened = "hidden";
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
            <h6 className={"font-weight-bold"}>{author}</h6>
            {/* <h6 className={"text-secondary"} style={{ fontSize: "0.80rem" }}>
              {userMetadata.subscribers} subscribers
            </h6> */}
          </div>
        </div>
      </div>

      <div className="mr-4 mt-4" style={{ marginLeft: "57px" }}>
        <h6>
          {isShowMore
            ? text.substring(0, 100) + "..."
            : text}
        </h6>
        <ShowMoreButton
          className={
            (!isShowMore ? "mt-4" : "mt-3") + " text-secondary text-uppercase"
          }
          style={{ fontSize: "0.75rem", color: "darkgray", visibility:isShortened }}
          onClick={() => setIsShowMore(!isShowMore)}
        >
          Show {isShowMore ? "more" : "less"}
        </ShowMoreButton>
      </div>
    </div>
    )
  }
  
  export default comment