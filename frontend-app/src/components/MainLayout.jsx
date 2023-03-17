import styled, { ThemeProvider } from "styled-components";
import { createTheme } from "@mui/system";

import { GlobalStyles } from "../utils/global";
import { useDarkMode } from "../utils/useDarkMode";
import { getDesignToken } from "../utils/theme";

import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import Footer from "./Footer";

const MainLayout = ({ children }) => {
  const [theme, themeToggler] = useDarkMode();
  const themes = createTheme(getDesignToken(theme));

  return (
    <ThemeProvider theme={themes}>
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

    ::-webkit-scrollbar {
      width: 5px;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background: ${({ theme }) => theme.palette.scrollbar};
    }
  }

  #content {
    display: inline-block;
    vertical-align: top;
    height: 100%;
    width: 82%;
    overflow: auto;
    background: ${({ theme }) => theme.palette.main};
    padding: 0 ${({ theme }) => theme.spacing(3)};

    ::-webkit-scrollbar {
      width: 7px;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background: ${({ theme }) => theme.palette.scrollbar};
    }
  }
`;
