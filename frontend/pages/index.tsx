import type {NextPage} from 'next'
import VideoMetadata from "../interface/VideoMetadata";
import VideoComponent from "../components/VideoComponent";

const demoVideo: VideoMetadata = {
	url: "https://www.seatoskygondola.com/site/assets/files/9299/tubing.1350x760p48x88.jpg",
	views: 27377,
	title: "Test video",
	date: "Mar 6, 2018",
	description: "14 chutes, 3 lifts & a 14 story drop; speeds to 80km/h. Ontario's Best Snowtubing.\n14 chutes, 3 lifts & a 14 story drop; speeds to 80km/h. Ontario's Best Snowtubing.\n14 chutes, 3 lifts & a 14 story drop; speeds to 80km/h. Ontario's Best Snowtubing.\n",
	likes: 1231,
	dislikes: 1,
	user_metadata: {
		avatar_url: "https://yt3.ggpht.com/ytc/AKedOLSlSZDDH03KiN5f5e9PvDHpoX_vDn5hlFGaxZLXWQ=s176-c-k-c0x00ffffff-no-rj",
		name: "SnowValleyResort",
		subscribers: 724,
	}
}

const Home: NextPage = () => {

	return (
		<div>
			<VideoComponent video={demoVideo}/>
		</div>
	)
}

export default Home
