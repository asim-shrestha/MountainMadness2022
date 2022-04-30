import UserMetadata from "./UserMetadata";

interface VideoMetadata {
  id: string;
  url: string;
  views: number;
  title: string;
  description: string;
  likes: number;
  dislikes: number;
  date: string;
}

export default VideoMetadata;
