import { createTheme } from "@mui/system";
import { GlobalStyles } from "../utils/global";
import { getDesignToken } from "../utils/theme";

import Logo from "./Logo";

import styled, { ThemeProvider } from "styled-components";

const AuthLayout = ({ children }) => {
  const themes = createTheme(getDesignToken("light"));

  return (
    <ThemeProvider theme={themes}>
      <GlobalStyles />
      <Main>
        <div className="auth-header">
          <Logo />
        </div>

        <div className="auth-body">{children}</div>

        <div className="auth-footer">
          <small>
            &copy; 2025 FirstFlorida Credit Union. All rights reserved.
          </small>
        </div>
      </Main>
    </ThemeProvider>
  );
};

export default AuthLayout;

const Main = styled.main`
  height: 100%;
  background: ${({ theme }) => theme.palette.secondary};
  position: relative;
  display: flex;
  flex-direction: column;
  overflow-x: hidden !important;

  .auth-header {
    padding: 20px;
  }

  .auth-body {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    margin-bottom: 50px;
  }

  .auth-footer {
    margin-top: 20px;
    padding: 20px;
    color: ${({ theme }) => theme.palette.altText};
    font-weight: ${({ theme }) => theme.typography.main.fontWeight[1]};
  }
`;
