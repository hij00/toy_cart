import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const mainStyle = {
  padding: "0 150px",

  mainColor: "#06113C",
  subColor: "#FF8C32",
  subColor2: "#DDDDDD",
  pointColor: "#EEEEEE",
};

export const GlobalStyle = createGlobalStyle`
${reset}
*{
    box-sizing: border-box;
    
}
body{
  font-family: 'Noto Sans KR', sans-serif;
}
a{
    text-decoration: none;
    color: #1d1d1d;
}

`;
