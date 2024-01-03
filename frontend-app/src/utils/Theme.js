export const getDesignToken = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          main: "#FFFFFF",
          primary: "#eef0f0",
          secondary: "#f3f4f6",
          solid: "#176B87",
          border: "#c9ced7",
          text: "#0f172a",
          altText: "#475569",
          scrollbar: "#8B8B8B",
          link: "#3995b4",
        }
      : {
          main: "#1E1E2C",
          primary: "#313947",
          secondary: "#363f4e",
          solid: "#64CCC5",
          border: "#585b5d",
          text: "#E3E3E3",
          altText: "#9AA0A6",
          scrollbar: "#4E4D4D",
          link: "#6dded7",
        }),
  },
  border: {
    radius: "10px",
    margin: "15px",
  },
  typography: {
    main: {
      fontFamily: "Figtree, sans-serif",
      fontSize: ["12px", "13px", "14px", "16px"],
      fontWeight: [400, 500, 600],
      borderRadius: "5px",
    },
    header: {
      fontFamily: "Gloock, sans-serif",
      fontSize: "20px",
      fontWeight: 500,
    },
  },
  spacing: [5, 10, 15, 20],
});
