export const getDesignToken = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          main: "#FFFFFF",
          // primary: "#edf0f0",
          danger: "#ff2e2e",
          secondary: "#f0f0f0",
          solid: "#05844b",
          focus: "#d9d9d975",
          border: "#cccccc",
          hr: "#f9f9f998",
          activeText: "#fff",
          text: "#262626",
          altText: "#767676",
          scrollbar: "#8B8B8B",
          link: "#057d47",
        }
      : {
          main: "#121212",
          // primary: "#313947",
          danger: "#c63030",
          secondary: "#343434a9",
          solid: "#03532f",
          focus: "#49494971",
          border: "#6b6b6b79",
          hr: "#434343",
          activeText: "#fff",
          text: "#d9d9d9",
          altText: "#808080",
          scrollbar: "#828181",
          link: "#06845c",
        }),
  },

  typography: {
    main: {
      fontFamily: "Reddit Sans, sans-serif",
      fontSize: ["11px", "12px", "13px", "14px", "15px", "16px", "18px"],
      fontWeight: [400, 500, 600],
      borderRadius: "5px",
    },
  },

  borderRadius: ["4px", "6px"],

  spacing: [5, 10, 15, 20],
});
