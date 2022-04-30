import {FunctionComponent} from "react";
import SearchBar from "./SearchBar";
import YoutubeLogo from "./YoutubeLogo";
import NavIcons from "./NavIcons";
import styled from "styled-components";

const NavBarContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
`

const NavBar: FunctionComponent = () => {
	return (
		<>
			<NavBarContainer className={"d-flex justify-content-between align-items-center bg-white pl-4 pr-4"}>
				<YoutubeLogo/>
				<SearchBar/>
				<NavIcons/>
			</NavBarContainer>
		</>
	)
}


export default NavBar;