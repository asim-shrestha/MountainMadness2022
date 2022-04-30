import IconButton from "./IconButton";
import {FunctionComponent} from "react";
import styled from "styled-components";
import VideoMetadata from "../interface/VideoMetadata";

const VideoContainer = styled.img`
  width: 64rem;
`

type VideoHudProps = {
	video: VideoMetadata
}

const VideoHud: FunctionComponent<VideoHudProps> = ({video}) => {
	return (
		<>
			<VideoContainer src={video.url}/>
			<div className={"d-flex justify-content-between"}>
				<div id="video-headers">
					<h5 className={"m-2 mt-3"}>Ontario's Best Snowtubing!</h5>
					<h6 className={"text-secondary fs-5 m-2"}>27,377 views · Mar 6, 2018 </h6>
				</div>
				<div id="action-buttons" className={"d-flex align-items-end"}>
					<IconButton iconUrl={"/thumb-up.png"} text={video.likes.toString()}/>
					<IconButton iconUrl={"/thumb-down.png"} text={video.dislikes.toString()}/>
					<IconButton iconUrl={"/share.png"} text={"Share"}/>
					<IconButton iconUrl={"/download.png"} text={"Download"}/>
					<IconButton iconUrl={"/save.png"} text={"Save"}/>
					<IconButton iconUrl={""} text={"···"}/>
				</div>
			</div>
		</>
	)
}


export default VideoHud;