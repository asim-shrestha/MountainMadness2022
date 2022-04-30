import React, { FunctionComponent } from "react";
import styled from "styled-components";
import HoverCursorDiv from "../HoverCursorDiv";
import { useRouter } from 'next/router'

const TubeButtonContainer = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  padding: 0.5em 5em 0.5em 0.5em;
  
  :hover {
    cursor: pointer;
    background-color: #E5E5E5;
  }
`;

const TubeButton: FunctionComponent = () => {
	const router = useRouter()


	return (
		<TubeButtonContainer onClick={() => router.reload()}>
			<div className="d-flex align-items-center">
				<img alt="tube" src="/tube.png" height="15px"/>
				<div className="ml-4">Tube</div>
			</div>
		</TubeButtonContainer>
	);
}

export default TubeButton;