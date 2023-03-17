export const getDesignToken = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          main: "#FFFFFF",
          primary: "#EDEDEE",
          secondary: "#e0e0e0",
          solid: "#25304B",
          border: "#dfdfdf",
          text: "#282828",
          altText: "#505D68",
          scrollbar: "#8B8B8B",
        }
      : {
          main: "#000000",
          primary: "#232426",
          secondary: "#353739",
          solid: "#CFD8DC",
          border: "#3e4043",
          text: "#E3E3E3",
          altText: "#9AA0A6",
          scrollbar: "#4E4D4D",
        }),
  },
  typography: {
    main: {
      fontFamily: "Figtree, sans-serif",
      fontSize: ["12px", "14px", "16px"],
      fontWeight: [400, 500, 600],
    },
    header: {
      fontFamily: "Gloock, sans-serif",
      fontSize: "20px",
      fontWeight: 500,
    },
  },
  spacing: [5, 10, 15, 20],
});
