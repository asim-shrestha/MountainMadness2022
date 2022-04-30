import type {NextPage} from 'next'
import styled from "styled-components";


const CenteredContainer = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100vw;
`;

const Home: NextPage = () => {

	return (
		<CenteredContainer>
			Test
		</CenteredContainer>
	)
}

export default Home
