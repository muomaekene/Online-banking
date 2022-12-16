import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../utils/global";
import { useDarkMode } from "../utils/useDarkMode";
import { themes } from "../utils/Theme";

import Sidebar from "./Sidebar";
import Container from "./Styles/LayoutStyles";

const Layout = ({ children }) => {
  const [theme, themeToggler] = useDarkMode();

  const { lightTheme, darkTheme } = themes.modes;

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Container>
        <Sidebar />
        <main>{children}</main>
      </Container>
    </ThemeProvider>
  );
};

export default Layout;
