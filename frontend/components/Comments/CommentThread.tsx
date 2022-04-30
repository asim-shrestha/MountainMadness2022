import axios from "axios";
import { FunctionComponent, useState, useEffect } from "react";
import VideoMetadata from "../../interface/VideoMetadata";
import Comment from "./Comment";

type VideoComponentProps = {
  video: VideoMetadata;
};

const CommentThread: FunctionComponent<VideoComponentProps> = ({ video }) => {
  // const [theme, setTheme] = useTheme()
  const [allComments, setAllComments] = useState([]);

  var data2 = require("./commentThread.json");
  var vidId = "7eX9Sa2zz0E";
  var temp = data2["items"];
  var temp2 = [{ id: "test" }];
  // console.log("meowmix")
  /*const res = await axios
    .get(
      `https://www.googleapis.com/youtube/v3/commentThreads?part=id%2Csnippet&maxResults=20&videoId=7eX9Sa2zz0E&key=AIzaSyDZo7zVd48-X23NFN_KpmyxNXIavSWJnJc`
    )
    .then((response) => {
      temp2 = response.data["items"];
      console.log(temp2);
    });*/

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/commentThreads?part=id%2Csnippet&maxResults=20&videoId=${vidId}&key=AIzaSyDZo7zVd48-X23NFN_KpmyxNXIavSWJnJc`
      )
      .then((response) => {
        const temp2 = response.data["items"];
        setAllComments(temp2);
      });
  }, []);
  // console.log("kkkeke")
  return (
    <div>
      {allComments.map(function (d, idx) {
        return <Comment videoListInfo={d.snippet.topLevelComment.snippet} />;
      })}
    </div>
  );
};

export default CommentThread;
