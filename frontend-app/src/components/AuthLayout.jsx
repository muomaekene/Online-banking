import { themes } from "../utils/theme";
import { GlobalStyles } from "../utils/global";

import Footer from "./Footer";
import styled, { ThemeProvider } from "styled-components";

const AuthLayout = ({ children }) => {
  const { lightTheme } = themes.modes;

  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Navbar>
        <h1 className="title">Credit Union of New Jersey</h1>
      </Navbar>
      <Main>{children}</Main>
      <Footer />
    </ThemeProvider>
  );
};

export default AuthLayout;

const Main = styled.main`
  position: relative;
  width: 100%;
  height: 84%;
  overflow: auto;
`;

const Navbar = styled.nav`
  height: 10%;
  background: ${({ theme }) => theme.solid};
  color: ${({ theme }) => theme.main};
  display: flex;
  align-items: center;
  padding-left: 30px;

  .title {
    font-size: 20px;
    font-family: "Gloock", serif;
  }
`;
