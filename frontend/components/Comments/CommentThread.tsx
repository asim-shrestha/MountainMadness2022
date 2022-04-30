import axios from "axios"
import { FunctionComponent, useState } from "react";
import VideoMetadata from "../../interface/VideoMetadata";
import Comment from "./Comment"

type VideoComponentProps = {
    video: VideoMetadata;
  };
  
const CommentThread: FunctionComponent<VideoComponentProps> = ({ video }) => {
    // const [theme, setTheme] = useTheme()
    
    
    var data2 = require('./commentThread.json')  
    var vidId = "7eX9Sa2zz0E"
    var temp = data2["items"];
    var temp2 = [{"id":"test"}]
    // console.log("meowmix")
    const res = axios.get(`https://www.googleapis.com/youtube/v3/commentThreads?part=id%2Csnippet&maxResults=20&videoId=7eX9Sa2zz0E&key=AIzaSyDZo7zVd48-X23NFN_KpmyxNXIavSWJnJc`).then(
      response => {
        temp2 = response.data["items"];
      }
    )
    // console.log("kkkeke")
    return (
      <div>
          {temp.map(function(d, idx){
              return (<Comment videoListInfo={d.snippet.topLevelComment.snippet}/>)
          })}
      
      </div>
    )
  }
  
  export default CommentThread