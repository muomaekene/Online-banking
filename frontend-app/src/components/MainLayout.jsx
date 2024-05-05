import { createTheme } from "@mui/system";

import { GlobalStyles } from "../utils/global";
import { useDarkMode } from "../utils/useDarkMode";
import { getDesignToken } from "../utils/theme";
import { devices as device } from "../utils/breakpoints";

import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

import styled, { ThemeProvider } from "styled-components";

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
        </main>
      </Container>
    </ThemeProvider>
  );
};

export default MainLayout;

const Container = styled.div`
  height: 100%;
  padding: 3px 3px 3px 0;
  display: flex;
  justify-content: center;

  #sidebar-container {
    display: inline-block;
    vertical-align: top;
    height: 100%;
    width: 240px;
    overflow: auto;

    ::-webkit-scrollbar {
      width: 5px;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background: ${({ theme }) => theme.palette.scrollbar};
    }

    @media ${device.laptop} {
      display: none;
    }
  }

  #content {
    display: inline-block;
    vertical-align: top;
    height: 100%;
    max-width: 1040px;
    width: calc(100% - 15rem);
    overflow: auto;
    background: ${({ theme }) => theme.palette.secondary};
    padding: 0 ${({ theme }) => theme.spacing(2)};

    ::-webkit-scrollbar {
      width: 7px;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background: ${({ theme }) => theme.palette.scrollbar};
    }

    @media ${device.laptop} {
      width: 100%;
      overflow: hidden;
    }
  }
`;
