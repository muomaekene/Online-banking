import { createTheme } from "@mui/system";

export const themes = createTheme({
  modes: {
    lightTheme: {
      main: "#ffffff",
      primary: "#25304b",
      secondary: "#EEEEEE",
      hover: "#3d455d",
      box: "#ffffff",
      border: "#e3e3e3",
      text: "#292929",
      altText: "#606060",
      activeText: "#ffffff",
      shadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    darkTheme: {
      main: "#000000",
      primary: "#CFD8DC",
      secondary: "#EEEEEE",
      hover: "#ecf9ff",
      box: "#212121",
      border: "#323232",
      text: "#b1b2b3",
      altText: "#8d8c8c",
      activeText: "#000000",
      shadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
  },
  screens: {},
});
