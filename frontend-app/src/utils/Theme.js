export const getDesignToken = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          main: "#FFFFFF",
          primary: "#eeefef",
          secondary: "#e1e2e4",
          solid: "#2f3c60",
          light: "#3f5182",
          hover: "#f3f4f6",
          border: "#d1d5db",
          text: "#0f172a",
          altText: "#475569",
          scrollbar: "#8B8B8B",
        }
      : {
          main: "#030712",
          primary: "#242a35",
          secondary: "#303a48",
          solid: "#dae0f0",
          light: "#c2c9da",
          hover: "#111827",
          border: "#2a2a2f",
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
