import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
html{
  background: white;
}

body, h1, h2, h3, h4, h5, h6 {
  margin: 0;
}

body, input, textarea, button  {
  font-family:Roboto,monospace;
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
`;

export default GlobalStyle;