import styled, { ThemeProvider } from "styled-components";
import { createTheme } from "@mui/system";
import { GlobalStyles } from "../utils/global";
import { getDesignToken } from "../utils/theme";

const AuthLayout = ({ children }) => {
  const themes = createTheme(getDesignToken("light"));

  return (
    <ThemeProvider theme={themes}>
      <GlobalStyles />
      <Navbar>
        <h1 className="title">Credit Union of New Jersey</h1>
      </Navbar>
      <Main>{children}</Main>
    </ThemeProvider>
  );
};

export default AuthLayout;

const Navbar = styled.nav`
  border-bottom: 1px solid ${({ theme }) => theme.palette.border};
  color: ${({ theme }) => theme.palette.main};
  background: ${({ theme }) => theme.palette.solid};
  display: flex;
  align-items: center;
  padding: 0 30px;
  height: 4rem;

  .title {
    font-size: ${({ theme }) => theme.typography.header.fontSize};
    font-family: ${({ theme }) => theme.typography.header.fontFamily};
    font-weight: ${({ theme }) => theme.typography.header.fontWeight[1]};
  }
`;

const Main = styled.main`
  position: relative;
  width: 100%;
  height: calc(100% - 4rem);
`;
