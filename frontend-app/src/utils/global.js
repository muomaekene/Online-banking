import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  html, body {
    background: ${({ theme }) => theme.palette.main};
    color: ${({ theme }) => theme.palette.text};
    font-family: ${({ theme }) => theme.typography.main.fontFamily};
    height: 100%;
  } 

  #root {
     height: 100%;
 }

  * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
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

  `;
