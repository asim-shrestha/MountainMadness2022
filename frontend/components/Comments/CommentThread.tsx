import axios from "axios"
import { FunctionComponent, useState } from "react";
import VideoMetadata from "../../interface/VideoMetadata";
import Comment from "./Comment"
// GET https://youtube.googleapis.com/youtube/v3/commentThreads?part=id%2Csnippet%2Creplies&videoId=7eX9Sa2zz0E&access_token=AIzaSyDZo7zVd48-X23NFN_KpmyxNXIavSWJnJc&key=[YOUR_API_KEY] HTTP/1.1

// Authorization: Bearer [YOUR_ACCESS_TOKEN]
// Accept: application/json

type VideoComponentProps = {
    video: VideoMetadata;
  };
  
const CommentThread: FunctionComponent<VideoComponentProps> = ({ video }) => {
    // const [theme, setTheme] = useTheme()
    const isDark = 'dark'
    const data = [{"name":"test1", "description":"moew"},{"name":"test2", "description":"mix"},{"name":"test3", "description":"meowmix"}]

    var data2 = require('./commentThread.json')  
    
    var temp = data2["items"];


    return (
      <div>
          {temp.map(function(d, idx){
              return (<Comment videoListInfo={d.snippet.topLevelComment.snippet}/>)
          })}
      
      </div>
    )
  }
  
  export default CommentThread