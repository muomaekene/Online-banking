export const getDesignToken = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          main: "#FFFFFF",
          // primary: "#edf0f0",
          danger: "#ec0e0e",
          secondary: "#f2f2f2",
          solid: "#2b5a49",
          light: "#29765a",
          focus: "#d9d9d975",
          border: "#c0bfbfd1",
          hr: "#f9f9f998",
          activeText: "#fff",
          text: "#091f09",
          altText: "#6e6e6a",
          scrollbar: "#8B8B8B",
          link: "#0d6e25",
        }
      : {
          main: "#121212",
          // primary: "#313947",
          danger: "#ec0d0d",
          secondary: "#2f2f2f",
          solid: "#0e4732",
          light: "#2a5c4a",
          focus: "#49494971",
          border: "#434343",
          hr: "#434343",
          activeText: "#fff",
          text: "#d9d9d9",
          altText: "#8d8d8d",
          scrollbar: "#828181",
          link: "#06844b",
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

  borderRadius: ["8px", "10px"],

  spacing: [5, 10, 15, 20],
});
