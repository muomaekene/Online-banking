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
  padding: 20px;
  height: 100%;
  background: ${({ theme }) => theme.palette.primary};
  position: relative;
  overflow-x: hidden !important;
  display: flex;
  justify-content: center;
`;
