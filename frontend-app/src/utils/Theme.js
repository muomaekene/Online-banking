import { createTheme } from "@mui/system";

export const themes = createTheme({
  modes: {
    darkTheme: {
      main: "#202124",
      text: "#b1b2b3",
      primary: "#c6384d",
      secondary: "#fff",
    },
    lightTheme: {
      main: "#edf0f3",
      text: "#525354",
      primary: "#c6384d",
      secondary: "#fff",
    },
  },
  // palette: {
  //   primary: {
  //     main: "HEXADECIMAL COLOR",
  //   },
  //   secondary: {
  //     main: "HEXADECIMAL COLOR",
  //   },
  // },
  screens: {},
});
