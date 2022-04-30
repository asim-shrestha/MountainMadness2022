import React, {FunctionComponent} from "react";
import SearchBar from "./SearchBar";
import YoutubeLogo from "./YoutubeLogo";
import NavIcons from "./NavIcons";
import styled from "styled-components";
import HoverCursorDiv from "../HoverCursorDiv";

const NavBarContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
`


type NavBarProps = {
	openSideNav: () => void;
};

const NavBar: FunctionComponent<NavBarProps> = ({openSideNav}) => {
	return (
		<div>
			<NavBarContainer className={"d-flex justify-content-between align-items-center bg-white pl-4 pr-4"}>
				<HoverCursorDiv onClick={openSideNav}>
					<YoutubeLogo />
				</HoverCursorDiv>
				<SearchBar/>
				<NavIcons/>
			</NavBarContainer>
		</div>
	)
}


export default NavBar;