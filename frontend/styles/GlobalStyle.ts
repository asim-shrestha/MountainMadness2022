import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&family=Roboto:wght@400;700&display=swap");

html{
  background: #F9F9F9;
}

body, h1, h2, h3, h4, h5, h6 {
  background: #F9F9F9;
  margin: 0;
}

body, input, textarea, button  {
  font-family: 'Roboto', sans-serif;
}

/* width */
::-webkit-scrollbar {
  border-top-right-radius: 10px;
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

hr {
  border: 0;
  clear:both;
  display:block;
  width: 96%;
  background-color: #dedede;
  height: 1px;
}

.ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

`;

export default GlobalStyle;
