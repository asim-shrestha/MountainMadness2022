import React, { FunctionComponent, useState } from "react";
import styled from "styled-components";
import VideoMetadata from "../interface/VideoMetadata";
import Description from "./Description";
import HoverCursorDiv from "./HoverCursorDiv";
import VideoHud from "./VideoHud";

const tags = [
  "All",
  "Tubes",
  "TuBeS",
  "TUBES",
  "TOOBS",
  "TUBeZ",
  "toobs",
  "tOObs",
];

type RecommendedTagsProps = {
  handleTagClick: () => void;
};

const TagContainer = styled.div`
  gap: 0.25rem;
  overflow: hidden;
  margin-bottom: 0.5em;
  padding-bottom: 0.2em;
  &:hover {
    overflow-x: scroll;
    margin-bottom: 0.2em;
  }
`;

const RecommendedTags: FunctionComponent<RecommendedTagsProps> = ({
  handleTagClick,
}) => {
  const [tagIndex, setTagIndex] = useState(0);

  return (
    <TagContainer className="d-flex">
      {tags.map((tag, idx) => (
        <HoverCursorDiv
          className={
            tagIndex == idx ? "bg-dark text-white border border-dark" : ""
          }
          id={tag}
          style={{
            borderRadius: "3rem",
            padding: "0.3rem 0.75rem 0.3rem 0.75rem",
            fontSize: "0.8rem",
            backgroundColor: "#ECECEC",
            borderStyle: "solid",
            borderWidth: "1px",
            borderColor: "#dadada",
          }}
          onClick={() => {
            if (idx == tagIndex) {
              return;
            }
            setTagIndex(idx);
            handleTagClick();
          }}
        >
          {tag}
        </HoverCursorDiv>
      ))}
    </TagContainer>
  );
};

export default RecommendedTags;
