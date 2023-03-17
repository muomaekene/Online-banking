import styled, { ThemeProvider } from "styled-components";
import { createTheme } from "@mui/system";
import { GlobalStyles } from "../utils/global";
import { getDesignToken } from "../utils/theme";

import Footer from "./Footer";

const AuthLayout = ({ children }) => {
  const themes = createTheme(getDesignToken("light"));

  return (
    <ThemeProvider theme={themes}>
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

const Navbar = styled.nav`
  height: 10%;
  background: ${({ theme }) => theme.palette.solid};
  color: ${({ theme }) => theme.palette.main};
  display: flex;
  align-items: center;
  padding-left: 30px;

  .title {
    font-size: ${({ theme }) => theme.typography.header.fontSize};
    font-family: ${({ theme }) => theme.typography.header.fontFamily};
    font-weight: ${({ theme }) => theme.typography.header.fontWeight};
  }
`;

const Main = styled.main`
  position: relative;
  width: 100%;
  height: 84%;
  overflow: auto;
`;
