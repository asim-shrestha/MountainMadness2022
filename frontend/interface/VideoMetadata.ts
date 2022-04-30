import UserMetadata from "./UserMetadata";

interface VideoMetadata {
	url: string,
	views: number,
	title: string,
	description: string,
	likes: number,
	dislikes: number,
	date: string,
	user_metadata: UserMetadata,
}

export default VideoMetadata;