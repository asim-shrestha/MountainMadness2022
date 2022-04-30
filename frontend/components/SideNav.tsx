import React, { FunctionComponent } from "react";
import styled from "styled-components";
import TubeButton from "./Nav/TubeButton";
import YoutubeLogo from "./Nav/YoutubeLogo";


const BackgroundOverlay = styled.div`
  position:fixed;
  top:0;
  bottom:0;
  left:0;
  right:0;
  background-color: black;
  opacity:0.6;
  z-index:2;
`;

const SideNavContainer = styled.div`
  width: 15rem;
  background-color: white;
  opacity: 1;
  height: 100vh;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  overflow-x: hidden;
  overflow-y: hidden;
  transition: 0.5s;
`

type SideNavProps = {
	isOpen: boolean
	close: () => void
}

const SideNav: FunctionComponent<SideNavProps> = ({isOpen, close}) => {
	return (
		<>
			{
				isOpen ? <BackgroundOverlay onClick={close}>
					<div/>
				</BackgroundOverlay> : ""
			}
			<SideNavContainer style={{left: isOpen ? "0" : "-15rem"}}>
				<div className="pl-5 pb-4">
					<YoutubeLogo/>
				</div>
				<TubeButton/>
				<TubeButton/>
				<TubeButton/>
				<hr />
				<TubeButton/>
				<TubeButton/>
				<TubeButton/>
				<hr />
				<TubeButton/>
				<TubeButton/>
				<TubeButton/>
				<hr />
				<TubeButton/>
				<TubeButton/>
				<TubeButton/>
				<hr />
				<TubeButton/>
				<TubeButton/>
				<TubeButton/>
				<hr />
				<TubeButton/>
				<TubeButton/>
				<TubeButton/>
				<hr />
				<TubeButton/>
				<TubeButton/>
				<TubeButton/>

			</SideNavContainer>
		</>
	);
}

export default SideNav;