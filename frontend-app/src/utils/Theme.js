export const getDesignToken = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          main: "#FFFFFF",
          // primary: "#edf0f0",
          danger: "#ff2e2e",
          secondary: "#efefef",
          solid: "#090649",
          focus: "#d9d9d975",
          border: "#aaaaaa6b",
          hr: "#f9f9f998",
          activeText: "#fff",
          text: "#141414",
          altText: "#292929ae",
          scrollbar: "#8B8B8B",
          link: "#0c36f2",
        }
      : {
          main: "#0d0d0d",
          // primary: "#313947",
          danger: "#c63030",
          secondary: "#343434a9",
          solid: "#134B70",
          focus: "#49494971",
          border: "#65646468",
          hr: "#434343c9",
          activeText: "#fff",
          text: "#e2e2e2",
          altText: "#a5abb1",
          scrollbar: "#828181",
          link: "#51a3e6",
        }),
  },

  typography: {
    main: {
      fontFamily: "Reddit Sans, sans-serif",
      fontSize: ["11px", "12px", "13px", "14px", "15px", "16px", "18px"],
      fontWeight: [400, 500, 600],
      borderRadius: "5px",
    },
    header: {
      fontFamily: "Gloock, sans-serif",
      fontSize: "20px",
      fontWeight: 500,
    },
  },

  borderRadius: ["6px", "8px"],

  spacing: [5, 10, 15, 20],
});
