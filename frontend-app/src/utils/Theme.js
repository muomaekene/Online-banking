export const getDesignToken = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          main: "#FFFFFF",
          // primary: "#edf0f0",
          danger: "#d81919",
          secondary: "#eeeeee",
          solid: "#05844b",
          focus: "#d9d9d975",
          border: "#cccccc",
          hr: "#f9f9f998",
          activeText: "#fff",
          text: "#091f09",
          altText: "#636363",
          scrollbar: "#8B8B8B",
          link: "#199839",
        }
      : {
          main: "#121212",
          // primary: "#313947",
          danger: "#e93c3c",
          secondary: "#343434a9",
          solid: "#04813a",
          focus: "#49494971",
          border: "#4d4d4d",
          hr: "#434343",
          activeText: "#fff",
          text: "#d9d9d9",
          altText: "#808080",
          scrollbar: "#828181",
          link: "#06844b",
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
