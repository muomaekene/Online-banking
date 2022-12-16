import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.main};
    color: ${({ theme }) => theme.text};
    font-family: "Manrope", sans-serif;
  }

  a {
    text-decoration: none;
    color: inherit;

    &:focus,
    &:visited,
    &:link,
    &:active {
      text-decoration: none;
    }
  }
  `;