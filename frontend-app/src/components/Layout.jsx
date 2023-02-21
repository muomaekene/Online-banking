import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../utils/global";
import { useDarkMode } from "../utils/useDarkMode";
import { themes } from "../utils/Theme";

import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

import styled from "styled-components";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const [theme, themeToggler] = useDarkMode();

  const { lightTheme, darkTheme } = themes.modes;

  const themeMode = theme === "light" ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Container>
        <div id="sidebar-container">
          <Sidebar />
        </div>
        <main id="content">
          <TopBar theme={theme} themeToggler={themeToggler} />
          <div>{children}</div>
          <Footer />
        </main>
      </Container>
    </ThemeProvider>
  );
};

export default Layout;

const Container = styled.div`
  height: 100%;
  padding: 3px;

  #sidebar-container {
    display: inline-block;
    vertical-align: top;
    height: 100%;
    width: 18%;
    overflow: auto;
    color: ${({ theme }) => theme.altText};
    border-right: 1.5px solid ${({ theme }) => theme.border};

    ::-webkit-scrollbar {
      width: 5px;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background: ${({ theme }) => theme.border};
    }
  }

  #content {
    display: inline-block;
    vertical-align: top;
    height: 100%;
    width: 82%;
    overflow: auto;
    padding: 0 20px;

    ::-webkit-scrollbar {
      width: 7px;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background: ${({ theme }) => theme.scrollbar};
    }
  }
`;
