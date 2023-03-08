import { createTheme } from "@mui/system";

export const themes = createTheme({
  modes: {
    lightTheme: {
      main: "#FFFFFF",
      primary: "#EDEDEE",
      secondary: "#D0D0D0",
      solid: "#25304B",
      text: "#232323",
      altText: "#505D68",
      scrollbar: "#8B8B8B",
    },
    darkTheme: {
      main: "#000000",
      primary: "#222222",
      secondary: "#424548",
      solid: "#CFD8DC",
      text: "#E3E3E3",
      altText: "#9AA0A6",
      scrollbar: "#4E4D4D",
    },
  },
  fonts: {
    small: "12px",
    medium: "14px",
    large: "16px",
  },
  space: "15px",
  screens: {},
});
