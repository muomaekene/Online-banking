import { createTheme } from "@mui/system";
import { GlobalStyles } from "../utils/global";
import { getDesignToken } from "../utils/theme";

import AuthHeader from "./AuthHeader";
import AuthFooter from "./AuthFooter";

import styled, { ThemeProvider } from "styled-components";

const AuthLayout = ({ children }) => {
  const themes = createTheme(getDesignToken("light"));

  return (
    <ThemeProvider theme={themes}>
      <GlobalStyles />
      <Main>
        <AuthHeader />
        <div className="auth-body">{children}</div>
        <AuthFooter />
      </Main>
    </ThemeProvider>
  );
};

export default AuthLayout;

const Main = styled.main`
  height: 100%;
  background: ${({ theme }) => theme.palette.secondary};
  position: relative;
  overflow-x: hidden !important;
  display: flex;
  flex-direction: column;

  .auth-body {
    display: flex;
    justify-content: center;
    margin: 100px 0;
  }
`;
