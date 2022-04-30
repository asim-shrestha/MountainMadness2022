import styled from "styled-components";

const Button = styled.button`
  border: 2px solid #FF4FE3;
  color: #FF4FE3;
  background-color: transparent;
  font-weight: bolder;
  border-radius: 10px;
  padding: 1em 2em;
  text-transform: uppercase;
  text-align: center;
  transition: background-color 150ms, border-color 250ms, color 150ms;

  margin: 10px;

  &:disabled {
	border-color: gray;
    color: gray;
  }

  &:hover:enabled {
    background-color: #FF4FE3;
    color: black;
    cursor: pointer;
  }
`;

export default Button;