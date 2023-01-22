import { createTheme } from "@mui/system";

export const themes = createTheme({
  modes: {
    darkTheme: {
      main: "#202124",
      text: "#b1b2b3",
      primary: "#E1333C",
      secondary: "#edf0f3",
    },
    lightTheme: {
      primary: "#EEEEEE",
      secondary: "#fff",
      main: "#25304b",
      hover: "#3d455d",
      border: "#e3e3e3",
      text: "#292929",
      altText: "#717171",
      badge: "#c6384d",
    },
  },
  screens: {},
});
