import { createTheme } from "@mui/system";
import { GlobalStyles } from "../utils/global";
import { getDesignToken } from "../utils/theme";

import styled, { ThemeProvider } from "styled-components";

const AuthLayout = ({ children }) => {
  const themes = createTheme(getDesignToken("light"));

  return (
    <ThemeProvider theme={themes}>
      <GlobalStyles />
      <Main>{children}</Main>
    </ThemeProvider>
  );
};

export default AuthLayout;

const Main = styled.main`
  padding: 30px;
  height: 100%;
  background: #2f3c60;
  /* background: ${({ theme }) => theme.palette.main}; */
  position: relative;
  overflow-x: hidden !important;
`;
