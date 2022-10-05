import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const mainStyle = {
  padding: "0 150px",
};

export const GlobalStyle = createGlobalStyle`
${reset}
*{
    box-sizing: border-box;
    font-family: Noto Sans KR;
}
a{
    text-decoration: none;
    color: #1d1d1d;
}

`;
