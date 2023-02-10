import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.text};
    font-family: 'Hind', sans-serif;
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
