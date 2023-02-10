import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../utils/global";
import { useDarkMode } from "../utils/useDarkMode";
import { themes } from "../utils/Theme";

import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

import styled from "styled-components";

const Layout = ({ children }) => {
  const [theme, themeToggler] = useDarkMode();

  const { lightTheme, darkTheme } = themes.modes;

  const themeMode = theme === "light" ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Container>
        <Sidebar />
        <main>
          <TopBar theme={theme} themeToggler={themeToggler} />
          <div theme={theme}>{children}</div>
        </main>
      </Container>
    </ThemeProvider>
  );
};

export default Layout;

const Container = styled.div`
  main {
    margin-left: 240px;
    padding: 0 20px;
    width: calc(100% - 240px);
    height: 100vh;
    position: fixed;
    background: ${(props) => props.theme.main};
  }
`;
