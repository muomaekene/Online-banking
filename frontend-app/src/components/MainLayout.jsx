import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../utils/global";
import { useDarkMode } from "../utils/useDarkMode";
import { themes } from "../utils/theme";

import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import Footer from "./Footer";

const MainLayout = ({ children }) => {
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

export default MainLayout;

const Container = styled.div`
  height: 100%;
  padding-right: 3px;
  padding-top: 3px;
  padding: 3px 3px 3px 0;

  #sidebar-container {
    display: inline-block;
    vertical-align: top;
    height: 100%;
    width: 18%;
    overflow: auto;
    color: ${({ theme }) => theme.altText};
    border-right: 1px solid ${({ theme }) => theme.secondary};
    background: ${({ theme }) => theme.main};

    ::-webkit-scrollbar {
      width: 5px;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background: ${({ theme }) => theme.scrollbar};
    }
  }

  #content {
    display: inline-block;
    vertical-align: top;
    height: 100%;
    width: 82%;
    overflow: auto;
    padding: 0 20px;
    background: ${({ theme }) => theme.main};

    ::-webkit-scrollbar {
      width: 7px;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background: ${({ theme }) => theme.scrollbar};
    }
  }
`;
