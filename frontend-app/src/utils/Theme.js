export const getDesignToken = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          main: "#FFFFFF",
          // primary: "#edf0f0",
          danger: "#ec0e0e",
          secondary: "#f2f2f2",
          solid: "#14543d",
          light: "#126044",
          focus: "#d9d9d975",
          border: "#d7d3d3",
          hr: "#f9f9f998",
          activeText: "#fff",
          text: "#0c2d0c",
          altText: "#6e6e6a",
          scrollbar: "#8B8B8B",
          link: "#078727",
        }
      : {
          main: "#121212",
          // primary: "#313947",
          danger: "#ec0d0d",
          secondary: "#2f2f2f",
          solid: "#0e4732",
          light: "#1b4d3b",
          focus: "#49494971",
          border: "#393939",
          hr: "#434343",
          activeText: "#fff",
          text: "#d9d9d9",
          altText: "#8d8d8d",
          scrollbar: "#828181",
          link: "#13a563",
        }),
  },

  typography: {
    main: {
      fontFamily: "Figtree, sans-serif",
      fontSize: ["11px", "12px", "13px", "14px", "15px", "16px", "18px"],
      fontWeight: [400, 500, 600],
      borderRadius: "5px",
    },
  },

  borderRadius: ["4px", "8px"],

  spacing: [5, 10, 15, 20],
});
