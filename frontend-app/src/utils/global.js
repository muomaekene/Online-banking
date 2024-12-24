import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  html, body {
    background: ${({ theme }) => theme.palette.main};
    color: ${({ theme }) => theme.palette.text};
    height: 100%;

    @media only screen and (max-width: 900px) {
      width: 940px;
    }
  } 

  #root {
     height: 100%;
 }

  * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
     font-family: ${({ theme }) => theme.typography.main.fontFamily};
     scrollbar-width: thin;
     scrollbar-color:  darkgray transparent;
 }

 a {
     text-decoration: none;
     color: inherit;

    :focus,
    :visited,
    :link,
    :active {
     text-decoration: none;
    }
 }

 p {
   line-height: 1.2rem;
   font-size: ${({ theme }) => theme.typography.main.fontSize[1]};
   font-weight: ${({ theme }) => theme.typography.main.fontWeight[1]};
 }

  `;
