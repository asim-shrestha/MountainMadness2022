import React, { FunctionComponent, useState } from "react";
import VideoMetadata from "../interface/VideoMetadata";
import Description from "./Description";
import HoverCursorDiv from "./HoverCursorDiv";
import VideoHud from "./VideoHud";

const tags = ["All", "Tubes", "TuBeS", "TUBES", "TOOBS", "TUBeZ", "toobs", "tOObs"];

const RecommendedTags: FunctionComponent = () => {
	const [tagIndex, setTagIndex] = useState(0);

	return (
		<div className="d-flex" style={{gap: "0.25rem", overflow: "hidden"}}>
			{tags.map((tag, idx) =>
				<HoverCursorDiv
					className={(tagIndex == idx ? "bg-dark text-white border border-dark" : "")}
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
					onClick={() => setTagIndex(idx)}
				>
					{tag}
				</HoverCursorDiv>
			)}
		</div>
	);
};

export default RecommendedTags;
