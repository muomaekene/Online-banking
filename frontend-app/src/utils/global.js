import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  html, body {
    background: ${({ theme }) => theme.main};
    color: ${({ theme }) => theme.text};
    font-family: 'Hind', sans-serif;
    height: 100%;
  } 

  `;
